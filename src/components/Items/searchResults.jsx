import React from 'react';
import ActionAreaCard from "./allItems";
import { useContext, useEffect, useState } from "react";
import searchContext from "../../Contexts/SearchContext";
import { useNavigate, useParams, useRoutes } from "react-router-dom";
import subAndSuperContext from '../../Contexts/subAndsuperContext';
import Filters from './filters';


function SearchResults() {
    
    let {setSearchWord,searchLoading,setSearchLoading,searchWord,searchResult} = useContext(searchContext)
    let {setsubKey,setsuperKey} = useContext(subAndSuperContext);
    let {para} = useParams();

    setSearchWord(para);
    

    let renderAllItemsBtn = ()=>{
        setsubKey(null);
        setsuperKey(null);
        
        
      }
      
      
      return (
          <div>
            <Filters/>
            <button onClick={()=>{renderAllItemsBtn()
            }}>View All Items</button>
            <br/>
            {searchWord !== null|| searchWord!=="" ?<ActionAreaCard allItemsData = {searchResult}/> : <>No Results</>}
        </div>
    );
}

export default SearchResults;