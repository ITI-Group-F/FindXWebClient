import React, { useEffect, useContext, useState } from "react";
import Details from "../Details/Details";
import Description from "../Description/Description";
import ItemSlider from "../slider/slider";
import itemsContext from "../../../Contexts/itemsContext";
import axios from "../../../Services/api";
import { useNavigate, useParams, useRoutes } from "react-router-dom";

 function Wrapper(props) {
  const navigate = useNavigate();
  const { getItemById } = useContext(itemsContext);
  const selectedID = useParams().id;
  let selectedItem = getItemById(selectedID);
  const [item,setItem]=useState(null);

  useEffect(() => {
    //if the item not found
    //this mean this id Coming from profile or post
    //so we need to fetch this item
    if (!item) {
      axios
        .get(`/Items/${selectedID}`)
        .then((d) => {
          console.log('call now');
          console.log(d.data);
          selectedItem = d.data;
          setItem(d.data);
  
  
        })
        .catch((err) => {
          navigate("/notFound");
        });
    }
  },[]);

  return (
    <>
      <div className={`row g-0 d-flex justify-content-around`}>
        <ItemSlider item={item} />
        <Details item={item} />
      </div>
      <Description item={item} />
    </>
  );
}


export default React.memo(Wrapper);