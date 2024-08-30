import React from 'react';
import { Box, Paper, Typography, Grid } from '@mui/material';

const Dashboard = () => {
  return (
    <Box
      component="main"
      sx={{
        maxWidth: 'lg',
        mx: 'auto',
        p: 4,
        backgroundColor: '#f0f4f8',
        borderRadius: '8px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          color: '#1976d2',
          textAlign: 'center',
          mb: 4,
        }}
      >
        Multifunctional Stress Detection System
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={6}
            sx={{
              p: 3,
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              textAlign: 'center',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: '0 6px 24px rgba(0, 0, 0, 0.15)',
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: '600', color: '#424242', mb: 2 }}
            >
              Heart Rate Monitoring
            </Typography>
            {/* Insert heart rate data visualization here */}
          </Paper>
          
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={6}
            sx={{
              p: 3,
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              textAlign: 'center',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: '0 6px 24px rgba(0, 0, 0, 0.15)',
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: '600', color: '#424242', mb: 2 }}
            >
              Skin Conductance
            </Typography>
            {/* Insert skin conductance data visualization here */}
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={6}
            sx={{
              p: 3,
              backgroundColor: '#ffebee',  // Highlighted background color
              borderRadius: '12px',
              textAlign: 'center',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: '0 6px 24px rgba(0, 0, 0, 0.15)',
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: '600', color: '#c62828', mb: 2 }}  // Highlighted text color
            >
              Stress Level Visualization
            </Typography>
            {/* Insert stress level data visualization here */}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;

