import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { RegisterForm } from 'src/interfaces/Forms/FormsTypes';

import { Api } from 'utils/api';

const useRegister = () => {
  const navigate = useNavigate();

  const {
    data,
    mutate: axiosRegister,
    isError,
    error,
    isSuccess
  } = useMutation((data: RegisterForm) => Api.register(data));

  useEffect(() => {
    if (isError) {
      console.log(error);
    }
  }, [isError]);

  useEffect(() => {
    if (isSuccess) {
      navigate('/login');
    }
  }, [isSuccess]);

  return { data, axiosRegister, isError, error, isSuccess };
};

export default useRegister;
