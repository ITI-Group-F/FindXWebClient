import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';

export  const defaultlight = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: '#43a047',
    },
  },
});