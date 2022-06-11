import React, { useState } from "react";
import { Box, Button, Link, TextField, Typography } from "@mui/material";
import "./auth.css";

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
    <>
      <Typography variant="h3" component="div" gutterBottom>
        Register
      </Typography>
      <form onSubmit={submitRegisterData}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            m: 1,
            gap: 1,
          }}
        >
          <Box>
            <TextField
              style={{ width: "200px", margin: "5px" }}
              name="firstName"
              type="text"
              label="First Name"
              variant="outlined"
              onChange={setValue}
            />
          </Box>
          <Box>
            <TextField
              style={{ width: "200px", margin: "5px" }}
              name="lastName"
              type="text"
              label="Last Name"
              variant="outlined"
              onChange={setValue}
            />
          </Box>
          <Box>
            <TextField
              style={{ width: "200px", margin: "5px" }}
              name="phone"
              type="text"
              label="Phone"
              variant="outlined"
              onChange={setValue}
            />
          </Box>
          <Box>
            <TextField
              style={{ width: "200px", margin: "5px" }}
              name="email"
              type="text"
              label="Email"
              variant="outlined"
              onChange={setValue}
            />
          </Box>
          <Box>
            <TextField
              style={{ width: "200px", margin: "5px" }}
              name="password"
              type="password"
              label="Password"
              variant="outlined"
              onChange={setValue}
            />
          </Box>
          <Box>
            <Button
              variant="contained"
              type="submit"
              className="sub-btn"
              style={{ width: "200px", margin: "5px" }}
            >
              Register
            </Button>
          </Box>
          <Box>
            <Typography variant="subtitle2" component="span">
              Already a member?
            </Typography>

            <Link href="/register" style={{ marginLeft: 5 }}>
              Login
            </Link>
          </Box>
        </Box>
      </form>
    </>
  );
}
