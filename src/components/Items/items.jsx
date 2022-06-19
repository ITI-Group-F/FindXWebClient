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
import api from '../../Services/api';
import TextField from '@mui/material/TextField';





export default function MediaCard() {
  return (
    <>
    
    

<Box sx={{ display: "flex", flexDirection: "row", flexWrap:"wrap" }}>
        
    <Card sx={{ maxWidth: 345, margin: "20px", paddingLeft:"10px" }}>
      <Stack direction="row" spacing={2}>
        
        <Link>
          <Avatar sx={{ bgcolor: deepPurple[500] }}>
            {/* Clickable avatar to redirect to the users Profile */}
          H
          </Avatar>
        </Link>
  
      </Stack>
      <CardMedia
        sx={{paddingTop:"10px", zIndex:1 }}
        component="img"
        height="140"
        image="https://pbs.twimg.com/media/CcKZlndUkAA0ziF.jpg"
        alt="green iguana"
      />

      
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>

          <Link  variant="body2" color="text.secondary" style={{textDecoration:"none"}}>
          {/* Clickable Description redirects to item's Details Page*/}
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
          </Link>
      </CardContent>
    </Card>



    {/*------------------------------------------------------------ */}



    <Card sx={{ maxWidth: 345, margin: "20px", paddingLeft:"10px" }}>
      <Stack direction="row" spacing={2}>
        <Link>
          <Avatar sx={{ bgcolor: deepPurple[500] }}>
            {/* Clickable avatar to redirect to the users Profile */}
          H
          </Avatar>
        </Link>
  
      </Stack>
      <CardMedia
        sx={{paddingTop:"10px", zIndex:1 }}
        component="img"
        height="140"
        image="https://pbs.twimg.com/media/CcKZlndUkAA0ziF.jpg"
        alt="green iguana"
      />

      
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>

          <Link  variant="body2" color="text.secondary" style={{textDecoration:"none"}}>
          {/* Clickable Description redirects to item's Details Page*/}
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
          </Link>
      </CardContent>
    </Card>


</Box>
</>
  );
}
