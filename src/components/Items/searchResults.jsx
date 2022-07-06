/* import React from 'react';
import ActionAreaCard from "./allItems";
import { useContext, useEffect, useState } from "react";
import searchContext from "../../Contexts/SearchContext";
import { useNavigate, useParams, useRoutes } from "react-router-dom";
import subAndSuperContext from '../../Contexts/subAndsuperContext';
import Filters from './filters';
import API from "../../Services/api";



function SearchResults() {
    let {setsubKey,setsuperKey} = useContext(subAndSuperContext);
    let [searchWord,setSearchWord] = useState(null);
    let [searchLoading, setSearchLoading] = useState(true)
    let [searchResult,setSearchResult] = useState([])
    const [didMountSuper, setDidMountSuper] = useState(true);
    let [clearApi, setClearApi] = useState(false);
    
    let {para} = useParams();
/////////////////////////////////////////////

setSearchWord(para);
useEffect(() => { 
  
    setDidMountSuper(false) }
    
  , [])

useEffect(()=>{
    
    GetSearchData();
    
},[searchWord])

let GetSearchData = ()=>{

    try{
        
    const data = async () =>{
        const back = await API.get(`/Search/full/${searchWord}`).then((response) => response.data)
        console.log(back);
        setSearchResult(back);
        setSearchLoading(false);
    }
    data();
    
}catch(error){
    console.log(error + " from search/full/query endpoint");
}
};

////////////////////////////////////////////
    


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
            <ActionAreaCard allItemsData = {searchResult}/>
        </div>
    );
}

export default SearchResults; */