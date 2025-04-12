import axios from 'axios';

import { getDate } from 'utils';

import type { LoginForm, RegisterForm } from 'interfaces/Forms/FormsTypes';

class Api {
  public async login(data: LoginForm) {
    return await axios.post('api/login', data);
  }

  public async register(data: RegisterForm) {
    const dataObj = {
      email: data.email,
      password: data.password,
    };

    return await axios.post('api/register', dataObj);
  }

  public async refresh(data: string | null) {
    return await axios.post('api/refresh', {
      refreshToken: data
    });
  }
}

export default new Api();
