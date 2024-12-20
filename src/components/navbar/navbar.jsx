import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const NavButton = styled(Button)(({ theme }) => ({
  margin: '0 15px',
  padding: '8px 20px',
  fontSize: '1.1rem',
  color: '#FFFFFF',
  fontWeight: 500,
  textTransform: 'capitalize',
  fontFamily: '"Poppins", "Roboto", sans-serif',
  letterSpacing: '0.5px',
  '&:hover': {
    transform: 'scale(1.05)',
    transition: 'all 0.3s ease-in-out',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

function Navbar() {
  return (
    <>
      <AppBar position="static" sx={{ 
        bgcolor: '#1621F2',
        boxShadow: 0,
        marginBottom: 0
      }}>
        <Box 
          sx={{ 
            width: '100%', 
            height: '50px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Logo superpuesto */}
          <Box sx={{ 
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            left: '20px',
            height: '240px',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center'
          }}>
            <Link to="/">
              <img 
                src="images/logo.png"
                alt="BlueBridge Logo"
                style={{ 
                  height: '135px',
                  width: 'auto',
                  objectFit: 'contain',
                  background: 'transparent'
                }}
              />
            </Link>
          </Box>

          {/* Botones superpuestos */}
          <Container maxWidth="md" sx={{ 
            position: 'absolute', 
            top: '50%',
            transform: 'translateY(-50%)',
            left: 0, 
            right: 0,
            zIndex: 2,
            bgcolor: 'transparent'
          }}>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
              bgcolor: 'transparent'
            }}>
              <NavButton component={Link} to="/">
                Home
              </NavButton>
              <NavButton component={Link} to="/about">
                About Us
              </NavButton>
              <NavButton component={Link} to="/insights">
                Insights
              </NavButton>
              <NavButton component={Link} to="/contact">
                Contact
              </NavButton>
            </Box>
          </Container>
        </Box>
      </AppBar>

      {/* Sección de degradado */}
      <Box 
        sx={{ 
          height: '225px',
          width: '100%',
          background: 'linear-gradient(180deg, #414AF2 0%, #FFFFFF 100%)',
          position: 'relative',
          zIndex: 1
        }}
      />
    </>
  );
}

export default Navbar; 