import { useEffect } from 'react';

import { useAppSelector } from 'hooks/reduxHooks';

import usePageTheme from './usePageTheme';

const useThemeColor = () => {
  const themeColor = useAppSelector((state) => state.theme);

  const theme = usePageTheme(themeColor);
  
  useEffect(() => {
    localStorage.setItem('themeColor', themeColor);
  }, [themeColor]);


  return theme;
};

export default useThemeColor;
