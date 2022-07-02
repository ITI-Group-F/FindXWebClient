import * as React from "react";
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
export default function SubValRen (){

    const navigate = useNavigate();
    let [subKey, setsubKey] = useState(null);
    let [underSubData, setunderSubData] = useState([]);

const GetSubCategories = () => {
    try {
      const data = async () => {
        const back = await API.get(`/Items/undersub/${subKey}`).then(
          (response) => response.data
        );
        console.log(back);
        setunderSubData(back);
  //{date,description,id,images,isLost,latitude,location,longitude,subCategory,superCategory,title,userId }= allItems
    };
    data();
  } catch (error) {
    console.log(error + "from (/Items/undersub) endpoint");
  }
   
  
};



let Subval = () => {

  return (
    <select
      name="sub"
      id="sub"
      defaultValue="Choose a Subcategory"
      onChange={SetSubCat}
    >
      <option disabled selected>selecet a subcategory</option>
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

let SetSubCat = (e) => {
  setsubKey(e.target.value);
  GetSubCategories();
  navigate(`/subcategory/${subKey}`);
}



    
    underSubData.map((res) => {
      let id = res.id;
return (
  <Box
    key={res.id}
    sx={{ display: "inline-flex", flexDirection: "row", flexWrap: "wrap" }}
  >
    <Card sx={{ maxWidth: 345, margin: "20px", paddingLeft: "10px" }}>
      <Stack direction="row" spacing={2}>
        <Link>
          <Avatar sx={{ bgcolor: deepPurple[500] }}>
            {/* Clickable avatar to redirect to the users Profile */}H
          </Avatar>
        </Link>
      </Stack>

      <NavLink to={`/details/${id}`}>
        <CardMedia
          sx={{ paddingTop: "10px", zIndex: 1 }}
          component="img"
          height="140"
          image={`data:image/jpeg;base64,${res.images[0]}`}
          alt={res.date}
          /* onClick={()=>{navigate(`details/${id}`)}} */
        />
      </NavLink>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {res.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {res.description}
        </Typography>
      </CardContent>
    </Card>
  </Box>
);
});
} 