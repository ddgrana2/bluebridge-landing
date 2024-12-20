import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import PageLayout from '../../components/layout/PageLayout';

function Services() {
  return (
    <PageLayout
      title={
        <Box sx={{ textAlign: 'center' }}>
          <Typography 
            component="span"
            sx={{ 
              fontSize: { 
                xs: 'calc(2rem * 1.2)',
                sm: 'calc(2.46rem * 1.2)',
                md: 'calc(3.45rem * 1.2)'
              },
              fontWeight: 700,
              color: '#1618FF',
              display: 'inline'
            }}
          >
            Our{' '}
          </Typography>
          <Typography 
            component="span"
            sx={{ 
              fontSize: { 
                xs: 'calc(2rem * 1.2)',
                sm: 'calc(2.46rem * 1.2)',
                md: 'calc(3.45rem * 1.2)'
              },
              fontWeight: 700,
              color: '#FFFFFF',
              display: 'inline'
            }}
          >
            Services
          </Typography>
        </Box>
      }
      subtitle="Discover our comprehensive range of services for international workforce solutions."
    >
      <Box sx={{ 
        bgcolor: 'white',
        position: 'relative',
        zIndex: 2,
        width: '100%',
        mt: { xs: 4, sm: 6 }
      }}>
        <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 6, md: 8 } }} />
      </Box>
    </PageLayout>
  );
}

export default Services; 