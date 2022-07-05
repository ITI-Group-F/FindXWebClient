import React from 'react'
import DetailsStyle from '../Details/Details.module.css'
import Button from '@mui/material/Button';
import MapLocation from "../../Map/MapLocation"
import SendIcon from '@mui/icons-material/Send';

export default function Details(props) {



 const selectedItem=props.item


  
  return selectedItem?(
    <div  className={`col-md-6 col-12 d-flex flex-column justify-content-between ${DetailsStyle.itm_details_Con}`}>

        <div className={`ms-3 p-4 d-flex justify-content-between row g-0`}>

   <div className={`col-lg-6   col-12`}>
      <h3 style={{color:'#000000'}}>Details</h3><hr /><br />
      <h4>{selectedItem.superCategory}/{selectedItem.subCategory}</h4>
        <div className={`ms-4`}>
              <p> <strong>Title: </strong>{selectedItem.title}</p>
              <p> <strong>Date: </strong>{selectedItem.date}</p>
              <div className={`${DetailsStyle.fontDetails} ${DetailsStyle.location}`}><p className={` ${DetailsStyle.location}`}> <strong>Location: </strong>{selectedItem.location}</p></div>
         </div>
  </div>


  <div className={`col-lg-5  col-12 `}>
    <div className={`text-center`}>
      <h3>Found Location</h3>
      <hr />
    </div>
     <MapLocation  lat={selectedItem.latitude} long={selectedItem.longitude}/>
  </div>
        

        
          
        </div>

        <div className={`mb-2`} style={{textAlign:'left'}}>

        {/* it will be send message or Edit post depends on the case  */}
        <Button  color='success' className='mx-2' variant="contained">Send Message &nbsp;<SendIcon/></Button>
       


        </div>
      
    </div>
  ):(<div></div>)
}


