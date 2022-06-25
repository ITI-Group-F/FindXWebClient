import React from 'react'
import DetailsStyle from '../Details/Details.module.css'
import Button from '@mui/material/Button';
import MapLocation from "../../Map/MapLocation"
import SendIcon from '@mui/icons-material/Send';
// import itemsContext from "../../../Contexts/itemsContext";
export default function Details() {



  
  return (
    <div  className={`col-md-6 col-12 d-flex flex-column justify-content-between ${DetailsStyle.itm_details_Con}`}>

        <div className={`ms-3 p-4 d-flex justify-content-between row g-0`}>

   <div className={`col-lg-6   col-12`}>
      <h3 style={{color:'#000000'}}>Details</h3><hr /><br />
      <h6>Category/SubCategory</h6>
        <div className={`ms-4`}>
              <p> <strong>Title: </strong>Lorem.</p>
              <p> <strong>Description: </strong>Lorem.</p>
              <p> <strong>Date: </strong>Lorem.</p>
              <p className={`${DetailsStyle.fontDetails}`}> <strong>Location: </strong>Egpt-Alexandria-ibrhimia-94 kanop street.</p>
         </div>
  </div>


  <div className={`col-lg-5  col-12 `}>
    <div className={`text-center`}>
      <h3>Found Location</h3>
      <hr />
    </div>
     <MapLocation/>
  </div>
        

        
          
        </div>

        <div className={`mb-2`} style={{textAlign:'left'}}>

        {/* it will be send message or Edit post depends on the case  */}
        <Button  color='success' className='mx-2' variant="contained">Send Message &nbsp;<SendIcon/></Button>
       


        </div>
      
    </div>
  )
}


