import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTitle from '../../components/common/PageTitle';
import PageLayout from '../../components/layout/PageLayout';

function About() {
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
            About{' '}
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
            Us
          </Typography>
        </Box>
      }
      subtitle="BlueBridge is far more than a traditional recruiting firm. We provide comprehensive, scalable solutions that go beyond simply placing talent."
    >
      <Container maxWidth="lg">
        <MissionVisionSection />
        <CTASection />
      </Container>
    </PageLayout>
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