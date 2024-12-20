import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import PageLayout from '../../components/layout/PageLayout';

function Offering() {
  return (
    <PageLayout
      title={
        <Box sx={{ textAlign: 'center' }}>
          <Typography>Our{' '}</Typography>
          <Typography>Offering</Typography>
        </Box>
      }
      subtitle="Discover valuable resources and insights about working in Europe."
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

export default Offering; 