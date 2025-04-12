import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { loginValidator } from 'utils/validators';

import { LoginForm } from 'interfaces/Forms/FormsTypes';

import useLogin from './hooks/useLogin';

const useLoginUtils = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginForm>({
    resolver: zodResolver(loginValidator),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const { axiosLogin } = useLogin();

  const onSubmit = (formData: LoginForm) => {
    axiosLogin(formData);
  };

  return { register, handleSubmit, onSubmit, t, errors };
};

export default useLoginUtils;
