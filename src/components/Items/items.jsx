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
import Loading from "../Loading";
import RenderItems from "./allItems";
import ActionAreaCard from "./allItems";


export default function Items() {
  let { allItems, getItemById } = useContext(itemsContext);
  //let {date,description,id,images,isLost,latitude,location,longitude,subCategory,superCategory,title,userId }= {...allItems}
  let [subKey, setsubKey] = useState(null);
  let [superKey, setsuperKey] = useState(null);
  let [underSubData, setunderSubData] = useState([]);
  let [underSuperData, setunderSuperData] = useState([]);
  
  let [superLoading,setSuperLoading] = useState(true);
  let [subLoading,setSubLoading] = useState(true);
  const [didMountSub, setDidMountSub] = useState(false)
  const [didMountSuper, setDidMountSuper] = useState(false)
  useEffect(() => { setDidMountSub(true) }, [])
  useEffect(() => { setDidMountSuper(true) }, []) 

  useEffect(()=>{
if (didMountSuper) GetSuperCategories();
setDidMountSuper(true);
  },[superKey])
  
  useEffect(()=>{
    if(didMountSub) GetSubCategories();
    setDidMountSub(true);
  },[subKey])

    const GetSuperCategories = () => {
      
    try {
      const data = async () => {
        const back = await API.get(`/Items/undersup/${superKey}`).then(
          (response) => response.data
        );
        //console.log(back);
        setunderSuperData(back);
        setSuperLoading(false)

      };
      data();
    } catch (error) {
      console.log(error + "from (/Items/undersuper) endpoint");
    }
  };
  let Superval = () => {

    return (
      <select
        name="sub"
        id="sub"
        defaultValue="Choose a Subcategory"
        onChange={SetSuperCat}
      >
        <option disabled defaultValue="Animals">Select a Super Category</option>
        <option value="Electronics">Electronics</option>
        <option value="Animals">Animals</option>
        <option value="Belongings">Belongings</option>
        <option value="Other">Other</option>
        
      </select>
    );
  };
 
  let SetSuperCat = (e) => {
    setsuperKey(e.target.value);
    setsubKey(null);
  }
  
  let SuperValRen = 
  underSuperData.map((res) => {
    let id = res.id;
    let description = res.description;
    if (description.length>40) description= description.substring(0,8).concat("...");    
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
              <Typography gutterBottom variant="h5" component="div" color="WindowText">
                {res.title}
              </Typography>
              <Typography gutterBottom variant="h5" component="div" color="text.secondary">
                {description}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      );
    });

  
  const GetSubCategories = () => {
    try {
      //allItems.prev = underSubData;
      const data = async () => {
        const back = await API.get(`/Items/undersub/${subKey}`).then(
          (response) => response.data
        );
        //console.log(back);
        setunderSubData(back);
        setSubLoading(false);
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
 
  let SetSubCat = (e) => {
    setsubKey(e.target.value);
    setsuperKey(null);
  }

  /* <Route path="subcategory/:subKey" element={<Items />} />
          <Route path="supercategory/:superKey" element={<Items />} /> */
  
  let SubValRen = 
  underSubData.map((res) => {
    let id = res.id;
    let description = res.description;
    if (description.length>40) description= description.substring(0,8).concat("...");
  return (
    
    <Box
      key={res.id}
      sx={{ display: "inline-flex", flexDirection: "row", flexWrap: "wrap" }}
    >
      <Card sx={{ maxWidth: 345, margin: "20px", paddingLeft: "10px" }}>
        <Stack direction="row" spacing={2}>
          <Link>
            <Avatar sx={{ bgcolor: deepPurple[500] }}>
              H
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
          />
        </NavLink>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="WindowText">
            {res.title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
     
  );
});
  
      
  /* let renderItems = 
    allItems.map((res) => {
      let id = res.id;
      let description = res.description;
      if (description.length>40) description= description.substring(0,8).concat("...");
 
    return (
      <Box
        key={res.id}
        sx={{ display: "inline-flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        <Card sx={{ maxWidth: 345, margin: "20px", paddingLeft: "10px" }}>
          <Stack direction="row" spacing={2}>
            <Link>
              <Avatar sx={{ bgcolor: deepPurple[500] }}>
               H
              </Avatar>
            </Link>
          </Stack>

          <NavLink to={`/details/${id}`}>
            <CardMedia
              sx={{ paddingTop: "10px", zIndex: 1, objectFit:"contain", width:"100px", height:"200px" }}
              component="img"
              height="140"
              image={`data:image/jpeg;base64,${res.images[0]}`}
              alt={res.date}
            />
          </NavLink>

          <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="WindowText">
              {res.title}
            </Typography>
            <Typography gutterBottom variant="h5" component="div" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    );
  });
  */

  
  if (subKey!==null) {
    return (
        <div>
                {Subval()}
                {Superval()}
                <br/>
                {subLoading?<Loading/>:SubValRen}
                
        </div>
            )
  }else if(superKey!==null){
    return (
        <div>
                {Subval()}
                {Superval()}
                  <br/>
                {superLoading?<Loading/>:SuperValRen}
       </div>
           )
  }else{ 
    return (
        <div>
                {Subval()}
                {Superval()}
                <br/>
                <ActionAreaCard/>
                
        </div>
            )
        }  
    
    }

