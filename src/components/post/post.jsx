import React, { useState } from "react";
import { Box, Button, FormControl, TextField, Typography,Input,InputAdornment,InputLabel,Avatar,Alert,RadioGroup,FormControlLabel,Radio,FormLabel } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';
import Location  from '../getlocation/Location';
export default function Posts(){


    const [showhide,setshowhide]=useState('');


    const [showdescErr, setShowdescErr] = useState(false);
    const [descErr, setdescErr] = useState("");
    const [formData, setFormData] = useState({});
    const [showcatErr, setShowcatErr] = useState(false);
    const [catErr, setcatErr] = useState("");


    const setValue = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      validatedesc();
    };


    const validatedesc = () => {
      let isdescValid = false;
      if (formData.description.length>=200 && formData.description.length <=300) {
        isdescValid = false;
        setShowdescErr(true);
        setdescErr("description is too long max is 300");}

        else {
          isdescValid = true;
          setShowdescErr(false);
        }
             
        
        let iscategoriesValid = false;
          if(!formData.name||formData.name.length<=1||!formData.phone||formData.phone.length<=1||!formData.address||formData.address.length<=1 )
         {
            iscategoriesValid=false;
            setShowcatErr(true);
            setcatErr("Select Category !");
         }  
        else
        {
            iscategoriesValid=true;
            setShowcatErr(false);
        }
        return isdescValid ,iscategoriesValid  ;     
      }
  

    const handleshow=(event)=>                //function to handle show fields based on category selection
    {
      const getuser=event.target.value;
      setshowhide(getuser);
    }
     return(
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

                    <select  name="category" id="category" required="required"   onChange={(e)=>(handleshow(e))} class="form-select" aria-label="Default select example">
                    <option selected value="1" disabled="disabled" >Select Category</option> 
                    <option value="2">Animals</option>
                    <option value="3">Belongings</option>
                    <option value="4">Electronics</option>
                    <option value="5">other</option>
                    </select>

          







                {showhide==='2'&&                          //show based on category selection
                  (
                    <div className="animalsubcategory">

                    <h6 htmlFor="category">Select Category</h6>
                    <select   required="required" class="form-select" aria-label="Default select example">
                          <option  disabled="disabled">Select Category</option>
                              <option>cats</option>
                              <option>Dogs</option>
                              <option>Birds</option>
                              <option>other</option>
                    </select>
                                <FormControl/>

                                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel   htmlFor="standard-adornment-amount">Age</InputLabel>
          <Input
              maxLength="3"
             type="number"
            id="standard-adornment-amount"
            required="required"
            startAdornment={<InputAdornment position="start">Age</InputAdornment>}
          />
        </FormControl>

                  
                  
                    </div>
                  )
                  }    


                       {showhide==='3'&&
                  (
                    <div className="Belongsubcategory">

                    <h6 htmlFor="category">Select Category</h6>
                    <select  required="required"  class="form-select" aria-label="Default select example">
                      <option disabled="disabled">Select Category</option>
                      <option>Personal cards and papers</option>
                          <option>wallets</option>
                          <option>glasses</option>
                         <option>Money</option>
                         <option>bags</option>
                         <option>accessories</option>
                         <option>other</option>
                        </select>
                                <FormControl/>
                  
                    </div>
                  
                  )
                  }  




                         {showhide==='4'&&
                  (
                    <div className="electronicsubcategory">
                      
                   <h6 htmlFor="category">Select Category</h6>
            <select   required="required" class="form-select" aria-label="Default select example"
                  >
                    <option disabled="disabled">Select Category</option>
                    <option>Mobiles</option>
                    <option>Tablets</option>
                    <option>Laptops</option>
                    <option>other</option>
                     


                  </select> 

                  

                  <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel  htmlFor="standard-adornment-amount">Brand Name</InputLabel>
          <Input
              required="required"
              maxLength="20"
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start">Brand</InputAdornment>}
          />
        </FormControl>

                  
                  
                    </div>
                  )
                  } 


                                {/* radio button */}
<FormControl>
  <FormLabel id="demo-controlled-radio-buttons-group">State</FormLabel>
  <RadioGroup
    aria-labelledby="demo-controlled-radio-buttons-group"
    name="controlled-radio-buttons-group"
    class="required"
    required="required"
    sx={{
      display: "inline",
      
    }}
  >
    <FormControlLabel value="Lost" control={<Radio/>} label="Lost" />
    <FormControlLabel value="Found" control={<Radio/>} label="Found" />
  </RadioGroup>
</FormControl>

                    
          <TextField  required="required" maxLength="20" fullWidth label="Item Title" id="fullWidth" />

         
          <div class="mb-3">
      <label for="exampleFormControlTextarea1"  class="form-label">Item Description</label> 
      <textarea name="description"  required="required" onChange={setValue} maxLength="250" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>     
        </div> 

        {showdescErr && (
            <Box className="err-msg">
              <Typography color="red" variant="caption" gutterBottom>
                {descErr}
              </Typography>
            </Box>
          )}
            
            {/*multiple image upload  */}
            <label for="formFileMultiple" class="form-label">Item Image</label>
            <input  required="required" class="form-control" type="file" id="formFileMultiple" multiple />            
              {/* Details Section */}
            <hr/>
          <h3>Item location (Click And Drag The Marker Or Search By Location Name)</h3>
          <Location></Location>
          <br></br>
          <br></br>
          <h3>Review Your Details</h3>          
          <label  htmlFor="location">Your Name</label>
          <TextField name="name" onChange={setValue} fullWidth label="your name" id="fullWidth"  maxLength="20"  required="required"/>

          <label  htmlFor="location">Your Phone Number</label>
          <TextField name="phone" onChange={setValue} fullWidth label="your phone number" id="fullWidth" type="number" maxLength="13"   required="required" />

          <label    htmlFor="location">Your Address</label>
          <TextField name="address" onChange={setValue} fullWidth label="your Address" id="fullWidth"  maxLength="30"   required="required"/>

          {showcatErr && (
            <center>
              <Box width="300px">
                <Alert severity="error">
                  Some fileds are missing or invalid.
                </Alert>
              </Box>
            </center>
          )}

          <hr/>
         
          <div class="d-grid gap-2">
          <button  class="btn btn-success" type="button">Post Now</button>
    </div>

                   </div>
                   </div>
                   </div>            
     )
}