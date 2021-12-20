import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Paper from "@mui/material/Paper";

export default function Footer() {
  return (
    <Box sx={{ pb: 7 }} sx={{padding:'0', marginTop:'5em'}}>
      <Paper
        sx={{bottom: 0, left: 0, right: 0,backgroundColor:'#e3e3e3', padding:'20px', textAlign:'center',boxShadow:'0' }}
        elevation={5}
        style={{text:'auto'}}
      >
        <h3 style={{ fontFamily:"arial", fontWeight:'lighter', marginBottom:'0'}} >© 2020 Javascript 401</h3>
        <h4 style={{ fontFamily:"arial", fontWeight:'lighter',color:'gray'}}>React + Redux + Material UI</h4>
      </Paper>
    </Box>
  );
}
