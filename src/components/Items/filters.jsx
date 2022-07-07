import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Link } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, deepPurple } from "@mui/material/colors";
import API from "../../Services/api";
import TextField from "@mui/material/TextField";
import { useContext, useEffect, useState } from "react";
import itemsContext from "../../Contexts/itemsContext";
import { ItemsProvider } from "../../Contexts/itemsContext";
import { NavLink, useNavigate } from "react-router-dom";
import Loading from "../Loading";
import RenderItems from "./allItems";
import ActionAreaCard from "./allItems";
import subAndSuperContext from "../../Contexts/subAndsuperContext";
//////////////////////////////////
function Filters() {
  let {
    SetSubCat,
    SetSuperCat,
    subKey,
    superKey,
    setsubKey,
    setsuperKey,
    superLoading,
    subLoading,
    underSubData,
    underSuperData,
  } = useContext(subAndSuperContext);
  let { setAllItems } = useContext(itemsContext);
  
  let Superval = () => {
    return (
      <select
        name="sub"
        id="sub"
        defaultValue="Choose a Subcategory"
        onChange={SetSuperCat}
      >
        <option disabled defaultValue="Animals">
          Select a Super Category
        </option>
        <option value="Electronics">Electronics</option>
        <option value="Animals">Animals</option>
        <option value="Belongings">Belongings</option>
        <option value="Other">Other</option>
      </select>
    );
  };
  
  let Subval = () => {
    return (
      <select
        name="sub"
        id="sub"
        defaultValue="Choose a Subcategory"
        onChange={SetSubCat}
      >
        <option disabled>selecet a subcategory</option>
        <option value="Tablets">Tablets</option>
        <option value="Mobiles">Mobiles</option>
        <option value="Laptops">Laptops</option>
        <option value="Birds">Birds</option>
        <option value="Cats">Cats</option>
        <option value="Dogs">Dogs</option>
        <option value="Personal cards and papers">
          Personal cards and papers
        </option>
        <option value="Wallets">Wallets</option>
        <option value="Glasses">Glasses</option>
        <option value="Money">Money</option>
        <option value="Bags">Bags</option>
        <option value="Accessories">Accessories</option>
        <option value="Other">Other</option>
      </select>
    );
  };

  
  return (
    <div>
      {Subval()}
      {Superval()}
    </div>
  );
}

export default Filters;
