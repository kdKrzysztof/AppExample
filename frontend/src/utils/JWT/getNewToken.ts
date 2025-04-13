import api from '../api/api.class';
import apiStorage from '../api/webStorage.class';

export const getNewRefreshToken = async () => {
  const refToken = sessionStorage.getItem('refreshToken');

  try {
    const newData = await api.refresh(refToken);

    if (newData.status === 200) {
      apiStorage.setJWT(newData);
    }
  } catch (err) {
    return false;
  }
};
