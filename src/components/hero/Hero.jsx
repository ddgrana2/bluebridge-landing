import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 8,
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h1" component="h1" gutterBottom>
            Your Gateway to European Opportunities
          </Typography>
          <Typography variant="h5" component="h2" sx={{ mb: 4 }}>
            We help talented professionals find their dream careers in Europe
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            href="/contact"
          >
            Get Started
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Hero; 