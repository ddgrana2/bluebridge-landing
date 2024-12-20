import { Box, Container, Typography, Grid, Paper, Link } from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import PageTitle from '../../components/common/PageTitle';
import PageLayout from '../../components/layout/PageLayout';

function Contact() {
  const contactInfo = [
    {
      icon: <LocationOnIcon sx={{ fontSize: 40, color: '#0B3D91' }} />,
      title: "Address",
      details: ["1007 N Orange St. 4th Floor 3393", "Wilmington, DE 19801", "United States"]
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40, color: '#0B3D91' }} />,
      title: "Phone",
      details: [
        <Link
          href="https://wa.me/14378862722"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: '#555',
            textDecoration: 'none',
            '&:hover': {
              color: '#0B3D91',
              textDecoration: 'underline'
            }
          }}
        >
          +1 437 886 2722
        </Link>
      ]
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40, color: '#0B3D91' }} />,
      title: "Email",
      details: ["info@bluebridgellc.org"]
    },
    {
      icon: <LanguageIcon sx={{ fontSize: 40, color: '#0B3D91' }} />,
      title: "Website",
      details: ["bluebridgellc.org"]
    }
  ];

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
            Get in{' '}
          </Typography>
          <Typography 
            component="span"
            sx={{ 
              fontSize: { 
                xs: 'calc(2rem * 1.2)',
                sm: 'calc(2.46rem * 1.2)',
                md: 'calc(3.45rem * 1.2)'
              },
              fontWeight: 700,
              color: '#FFFFFF',
              display: 'inline'
            }}
          >
            Touch
          </Typography>
        </Box>
      }
      subtitle="We're here to help you bridge the gap between talent and opportunity."
    >
      <Box sx={{ 
        bgcolor: 'white',
        position: 'relative',
        zIndex: 2,
        width: '100%'
      }}>
        <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
          <Grid container spacing={4}>
            {contactInfo.map((info, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: '100%',
                      textAlign: 'center',
                      bgcolor: '#f8f9fa',
                      borderRadius: 2,
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        transition: 'transform 0.3s ease-in-out',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                      }
                    }}
                  >
                    <Box sx={{ mb: 2 }}>
                      {info.icon}
                    </Box>
                    <Typography 
                      variant="h6" 
                      gutterBottom 
                      sx={{ 
                        color: '#0B3D91',
                        fontWeight: 600
                      }}
                    >
                      {info.title}
                    </Typography>
                    {info.details.map((detail, idx) => (
                      <Typography 
                        key={idx} 
                        variant="body1" 
                        sx={{ 
                          color: '#555',
                          mb: 1
                        }}
                      >
                        {detail}
                      </Typography>
                    ))}
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </PageLayout>
  );
}

export default Contact; 