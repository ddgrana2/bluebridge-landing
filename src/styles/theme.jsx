import { createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    MuiBox: {
      styleOverrides: {
        root: {
          '& .hero-section': {
            background: 'linear-gradient(to right, rgba(59, 130, 246, 0.02), rgba(59, 130, 246, 0.01))',
            padding: '4rem 0',
          },
          '& .main-content': {
            marginTop: '2.5rem',
            paddingTop: '1.5rem',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          whiteSpace: 'normal',
          overflowWrap: 'break-word',
          wordWrap: 'break-word',
          minWidth: 0,
          maxWidth: '90%',
          '@media (min-width: 768px)': {
            minWidth: '500px',
          },
          '@media (max-width: 768px)': {
            minWidth: '200px',
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#0B3D91',
    },
    background: {
      paper: '#FFFFFF',
      default: '#FFFFFF',
    },
    text: {
      primary: '#000000',
      secondary: '#666666',
    },
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
      '@media (min-width: 768px)': {
        fontSize: '3.5rem',
      },
    },
    h2: {
      fontSize: '2rem',
      '@media (min-width: 768px)': {
        fontSize: '3rem',
      },
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h5: {
      fontSize: '1.25rem',
      lineHeight: 1.6,
    },
    h6: {
      fontSize: '1.1rem',
      lineHeight: 1.6,
    },
  },
});

export default theme;