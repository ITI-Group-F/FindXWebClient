import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
const Loading = () => {
  const [loading, setLoading] = useState("Loading");
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log();

      setLoading((loading) => {
        if (loading == "Loading...") {
          return "Loading";
        } else {
          return loading + ".";
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <Box style={{ marginTop: 180,textAlign:"center" }}>
        <CircularProgress size="80px" thickness={2} color="success" />
        <Typography
          style={{ marginTop: 10 }}
          color="success"
          variant="h5"
          gutterBottom
          component="div"
        >
          {loading}
        </Typography>
      </Box>
      {/* copyright yousry */}
    </>
  );
};

export default Loading;
