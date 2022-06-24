import { Box, C, CircularProgress, Typography } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <>
      <Box style={{ marginTop: 180 }}>
        <CircularProgress color="success" />
        <Typography color="success" variant="h5" gutterBottom component="div">
          Loading...
        </Typography>
      </Box>
    </>
  );
};

export default Loading;
