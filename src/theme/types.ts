declare module '@mui/material/styles' {
    interface PaletteOptions {
      primary: {
        main: string;
        light: string;
        dark: string;
      };
    }
    
    interface Palette extends PaletteOptions {}
  }