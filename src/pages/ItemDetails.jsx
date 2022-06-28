import React from "react";
import Details from "../components/ItemDetails/Details/Details";
import Description from "../components/ItemDetails/Description/Description";
import ItemSlider from "../components/ItemDetails/slider/slider";
import { ItemsProvider } from "../Contexts/itemsContext";


export default function ItemDetailsPage() {
  return (
    <div>

        <div className={`row g-0 d-flex justify-content-around`}>
          <ItemSlider />
          <Details />
        </div>
        <Description />
    </div>
  );
}
