import { InputLabel, Typography } from '@mui/material';
import { HTMLInputTypeAttribute, useState } from 'react';
import type { FieldValues, Path, UseFormRegister } from 'react-hook-form';

import ShowPasswordAdornment from './ShowPasswordAdornment';
import { StyledTextFieldContainer, TextFieldBody } from './StyledTextfield.styles';

interface ILoginProps<TForm extends FieldValues> {
  inputTitle?: string;
  register: UseFormRegister<TForm>;
  formPropName: Path<TForm>;
  type?: HTMLInputTypeAttribute;
  required?: boolean;
  fullWidth?: boolean;
  autoComplete?: string | undefined;
  error?: string | undefined;
}

const StyledTextfield = <TForm extends FieldValues>({
  inputTitle,
  register,
  formPropName,
  required,
  fullWidth,
  type,
  autoComplete,
  error
}: ILoginProps<TForm>) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPass = () => setShowPassword(!showPassword);
  return (
    <StyledTextFieldContainer>
      <InputLabel>
        <Typography
          variant="caption"
          whiteSpace="pre-wrap"
          fontWeight="bold"
          color={error ? 'error' : 'default'}>
          {inputTitle?.toUpperCase()}
          {error ? ` - ${error}` : null}
        </Typography>
      </InputLabel>
      <TextFieldBody
        type={showPassword ? 'text' : type}
        required={required}
        {...register(formPropName)}
        fullWidth={fullWidth}
        autoComplete={autoComplete}
        endAdornment={
          <ShowPasswordAdornment
            type={type}
            showPassword={showPassword}
            handleShowPass={handleShowPass}
          />
        }
      />
    </StyledTextFieldContainer>
  );
};

export default StyledTextfield;
