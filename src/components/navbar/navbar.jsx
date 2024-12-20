import { AppBar, Box, Container, Toolbar, Button, IconButton, Menu, MenuItem } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();
  
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { text: 'About', path: '/about' },
    { text: 'Insights', path: '/insights' },
    { text: 'Contact', path: '/contact' }
  ];

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        bgcolor: '#1618FF',
        boxShadow: 0,
        height: '65px'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar 
          disableGutters 
          sx={{ 
            height: '65px',
            display: 'flex', 
            justifyContent: 'space-between'
          }}
        >
          {/* Logo - Desktop */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Link to="/">
              <Box
                component="img"
                src="/images/logo.png"
                alt="BlueBridge Logo"
                sx={{
                  height: '196.875px',
                  width: 'auto',
                  objectFit: 'contain',
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  left: '40px'
                }}
              />
            </Link>
          </Box>

          {/* Logo - Mobile */}
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <Link to="/">
              <Box
                component="img"
                src="/images/logo.png"
                alt="BlueBridge Logo"
                sx={{
                  height: '140px',
                  width: 'auto',
                  objectFit: 'contain',
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  left: '20px'
                }}
              />
            </Link>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ 
            display: { xs: 'none', md: 'flex' },
            gap: 2,
            ml: 'auto' // Empuja los botones hacia la derecha
          }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                component={Link}
                to={item.path}
                sx={{
                  color: '#FFFFFF',
                  fontSize: '1.01rem',
                  fontWeight: 700,
                  textTransform: 'none',
                  borderBottom: location.pathname === item.path ? '2px solid white' : '2px solid transparent',
                  borderRadius: 0,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ 
            display: { xs: 'flex', md: 'none' },
            ml: 'auto' // Empuja el menú hacia la derecha
          }}>
            <IconButton
              size="large"
              onClick={handleMenu}
              sx={{ color: '#FFFFFF' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiPaper-root': {
                  backgroundColor: '#FFFFFF',
                  marginTop: '10px'
                }
              }}
            >
              {menuItems.map((item) => (
                <MenuItem 
                  key={item.text}
                  onClick={handleClose}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: '#1618FF',
                    fontWeight: 500,
                    '&:hover': {
                      backgroundColor: 'rgba(22, 24, 255, 0.1)'
                    }
                  }}
                >
                  {item.text}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar; 