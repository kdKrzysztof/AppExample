import { Select, Typography, styled } from '@mui/material';

import type { CustomPaletteOptions } from 'interfaces';

export const SelectBody = styled(Select)(({ theme }) => ({
  ['.MuiSelect-outlined']: {
    backgroundColor: (theme.palette as CustomPaletteOptions)?.LoginInputBG,
    boxShadow: 'none'
  },
  ['.MuiSelect-select']: {
    padding: 8
  },
  ['.MuiOutlinedInput-notchedOutline']: { border: 0 }
}));

export const SelectorName = styled(Typography)({
  textTransform: 'capitalize',
  opacity: '70%'
});
