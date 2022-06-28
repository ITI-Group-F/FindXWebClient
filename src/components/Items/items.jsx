import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Link } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import API from '../../Services/api';
import TextField from '@mui/material/TextField';
import { useContext, useEffect } from 'react';
import itemsContext from '../../Contexts/itemsContext';
import { ItemsProvider } from '../../Contexts/itemsContext';
import { NavLink, useNavigate } from 'react-router-dom';




export default function Items() {
  let {allItems} = useContext(itemsContext);
 
  //let {date,description,id,images,isLost,latitude,location,longitude,subCategory,superCategory,title,userId }= allItems
  
  //let navigate = useNavigate();
  
 let renderItems = allItems.map((res)=>{


  let id = res.id;
 
  return(
  

     <Box key={res.id} sx={{ display: "inline-flex", flexDirection: "row", flexWrap:"wrap" }}>
          
      
      <Card sx={{ maxWidth: 345, margin: "20px", paddingLeft:"10px" }}>
        <Stack direction="row" spacing={2}>
          
          <Link>
            <Avatar sx={{ bgcolor: deepPurple[500] }}>
              {/* Clickable avatar to redirect to the users Profile */}
            H
            </Avatar>
          </Link>

        </Stack>

        <NavLink to = {`details/${id}`}>

        <CardMedia
          sx={{paddingTop:"10px", zIndex:1 }}
          component="img"
          height="140"
          image={res.images[0]}
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
)})  
  return <div>{renderItems}</div>
}