import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import PageTitle from '../../components/common/PageTitle';
import PageLayout from '../../components/layout/PageLayout';

function Offering() {
  const offerings = [
    {
      title: "European Job Market Trends",
      content: "Latest insights about the growing sectors and opportunities in Europe."
    },
    {
      title: "Visa Application Guide",
      content: "Step-by-step guide to successfully navigate the visa process."
    },
    {
      title: "Cultural Integration Tips",
      content: "Essential advice for adapting to European workplace culture."
    }
  ];

  return (
    <PageLayout
      title={
        <Box sx={{ textAlign: 'center' }}>
          <Typography 
            component="span"
            sx={{ 
              fontSize: { 
                xs: 'calc(2rem * 1.2)',
                sm: 'calc(2.46rem * 1.2)',
                md: 'calc(3.45rem * 1.2)'
              },
              fontWeight: 700,
              color: '#1618FF',
              display: 'inline'
            }}
          >
            Our{' '}
          </Typography>
          <Typography 
            component="span"
            sx={{ 
              fontSize: { 
                xs: 'calc(2rem * 1.2)',
                sm: 'calc(2.46rem * 1.2)',
                md: 'calc(3.45rem * 1.2)'
              },
              fontWeight: 700,
              color: '#FFFFFF',
              display: 'inline'
            }}
          >
            Offering
          </Typography>
        </Box>
      }
      subtitle="Discover valuable resources and insights about working in Europe."
    >
      <Box sx={{ 
        bgcolor: 'white',
        position: 'relative',
        zIndex: 2,
        width: '100%',
        mt: { xs: 4, sm: 6 }
      }}>
        <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
          <Grid container spacing={4}>
            {offerings.map((offering) => (
              <Grid item xs={12} md={4} key={offering.title}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="h2" gutterBottom>
                      {offering.title}
                    </Typography>
                    <Typography variant="body1">
                      {offering.content}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </PageLayout>
  );
}

export default Offering; 