import { PaletteMode } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('themeColor') as PaletteMode ?? 'light'

const themeSlice = createSlice({
  name: 'themeColor',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      return state === 'light' ? 'dark' : 'light';
    }
  }
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;