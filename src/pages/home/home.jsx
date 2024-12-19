import { Box, Container, Typography, Grid, Rating } from '@mui/material';
import { motion } from 'framer-motion';

function Home() {
  // Eliminado el array de imágenes de técnicos

  const partners = [
    {
      name: "Siemens Energy",
      logo: "/images/siemens.png",
      description: "Leading supplier of energy technology"
    },
    {
      name: "E.ON",
      logo: "/images/eon.png",
      description: "One of Europe's largest operators of energy networks"
    },
    {
      name: "RWE",
      logo: "/images/rwe.png",
      description: "Germany's largest electricity producer"
    },
    {
      name: "EnBW",
      logo: "/images/enbw.png",
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

      {/* Sección de Partners con fondo blanco */}
      <Box sx={{ 
        py: 10, 
        bgcolor: 'white',
        color: '#0B3D91'
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
                color: '#0B3D91'
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
                            filter: 'none'
                          }}
                        />
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          color: '#0B3D91'
                        }}
                      >
                        {partner.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#0B3D91',
                          opacity: 0.8
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

      {/* Sección de testimonios */}
      {/* ... resto del código ... */}
    </Box>
  );
}

export default Home;