import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { IconButton, InputAdornment } from '@mui/material';
import type { HTMLInputTypeAttribute } from 'react';

interface IShowPasswordAdornment {
  type: HTMLInputTypeAttribute | undefined;
  handleShowPass: () => void;
  showPassword: boolean;
}

const ShowPasswordAdornment = ({ type, handleShowPass, showPassword }: IShowPasswordAdornment) => {
  return type === 'password' ? (
    <InputAdornment position="end">
      <IconButton onClick={handleShowPass}>
        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
      </IconButton>
    </InputAdornment>
  ) : null;
};

export default ShowPasswordAdornment;
