import { AxiosRequestConfig } from "axios";

const getConfigToken = (): AxiosRequestConfig => {
  const token = sessionStorage.getItem('token');
  const config: AxiosRequestConfig = {
    headers: {
      ['x-access-token']: token
    }
  };
  return config;
};

export default getConfigToken