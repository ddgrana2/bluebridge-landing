import { Box, Container, Typography, Grid, Rating, Select, MenuItem, Button } from '@mui/material';
import { motion } from 'framer-motion';
import PageLayout from '../../components/layout/PageLayout';

function Home() {
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
            Connecting{' '}
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
            Global Talent
          </Typography>
        </Box>
      }
      subtitle={
        <>
          We bridge the gap between international workforce and<br />
          companies worldwide.
        </>
      }
    >
      <Container 
        maxWidth={false} 
        sx={{ 
          width: '100%',
          py: { xs: 4, sm: 6, md: 8 },
          px: { xs: 2, sm: 3, md: 4 }
        }}
      >
        {/* Worker Selection Form */}
        {/* Built by experts section */}
        {/* Testimonials section */}
      </Container>
    </PageLayout>
  );
}

export default Home;