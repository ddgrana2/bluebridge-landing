import { Box, Container, Typography, Grid, Paper, Link } from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';

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
    <Box sx={{ bgcolor: 'white', py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
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
            Get in Touch
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
            We're here to help you bridge the gap between talent and opportunity.
          </Typography>
        </motion.div>

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
  );
}

export default Contact; 