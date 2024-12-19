import { Card, CardContent, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

function ServiceCard({ title, description, icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardContent>
          <Box textAlign="center" mb={2}>
            <Typography variant="h1" component="span">
              {icon}
            </Typography>
          </Box>
          <Typography variant="h5" component="h2" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default ServiceCard; 