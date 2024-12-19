import { Box, Container, Typography, Link, Grid } from '@mui/material';

function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: 'rgba(11, 61, 145, 0.9)', // Color primario con transparencia
        color: 'rgba(255, 255, 255, 0.9)', // Texto blanco con transparencia
        py: 3,
        mt: 'auto', // Empuja el footer al final
        position: 'relative',
        bottom: 0,
        width: '100%'
      }}
    >
      <Container maxWidth="lg">
        <Grid 
          container 
          spacing={2}
          direction="column"
          alignItems="center"
          textAlign="center"
        >
          <Grid item>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              BlueBridge LLC © 2024
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              1007 N Orange St. 4th Floor 3393
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Wilmington, DE 19801
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              United States
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;