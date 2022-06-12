import React, { useState } from "react";
import { Box, Button, FormControl, TextField, Typography,Input,InputAdornment,InputLabel,Avatar } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Posts(){


    const [showhide,setshowhide]=useState('');

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

                    <select  onChange={(e)=>(handleshow(e))} class="form-select" aria-label="Default select example">
                    <option selected value="1">Select Category</option>
                    <option value="2">Animals</option>
                    <option value="3">Belongings</option>
                    <option value="4">Electronics</option>
                    <option value="5">other</option>
                    </select>
               


                {showhide==='2'&&                          //show based on category selection
                  (
                    <div className="animalsubcategory">

                    <h6 htmlFor="category">Select Category</h6>
                    <select   class="form-select" aria-label="Default select example">
                          <option>Select Category</option>
                              <option>cats</option>
                              <option>Dogs</option>
                              <option>Birds</option>
                              <option>other</option>
                    </select>
                                <FormControl/>

                                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel maxLength="3" htmlFor="standard-adornment-amount">Age</InputLabel>
          <Input
             type="number"
            id="standard-adornment-amount"
            
            startAdornment={<InputAdornment position="start">Age</InputAdornment>}
          />
        </FormControl>

                  
                    <p className="text-danger"></p>
                  
                    </div>
                  )
                  }    


                       {showhide==='3'&&
                  (
                    <div className="Belongsubcategory">

                    <h6 htmlFor="category">Select Category</h6>
                    <select   class="form-select" aria-label="Default select example">
                          <option>Select Category</option>
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
            <select   class="form-select" aria-label="Default select example"
                  >
                    <option>Mobiles</option>
                    <option>Tablets</option>
                    <option>Laptops</option>
                    <option>other</option>
                     


                  </select> 

                  

                  <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel maxLength="20" htmlFor="standard-adornment-amount">Brand Name</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start">Brand</InputAdornment>}
          />
        </FormControl>

                  
                    <p className="text-danger"></p>
                  
                    </div>
                  )
                  } 


          <TextField maxLength="20" fullWidth label="Item Title" id="fullWidth" />

         
          <div class="mb-3">
      <label for="exampleFormControlTextarea1"  class="form-label">Item Description</label> 
      <textarea maxLength="600" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>     
        </div> 

            
            {/*multiple image upload  */}
            <label for="formFileMultiple" class="form-label">Item Image</label>
            <input class="form-control" type="file" id="formFileMultiple" multiple />
              


              {/* Details Section */}
            <hr />
          <h3>Review Your Details</h3>  
          
          <label maxLength="20" htmlFor="location">Your Name</label>
          <TextField fullWidth label="your name" id="fullWidth" />

          <label maxLength="13" htmlFor="location">Your Phone Number</label>
          <TextField fullWidth label="your phone number" id="fullWidth" />

          <label   maxLength="30" htmlFor="location">Your Address</label>
          <TextField fullWidth label="your Address" id="fullWidth" />

            
          <hr/>
         
          <div class="d-grid gap-2">
          <button class="btn btn-success" type="button">Post Now</button>
    </div>

                   </div>
                   </div>
                   </div>            
     )
}