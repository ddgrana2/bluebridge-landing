import { Box, Container, Typography, Grid, Rating, Select, MenuItem, Button } from '@mui/material';
import { motion } from 'framer-motion';
import PageLayout from '../../components/layout/PageLayout';

function Home() {
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

  return (
    <PageLayout
      title={
        <Box sx={{ textAlign: 'center', mt: -2 }}>
          <Typography 
            component="span"
            sx={{ 
              fontSize: { xs: '2.46rem', md: '3.45rem' },
              fontWeight: 700,
              color: '#1618FF',
              display: 'inline'
            }}
          >
            Connecting{' '}
          </Typography>
          <Typography 
            component="span"
            sx={{ 
              fontSize: { xs: '2.46rem', md: '3.45rem' },
              fontWeight: 700,
              color: '#FFFFFF',
              display: 'inline'
            }}
          >
            Global Talent
          </Typography>
        </Box>
      }
      subtitle="We bridge the gap between international workforce and\ncompanies worldwide."
    >
      <Container maxWidth="lg">
        {/* Worker Selection Form */}
        {/* Built by experts section */}
        {/* Testimonials section */}
      </Container>
    </PageLayout>
  );
}

export default Home;