import { Button, Typography } from '@mui/material';

import { RegisterDatepicker, StyledTextfield } from 'components';
import RouterLink from 'components/RouterLink';

import {
  LogIntoAccountText,
  RegisterBody,
  RegisterContainer,
  RegisterTitleContainer
} from './Register.styles';
import useRegisterUtils from './Register.utils';

const Register = () => {
  const { errors, handleSubmit, onSubmit, register, t } = useRegisterUtils();
  return (
    <RegisterContainer elevation={4}>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <RegisterBody>
          <RegisterTitleContainer>
            <Typography variant="h5" fontWeight="bold">
              {t('RegisterTitle')}
            </Typography>
          </RegisterTitleContainer>
          {/* <StyledTextfield
            type="text"
            inputTitle="Username"
            register={register}
            formPropName="username"
            autoComplete="username"
            error={errors?.username?.message}
            required={true}
            fullWidth
          /> */}
          <StyledTextfield
            type="email"
            inputTitle="E-mail"
            register={register}
            formPropName="email"
            autoComplete="email"
            error={errors?.email?.message}
            required={true}
            fullWidth
          />
          <StyledTextfield
            type="password"
            inputTitle="Password"
            register={register}
            formPropName="password"
            autoComplete="current-password"
            error={errors?.password?.message}
            required={true}
            fullWidth
          />
          {/* <RegisterDatepicker
            placeholder={t('Datepicker')}
            register={register}
            error={errors.date?.root?.message}
          /> */}
          <Button variant="contained" fullWidth type="submit">
            {t('RegisterButton')}
          </Button>
          <LogIntoAccountText variant="subtitle2">
            {t('HaveAccount')} <RouterLink href="/login">{t('LoginClickHere')}</RouterLink>
          </LogIntoAccountText>
        </RegisterBody>
      </form>
    </RegisterContainer>
  );
};

export default Register;
