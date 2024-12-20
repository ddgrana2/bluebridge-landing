import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import PageGradient from '../common/PageGradient';

function PageLayout({ children, title, subtitle }) {
  return (
    <Box sx={{ 
      position: 'relative',
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <PageGradient />
      
      {/* Hero Section */}
      <Box sx={{ 
        pt: { xs: 6, sm: 8, md: 10 },
        pb: { xs: 4, sm: 6 },
        position: 'relative',
        zIndex: 2
      }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {title}
            {subtitle && (
              <Typography 
                variant="h5"
                textAlign="center"
                sx={{ 
                  maxWidth: '800px',
                  mx: 'auto',
                  mt: 3,
                  color: '#FFFFFF',
                  lineHeight: 1.6,
                  fontSize: { xs: '1.1rem', sm: '1.25rem' }
                }}
              >
                {subtitle}
              </Typography>
            )}
          </motion.div>
        </Container>
      </Box>

      {/* Content Section */}
      <Box sx={{ 
        flex: 1,
        width: '100%',
        bgcolor: 'white',
        position: 'relative',
        zIndex: 2,
        mt: { xs: 2, sm: 4 }
      }}>
        {children}
      </Box>
    </Box>
  );
}

export default PageLayout; 