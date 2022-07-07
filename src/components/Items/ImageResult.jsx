import React, { useState, useEffect, useContext } from "react";
import ActionAreaCard from "./allItems";
import PythonAPI from "../../Services/SimilarityServiceApi";
import ImageSearchContext from "../../Contexts/ImageSearchContext";

const ImageResult = () => {
  const [imageItems, setImageItems] = useContext(ImageSearchContext);
  return <>{<ActionAreaCard allItemsData={imageItems} />}</>;
};

export default ImageResult;
