// src/components/ContactUs.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ name, email, message });
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          type="email"
        />
        <TextField
          label="Message"
          fullWidth
          margin="normal"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '1rem' }}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ContactUs;
