import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import React from "react";

export default function Login() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h1" component="div" gutterBottom>
        Login
      </Typography>
      <form action="">
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Email"
          variant="outlined"
        />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="password"
          label="Password"
          variant="outlined"
        />
        <Button variant="contained">Login</Button>
      </form>
    </Box>
  );
}
