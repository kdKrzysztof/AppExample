import * as z from 'zod';

import i18n from 'src/i18n';

const { t } = i18n;

const FormSchema = z.object({
  email: z.string().email({ message: t('email') }),
  password: z.string().refine((value) => value.trim() !== '', {
    message: t('emptyInput')
  })
});

export default FormSchema;
