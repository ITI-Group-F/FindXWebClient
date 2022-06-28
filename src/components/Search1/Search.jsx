import React,{useState,useContext} from 'react'
import {itemsContext} from "../../Contexts/itemsContext"
import SearchIcon from "./SearchIcon"
import CloseIcon from "./CloseIcon"
import { useHistory } from 'react';
import "./search.css"

function Search() {
  //   const {allPost,setAllPost}=useContext(itemsContext)
  //   const history=useHistory()
    
  const [filteredData, setFilteredData] = useState([]);
  // const [wordEntered, setWordEntered] = useState("");

  // const handleFilter = (event) => {
  //   const searchWord = event.target.value;
  //   setWordEntered(searchWord);
  //   const newFilter = allPost.filter((value) => {
  //     return value.name.toLowerCase().includes(searchWord.toLowerCase())||value.category.toLowerCase().includes(searchWord.toLowerCase());
  //   });

  //   if (searchWord === "") {
  //     setFilteredData([]);
  //   } else {
  //     setFilteredData(newFilter);
  //   }
  // };

  // const clearInput = () => {
  //   setFilteredData([]);
  //   setWordEntered("");
  // };
  // const handleSelectedSearch=(item)=>{
  //      setAllPost(item)
  //      history.push("/view")
  // }
  // const handleSearchClick=()=>{
  //   if(filteredData.length===0){
  //    alert("No items found.., please search by product category or product name");
  //    }
     
  //    else {setAllPost(filteredData);
  //    history.push("/viewmore")}
     
  // }
  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Find Your Lost Belongings ..."
        />
        <div className="searchIcon">
          
           <div > <SearchIcon /> </div>
           {filteredData.length !== 0 && (
            <div id="clearBtn"   ><CloseIcon/></div>
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <div key={key} className="dataItem" >
                <p>{value.name} </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Search
