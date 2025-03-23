import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#097887',
      light: '#6BA7AF',
      dark: '#043F47',
    },
    // text: {
    //     primary: '#043F47',
    // }
  },
});

export default theme;