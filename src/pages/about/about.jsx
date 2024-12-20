import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageGradient from '../../components/common/PageGradient';
import PageTitle from '../../components/common/PageTitle';

function About() {
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
            <PageTitle>About Us</PageTitle>
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
              BlueBridge is far more than a traditional recruiting firm. We provide comprehensive, 
              scalable solutions that go beyond simply placing talent.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Mission Vision Section */}
      <Box sx={{ 
        bgcolor: 'white',
        position: 'relative',
        zIndex: 2,
        mt: 4
      }}>
        <Container maxWidth="lg">
          <MissionVisionSection />
          <CTASection />
        </Container>
      </Box>
    </Box>
  );
}

function MissionVisionSection() {
  const sections = [
    {
      title: "Our Mission",
      content: "To bridge the global labor shortage by connecting skilled international workers with employers worldwide, ensuring our talent is culturally prepared and language proficient."
    },
    {
      title: "Our Vision",
      content: "To become the global leader in revolutionizing international recruitment, connecting skilled workers with employers worldwide."
    }
  ];
  
  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {sections.map((section, index) => (
            <Grid item xs={12} md={6} key={section.title}>
              <motion.div
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Typography 
                    variant="h3" 
                    component="h2" 
                    sx={{ 
                      color: 'primary.main',
                      fontWeight: 'bold',
                      mb: 3 
                    }}
                  >
                    {section.title}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {section.content}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

function CTASection() {
  return (
    <Box sx={{ 
      py: 10, 
      bgcolor: 'primary.main',
      color: 'white'
    }}>
      <Container maxWidth="lg">
        <Box sx={{ 
          maxWidth: 'md', 
          mx: 'auto', 
          textAlign: 'center'
        }}>
          <Typography variant="h3" component="h2" gutterBottom>
            Ready to scale your business with a consolidated workforce?
          </Typography>
          <Button 
            component={Link}
            to="/contact"
            variant="contained" 
            size="large"
            sx={{ 
              mt: 4,
              bgcolor: 'white',
              color: 'primary.main',
              '&:hover': {
                bgcolor: 'grey.100',
              }
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default About;