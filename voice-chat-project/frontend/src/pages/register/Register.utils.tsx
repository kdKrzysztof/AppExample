import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { registerValidator } from 'utils/validators';

import { RegisterForm } from 'interfaces/Forms/FormsTypes';

import useRegister from './hooks/useRegister';

const useRegisterUtils = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerValidator),
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const { axiosRegister } = useRegister();

  const onSubmit = (data: RegisterForm) => {
    axiosRegister(data);
  };

  return { register, handleSubmit, errors, onSubmit, t };
};

export default useRegisterUtils;
