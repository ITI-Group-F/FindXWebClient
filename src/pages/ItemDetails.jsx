import React from 'react'
import Details from "../components/ItemDetails/Details/Details";
import Description from "../components/ItemDetails/Description/Description";
import ItemSlider from "../components/ItemDetails/slider/slider";


export default function ItemDetailsPage() {
  return (
    <div style={{backgroundColor:"#314D63"}}>
        <div className={`row g-0 d-flex`}>

        <ItemSlider/>
      <Details/>
        </div>
      <Description/>
    </div>
  )
}
