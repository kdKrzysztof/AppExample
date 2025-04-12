import { InputLabel, Typography } from '@mui/material';
import type { UseFormRegister } from 'react-hook-form';

import useDateArray from 'src/hooks/useDateArray';

import { StyledSelect } from 'components';

import type { RegisterForm } from 'interfaces/Forms/FormsTypes';

import { DatepickerContainer, RegisterDatepickerContainer } from './RegisterDatepicker.styles';

interface IRegisterDatepicker {
  placeholder?: string | undefined;
  error?: string | undefined;
  register: UseFormRegister<RegisterForm>;
}

const RegisterDatepicker = ({ error, placeholder, register }: IRegisterDatepicker) => {
  const { daysArr, yearsArr, monthsArr } = useDateArray();
  return (
    <RegisterDatepickerContainer>
      <InputLabel>
        <Typography variant="caption" fontWeight="bold" color={error ? 'error' : 'default'}>
          {placeholder?.toUpperCase()}
          {error ? ' - ' + error : null}
        </Typography>
      </InputLabel>
      <DatepickerContainer>
        <StyledSelect
          placeholder="day"
          stack={daysArr}
          register={register}
          formFieldName="date.day"
        />
        <StyledSelect
          placeholder="month"
          stack={monthsArr}
          register={register}
          formFieldName="date.month"
        />
        <StyledSelect
          placeholder="year"
          stack={yearsArr}
          register={register}
          formFieldName="date.year"
        />
      </DatepickerContainer>
    </RegisterDatepickerContainer>
  );
};

export default RegisterDatepicker;
