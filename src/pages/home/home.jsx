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
              fontSize: { xs: '2rem', sm: '2.46rem', md: '3.45rem' },
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
              fontSize: { xs: '2rem', sm: '2.46rem', md: '3.45rem' },
              fontWeight: 700,
              color: '#FFFFFF',
              display: 'inline'
            }}
          >
            Global Talent
          </Typography>
        </Box>
      }
      subtitle="We bridge the gap between international workforce and\ncompanies worldwide."
    >
      <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
        {/* Worker Selection Form */}
        {/* Built by experts section */}
        {/* Testimonials section */}
      </Container>
    </PageLayout>
  );
}

export default Home;