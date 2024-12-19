import { Box, Container, Typography, Grid, Rating } from '@mui/material';
import { motion } from 'framer-motion';

function Home() {
  // Array de imágenes con nombres correctos
  const images = [
    {
      src: './images/technician1.png',
      alt: 'Electrician working on industrial equipment'
    },
    {
      src: './images/technician2.png',
      alt: 'Technician installing electrical systems'
    },
    {
      src: './images/technician3.png',
      alt: 'Professional electrical maintenance'
    },
    {
      src: './images/technician4.png',
      alt: 'Industrial electrical work'
    }
  ];

  // Array de testimonios
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

  const partners = [
    {
      name: "Siemens Energy",
      logo: "./images/siemens.png",
      description: "Leading supplier of energy technology"
    },
    {
      name: "E.ON",
      logo: "./images/eon.png",
      description: "One of Europe's largest operators of energy networks"
    },
    {
      name: "RWE",
      logo: "./images/rwe.png",
      description: "Germany's largest electricity producer"
    },
    {
      name: "EnBW",
      logo: "./images/enbw.png",
      description: "Major player in renewable energy"
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

      {/* Sección de imágenes */}
      <Container maxWidth="lg" sx={{ pb: 8 }}>
        <Grid container spacing={3}>
          {images.map((image, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Box
                  sx={{
                    width: '100%',
                    paddingBottom: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: 2,
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    '&:hover': {
                      transform: 'scale(1.03)',
                      transition: 'transform 0.3s ease-in-out'
                    }
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      backgroundColor: 'white'
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Nueva sección de Partners */}
      <Box sx={{ 
        py: 10, 
        bgcolor: '#0B3D91',
        color: 'white'
      }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography 
              variant="h2" 
              textAlign="center"
              sx={{ 
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 600,
                mb: 6,
                color: 'white'
              }}
            >
              Our Industry Partners
            </Typography>

            <Grid container spacing={6} alignItems="center">
              {partners.map((partner, index) => (
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
                          transform: 'translateY(-10px)',
                          transition: 'transform 0.3s ease-in-out'
                        }
                      }}
                    >
                      <Box
                        sx={{
                          mb: 3,
                          height: '100px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          style={{
                            maxWidth: '80%',
                            maxHeight: '80px',
                            objectFit: 'contain',
                            filter: 'brightness(0) invert(1)' // Hace los logos blancos
                          }}
                        />
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          color: 'white'
                        }}
                      >
                        {partner.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.8)'
                        }}
                      >
                        {partner.description}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Nueva sección de testimonios */}
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