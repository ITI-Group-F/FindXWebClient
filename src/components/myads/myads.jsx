
import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { NavLink,useNavigate} from "react-router-dom";
import noAdds from "./../../images/myadds.webp";
import "bootstrap/dist/css/bootstrap.min.css";
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
    <div className="" style={{marginLeft:"1rem",marginRight:"1rem" }}>
      {filteredData.length != 0 ? (
        <div className="container-fluid mx-3">
          <h2 className="text-dark ml-2">Your Ads</h2>
          <div className="row productRow">
            
          <div className="container"    >
      {filteredData.map((res) => {
        let description = res.description.substring(0, 18).concat("...");
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

        return (
          <div key={res.id}  >
          <div className="card">
            
            <div className="card-header">
              <img src={`data:image/jpeg;base64,${res.images[0]}`} alt={res.date} />
            </div>
            <div className="card-body">
              <span className="tag tag-teal">{res.superCategory}</span>
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
                        <span className="span"> item condition</span>
                </div>
                        <div class="tags">

              <p style={itemConditionColor()}>{itemCondition()}</p>
                         

                         
                        </div>
               
                        
              
              
            </div>
            <div className="card-footer">
                    <small className="text-muted"></small>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => deleteItem(res.id)}
                    >
                      Delete
                    </button>
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

export default MyAds;
