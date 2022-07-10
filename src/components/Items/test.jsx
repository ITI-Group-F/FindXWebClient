import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { NavLink } from "react-router-dom";


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ActionAreaCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      {props.allItemsData.map((res) => {
        let description = res.description.substring(0, 8).concat("...");
        let title =
        res.title.length > 18
            ? res.title.substring(0, 18).concat("...")
            : res.title;
            const itemCondition = ()=>{
              if(res.isLost){
                return "This Item Is Lost"
              }else{
                return "This Item Was Found"
              }
            }
            
  return (
    <div style={{display: "inline-flex",
    flexDirection: "row",
    flexWrap: "wrap",width: "300px",
    height: "350px",
    margin: "20px",
    paddingLeft: "10px"}}>
    <Card key={res.id}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={itemCondition()}

      />
      <NavLink to={`/details/${res.id}`}>
      <CardMedia
        component="img"
        height="194"
        image={`data:image/jpeg;base64,${res.images[0]}`}
        alt={res.date}
        sx={{
          paddingTop: "10px",
          zIndex: 1,
          objectFit: "contain",
          width: "200px",
          height: "200px",
          margin: "auto",
        }}
        />
        </NavLink>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Posted On : {res.date}</Typography>
          <Typography paragraph>
          {res.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  </div>
  )
      })}
  </div>
)}


/* 





*/



/*


 <div key={res.id} class="container">
          <div class="card">
            <div class="card-header">
              <img src={`data:image/jpeg;base64,${res.images[0]}`} alt=" " />
            </div>
            <div class="card-body">
              <span class="tag tag-teal">{res.superCategory}</span>
              <h4>
                {title}
              </h4>
              <p>
              {description}
              </p>
              <Button variant="contained" color="success">
				<NavLink to={`/details/${res.id}`} class="card__button">Details</NavLink>
      </Button>
            </div>
          </div>
          
          </div>
 */