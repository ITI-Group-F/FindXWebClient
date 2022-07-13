import { Box, Button, TextField, Typography, Link, Alert } from "@mui/material";
import React, { useState,useContext } from "react";
import API from "../../Services/api";
import "./auth.css";
import { useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";
import { authenticationContext } from "../../Contexts/AuthContext";
import ChatContext from "../../Contexts/ChatContext";

export default function Login({ setToken ,loginfromNavbar}) {
  /**
   * variables for the form state and validation state of the form
   * fields and the error message for the form fields if they are
   * invalid and the error message for the form if it is invalid
   */
  const [formData, setFormData] = useState({});
  const [showMailErr, setShowMailErr] = useState(false);
  const [showPassErr, setShowPassErr] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [mailErr, setMailErr] = useState("");
  const [passErr, setPassErr] = useState("");

  const [showResErrMsg, setShowResErrMsg] = useState(false);
  const [resErrMsg, setResErrMsg] = useState("");
  const navigate = useNavigate();
  const [isloggedIn,login] = useContext(authenticationContext);


  /*
   * function to handle the change of the form fields
   */
  const setValue = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateLogin();
  };

  /**
   *
   * @returns {boolean} true if the form is valid, false otherwise
   */
  const validateLogin = () => {
    let isMailValid = false;
    if (!formData.email || formData.email.length < 1) {
      isMailValid = false;
      setShowMailErr(true);
      setMailErr("Email is required");
    } else if (
      formData.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)
    ) {
      isMailValid = false;
      setShowMailErr(true);
      setMailErr("Invalid email address");
    } else {
      isMailValid = true;
      setShowMailErr(false);
    }

    let isPassValid = false;
    if (!formData.password || formData.password.length < 1) {
      isPassValid = false;
      setShowPassErr(true);
      setPassErr("Password is required");
    } else {
      isPassValid = true;
      setShowPassErr(false);
    }
    return isMailValid && isPassValid;
  };

  /*
   * function to handle the submit of the form
   */
  const submitLoginData = async (event) => {
    event.preventDefault();
    if (!validateLogin()) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
      const token = await loginUser(formData);
      if (token) {
        setToken(token);
        navigate("/items", { replace: true });
        login(); 

     
        if(loginfromNavbar){
          loginfromNavbar();
        }
      }
    }
  };

  const loginUser = async (data) => {
    try {
      const response = await API.post("/authentication/login", data);
      setShowResErrMsg(false);      
      return response.data.token;
    } catch (error) {
      setShowResErrMsg(true);
      setResErrMsg(error.response.data);
      return null;
    }
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
          {showAlert && (
            <center>
              <Box width="300px">
                <Alert severity="error">
                  Some fileds are missing or invalid.
                </Alert>
              </Box>
            </center>
          )}
          {showResErrMsg && (
            <center>
              <Box width="300px">
                <Alert severity="error">{resErrMsg}</Alert>
              </Box>
            </center>
          )}
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
          {showMailErr && (
            <Box className="err-msg">
              <Typography color="red" variant="caption" gutterBottom>
                {mailErr}
              </Typography>
            </Box>
          )}
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
          {showPassErr && (
            <Box className="err-msg">
              <Typography color="red" variant="caption" gutterBottom>
                {passErr}
              </Typography>
            </Box>
          )}
          {/* <Box>
            <Link href="#" style={{ marginLeft: 70 }}>
              Forgot password?
            </Link>
          </Box> */}
          <Box>
            <Button
              variant="contained"
              type="submit"
              className="sub-btn"
              color="success"
              style={{ width: "200px", margin: "5px" }}
            >
              Login
            </Button>
          </Box>
          <Box style={{ marginBottom: "100px" }}>
            <Typography variant="subtitle2" component="span">
              Not a member?
            </Typography>
            <Link href="/auth/register" style={{ marginLeft: 5 }}>
              Register
            </Link>
          </Box>
        </Box>
      </form>
    </>
  );
}
