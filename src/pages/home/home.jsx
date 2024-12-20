import { Box, Container, Typography, Grid, Rating, Select, MenuItem, Button } from '@mui/material';
import { motion } from 'framer-motion';

function Home() {
  const testimonials = [
    {
      quote: "BlueBridge has consistently provided us with highly skilled technicians. Their professional approach and thorough vetting process make them a reliable partner for our technical staffing needs.",
      author: "Hans Schmidt",
      position: "CEO, TechMaster GmbH",
      rating: 5
    },
    {
      quote: "The quality of candidates and the seamless integration process sets BlueBridge apart. They understand our industry's demands and deliver exceptional talent.",
      author: "Michael Weber",
      position: "Operations Director, ElektroTech Berlin",
      rating: 5
    },
    {
      quote: "Working with BlueBridge has transformed our international recruitment process. Their candidates not only possess technical expertise but also adapt well to our company culture.",
      author: "Klaus Mueller",
      position: "Managing Director, IndustrieWerk Munich",
      rating: 5
    }
  ];

  return (
    <Box sx={{ 
      bgcolor: 'white', 
      position: 'relative',
      zIndex: 2 
    }}>
      {/* Degradado */}
      <Box 
        sx={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '225px',
          background: 'linear-gradient(180deg, #414AF2 0%, #FFFFFF 100%)',
          zIndex: -1
        }}
      />

      {/* Hero Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ 
              textAlign: 'center',
              mt: -2
            }}>
              <Typography 
                component="span"
                sx={{ 
                  fontSize: { xs: '2.46rem', md: '3.45rem' },
                  fontWeight: 700,
                  color: '#1618FF',
                  display: 'inline'
                }}
              >
                Connecting{' '}
              </Typography>
              <Typography 
                component="span"
                sx={{ 
                  fontSize: { xs: '2.46rem', md: '3.45rem' },
                  fontWeight: 700,
                  color: '#FFFFFF',
                  display: 'inline'
                }}
              >
                Global Talent
              </Typography>
            </Box>
            
            <Typography 
              variant="h2" 
              component="h2" 
              textAlign="center"
              sx={{ 
                fontSize: { xs: '0.97rem', md: '1.30rem' },
                fontWeight: 400,
                color: '#FFFFFF',
                maxWidth: '700px',
                mx: 'auto',
                mb: 8,
                position: 'relative',
                zIndex: 2,
                whiteSpace: 'pre-line'
              }}
            >
              {'We bridge the gap between international workforce and\ncompanies worldwide.'}
            </Typography>

            {/* Asegurarse que todo el contenido esté sobre el degradado */}
            <Box sx={{ 
              position: 'relative',
              zIndex: 2
            }}>
              {/* Worker Selection Form */}
              <Box sx={{ 
                maxWidth: 600, 
                mx: 'auto', 
                p: 4, 
                bgcolor: 'white',
                borderRadius: 2,
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }}>
                <Typography variant="h6" gutterBottom>
                  Worker Type *
                </Typography>
                <Select
                  fullWidth
                  defaultValue=""
                  sx={{ mb: 2 }}
                >
                  <MenuItem value="">Select worker type</MenuItem>
                  <MenuItem value="electrician">Electrician</MenuItem>
                  <MenuItem value="plumbing">Plumbing, heating and air conditioning technology</MenuItem>
                  <MenuItem value="construction">Construction Worker</MenuItem>
                  <MenuItem value="mechanic">Mechanic</MenuItem>
                  <MenuItem value="plumber">Plumber</MenuItem>
                  <MenuItem value="carpenter">Carpenter</MenuItem>
                </Select>
                <Button 
                  variant="contained" 
                  fullWidth
                  sx={{ 
                    mt: 2,
                    bgcolor: '#0B3D91',
                    '&:hover': {
                      bgcolor: '#092d6e'
                    }
                  }}
                >
                  Next
                </Button>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Built by experts section */}
      <Box sx={{ py: 8, bgcolor: '#f5f5f5' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            textAlign="center"
            sx={{ mb: 6 }}
          >
            Built by experts from
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {['McKinsey', 'JP Morgan', 'UBS', 'Bain', 'Rappi', 'BCG', 'Enpal', 'Barclays'].map((company) => (
              <Grid item xs={6} sm={3} md={2} key={company}>
                <Typography 
                  variant="h6" 
                  textAlign="center"
                  sx={{ 
                    color: '#666',
                    fontWeight: 500
                  }}
                >
                  {company}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials section */}
      <Box sx={{ py: 8, bgcolor: '#f5f5f5' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography 
              variant="h2" 
              component="h2" 
              textAlign="center" 
              sx={{ 
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 600,
                color: '#0B3D91',
                mb: 6
              }}
            >
              What Our Clients Say
            </Typography>

            <Grid container spacing={4}>
              {testimonials.map((testimonial, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <Box
                      sx={{
                        bgcolor: 'white',
                        p: 4,
                        borderRadius: 2,
                        height: '100%',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        display: 'flex',
                        flexDirection: 'column',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          transition: 'transform 0.3s ease-in-out'
                        }
                      }}
                    >
                      <Rating 
                        value={testimonial.rating} 
                        readOnly 
                        sx={{ mb: 2 }}
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          mb: 3,
                          fontStyle: 'italic',
                          flex: 1,
                          color: '#555',
                          lineHeight: 1.6
                        }}
                      >
                        "{testimonial.quote}"
                      </Typography>
                      <Box>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: 600,
                            color: '#0B3D91'
                          }}
                        >
                          {testimonial.author}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#666'
                          }}
                        >
                          {testimonial.position}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;