import { createContext, useState } from "react";
import PythonAPI from "../Services/SimilarityServiceApi";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";



const ImageSearchContext = createContext();

export const ImageSearchProvider = (props) => {
  const { children } = props;
  const [imageItems, setImageItems] = useState();
  const [imageLoading,setImageLoading]= useState(false);
  const navigate = useNavigate();

  const sendImage = async (e) => {
    const { files } = e.target;
    const formData = new FormData();
    formData.append("img", files[0]);
    try {
      setImageLoading(true);
      navigate("/search-by-img");
      const items = await PythonAPI.post("/", formData);
      console.log(items.data);
      setImageItems(items.data);
      setImageLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ImageSearchContext.Provider value={[imageItems, setImageItems,sendImage]}>
      {imageLoading?<Loading/>:children}
    </ImageSearchContext.Provider>
  );
};

export default ImageSearchContext;
