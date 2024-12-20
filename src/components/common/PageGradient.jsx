import { Box } from '@mui/material';

function PageGradient() {
  return (
    <Box 
      sx={{ 
        height: { xs: '450px', sm: '378px' },
        width: '100%',
        background: 'linear-gradient(180deg, #4B4DFF 0%, #FFFFFF 100%)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1
      }}
    />
  );
}

export default PageGradient; 