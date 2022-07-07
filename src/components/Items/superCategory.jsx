/* import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Link } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, deepPurple } from "@mui/material/colors";
import API from "../../Services/api";
import TextField from "@mui/material/TextField";
import { useContext, useEffect, useState } from "react";
import itemsContext from "../../Contexts/itemsContext";
import { ItemsProvider } from "../../Contexts/itemsContext";
import { NavLink, useNavigate } from "react-router-dom";
import Loading from "../Loading";
import RenderItems from "./allItems";
import ActionAreaCard from "./allItems";
import subAndSuperContext from "../../Contexts/subAndsuperContext";
import Filters from "./filters";
import noAdds from "./../../images/myadds.webp";
import {useParams } from 'react-router-dom';

//////////////////////////////////

function SuperItems(props) {
  let navigate = useNavigate();
  let {para} = useParams();

  let {
    SetSubCat,
    SetSuperCat,
    subKey,
    superKey,
    setsubKey,
    setsuperKey,
    superLoading,
    subLoading,
    underSubData,
    underSuperData,
  } = useContext(subAndSuperContext);
  
    
  


  let renderAllItemsBtn = () => {
    navigate("/items");
  };

  console.log(subKey); 
  console.log(superKey);
  console.log(underSuperData);
  console.log(underSubData);

  
    return (
      <div>
        <Filters />
        <button
          onClick={() => {
            renderAllItemsBtn();
          }}
        >
          View All Items
        </button>
        {superLoading ? (
          <Loading />
        ) : (
          <ActionAreaCard allItemsData={underSuperData} />
        )}
      </div>
    );
  }


export default SuperItems;
 */