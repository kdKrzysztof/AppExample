import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';

import { LoginForm } from 'src/interfaces/Forms/FormsTypes';

import { Api } from 'utils/api';
import { webStorage } from 'utils/api';

const useLogin = () => {
  const {
    data,
    mutate: axiosLogin,
    isError,
    error,
    isSuccess
  } = useMutation((data: LoginForm) => Api.login(data));

  useEffect(() => {
    if (isError) {
      console.log(error);
    }
  }, [isError]);

  useEffect(() => {
    if (isSuccess) {
      webStorage.setJWT(data);
    }
  }, [isSuccess]);

  return { axiosLogin };
};

export default useLogin;
