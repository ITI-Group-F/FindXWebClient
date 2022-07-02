import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import noAdds from "./../../images/myadds.webp";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,CardContent,CardActionArea, Typography,CardMedia,Button,CardActions}  from "@mui/material";

import { useHistory } from "react-router-dom";
function MyAds() {
    // const currentUser = useSelector((state) => state.currentUser);
    // const history = useHistory();
    // if(Object.keys(currentUser).length < 1){
    //         history.push('/')
    // }
    // const products = useSelector((state) => state.products);
    // const routeHandler = (item) => {
    //     history.push(`products/${item.title}/${item.productId}`, { product: item });
    // };
    // console.log(products, "curent User From no Adds");
    const [userProducts, setUserProducts] = useState([])
    // const [userHaveProducts, setUserHaveProducts] = useState(false)
    // useEffect(() => {
    //     if (Object.keys(currentUser.length > 0)) {
    //         const filterProduct = products.filter((item) => item.uid === currentUser.uid)
    //         setUserProducts(filterProduct)
    //         if(!filterProduct){
    //             setUserHaveProducts(true)
    //         }
    //     }
    // }, [])

    return (
        <div className="">
            {
                (false) ?
                    <div className="container-fluid mx-3">
                        <h2 className="text-dark ml-2">Your Ads</h2>
                        <div className="row productRow">
                            {userProducts.map((item, i) => (
                                <div
                                    className="col-lg-3 col-md-6 col-sm-6"
                                    key={i}
                                    // onClick={() => routeHandler(item)}
                                >
                                     <div class="card">
                <img class="card-img-top" src="..." alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>


               
                                                </div>
                            ))}
                        </div>
                    </div>
                    :
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
            }

        </div>
    );
}

export default MyAds;
