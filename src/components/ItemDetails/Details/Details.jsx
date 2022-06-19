import React from 'react'
import DetailsStyle from '../Details/Details.module.css'
import Button from '@mui/material/Button';

import "../itemDetails.css"
export default function Details() {
  return (
    <div style={{backgroundColor:'#314D63'}} className={`col-md-6 col-12  ${DetailsStyle.itm_details_Con}`}>

        <div className={`ms-3 p-4`}>
        <h5>Details</h5><hr /><br />
        <h6>Category/SubCategory</h6>
        <div className={`ms-4`}>
         <p> <strong>Title: </strong>Lorem.</p>
         <p> <strong>Description: </strong>Lorem.</p>
         <p> <strong>Date: </strong>Lorem.</p>
         <p> <strong>Location: </strong>Lorem.</p>
        </div>

        <div style={{textAlign:'right'}}>

        <Button className='mx-2' variant="contained">Contained</Button>
        <Button className='mx-2' variant="contained">Contained</Button>


        </div>
          
        </div>
      
    </div>
  )
}


