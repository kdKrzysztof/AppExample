import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Login, Register } from 'pages';

import { ChangeThemeButton } from 'components';

import './App.css';
import { useThemeColor } from './hooks';

function App() {
  const theme = useThemeColor();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ChangeThemeButton />
      <Routes>
        <Route
          path="/login"
          element={
            <Suspense fallback={<></>}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <Suspense fallback={<></>}>
              <Register />
            </Suspense>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
