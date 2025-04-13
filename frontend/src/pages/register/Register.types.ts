import type { FieldErrors } from 'react-hook-form';

import { RegisterForm } from 'interfaces/Forms/FormsTypes';

export interface SetErrorsProps {
  errors: FieldErrors<RegisterForm>;
}
