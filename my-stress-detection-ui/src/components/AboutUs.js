import React from 'react';
import { Box, Paper, Typography } from '@mui/material';

const AboutUs = () => {
  return (
    <Box component="main" sx={{ maxWidth: 'lg', mx: 'auto', p: 2 }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        At the intersection of technology and well-being, we are pioneers in transforming how stress is understood and managed. Our team of passionate innovators is dedicated to crafting solutions that empower individuals to take control of their mental and emotional health. Through advanced stress detection techniques, we aim to provide you with insights that are not just informative but life-changing.
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        With a focus on seamless integration of cutting-edge heart rate and skin conductance monitoring technologies, our system is designed to be your personal guide on the journey to a healthier, more balanced life. We believe that understanding your body's response to stress is the first step toward mastering it. That's why we're here – to help you navigate stress with confidence and clarity.
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          justifyContent: 'space-between',
          mt: 4,
        }}
      >
        <Paper elevation={3} sx={{ flex: '1 1 calc(50% - 16px)', p: 2 }}>
          <Typography variant="h6">Our Mission</Typography>
          <Typography variant="body1" component="p">
            To revolutionize the way stress is detected and managed by delivering accurate, user-friendly tools that foster a deep connection between mind and body. We strive to make stress management accessible and effective for everyone.
          </Typography>
        </Paper>
        <Paper elevation={3} sx={{ flex: '1 1 calc(50% - 16px)', p: 2 }}>
          <Typography variant="h6">Our Vision</Typography>
          <Typography variant="body1" component="p">
            To become the world’s most trusted platform for stress detection and management, creating a future where technology and human insight work hand-in-hand to promote a stress-free life for all.
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default AboutUs;
