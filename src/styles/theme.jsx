import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0B3D91',
      light: '#1E88E5',
      dark: '#0D47A1',
    },
    secondary: {
      main: '#FFA726',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#FFFFFF',
          margin: 0,
          padding: 0,
          minHeight: '100vh',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
        },
      },
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#0B3D91',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#0B3D91',
    },
    button: {
      textTransform: 'capitalize',
      fontFamily: '"Poppins", "Roboto", sans-serif',
      fontWeight: 500,
    },
  },
});

export default theme;