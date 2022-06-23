import React from 'react'
import DetailsStyle from '../Details/Details.module.css'
import Button from '@mui/material/Button';
import MapLocation from "../../Map/MapLocation"
import SendIcon from '@mui/icons-material/Send';
export default function Details() {
  return (
    <div style={{backgroundColor:'#314D63'}} className={`col-md-7 col-12 d-flex flex-column justify-content-between ${DetailsStyle.itm_details_Con}`}>

        <div className={`ms-3 p-4 d-flex justify-content-between row g-0`}>

   <div className={`col-md-6   col-12`}>
      <h5>Details</h5><hr /><br />
      <h6>Category/SubCategory</h6>
        <div className={`ms-4`}>
              <p> <strong>Title: </strong>Lorem.</p>
              <p> <strong>Description: </strong>Lorem.</p>
              <p> <strong>Date: </strong>Lorem.</p>
              <p className={`${DetailsStyle.fontDetails}`}> <strong>Location: </strong>Egpt-Alexandria-ibrhimia-94 kanop street.</p>
         </div>
  </div>


  <div className={`col-md-5  col-12 `}>
    
     <MapLocation/>
  </div>
        

        
          
        </div>

        <div className={`mb-2`} style={{textAlign:'left'}}>

        {/* it will be send message or Edit post depends on the case  */}
        <Button color='success' className='mx-2' variant="contained">Send Message &nbsp;<SendIcon/></Button>
       


        </div>
      
    </div>
  )
}


