import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';

export  const defaultlight = createTheme({
  palette: {
    primary: {
      main: green[800],
    },
    secondary: {
      main: '#000',
    },
  },
});