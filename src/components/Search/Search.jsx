import React, { useState, useContext, useEffect, useRef } from "react";
import { itemsContext } from "../../Contexts/itemsContext";
import SearchIcon from "./SearchIcon";
import CloseIcon from "./CloseIcon";
import "./search.css";
import API from "../../Services/api";
import { NavLink, useNavigate } from "react-router-dom";
import searchContext from "../../Contexts/SearchContext";

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

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  let handleSearch = () => {
    setSearchWord(wordEntered);
    navigate(`/search/${wordEntered}`);
        //console.log(wordEntered)
           
  };
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

  // const submitFormData = () => {
  //   for (var pair of apiFormData.entries()) {
  //     console.log(pair[0] + ", " + pair[1]);
  //   }
  //   try {
  //     const res = API.get(`/Items/all`, apiFormData);
  //     setItems(res.data.data);
  //     console.log(res.data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   submitFormData();
  // };
  // for (var pair of apiFormData.entries()) {
  //   console.log(pair[0] + ", " + pair[1]);
  // }

  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await API.get(`/search/${wordEntered}`, apiFormData);
        setFilteredData(res.data);
        //console.log(filteredData);
      } catch (error) {
        console.log(error);
      }
    };
    getItems();
  }, [wordEntered]);


  return (
    <div className="search">
      <div className="searchInputs">
        <input
          ref={inputref}
          type="text"
          placeholder=" Find Your Lost Belongings ..."
          value={wordEntered}
          onChange={(e) => {setWordEntered(e.target.value)}}
        />
        
        <div className="searchIcon">
          <div onClick={()=>handleSearch()}>
            {" "}
            <SearchIcon />{" "}
          </div>
          {filteredData.length !== 0 && (
            <div id="clearBtn" onClick={() => clearInput()}>
              <CloseIcon />
            </div>
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.map((item) => {
            return (
              <div
                key={item.id}
                className="dataItem"
                ref={selected}
                onClick={(e) => {setWordEntered(e.target.innerText); navigate(`details/${item.id}`)}}
              >
                <CloseIcon />
                <p>{item.title} </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
    

  );
}

export default Search;
