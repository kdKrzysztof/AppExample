import { createTheme, responsiveFontSizes } from '@mui/material';
import type { PaletteMode } from '@mui/material';
import { useMemo } from 'react';

import { dark, light } from 'data/ThemeProperties';
const usePageTheme = (themeColorState: PaletteMode) => {
  const PageTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeColorState,
          ...(themeColorState === 'light' ? light : dark)
        }
      }),
    [themeColorState]
  );

  return responsiveFontSizes(PageTheme);
};

export default usePageTheme;
