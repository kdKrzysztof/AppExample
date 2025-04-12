import type { AxiosResponse } from 'axios';

class SessionStorage {
  get refreshToken() {
    return sessionStorage.getItem('refreshToken') as string;
  }

  private set refreshToken(val: string) {
    sessionStorage.setItem('refreshToken', val);
  }

  get token() {
    return sessionStorage.getItem('accessToken') as string;
  }

  private set token(val: string) {
    sessionStorage.setItem('accessToken', val);
  }

  setJWT(resp: AxiosResponse) {
    this.token = resp.data['accessToken'];
    this.refreshToken = resp.data['refreshToken'];
  }
}

export default new SessionStorage();
