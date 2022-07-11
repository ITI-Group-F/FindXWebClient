import React from 'react';
import ActionAreaCard from '../components/Items/allItems';
import itemsContext from "../Contexts/itemsContext";
import { useContext, useEffect, useState } from "react";


function Home(props) {
  let { allItems } = useContext(itemsContext);
    return (
      <div className='Recommendation'>
      <h2 style={{marginTop:"20px"}}>Recommendations</h2>
       <ActionAreaCard allItemsData={allItems}/>
       </div>
    );
}

export default Home;