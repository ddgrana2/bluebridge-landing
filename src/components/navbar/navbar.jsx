import { AppBar, Box, Container, Toolbar, Button, IconButton, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import logo from '../../assets/images/logo.png';

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
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
        background: '#FFFFFF',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar 
          disableGutters 
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            minHeight: '65px'
          }}
        >
          {/* Logo */}
          <Link to="/">
            <Box
              component="img"
              src={logo}
              alt="BlueBridge Logo"
              sx={{
                height: { xs: '40px', sm: '50px' },
                width: 'auto',
                objectFit: 'contain'
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <Box 
            sx={{ 
              display: { xs: 'none', md: 'flex' },
              gap: 2,
              alignItems: 'center'
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.text}
                component={Link}
                to={item.path}
                variant={item.text === 'Contact' ? 'contained' : 'text'}
                sx={{
                  color: item.text === 'Contact' ? 'white' : '#1618FF',
                  bgcolor: item.text === 'Contact' ? '#1618FF' : 'transparent',
                  fontSize: '1rem',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: item.text === 'Contact' ? '#4B4DFF' : 'transparent',
                    color: item.text === 'Contact' ? 'white' : '#4B4DFF'
                  }
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              onClick={handleClick}
              sx={{ color: '#1618FF' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              {menuItems.map((item) => (
                <MenuItem 
                  key={item.text}
                  component={Link}
                  to={item.path}
                  onClick={handleClose}
                  sx={{
                    color: '#1618FF',
                    '&:hover': {
                      backgroundColor: 'rgba(22, 24, 255, 0.1)',
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