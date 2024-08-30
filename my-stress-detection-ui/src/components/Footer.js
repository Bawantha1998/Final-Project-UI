// src/components/Footer.js
import React from 'react';
import {Typography } from '@mui/material';

const Footer = () => {
  return (
    <div style={{ padding: '1rem', backgroundColor: '#f1f1f1' }} maxWidth="lg">
      <Typography variant="body2" color="textSecondary" align="center">
        © 2024 Stress Detection System. All rights reserved.
      </Typography>
    </div>
  );
};

export default Footer;
