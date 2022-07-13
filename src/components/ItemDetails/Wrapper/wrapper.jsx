import React, { useEffect, useContext, useState } from "react";
import Details from "../Details/Details";
import Description from "../Description/Description";
import ItemSlider from "../slider/slider";
import itemsContext from "../../../Contexts/itemsContext";
import axios from "../../../Services/api";
import { useNavigate, useParams, useRoutes } from "react-router-dom";

export default function Wrapper(props) {
  const navigate = useNavigate();
  const { getItemById } = useContext(itemsContext);
  const selectedID = useParams().id;
  let selectedItem = getItemById(selectedID);


  useEffect(() => {
    //if the item not found
    //this mean this id Coming from profile or post
    //so we need to fetch this item
    if (!selectedItem) {
      axios
        .get(`/Items/${selectedID}`)
        .then((d) => {
          selectedItem = d;
  
  
        })
        .catch((err) => {
          navigate("/notFound");
        });
    }
  });

  return (
    <>
      <div className={`row g-0 d-flex justify-content-around`}>
        <ItemSlider item={selectedItem} />
        <Details item={selectedItem} />
      </div>
      <Description item={selectedItem} />
    </>
  );
}
