import { Box, C, CircularProgress } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <>
      <Box style={{ marginTop: 180 }}>
        <CircularProgress />
      </Box>
    </>
  );
};

export default Loading;
