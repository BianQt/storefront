import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  color="inherit">
        <Toolbar >
        
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            OUR STORE
          </Typography>
          <Button color="inherit">Cart(0)</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}