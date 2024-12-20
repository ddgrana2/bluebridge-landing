import { Typography } from '@mui/material';

function PageTitle({ children }) {
  return (
    <Typography 
      variant="h2" 
      component="h1" 
      sx={{ 
        fontSize: { 
          xs: '2rem', 
          sm: '2.46rem', 
          md: '3.45rem' 
        },
        fontWeight: 700,
        textAlign: 'center',
        color: '#1618FF',
        mb: { xs: 3, sm: 4 },
        mt: { xs: 4, sm: 5, md: 6 },
        px: 2,
        position: 'relative',
        zIndex: 2
      }}
    >
      {children}
    </Typography>
  );
}

export default PageTitle; 