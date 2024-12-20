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
          '&.page-title': {
            fontSize: {
              xs: '2rem',
              sm: '2.46rem',
              md: '3.45rem'
            },
            fontWeight: 700,
            textAlign: 'center',
            '& .highlight': {
              color: '#FFFFFF'
            }
          }
        }
      },
    },
  },
  palette: {
    primary: {
      main: '#1618FF',
      light: '#4B4DFF',
      lighter: '#7173FF'
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
  custom: {
    pageTitle: {
      fontSize: {
        xs: 'calc(2rem * 1.2)',
        sm: 'calc(2.46rem * 1.2)',
        md: 'calc(3.45rem * 1.2)'
      },
      fontWeight: 700,
      color: '#1618FF',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    gradient: {
      primary: {
        start: '#7173FF',
        end: '#FFFFFF'
      }
    }
  }
});

export default theme;