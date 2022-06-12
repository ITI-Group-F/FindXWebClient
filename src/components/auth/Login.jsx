import { Box, Button, TextField, Typography, Link } from "@mui/material";
import React, { useState } from "react";
import "./auth.css";

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
    <>
      <Typography variant="h3" component="h3" gutterBottom>
        Login
      </Typography>
      <form onSubmit={submitLoginData}>
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
            <Link href="#" style={{ marginLeft: 70 }}>
              Forgot password?
            </Link>
          </Box>
          <Box>
            <Button
              variant="contained"
              type="submit"
              className="sub-btn"
              style={{ width: "200px", margin: "5px" }}
            >
              Login
            </Button>
          </Box>
          <Box>
            <Typography variant="subtitle2" component="span">
              Not a member?
            </Typography>

            <Link href="/login" style={{ marginLeft: 5 }}>
              Register
            </Link>
          </Box>
        </Box>
      </form>
    </>
  );
}
