import React, { useState } from "react";
import {
  Box,
  FormControl,
  TextField,
  Typography,
  Input,
  InputAdornment,
  InputLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
} from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import Location from "../getlocation/Location";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Stack from "@mui/material/Stack";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import API from "../../Services/api";
import useClaims from "../../hooks/useClaims";

export default function Posts() {
  const [apiFormData, setApiFormData] = useState(new FormData());
  const [showhide, setshowhide] = useState("");
  const [longitude, setLongitude] = useState(31.235712);
  const [latitude, setLatitude] = useState(30.04442);
  const [showdescErr, setShowdescErr] = useState(false);
  const [descErr, setdescErr] = useState("");
  const [formData, setFormData] = useState({});
  const [showcatErr, setShowcatErr] = useState(false);
  const [catErr, setcatErr] = useState("");
  const [isLost, setIsLost] = useState(false);
  const [date, setDate] = useState(new Date());
  const { userId } = useClaims();

  const setValue = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
    validatedesc();
  };

  const getFormattedDate = (date) => {
    var year = date.getFullYear();

    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : "0" + month;

    var day = date.getDate().toString();
    day = day.length > 1 ? day : "0" + day;

    return day + "/" + month + "/" + year;
  };

  const submitFormData = () => {
    setApiFormData(new FormData());
    for (let k in formData) {
      apiFormData.append(`${k}`.replace(/\d$/, ""), formData[k]);
    }
    console.log("----------------");
    for (var pair of apiFormData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
    console.log("----------------");

    try {
      let id = "1c47a376-1267-4892-87f7-e0efbc66fa9f";
      let dummy = "cf28af55-85be-4295-b437-c81d787ba15c";
      const res = API.post(`/UserItems/${dummy}`, apiFormData);
    } catch (error) {
      console.log(error);
    }
  };

  // const [formImgs, setFormImgs] = useState([]);
  const setFormFiles = (e) => {
    const { files } = e.target;
    for (let i = 0; i < files.length; i++) {
      setFormData({ ...formData, [`File${i}`]: files[i] });
    }
  };

  const validatedesc = () => {
    let isdescValid = false;
    if (
      formData.description?.length >= 200 &&
      formData.description?.length <= 300
    ) {
      isdescValid = false;
      setShowdescErr(true);
      setdescErr("description is too long max is 300");
    } else {
      isdescValid = true;
      setShowdescErr(false);
    }

    let iscategoriesValid = false;
    if (
      !formData.name ||
      formData.name?.length <= 1 ||
      !formData.phone ||
      formData.phone?.length <= 1 ||
      !formData.address ||
      formData.address?.length <= 1
    ) {
      iscategoriesValid = false;
      setShowcatErr(true);
      setcatErr("Select Category !");
    } else {
      iscategoriesValid = true;
      setShowcatErr(false);
    }
    return isdescValid, iscategoriesValid;
  };

  const handleshow = (
    event //function to handle show fields based on category selection
  ) => {
    const getuser = event.target.value;
    setValue(event);
    setshowhide(getuser);
  };
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        {/* {spinner ? (
            <Spinner className="post__spinner" type="grow" color="info" />
          ) : ( */}
        <div className="col-lg-6 col-md-6 col-12 shadow">
          <h3 className="text-center text-uppercase pt-3  pb-3 text-underline shadow">
            Post Your ad
          </h3>
          <hr />
          <h4 htmlFor="category">Select Category</h4>

          <select
            name="superCategory"
            id="category"
            required
            onChange={(e) => handleshow(e)}
            className="form-select"
            aria-label="Default select example"
          >
            <option selected="selected" value="1" disabled="disabled">
              Select Category
            </option>
            <option value="Animals">Animals</option>
            <option value="Belongings">Belongings</option>
            <option value="Electronics">Electronics</option>
            <option value="Other">Other</option>
          </select>

          {showhide === "Animals" && ( //show based on category selection
            <div className="animalsubcategory">
              <h6 htmlFor="category">Select Category</h6>
              <select
                name="subcategory"
                onChange={setValue}
                required
                className="form-select"
                aria-label="Default select example"
              >
                <option disabled="disabled">Select Category</option>
                <option value="Cats">Cats</option>
                <option value="Dogs">Dogs</option>
                <option value="Birds">Birds</option>
                <option value="other">other</option>
              </select>
              <FormControl />

              <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="standard-adornment-amount">Age</InputLabel>
                <Input
                  maxLength="3"
                  type="number"
                  name="age"
                  onChange={setValue}
                  id="standard-adornment-amount"
                  required
                  startAdornment={
                    <InputAdornment position="start">Age</InputAdornment>
                  }
                />
              </FormControl>
            </div>
          )}

          {showhide === "Belongings" && (
            <div className="subcategory">
              <h6 htmlFor="category">Select Category</h6>
              <select
                name="subcategory"
                required
                onChange={setValue}
                className="form-select"
                aria-label="Default select example"
              >
                <option disabled="disabled">Select Category</option>
                <option>Personal cards and papers</option>
                <option value="Wallets">Wallets</option>
                <option value="Glasses">Glasses</option>
                <option value="Money">Money</option>
                <option value="Bags">Bags</option>
                <option value="Accessories">Accessories</option>
                <option value="other">other</option>
              </select>
              <FormControl />
            </div>
          )}

          {showhide === "Electronics" && (
            <div className="electronicsubcategory">
              <h6 htmlFor="category">Select Category</h6>
              <select
                name="subcategory"
                onChange={setValue}
                required
                className="form-select"
                aria-label="Default select example"
              >
                <option disabled="disabled">Select Category</option>
                <option value="Mobiles">Mobiles</option>
                <option value="Tablets">Tablets</option>
                <option value="Laptops">Laptops</option>
                <option value="other">other</option>
              </select>

              <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="standard-adornment-amount">
                  Brand Name
                </InputLabel>
                <Input
                  name="brand"
                  required
                  onChange={setValue}
                  maxLength="20"
                  id="standard-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">Brand</InputAdornment>
                  }
                />
              </FormControl>
            </div>
          )}

          {/* radio button */}
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">
              Status
            </FormLabel>
            <RadioGroup
              sx={{
                display: "inline-block",
              }}
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={setValue}
            >
              <FormControlLabel
                name="isLost"
                value="true"
                control={<Radio />}
                label="Lost"
              />
              <FormControlLabel
                name="isLost"
                value="false"
                control={<Radio />}
                label="Found"
              />
            </RadioGroup>
          </FormControl>

          <TextField
            name="title"
            onChange={setValue}
            required
            maxLength="20"
            fullWidth
            label="Item Title"
            id="fullWidth"
          />
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Item Description
            </label>
            <textarea
              name="description"
              required
              onChange={setValue}
              maxLength="250"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>

          {showdescErr && (
            <Box className="err-msg">
              <Typography color="red" variant="caption" gutterBottom>
                {descErr}
              </Typography>
            </Box>
          )}

          {/*multiple image upload  */}
          <label htmlFor="formFileMultiple" className="form-label">
            Item Image
          </label>
          <input
            name="image"
            onChange={setFormFiles}
            required
            className="form-control"
            type="File"
            accept="image/png , image/jpeg"
            id="formFileMultiple"
            multiple
          />
          {/* Details Section */}
          <h3>
            Item location (Click And Drag The Marker Or Search By Location Name)
          </h3>
          <Location></Location>
          <br></br>
          <br></br>

          <label>Location</label>
          <TextField
            name="Location"
            onChange={setValue}
            required
            maxLength="20"
            fullWidth
            label="Location"
            id="fullWidth"
          />
          <br></br>
          <br></br>

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <DesktopDatePicker
                label="Date desktop"
                inputFormat="dd/MM/yyyy"
                value={date}
                onChange={(newDate) => {
                  newDate = getFormattedDate(newDate);
                  setDate(newDate);
                  setFormData({ ...formData, date: newDate });
                  console.log(formData);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
          <hr />

          {/* <h3>Review Your Details</h3>
          <label htmlFor="location">Your Name</label>
          <TextField
            name="name"
            onChange={setValue}
            fullWidth
            label="your name"
            id="fullWidth"
            maxLength="20"
            required
          />

          <label htmlFor="location">Your Phone Number</label>
          <TextField
            name="phone"
            onChange={setValue}
            fullWidth
            label="your phone number"
            id="fullWidth"
            type="number"
            maxLength="13"
            required
          />

          <label htmlFor="location">Your Address</label>
          <TextField
            name="address"
            onChange={setValue}
            fullWidth
            label="your Address"
            id="fullWidth"
            maxLength="30"
            required
          /> */}

          {/* {showcatErr && (
            <center>
              <Box width="300px">
                <Alert severity="error">
                  Some fileds are missing or invalid.
                </Alert>
              </Box>
            </center>
          )} */}

          <div className="d-grid gap-2">
            <button
              name="submit"
              onClick={submitFormData}
              className="btn btn-success"
            >
              Post Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
