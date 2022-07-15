import "../Items/StyleAllItems.css"
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Link } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepPurple } from "@mui/material/colors";
import { NavLink,useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { useState } from "react";
import { useEffect } from "react";

///////////////////////////////////////////////////

export default function ActionAreaCard(props) {
let navigate= useNavigate();
  
console.log(props);


  return (
    <div className="containerAllItems">
      {props.allItemsData.map((res) => {

let description = res.description.substring(0, 80)
        if (res.description.length > 80) {
          description.concat("...");
        }
      
        
        let title =
          res.title.length > 18
            ? res.title.substring(0, 18).concat("...")
            : res.title;
            const itemCondition = ()=>{
              if(res.isLost){
                return "Lost"
              }else{
                return "Found"
              }
            }
            const itemConditionColor = ()=>{
              if(res.isLost){
                return {color: "red"}
              }else{
                return {color: "green"}
              }
            }
            const closedCase=()=>{
              if(res.isClosed){
                return "Case Closed"
              }else{
                return "Case Open"
              }
            }
            const closedCaseColor = ()=>{
              if(res.isClosed){
                return {color: "green"}
              }else{
                return {color: "red"}
              
              }
            }

        return (
          <div key={res.id} >
          <div className="card">
            <div className="card-header">
              <img src={`data:image/jpeg;base64,${res.images[0]}`} alt=" " />
            </div>
            <div className="card-body">
              <span className="tag tag-teal">{res.superCategory}</span>
              <span className="tag tag-black" style={closedCaseColor()}>{closedCase()}</span>
              <h4>
                {title}
              </h4>
              <p>
              {description}
              </p>
              <div className="container_tags">
              <Button sx={{borderRadius:"50px", display:"inline-flex"}} onClick={()=>{navigate(`/details/${res.id}`)}} variant="contained" color="success">
              Details
              </Button>
                        <span className="spanAllItems">item condition</span>
                </div>
                        <div className="tags">
              <p style={itemConditionColor()}>{itemCondition()}</p>

                        </div>
              
              
              
            </div>
          </div>
          
          </div>
        );
      })}
    </div>
  );
}
