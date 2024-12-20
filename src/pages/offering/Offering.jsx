function Offering() {
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
      {/* ... resto del contenido igual ... */}
    </PageLayout>
  );
}

export default Offering; 