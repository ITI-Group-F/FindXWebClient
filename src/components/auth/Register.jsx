import React, { useState } from "react";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";

export default function Register() {
  const [formData, setFormData] = useState(null);

  const setValue = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitRegisterData = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h1" component="div" gutterBottom>
        Register
      </Typography>
      <form onSubmit={submitRegisterData}>
        <TextField
          style={{ width: "200px", margin: "5px" }}
          name="firstName"
          type="text"
          label="First Name"
          variant="outlined"
          onChange={setValue}
        />

        <TextField
          style={{ width: "200px", margin: "5px" }}
          name="lastName"
          type="text"
          label="Last Name"
          variant="outlined"
          onChange={setValue}
        />

        <TextField
          style={{ width: "200px", margin: "5px" }}
          name="phone"
          type="text"
          label="Phone"
          variant="outlined"
          onChange={setValue}
        />

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
          Register
        </Button>
      </form>
    </Box>
  );
}
