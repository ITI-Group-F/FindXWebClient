import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
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

function MyAds() {
  // const currentUser = useSelector((state) => state.currentUser);
  // const history = useHistory();
  // if(Object.keys(currentUser).length < 1){
  //         history.push('/')
  // }

  let apiFormData = new FormData();
  const [filteredData, setFilteredData] = useState([]);
  const [userProducts, setUserProducts] = useState([]);
  const [itemId, setItemId] = useState("");
  const [userHaveProducts, setUserHaveProducts] = useState(false);
  const deleteref = useRef(null);
  // const products = () => {
  //   for (var pair of apiFormData.entries()) {
  //     console.log(pair[0] + ", " + pair[1]);
  //   }
  //   try {
  //     let userId = "1c47a376-1267-4892-87f7-e0efbc66fa9f";
  //     let res = API.Get(`/UserItems/${userId}`, apiFormData);
  //     console.log(res.response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    const getItems = async () => {
      try {
        let userId = "56beea99-f165-4a1a-8a4a-d659e1a6ce26";
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
      let userId = "56beea99-f165-4a1a-8a4a-d659e1a6ce26";
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
    <div className="">
      {filteredData.length != 0 ? (
        <div className="container-fluid mx-3">
          <h2 className="text-dark ml-2">Your Ads</h2>
          <div className="row productRow">
            {filteredData.map((item) => (
              <div
                className="col-lg-3 col-md-6 col-sm-6"
                key={item.id}
                ref={deleteref}
                // onClick={() => routeHandler(item)}
              >
                <div className="card">
                  <CardMedia
                    sx={{ paddingTop: "10px", zIndex: 1 }}
                    component="img"
                    height="140"
                    image={`data:image/jpeg;base64,${item.images[0]}`}
                    alt={item.date}
                  />

                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">
                      {item.description.substring(0, 100).concat("...")}
                    </p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted"></small>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => deleteItem(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
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
