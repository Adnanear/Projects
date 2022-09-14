import { ThemeProvider as Emotion10ThemeProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { MainTheme } from './themes/main';

ReactDOM.render(
  <React.StrictMode>
    <Emotion10ThemeProvider theme={MainTheme}>
      <ThemeProvider theme={MainTheme}>
        <App />
      </ThemeProvider>
    </Emotion10ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
