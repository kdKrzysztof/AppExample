import { Box, InputBase, styled } from '@mui/material';

import type { CustomPaletteOptions } from 'interfaces';

export const TextFieldBody = styled(InputBase)(({ theme }) => ({
  height: '40px',
  padding: 4,
  borderRadius: 4,
  paddingLeft: 10,
  paddingRight: 10,
  background: (theme.palette as CustomPaletteOptions).LoginInputBG
}));

export const StyledTextFieldContainer = styled(Box)({
  width: '100%',
  textAlign: 'left'
});
