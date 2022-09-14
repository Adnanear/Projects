import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

declare module '@mui/material/styles' {
  // eslint-disable-next-line no-unused-vars
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

export const MainTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: red[500],
    },
  },
  breakpoints: {
    values: {
      xs: 320,
      sm: 375,
      md: 425,
      lg: 768,
      xl: 1024,
      mobile: 320,
      tablet: 768,
      laptop: 1024,
      desktop: 1440,
    },
  },
});
