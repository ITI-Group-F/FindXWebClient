import React, { useContext, useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import ImageSearchContext from "../../../Contexts/ImageSearchContext";
import Tooltip from '@mui/material/Tooltip';

const Input = styled("input")({
  display: "none",
});

const CameraButton = () => {
  const [imageItems, setImageItems,sendImage] = useContext(ImageSearchContext);

  

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="icon-button-file">
        <Input
          accept="image/*"
          id="icon-button-file"
          type="file"
          onChange={sendImage}
        />
        <Tooltip title="Search By Image">
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <PhotoCamera />
        </IconButton>
        </Tooltip>

      </label>
    </Stack>
  );
};

export default CameraButton;
