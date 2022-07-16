import React, { useState } from "react";
import { Box, Button, TextField, Typography, Link, Alert } from "@mui/material";
import API from "../../Services/api";
import "./auth.css";
import { useNavigate } from "react-router-dom";

export default function Register({ setToken }) {
  /**
   * variables for the form state and validation state of the form
   * fields and the error message for the form fields if they are
   * invalid and the error message for the form if it is invalid
   */
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [showFNameErr, setShowFNameErr] = useState(false);
  const [showLNameErr, setShowLNameErr] = useState(false);
  const [showMailErr, setShowMailErr] = useState(false);
  const [showPassErr, setShowPassErr] = useState(false);
  const [showPhoneErr, setShowPhoneErr] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showUserNameErr, setShowUserNameErr] = useState(false);
  const [userNameErr, setUserNameErr] = useState("");
  const [fNameErr, setFNameErr] = useState("");
  const [lNameErr, setLNameErr] = useState("");
  const [mailErr, setMailErr] = useState("");
  const [passErr, setPassErr] = useState("");
  const [phoneErr, setPhoneErr] = useState("");

  const [showResErrMsg, setShowResErrMsg] = useState(false);
  const [resErrMsg, setResErrMsg] = useState("");

  const setValue = (e) => {
    const { name, value } = e.target;
    const newState = { ...formData, [name]: value };
    setFormData(newState);
    switch (name) {
      case "firstName":
        validateFirstName(newState);
        break;
      case "lastName":
        validateLastName(newState);
        break;
      case "email":
        validateEmail(newState);
        break;
      case "password":
        validatePassword(newState);
        break;
      case "userName":
        validateUserName(newState);
        break;
      default:
        break;
    }
  };

  const submitRegisterData = async (event) => {
    event.preventDefault();
    const state = { ...formData };
    if (!validateRgister(state)) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
      const token = await registerUser(formData);
      if (token) {
        setToken(token);
        navigate("/", { replace: true });
      }
    }
  };

  /**
   *
   * @returns {boolean} true if the form is valid, false otherwise
   */
  const validateRgister = (formData) => {
    const isFirstNameValid = validateFirstName(formData);
    const isLastNameValid = validateLastName(formData);
    const isMailValid = validateEmail(formData);
    const isPassValid = validatePassword(formData);
    const isUserNameValid = validateUserName(formData);
    const isPhoneValid = validatePhone(formData);
    return (
      isFirstNameValid &&
      isLastNameValid &&
      isMailValid &&
      isPassValid &&
      isUserNameValid &&
      isPhoneValid
    );
  };

  const validateFirstName = (formData) => {
    let isFNameValid = false;
    if (!formData.firstName || formData.firstName.length < 1) {
      setShowFNameErr(true);
      setFNameErr("First name is required");
    } else if (formData.firstName && !/^[a-zA-Z]+$/.test(formData.firstName)) {
      setShowFNameErr(true);
      setFNameErr("Invalid first name");
    } else {
      isFNameValid = true;
      setShowFNameErr(false);
    }
    return isFNameValid;
  };

  const validateLastName = (formData) => {
    let isLNameValid = false;
    if (!formData.lastName || formData.lastName.length < 1) {
      setShowLNameErr(true);
      setLNameErr("Last name is required");
    } else if (formData.lastName && !/^[a-zA-Z]+$/.test(formData.lastName)) {
      setShowLNameErr(true);
      setLNameErr("Invalid last name");
    } else {
      isLNameValid = true;
      setShowLNameErr(false);
    }
    return isLNameValid;
  };

  const validateUserName = (formData) => {
    let isUserNameValid = false;
    if (!formData.userName || formData.userName.length < 1) {
      setShowUserNameErr(true);
      setUserNameErr("User name is required");
    } else {
      isUserNameValid = true;
      setShowUserNameErr(false);
    }
    return isUserNameValid;
  };

  const validateEmail = (formData) => {
    let isMailValid = false;
    if (!formData.email || formData.email.length < 1) {
      setShowMailErr(true);
      setMailErr("Email is required");
    } else if (
      formData.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)
    ) {
      setShowMailErr(true);
      setMailErr("Invalid email address");
    } else {
      isMailValid = true;
      setShowMailErr(false);
    }
    return isMailValid;
  };

  const validatePassword = (formData) => {
    let isPassValid = false;
    if (!formData.password || formData.password.length < 1) {
      setShowPassErr(true);
      setPassErr("Password is required");
    } else {
      isPassValid = true;
      setShowPassErr(false);
    }
    return isPassValid;
  };

  const validatePhone = (formData) => {
    let isPhoneValid = false;
    if (!formData.phone || formData.phone.length < 1) {
      setShowPhoneErr(true);
      setPhoneErr("Phone number is required");
    } else {
      isPhoneValid = true;
      setShowPhoneErr(false);
    }
    return isPhoneValid;
  };

  const registerUser = async (data) => {
    try {
      const response = await API.post("/authentication/register-user", data);
      setShowResErrMsg(true);
      return response.data.token;
    } catch (err) {
      setShowResErrMsg(true);
      setResErrMsg(err.response.data);
      return null;
    }
  };

  return (
    <div style={{ margin: "auto" }}>
      <Typography
        variant="h3"
        component="div"
        gutterBottom
        sx={{ marginLeft: "30px" }}
      >
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
              <Box width="400px">
                <Alert severity="error">{resErrMsg}</Alert>
              </Box>
            </center>
          )}
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
          {showFNameErr && (
            <Box className="err-msg">
              <Typography color="red" variant="caption" gutterBottom>
                {fNameErr}
              </Typography>
            </Box>
          )}
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
          {showLNameErr && (
            <Box className="err-msg">
              <Typography color="red" variant="caption" gutterBottom>
                {lNameErr}
              </Typography>
            </Box>
          )}

          <Box>
            <TextField
              style={{ width: "200px", margin: "5px" }}
              name="userName"
              type="text"
              label="User Name"
              variant="outlined"
              onChange={setValue}
            />
          </Box>
          {showUserNameErr && (
            <Box className="err-msg">
              <Typography color="red" variant="caption" gutterBottom>
                {userNameErr}
              </Typography>
            </Box>
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
          {showPhoneErr && (
            <Box className="err-msg">
              <Typography
                color="red"
                variant="caption"
                gutterBottom
                style={{ marginLeft: 20 }}
              >
                {phoneErr}
              </Typography>
            </Box>
          )}
          <Box>
            <Button
              variant="contained"
              type="submit"
              className="sub-btn"
              color="success"
              style={{ width: "200px", margin: "5px" }}
            >
              Register
            </Button>
          </Box>
          <Box>
            <Typography
              variant="subtitle2"
              component="span"
              sx={{ marginLeft: "25px" }}
            >
              Already a member?
            </Typography>

            <Link href="/auth/login" style={{ marginLeft: 5 }}>
              Login
            </Link>
          </Box>
        </Box>
      </form>
    </div>
  );
}
