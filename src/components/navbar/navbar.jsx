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
    <AppBar position="static" sx={{ 
      bgcolor: 'transparent', 
      boxShadow: 0,
      marginBottom: '0'
    }}>
      <Box 
        sx={{ 
          width: '100%', 
          height: '100px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Background Image */}
        <img 
          src="./images/header.png"
          alt="Header"
          style={{ 
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            zIndex: 1
          }}
        />

        {/* Logo superpuesto */}
        <Box sx={{ 
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          left: '20px',
          height: '160px',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center'
        }}>
          <Link to="/">
            <img 
              src="images/logo.png"
              alt="BlueBridge Logo"
              style={{ 
                height: '160px',
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
  );
}

export default Navbar; 