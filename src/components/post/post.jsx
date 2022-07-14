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
  Alert,
  FormControlLabel,
  Radio,
  FormLabel,
} from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import "./post.css";
import Location from "../getlocation/Location";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Stack from "@mui/material/Stack";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";
import API from "../../Services/api";
import useClaims from "../../hooks/useClaims";


export default function Posts() {
  const [apiFormData, setApiFormData] = useState(new FormData());
  const [showhide, setshowhide] = useState("");
  const [long, setLong] = useState(null);
  const [lat, setLat] = useState(null);
  const [showdescErr, setShowdescErr] = useState(false);
  const [showtitleErr, setShowtitleErr] = useState(false);
  const [showbrandErr, setShowbrandErr] = useState(false);
  const [showLocationErr, setShowLocationErr] = useState(false);
  const [showdescriptionErr, setShowdescriptionErr] = useState(false);
  const [showlocation2Err, setShowlocation2Err] = useState(false);
  const [showValidationErr, setShowValidationErr] = useState(false);
 const [showRadioErr, setShowRadioErr] = useState(false); 
  const [descErr, setdescErr] = useState("");
  const[descriptionErr,setdescriptionErr]=useState("")
  const [titleErr, settitleErr] = useState("");
  const [brandErr, setbrandErr] = useState("");
  const [LocationErr, setLocationErr] = useState("");
  const [location2Err, setlocation2Err] = useState("");
  const [RadioErr, setRadioErr] = useState("");
  const [formData, setFormData] = useState({});
  const [showTitleErr, setShowTitleErr] = useState(false);
  const [TitleErr,setTitleErr] = useState("");
  const [isLost, setIsLost] = useState(false);
  const [date, setDate] = useState(new Date());
  const { userId } = useClaims();
  const navigate = useNavigate();
 

  //this function will be send to Location component to set longtude and latitude
  const seTCoordinates = (lt, lg) => {
    setLong(lg);
    setLat(lt);
  };

  const setValue = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    
        
    setFormData({ ...formData, [name]: value });
     
    title();
    description();
    brand();
    radio();
    location();
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
    if (title()&&description()&&location()&&brand()&&radio()) {
      setApiFormData(new FormData());

      setFormData({ ...formData, longitude: long, latitude: lat });

      console.log(formData);

      for (let k in formData) {
        apiFormData.append(`${k}`.replace(/\d$/, ""), formData[k]);
      }
      console.log("----------------");
      for (var pair of apiFormData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }
      console.log("----------------");

             

      try {
        const res = API.post(`/UserItems/${userId}`, apiFormData);
          

        res.then((res) => {
            navigate("/myads");
          })
          .catch((err) => {
            console.log(err);
          });


      } catch (error) {
        console.log(error);
      }

    } else {
       setShowValidationErr(true);
    }
  };

  // const [formImgs, setFormImgs] = useState([]);
  const setFormFiles = (e) => {
    const { files } = e.target;
    for (let i = 0; i < files.length; i++) {
      setFormData({ ...formData, [`File${i}`]: files[i] });
    }
  };

  

  const description =()=>{
    let isdescValid = false;
    if (formData.description?.length >= 200) {
      isdescValid = false;
      setShowdescErr(true);
      setdescErr("The Description is too long, the max is 300 characters");
    } else {
      isdescValid = true;
      setShowdescErr(false);
    }
    //////////////////////////////////////////////// 0length
    let isDescriptionValid = false;
    if (
      !formData.description ||
      formData.description?.length <= 1 
    
    ) {
      isDescriptionValid = false;
      setShowdescriptionErr(true);
     setdescriptionErr("Field is missing or invalid!");
    } else {
      isDescriptionValid = true;
      setShowdescriptionErr(false);
    }
    return(isdescValid&&isDescriptionValid);
  }
  const title =()=>{
        //////////////////////////////////////////// 0length
        let isTitleValid = false;
        if (
          !formData.title ||
          formData.title?.length <= 1 
        
        ) {
          isTitleValid = false;
          setShowTitleErr(true);
         setTitleErr("Field is missing or invalid!");
        } else {
          isTitleValid = true;
          setShowTitleErr(false);
        }
     ////////////////////////////////////////////////
     let istitleValid = false;
     if (formData.title?.length >= 101) {
       istitleValid = false;
       setShowtitleErr(true);
       settitleErr("The Title is too long, the max is 100 characters");
     } else {
       istitleValid = true;
       setShowtitleErr(false);
     }
     return(istitleValid && isTitleValid);
  }
  const location =()=>{
    let isLocationValid = false;
    if (formData.Location?.length >= 101) {
      isLocationValid = false;
      setShowLocationErr(true);
      setLocationErr("The Location is too long, the max is 100 characters");
    } else {
      isLocationValid = true;
      setShowLocationErr(false);
    }

    /////////////////////////////////////////////////0length
    let islocation2Valid = false;
    if (
      !formData.Location ||
      formData.Location?.length <= 1 
    
    ) {
      islocation2Valid = false;
      setShowlocation2Err(true);
     setlocation2Err("Field is missing or invalid!");
    } else {
      islocation2Valid = true;
      setShowlocation2Err(false);
    }
      return(isLocationValid&&islocation2Valid);
  }
  const radio =()=>{
    //////////////////////////////////////////// 0length
    let isRadioValid = false;
    if (
      formData.isLost==null 
    
    ) {
      isRadioValid = false;
      setShowRadioErr(true);
     setRadioErr("Field is missing or invalid!");
    } else {
      isRadioValid = true;
      setShowRadioErr(false);
    }
    return(isRadioValid);
  }
  const brand =()=>{ 
    
    let isbrandValid = false;
    if (formData.brand?.length >= 31) {
      isbrandValid = false;
      setShowbrandErr(true);
      setbrandErr("The Brand is too long, the max is 30 characters");
    } else {
      isbrandValid = true;
      setShowbrandErr(false);
    }
    return(isbrandValid);
  }



  

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
        <div className="col-lg-6 col-md-6 col-12 shadow addPostMargin" >
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
                <option selected disabled="disabled">
                  Select Category
                </option>
                <option value="Cats">Cats</option>
                <option value="Dogs">Dogs</option>
                <option value="Birds">Birds</option>
                <option value="Other">Other</option>

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
                <option selected disabled="disabled">
                  Select Category
                </option>
                <option>Personal cards and papers</option>
                <option value="Wallets">Wallets</option>
                <option value="Glasses">Glasses</option>
                <option value="Money">Money</option>
                <option value="Bags">Bags</option>
                <option value="Accessories">Accessories</option>
                <option value="Other">Other</option>
              </select>
              <FormControl />
            </div>
          )}
            {showhide === "Other" && (
                <div className="electronicsubcategory">
                <h6 htmlFor="category">Select Category</h6>
                <select
                  name="subcategory"
                  onChange={setValue}
                  required
                  className="form-select"
                  aria-label="Default select example"
                > 
                  <option selected disabled value="Other">Select Category</option>
                  <option  value="Other">Other</option>
                </select>
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
                <option selected disabled="disabled">
                  Select Category
                </option>
                <option value="Mobiles">Mobiles</option>
                <option value="Tablets">Tablets</option>
                <option value="Laptops">Laptops</option>
                <option value="Other">Other</option>
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

              {/*  */}
              {showbrandErr && (
                <Box className="err-msg">
                  <Typography color="red" variant="caption" gutterBottom>
                    {brandErr}
                  </Typography>
                </Box>
              )}
              {/*  */}
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
 
{/*  */}
{showRadioErr && (
            <Box className="err-msg">
              <Typography color="red" variant="caption" gutterBottom>
                {RadioErr}
              </Typography>
            </Box>
          )}     
  
{/*  */}

          <TextField
            name="title"
            onChange={setValue}
            required
            maxLength="20"
            fullWidth
            label="Item Title"
            id="fullWidth"
          />

          {/*  */}


          {showTitleErr && (
            <Box className="err-msg">
              <Typography color="red" variant="caption" gutterBottom>
                {TitleErr}
              </Typography>
            </Box>
          )}     

          {showtitleErr && (
            <Box className="err-msg">
              <Typography color="red" variant="caption" gutterBottom>
                {titleErr}
              </Typography>
            </Box>
          )}

          {/*  */}
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
          {/*  */}

          {showdescriptionErr && (
            <Box className="err-msg">
              <Typography color="red" variant="caption" gutterBottom>
                {TitleErr}
              </Typography>
            </Box>
          )}     
  

          {showdescErr && (
            <Box className="err-msg">
              <Typography color="red" variant="caption" gutterBottom>
                {descErr}
              </Typography>
            </Box>
          )}
          {/*  */}
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
          <Location seTCoordinates={seTCoordinates} ></Location>
          <br></br>
          <br></br>

          <label>Location</label>
          <TextField
            name="Location"
            onChange={setValue}

            onBlur={()=> setFormData({ ...formData, longitude: long, latitude: lat })}
            onMouseOver={()=>setFormData({ ...formData, longitude: long, latitude: lat })}
            required
            maxLength="20"
            fullWidth
            label="Location"
            id="fullWidth"
          />

          {/*  */}

          {showlocation2Err && (
            <Box className="err-msg">
              <Typography color="red" variant="caption" gutterBottom>
                {TitleErr}
              </Typography>
            </Box>
          )}     
  
          {showLocationErr && (
            <Box className="err-msg">
              <Typography color="red" variant="caption" gutterBottom>
                {LocationErr}
              </Typography>
            </Box>
          )}
          {/*  */}
          <br></br>
          <br></br>

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <DesktopDatePicker
                label="Date"
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

           {/*  */}
           {showValidationErr && (
            <center>
              <Box width="300px">
                <Alert severity="error">
                  Some fileds are missing or invalid.
                </Alert>
              </Box>
            </center>
          )}
      {/*  */}


          <div className="d-grid gap-2 " >
            <button
              name="submit"
              onClick={submitFormData}
              className="btn btn-success addPostMargin "
            >
              Post Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
