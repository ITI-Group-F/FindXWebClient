import React, { useState, useContext, useEffect, useRef } from "react";
import { itemsContext } from "../../Contexts/itemsContext";
import SearchIcon from "./SearchIcon";
import "./search.css";
import API from "../../Services/api";
import { NavLink, useNavigate } from "react-router-dom";
import searchContext from "../../Contexts/SearchContext";

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

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





  

  return (
    // <div className="search">
    //   <div className="searchInputs">
    //     <input
    //       ref={inputref}
    //       type="text"
    //       placeholder=" Find Your Lost Belongings ..."
    //       value={wordEntered}
    //       onChange={(e) => {setWordEntered(e.target.value)}}
    //     />
        
    //     <div className="searchIcon">
    //       <div onClick={()=>handleSearch()  }>
    //         {" "}
    //         <SearchIcon />{" "}
    //       </div>
    //       {filteredData.length !== 0 && (
    //         <div id="clearBtn" onClick={() => clearInput()}>
    //           <CloseIcon />
    //         </div>
    //       )}
    //     </div>
    //   </div>
    //   {filteredData.length !== 0 && (
    //     <div className="dataResult">
    //       {filteredData.map((item) => {
    //         return (
    //           <div
    //             key={item.id}
    //             className="dataItem"
    //             ref={selected}
    //             onClick={(e) => {setWordEntered(e.target.innerText)  }}
                
    //           >
                
    //             <p>{item.title} </p>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   )}
    // </div>
    

    <Stack spacing={-4} sx={{ width: 400 ,marginLeft:"40px" ,marginTop:"-10px"  }} 
    >
        
    <Autocomplete
        
      freeSolo
      id="free-solo-2-demo"
      disableClearable
      options={filteredData.map((option) => option.title)}
      renderInput={(params) => (
        <TextField
        ref={selected}
        onChange={(e) => {setWordEntered(e.target.value) }}
        onClick={(e) =>{setWordEntered(e.target.value)  }}
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
     <div onClick={()=>handleSearch() }   style={{  marginTop:"-41px" ,marginRight:"-439px"  }}>
           {" "}
             <SearchIcon />{" "}
           </div>
  </Stack>
 

);

  
}

export default Search;
