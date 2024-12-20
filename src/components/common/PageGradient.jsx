import { Box } from '@mui/material';

function PageGradient() {
  return (
    <Box 
      sx={{ 
        height: '378px',
        width: '100%',
        background: 'linear-gradient(180deg, #4B4DFF 0%, #FFFFFF 100%)',
        position: 'fixed',
        top: '65px',
        left: 0,
        right: 0,
        zIndex: -1,
        '@media (max-width: 600px)': {
          height: '450px'
        }
      }}
    />
  );
}

export default PageGradient; 