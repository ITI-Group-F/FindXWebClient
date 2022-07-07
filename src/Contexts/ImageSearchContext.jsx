import { createContext, useState } from "react";

const ImageSearchContext = createContext();

export const ImageSearchProvider = (props) => {
  const { children } = props;
  const [imageItems, setImageItems] = useState();

  return (
    <ImageSearchContext.Provider value={[imageItems, setImageItems]}>
      {children}
    </ImageSearchContext.Provider>
  );
};

export default ImageSearchContext;
