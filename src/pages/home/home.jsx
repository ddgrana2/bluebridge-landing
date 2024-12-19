import { Box, Container, Typography, Grid, Rating } from '@mui/material';
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
    <Box sx={{ bgcolor: 'white' }}>
      {/* Sección de encabezado */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography 
              variant="h1" 
              component="h1" 
              textAlign="center" 
              gutterBottom
              sx={{ 
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                color: '#0B3D91',
                mb: 3
              }}
            >
              Connecting Global Talent
            </Typography>
            
            <Typography 
              variant="h2" 
              component="h2" 
              textAlign="center"
              sx={{ 
                fontSize: { xs: '1.5rem', md: '2rem' },
                fontWeight: 400,
                color: '#666',
                maxWidth: '800px',
                mx: 'auto',
                mb: 8
              }}
            >
              We bridge the gap between international workforce and companies worldwide.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Sección de testimonios */}
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