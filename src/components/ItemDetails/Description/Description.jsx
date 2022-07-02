import React, { useEffect,useContext } from 'react'
import {useParams} from 'react-router-dom'
import DescriptionStyle from "./Description.module.css"
import "../itemDetails.css"
import itemsContext from "../../../Contexts/itemsContext";

export default function Description() {

const {getItemById}=useContext(itemsContext);
const selectedID=useParams().id;
const selectedItem=getItemById(selectedID);
  

  return (
<div  className={`col ${DescriptionStyle.descContainer}`}>

    {/* description Body */}
<div className={`${DescriptionStyle.desc_body} p-2 mt-3`}>
<div className={`${DescriptionStyle.desc_head}`}>
      <h3 style={{color:"#fff"}} className={`ms-2 `}>Description</h3><hr  />
  </div>
    <p>
        {selectedItem.description}

    </p>
 </div>

</div>
  )
}
