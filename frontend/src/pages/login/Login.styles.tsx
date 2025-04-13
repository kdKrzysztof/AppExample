import { Box, Paper, Typography, styled } from '@mui/material';

import type { CustomPaletteOptions } from 'interfaces';

export const LoginBody = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  ['& > :not(style)']: {
    marginBottom: theme.spacing(2)
  }
}));

export const LoginTitleContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  ['& > :not(style)']: {
    margin: '2px'
  }
});

export const LoginContainer = styled(Paper)(({ theme }) => ({
  width: 480,
  padding: 25,
  [theme.breakpoints.down('sm')]: {
    width: '100vw',
    height: '100vh',
    paddingTop: '20%'
  }
}));

export const LoginSubtitle = styled(Typography)(({ theme }) => ({
  color: (theme.palette as CustomPaletteOptions).LoginSubtitleColor
}));

export const CreateAccountText = styled(Typography)({
  width: '100%',
  textAlign: 'left'
});
