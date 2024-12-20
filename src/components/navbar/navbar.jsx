import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const NavButton = styled(Button)(({ theme, active }) => ({
  margin: '0 4px',
  padding: '8px 8px',
  fontSize: '0.92rem',
  color: '#FFFFFF',
  fontWeight: 500,
  textTransform: 'capitalize',
  fontFamily: '"Space Grotesk", sans-serif',
  letterSpacing: '0.5px',
  borderBottom: active ? '2px solid white' : '2px solid transparent',
  borderRadius: 0,
  '&:hover': {
    transform: 'scale(1.05)',
    transition: 'all 0.3s ease-in-out',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

function Navbar() {
  const location = useLocation();
  
  return (
    <>
      <AppBar position="fixed" sx={{ 
        bgcolor: '#1618FF',
        boxShadow: 0,
        height: '65px',
        zIndex: 1000
      }}>
        <Box 
          sx={{ 
            width: '100%', 
            height: '65px',
            position: 'relative',
            overflow: 'visible'
          }}
        >
          {/* Logo superpuesto */}
          <Box sx={{ 
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            left: '40px',
            height: '350px',
            zIndex: 3,
            display: 'flex',
            alignItems: 'center'
          }}>
            <Link to="/">
              <img 
                src="images/logo.png"
                alt="BlueBridge Logo"
                style={{ 
                  height: '196.875px',
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
              gap: 1,
              bgcolor: 'transparent'
            }}>
              <NavButton 
                component={Link} 
                to="/"
                active={location.pathname === '/'}
              >
                Home
              </NavButton>
              <NavButton 
                component={Link} 
                to="/about"
                active={location.pathname === '/about'}
              >
                About Us
              </NavButton>
              <NavButton 
                component={Link} 
                to="/insights"
                active={location.pathname === '/insights'}
              >
                Insights
              </NavButton>
              <NavButton 
                component={Link} 
                to="/contact"
                active={location.pathname === '/contact'}
              >
                Contact
              </NavButton>
            </Box>
          </Container>
        </Box>
      </AppBar>

      {/* Spacer para compensar el navbar fijo */}
      <Box sx={{ height: '65px' }} />

      {/* Degradado se mantiene igual */}
      <Box 
        sx={{ 
          height: '315px',
          width: '100%',
          background: 'linear-gradient(180deg, #414AF2 0%, #FFFFFF 100%)',
          position: 'absolute',
          zIndex: -1
        }}
      />
    </>
  );
}

export default Navbar; 