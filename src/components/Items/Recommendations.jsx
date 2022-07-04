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
import { CardActionArea } from '@mui/material';
///////////////////////////////////////////////////



export default function ActionAreaCard() {
  let { allItems } = useContext(itemsContext);
    return (
      <div>
      {allItems.map((res) => {
        
        let description = res.description
  
        if (description.length>20) description= description.substring(0,8).concat("...");
        return(
          
          
          
        <Box
        key={res.id}
        sx={{ display: "inline-flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        <Card sx={{ maxWidth: 345, margin: "20px", paddingLeft: "10px" }}>
          <Stack direction="row" spacing={2}>
            <Link>
              <Avatar sx={{ bgcolor: deepPurple[500] }}>H
              </Avatar>
            </Link>
          </Stack>

          <NavLink to={`/details/${res.id}`}>
            <CardMedia
              sx={{ paddingTop: "10px", zIndex: 1, objectFit:"contain", width:"200px", height:"200px" }}
              component="img"
              height="140"
              image={`data:image/jpeg;base64,${res.images[0]}`}
              alt={res.date}
            />
          </NavLink>

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {res.title}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {description}
            </Typography>
          </CardContent>
        </Card>
      </Box>
          )
      })}
        </div>
  );
}



