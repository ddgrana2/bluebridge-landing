import { Box, Container } from '@mui/material';
import { motion } from 'framer-motion';
import PageGradient from '../common/PageGradient';

function PageLayout({ children, title, subtitle }) {
  return (
    <Box sx={{ 
      position: 'relative',
      minHeight: '100vh',
      bgcolor: 'transparent'
    }}>
      <PageGradient />
      
      {/* Hero Section */}
      <Box sx={{ 
        py: { xs: 4, sm: 6, md: 8 },
        px: { xs: 2, sm: 3, md: 4 },
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
                  mb: 8,
                  color: '#FFFFFF',
                  lineHeight: 1.6
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
        bgcolor: 'white',
        position: 'relative',
        zIndex: 2,
        py: 8,
        width: '100%'
      }}>
        {children}
      </Box>
    </Box>
  );
}

export default PageLayout; 