import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function About() {
  return (
    <Box 
      className="flex flex-col min-h-screen"
      sx={{
        mt: '2.5rem',
        pt: '1.5rem',
      }}
    >
      <HeroSection />
      <MissionVisionSection />
      <CTASection />
    </Box>
  );
}

function HeroSection() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          component="h1" 
          sx={{ 
            fontSize: { xs: '2.46rem', md: '3.45rem' },
            fontWeight: 700,
            textAlign: 'center',
            color: '#1618FF'
          }}
        >
          About Us
        </Typography>
        <Box 
          sx={{ 
            maxWidth: { xs: '90%', md: '800px' }, 
            mx: 'auto', 
            textAlign: 'center',
            '& h1, & p': {
              whiteSpace: 'normal',
              overflowWrap: 'break-word',
              wordWrap: 'break-word',
              minWidth: { xs: '200px', md: '500px' },
              maxWidth: '90%',
              display: 'inline-block'
            }
          }}
        >
          <Typography variant="h5" color="text.secondary" sx={{ mt: 2 }}>
            BlueBridge is far more than a traditional recruiting firm. We provide comprehensive, 
            scalable solutions that go beyond simply placing talent.
          </Typography>
        </Box>
      </Container>
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