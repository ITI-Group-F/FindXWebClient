import React from 'react'
import DetailsStyle from '../Details/Details.module.css'
import Button from '@mui/material/Button';
import MapLocation from "../../Map/MapLocation"
import SendIcon from '@mui/icons-material/Send';
import { useContext } from 'react';
import ChatContext from '../../../Contexts/ChatContext';
import Alert from 'react-bootstrap/Alert';

import useClaims from "../../../hooks/useClaims"
import axios from '../../../Services/api';
import AlertDialogSlide from '../ConfirmationDialog/Dialog';
 function Details(props) {

const {handleNewChat} = useContext(ChatContext);  
 const selectedItem=props.item;
const {userId}=useClaims();

//Date...
const  inputDate=selectedItem?.date;

const date=new Date(inputDate).toLocaleDateString();
const time=new Date(inputDate).toLocaleTimeString();

  
  return selectedItem?(
    <div  className={`col-md-6 col-12 d-flex flex-column justify-content-between ${DetailsStyle.itm_details_Con}`}>

        <div className={`ms-3 p-4 d-flex justify-content-between row g-0`}>

   <div className={`col-lg-6   col-12 ${DetailsStyle.detailsContainer}`}>
      <h3 style={{color:'#000000'}}>Details</h3><hr /><br />
      <h4>{selectedItem.superCategory}/{selectedItem.subCategory}</h4>
        <div className={`ms-4 t ${DetailsStyle.subContainer}`}>
              <p> <strong>Title: </strong>{selectedItem.title}</p>
              <p> <strong>Date: </strong>{date}</p>
              <p> <strong>Publish Time: </strong>{time}</p>
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
        {

          (selectedItem.isClosed===true)?<Alert className='mb-0' variant='warning'> This Issue Has Been Closed</Alert>:( <div className={`mb-2`} style={{textAlign:'left'}}>

          {/* it will be send message or Edit post depends on the case  */}
  
  
  
  {
    (userId!==selectedItem.userId)?( <Button onClick={()=>{handleNewChat(selectedItem.id)}}  color='primary' className='mx-2' variant="contained">Send Message &nbsp;<SendIcon/></Button>):(<AlertDialogSlide id={selectedItem.id}/>)
  }
         
         
  
  
          </div>)
        }

       
      
    </div>
  ):(<div></div>)
}

export default React.memo(Details);
