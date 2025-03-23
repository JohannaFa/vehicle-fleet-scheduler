import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#097887',
      light: '#6BA7AF',
      dark: '#043F47',
    },
    text: {
      primary: '#000000',
    },
  },
  typography: {
    h1: {
      fontSize: '3rem',
      fontWeight: 300,  
    },
  },
});

export default theme;