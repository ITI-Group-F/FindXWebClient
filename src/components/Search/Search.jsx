import React, { useState, useContext, useEffect, useRef } from "react";
import { itemsContext } from "../../Contexts/itemsContext";
import SearchIcon from "./SearchIcon";
import "./search.css";
import API from "../../Services/api";
import { NavLink, useNavigate } from "react-router-dom";
import searchContext from "../../Contexts/SearchContext";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';

function Search() {
  //   const {allPost,setAllPost}=useContext(itemsContext)
  //   const history=useHistory()

  let [filteredData, setFilteredData] = useState([]);
  let [wordEntered, setWordEntered] = useState("");
  let [input, setInput] = useState("");
  const inputref = useRef(null);
  const selected = useRef(null);
  let apiFormData = new FormData();
  const navigate = useNavigate();
  let {setSearchWord, GetSearchData} = useContext(searchContext)


  
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };


  let handleSearch = () => {
    setSearchWord(wordEntered);
    // setFilteredData([]);
    if(wordEntered.length>0){
    navigate(`/search/${wordEntered}`);
    }
           
  };
  let onEnterKeyPress = (e) => {
    if(wordEntered.length>0&&e.key==="Enter"){
    setSearchWord(wordEntered);
    // setFilteredData([]);
    navigate(`/search/${wordEntered}`);
  }
  
};
let onResultClick=(e)=>{
  setSearchWord(e.target.value);
  // setFilteredData([]);
  navigate(`/search/${wordEntered}`);

}

  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await API.get(`/search/${wordEntered}`, apiFormData);
        setFilteredData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getItems();
  }, [wordEntered]);



console.log(wordEntered);


return (
  
  
  <>
     <div className="spanSearch">
    <Autocomplete
        className="searchInput"
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={filteredData.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
        ref={selected}
        onChange={(e) => {setWordEntered(e.target.value) }}
        onClick={(e) =>{setWordEntered(e.target.value) }}
        onKeyPress={(e)=>{onEnterKeyPress(e)}}
        onBlur={(e) => {setWordEntered(e.target.value)}}
          {...params}
          label="Search"
          InputProps={{
            
            ...params.InputProps,
            type: 'search',
          }}
         
        />
        
      )}
      
    />

           <Button className="divBtnSearch" onClick={()=>handleSearch() } variant="contained" color="success">
     <SearchOutlinedIcon />
        
      </Button>
        </div>   
 </>
 

);

  
}

export default Search;
