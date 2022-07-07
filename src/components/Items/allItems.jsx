import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Link } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepPurple } from "@mui/material/colors";
import { NavLink } from "react-router-dom";

///////////////////////////////////////////////////

export default function ActionAreaCard(props) {
  console.log(props);
  return (
    <div>
      {props.allItemsData.map((res) => {
        let description = res.description.substring(0, 8).concat("...");
        let title =
          res.title.length > 18
            ? res.title.substring(0, 18).concat("...")
            : res.title;

        return (
          <Box
            key={res.id}
            sx={{
              display: "inline-flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <Card
              sx={{
                width: "300px",
                height: "350px",
                margin: "20px",
                paddingLeft: "10px",
              }}
            >
              <Stack direction="row" spacing={2}>
                <Link>
                  <Avatar sx={{ bgcolor: deepPurple[500] }}>H</Avatar>
                </Link>
              </Stack>

              <NavLink to={`/details/${res.id}`}>
                <CardMedia
                  sx={{
                    paddingTop: "10px",
                    zIndex: 1,
                    objectFit: "contain",
                    width: "200px",
                    height: "200px",
                    margin: "auto",
                  }}
                  component="img"
                  height="140"
                  image={`data:image/jpeg;base64,${res.images[0]}`}
                  alt={res.date}
                />
              </NavLink>

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: "darkgray" }}
                >
                  {description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        );
      })}
    </div>
  );
}
