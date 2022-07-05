import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import PythonAPI from "../../../Services/SimilarityServiceApi";

const Input = styled("input")({
  display: "none",
});

const sendImage = async (e) => {
  const { files } = e.target;
  const formData = new FormData();
  formData.append("img", files[0]);
  try {
    const res = await PythonAPI.post("/", formData);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

const CameraButton = () => {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="icon-button-file">
        <Input
          accept="image/*"
          id="icon-button-file"
          type="file"
          onChange={sendImage}
        />
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <PhotoCamera />
        </IconButton>
      </label>
    </Stack>
  );
};

export default CameraButton;
