import { useTheme } from '@mui/system';
import { Grid } from '@mui/material';
import React from 'react';

interface AppProps {}

export const App: React.FC<AppProps> = () => {
  const theme = useTheme();

  return (
    <Grid container width={theme.breakpoints.values.mobile}>
      Hello
    </Grid>
  );
};
