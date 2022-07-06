/* import API from "../Services/api";
import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import Loading from "../components/Loading";

const searchContext = createContext();


export const SearchProvider= (props)=>{
    const {children} = props;
let [searchWord,setSearchWord] = useState(null);
let [searchLoading, setSearchLoading] = useState(true)
let [searchResult,setSearchResult] = useState([])
const [didMountSuper, setDidMountSuper] = useState(true);
let [clearApi, setClearApi] = useState(false);

useEffect(() => { 
  
    setDidMountSuper(false) }
    
  , [])

useEffect(()=>{
    if (didMountSuper)GetSearchData();
    setDidMountSuper(true);
},[])

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

let changeWord = (word)=>{
    setSearchWord(word)
}

let contextValue = useMemo(()=>({
    setSearchWord,
    searchLoading,
    setSearchLoading, 
    searchResult,
    setSearchResult,
    searchWord,
    changeWord,GetSearchData


}),[setSearchWord,searchLoading,setSearchLoading,searchResult,searchWord,changeWord,GetSearchData])

return (
    <searchContext.Provider value = {contextValue}>
        {children}
    </searchContext.Provider>
)



}

export default searchContext; */