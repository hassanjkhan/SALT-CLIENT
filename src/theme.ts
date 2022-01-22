import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2CD9FF',
    },
    secondary: {
      main: '#111',
    },
  },
  typography: {
    fontFamily: ['Mina', 'sans-serif'].join(','),
    h1: {
      fontFamily: ['Mochiy Pop P One', 'sans-serif'].join(','),
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        sizeSmall: {
          paddingTop: 6,
          paddingLeft: 15,
          paddingRight: 15,
        },
        sizeMedium: {
          paddingLeft: 20,
          paddingRight: 20,
        },
        containedPrimary: {
          backgroundColor: '#1f9ab5',
          color: 'white',
        },
      },
      defaultProps: {
        disableElevation: true,
        style: {
          borderRadius: 10,
          fontWeight: 'bold',
        },
      },
    },
  },
});

export default theme;
