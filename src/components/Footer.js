import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Paper from "@mui/material/Paper";

export default function Footer() {
  return (
    <Box sx={{ pb: 7 }}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={5}
        style={{text:'auto'}}
      >
        <h3 >© 2020 Javascript 401</h3>
        <h4>React + Redux + Material UI</h4>
      </Paper>
    </Box>
  );
}
