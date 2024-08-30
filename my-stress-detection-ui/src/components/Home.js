// src/components/Home.js
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import BackgroundImage from './assets/bg2.jpg'; // Add the background image

const Home = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(6px)', // Apply blur effect
          zIndex: -2, // Ensure the blur effect is behind the overlay
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.4)', // Dark semi-transparent overlay
          zIndex: -1, // Ensure the overlay is above the blur but below the content
        },
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: '#ffffff', // White color for better readability
            mb: 2,
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Text shadow for better visibility
          }}
        >
          Welcome to the Future of Stress Management
        </Typography>
        <Typography
          variant="h6"
          component="p"
          gutterBottom
          sx={{
            color: '#eeeeee', // Light gray color for contrast
            mb: 4,
            textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)', // Text shadow for better visibility
          }}
        >
          Our cutting-edge system monitors stress levels using advanced heart rate and skin conductance measurements. Take control of your well-being with precision and care.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link}
          to="/dashboard"
          sx={{ mt: 4, backgroundColor: "#00bfae", '&:hover': { backgroundColor: "#00847f" } }} // Updated button color
        >
          Get Started
        </Button>
      </Container>
    </Box>
  );
};

export default Home;
