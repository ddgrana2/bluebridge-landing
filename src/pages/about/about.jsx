import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';
import LanguageIcon from '@mui/icons-material/Language';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';

function About() {
  const features = [
    {
      icon: <WorkIcon sx={{ fontSize: 40, color: '#0B3D91' }} />,
      title: "Technical Expertise",
      description: "We specialize in connecting highly skilled technical professionals with leading European companies."
    },
    {
      icon: <LanguageIcon sx={{ fontSize: 40, color: '#0B3D91' }} />,
      title: "Cultural Integration",
      description: "Our comprehensive program ensures smooth cultural transition and language adaptation for all candidates."
    },
    {
      icon: <PeopleIcon sx={{ fontSize: 40, color: '#0B3D91' }} />,
      title: "Global Network",
      description: "With partners across multiple continents, we provide access to a diverse pool of international talent."
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 40, color: '#0B3D91' }} />,
      title: "Continuous Support",
      description: "We offer ongoing training and development programs to ensure long-term success."
    }
  ];

  return (
    <Box sx={{ bgcolor: 'white', py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h1" 
            textAlign="center"
            sx={{ 
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 700,
              mb: 4,
              color: '#0B3D91'
            }}
          >
            Connecting Worlds to Bridge the Global Labor Shortage
          </Typography>

          <Typography 
            variant="h5"
            textAlign="center"
            sx={{ 
              maxWidth: '800px',
              mx: 'auto',
              mb: 8,
              color: '#666',
              lineHeight: 1.6
            }}
          >
            BlueBridge is far more than a traditional recruiting firm. We provide comprehensive, scalable solutions that go beyond simply placing talent.
          </Typography>
        </motion.div>

        {/* Mission & Vision Section */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Paper elevation={0} sx={{ p: 4, height: '100%', bgcolor: '#f8f9fa', borderRadius: 2 }}>
                <Typography variant="h4" gutterBottom color="primary" fontWeight={600}>
                  Our Mission
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.8 }}>
                  To bridge the global labor shortage by connecting skilled international workers with employers worldwide, ensuring our talent is culturally prepared and language proficient.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Paper elevation={0} sx={{ p: 4, height: '100%', bgcolor: '#f8f9fa', borderRadius: 2 }}>
                <Typography variant="h4" gutterBottom color="primary" fontWeight={600}>
                  Our Vision
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.8 }}>
                  To become the global leader in revolutionizing international recruitment, connecting skilled workers with employers worldwide, while fostering cultural exchange and professional growth.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        {/* Features Grid */}
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    height: '100%',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      transition: 'transform 0.3s ease-in-out'
                    }
                  }}
                >
                  {feature.icon}
                  <Typography variant="h6" sx={{ my: 2, color: '#0B3D91', fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
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

export default About; 