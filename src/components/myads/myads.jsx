
import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { NavLink,useNavigate} from "react-router-dom";
import noAdds from "./../../images/myadds.webp";
import "bootstrap/dist/css/bootstrap.min.css";
import AdsStyle from './Ads.module.css';
import CloseIcon from '@mui/icons-material/Close';
import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
  CardMedia,
  Button,
  CardActions,
} from "@mui/material";
import API from "../../Services/api";
import { useHistory } from "react-router-dom";
import { display } from "@mui/system";
import useClaims from "../../hooks/useClaims";

function MyAds() {
  let apiFormData = new FormData();
  const [filteredData, setFilteredData] = useState([]);
  const [userProducts, setUserProducts] = useState([]);
  const [itemId, setItemId] = useState("");
  const [userHaveProducts, setUserHaveProducts] = useState(false);
  const deleteref = useRef(null);
  const { userId } = useClaims();
  const navigate = useNavigate();

  useEffect(() => {
    const getItems = async () => {
      try {
        let res = await API.get(`/UserItems/${userId}`, apiFormData);
        setFilteredData(res.data);
        console.log(filteredData);
      } catch (error) {
        console.log(error);
      }
    };
    getItems();
  }, []);

  // delete function
  //function to delete card from dom
  const deleteItem = async (itemId) => {
    try {
      let res = await API.delete(`/UserItems/${userId}/${itemId}`);
    } catch (error) {
      console.log(error);
    }

    //delete item from state
    let newFilteredData = filteredData.filter((item) => item.id !== itemId);
    setFilteredData(newFilteredData);
  };

  //
  //   const routeHandler = (item) => {
  //     history.push(`products/${item.title}/${item.productId}`, { product: item });
  //   };
  //   console.log(products, "curent User From no Adds");

  console.log(userProducts, "userProducts");
  console.log(filteredData, "userHaveProducts");

  return (
    <div className="" style={{marginLeft:"1rem",marginRight:"1rem"  }}>
      {filteredData.length != 0 ? (
        <div className="container-fluid ">
          <h2  style={{marginLeft:"auto"}}>Your Ads</h2>
          <div className="row productRow" >
            
          <div className="container d-flex justify-content-center"  >
          {filteredData.map((res) => {

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
                return {color: "red"}
              }else{
                return {color: "green"}
              
              }
            }

        return (
          <div key={res.id}  >
          <div className="card" style={{marginLeft:"20px", marginBottom:"10px",height:"500px"}}>
            <NavLink to={`/details/${res.id}`}>
            <div className="card-header">
              <img src={`data:image/jpeg;base64,${res.images[0]}`} alt=" " />
            </div>
            </NavLink>
            <div className="card-body">
              <div className="w-100 text-end">

              <CloseIcon className="text-danger fs-1 fw-bolder" style={{cursor:'pointer'}}
                      onClick={() => deleteItem(res.id)}></CloseIcon>

              </div>
              <span className={`tag tag-teal ${AdsStyle.tag}`}>{res.superCategory}</span>
              <span  className={`tag tag-black   ${AdsStyle.tag}`} style={closedCaseColor()}>{closedCase()}</span>
              <h4>
                {title}
              </h4>
              <p className="mb-0">
              {description}
              </p>
              <div className="container_tags mt-2">
              <Button sx={{borderRadius:"50px", display:"inline-flex"}} onClick={()=>{navigate(`/details/${res.id}`)}} variant="contained" color="success">
              Details
              </Button>
                        <span className="spanAllItems">item condition</span>


                        <div className="tags">
                      <p style={itemConditionColor()}>{itemCondition()}</p>
                         

                         
                        </div>
                </div>

               
                        
              
              
            </div>
          
          </div>
          
          </div>
        );
      })}
    </div>
                    
                 
                </div>
              </div>
      ) : (
        <center className="mb-5">
          <img
            src={noAdds}
            alt=""
            className="img-fluid"
            width="200"
            height="auto"
          />
          <h6 className="adds__heading">You haven't listed anything yet</h6>
        </center>
      )}
    </div>
  );
}

export default React.memo( MyAds);
