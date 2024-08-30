import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerItems = (
    <List>
      <ListItem button component={Link} to="/" onClick={handleDrawerToggle}>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={Link} to="/about" onClick={handleDrawerToggle}>
        <ListItemText primary="About Us" />
      </ListItem>
      <ListItem button component={Link} to="/dashboard" onClick={handleDrawerToggle}>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component={Link} to="/contact" onClick={handleDrawerToggle}>
        <ListItemText primary="Contact Us" />
      </ListItem>
    </List>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor:"#00847f", boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' }}> 
    {/* background: 'rgba(0, 0, 0, 0.8)', */}
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Stress Detection System
        </Typography>
        {isMobile ? (
          <>
            <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
              {drawerItems}
            </Drawer>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/about">About Us</Button>
            <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
            <Button color="inherit" component={Link} to="/contact">Contact Us</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
