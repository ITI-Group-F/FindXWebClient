import React from "react";
import ActionAreaCard from "./allItems";
import { useContext, useEffect, useState } from "react";
import searchContext from "../../Contexts/SearchContext";
import { useNavigate, useParams, useRoutes } from "react-router-dom";
import subAndSuperContext from "../../Contexts/subAndsuperContext";
import Filters from "./filters";
import Loading from "../Loading";
import noAdds from "./../../images/myadds.webp";

function SearchResults() {
  let {
    setSearchWord,
    searchLoading,
    setSearchLoading,
    searchWord,
    searchResult,
  } = useContext(searchContext);
  let { setsubKey, setsuperKey } = useContext(subAndSuperContext);

  let renderAllItemsBtn = () => {
    setsubKey(null);
    setsuperKey(null);
  };

  return (
    <div>
      <Filters />
      {/* <button
        onClick={() => {
          renderAllItemsBtn();
        }}
      >
        View All Items
      </button> */}
      
            <button
            style={{width: "200px",display:"block" , margin:"auto"}}
              name="submit"
              onClick={() => {
                renderAllItemsBtn();
              }}
              className="btn btn-success"
            >
              View All Items
            </button>
      <br />
      {searchLoading ? (
        <Loading />
      ) : searchResult === [] ? (
        <img
          src={noAdds}
          alt=""
          className="img-fluid"
          width="200"
          height="auto"
        />
      ) : (
        <ActionAreaCard allItemsData={searchResult} />
      )}
    </div>
  );
}

export default SearchResults;
