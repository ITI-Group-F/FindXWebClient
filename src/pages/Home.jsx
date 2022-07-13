import React from 'react';
import ActionAreaCard from '../components/Items/allItems';
import itemsContext from "../Contexts/itemsContext";
import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CameraButton from "../components/layout/NavButtons/CameraButton";  
import Button from '@mui/material/Button';

import "./Home.css";
import img from "../images/29300690(1).jpg";

function Home(props) {
  let { allItems } = useContext(itemsContext);
let navigate = useNavigate();
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  




    return (
<>
  <div className="containerHome">
      <img className='img' src={img} alt="tt"/>
  <span className='spanHome'>

<h1 className="h3">Lost Somthing?</h1>
<h3 className='h1'>It's One Click Away.</h3>
<h5 className='h5'>Now You Can Look For Your Lost Item With Just A Picture Of IT</h5>
  
  <span className='btnGroupHome'>

  <span className='spanCameraHome'>
  <p className='pCameraHome'>Check Out Some Postes By Other Users</p>
      <Button className='buttonAllItemsHome' variant="contained" color="success" onClick={()=>{navigate("/items")}}>
        View Posts
        </Button>
  </span>
      <span className='spanLoginHome'>
      <p className='pLoginHome'>Or Click Here To Login</p>
      <Button className='buttonLoginHome' variant="contained" color="success" onClick={()=>{navigate("/auth/login")}}>
        Login
        </Button>
      </span>
  </span>
     
  </span>


      </div>
    </>
    );
}

export default Home;