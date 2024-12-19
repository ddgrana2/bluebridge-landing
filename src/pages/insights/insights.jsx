import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';

function Insights() {
  const insights = [
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
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom textAlign="center">
        Insights & Resources
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {insights.map((insight) => (
          <Grid item xs={12} md={4} key={insight.title}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {insight.title}
                </Typography>
                <Typography variant="body1">
                  {insight.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Insights; 