import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({});

  const setValue = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitLoginData = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h1" component="div" gutterBottom>
        Login
      </Typography>
      <form onSubmit={submitLoginData}>
        <TextField
          style={{ width: "200px", margin: "5px" }}
          name="email"
          type="text"
          label="Email"
          variant="outlined"
          onChange={setValue}
        />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          name="password"
          type="password"
          label="Password"
          variant="outlined"
          onChange={setValue}
        />
        <Button variant="contained" type="submit">
          Login
        </Button>
      </form>
    </Box>
  );
}
