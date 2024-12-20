import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import PageGradient from '../common/PageGradient';

function PageLayout({ children, title, subtitle }) {
  return (
    <>
      <PageGradient />
      
      {/* Hero Section */}
      <Box sx={{ 
        pt: { xs: 6, sm: 8, md: 10 },
        pb: { xs: 4, sm: 6 },
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transform: 'translateY(-0.5cm)'
      }}>
        <Container 
          maxWidth="lg"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
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
                  mb: { xs: 4, sm: 6 },
                  color: '#FFFFFF',
                  lineHeight: 1.6,
                  fontSize: { 
                    xs: 'calc(1.1rem * 1.2)', 
                    sm: 'calc(1.25rem * 1.2)' 
                  }
                }}
              >
                {subtitle}
              </Typography>
            )}
          </motion.div>
        </Container>
      </Box>

      {children}
    </>
  );
}

export default PageLayout; 