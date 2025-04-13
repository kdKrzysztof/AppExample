import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton, Tooltip } from '@mui/material';

import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks/reduxHooks';

import { toggleTheme } from 'store/reducers/themeSlice';

const ChangeThemeButton = () => {
  const themeColor = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  return (
    <Tooltip title="Change theme">
      <IconButton
        onClick={() => dispatch(toggleTheme())}
        color="inherit"
        sx={{ position: 'absolute', top: '1%', right: '1%' }}>
        {themeColor === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Tooltip>
  );
};

export default ChangeThemeButton;
