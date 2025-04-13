import { MenuItem, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import type { FieldValues, Path, UseFormRegister } from 'react-hook-form';

import { SelectBody, SelectorName } from './StyledSelect.styles';
import SelectorMenuProps from './data/SelectorMenuProps';

interface IStyledSelect<TForm extends FieldValues> {
  variant?: 'standard' | 'outlined' | 'filled' | undefined;
  placeholder?: string | undefined;
  stack?: unknown[] | undefined;
  register: UseFormRegister<TForm>;
  formFieldName: Path<TForm>;
}

const StyledSelect = <TForm extends FieldValues>({
  variant,
  placeholder,
  stack,
  register,
  formFieldName
}: IStyledSelect<TForm>) => {
  const [value, setValue] = useState('');

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setValue(event.target.value as string);
  };
  return (
    <SelectBody
      required
      variant={variant}
      label={placeholder}
      displayEmpty
      value={value}
      {...register(formFieldName)}
      onChange={handleChange}
      MenuProps={SelectorMenuProps}>
      <MenuItem disabled value="">
        <SelectorName>{placeholder}</SelectorName>
      </MenuItem>
      {stack &&
        stack.map((el: unknown) => (
          <MenuItem key={String(el)} value={Number(el)}>
            {String(el)}
          </MenuItem>
        ))}
    </SelectBody>
  );
};

export default StyledSelect;
