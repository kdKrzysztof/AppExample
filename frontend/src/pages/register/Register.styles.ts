import { Box, Paper, Typography, styled } from '@mui/material';

export const RegisterTitleContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  ['& > :not(style)']: {
    margin: '2px'
  }
});

export const RegisterContainer = styled(Paper)(({ theme }) => ({
  width: 480,
  padding: 25,
  [theme.breakpoints.down('sm')]: {
    width: '100vw',
    height: '100vh',
    paddingTop: '20%'
  }
}));

export const RegisterBody = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  ['& > :not(style)']: {
    marginBottom: theme.spacing(2)
  }
}));

export const LogIntoAccountText = styled(Typography)({
  width: '100%',
  textAlign: 'left'
});
