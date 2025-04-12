import * as z from 'zod';

import i18n from 'src/i18n';

import { getDate, hasSpecialCharacters } from '..';

const { t } = i18n;

const FormSchema = z.object({
  username: z
    .string()
    .min(4, { message: t('usernameMin') })
    .max(20, { message: t('usernameMax') })
    .regex(/^[a-zA-Z0-9_]+$/, { message: t('usernameRegex') }),
  email: z.string().email({
    message: t('email')
  }),
  password: z
    .string()
    .min(5, { message: t('passwordMin') })
    .refine(
      (input) => {
        return hasSpecialCharacters(input);
      },
      { message: t('passwordSpecialChars') }
    ),
  date: z
    .object({
      day: z.number(),
      month: z.number(),
      year: z.number()
    })
    .refine(
      (data) => {
        let date = getDate(data.day, data.month, data.year);
        return date instanceof Date;
      },
      { message: t('invalidDate') }
    )
});

export default FormSchema;
