import { FieldErrors } from 'react-hook-form';

import { LoginForm } from 'interfaces/Forms/FormsTypes';

export interface SetErrorsProps {
  errors: FieldErrors<LoginForm>;
}
