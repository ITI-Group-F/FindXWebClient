import API from "../Services/api";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import Loading from "../components/Loading";

// how to deal with context api
//1 - ** DON'T FORGET TO MAKE THE PROVIDER AS A PARENT TO YOUR COMPONENT**
//2 - import useContext from "react" and itemsContext in your component
//3 - give itemsContext as a parameter to the useContext hook in your component i.e : useCoentxt(itemsContext)

/* 
 <Route path="/supercategory/:superKey" element={<SubAndSuperItems/>} />
          <Route path="/subcategory/:subKey" element={<SubAndSuperItems/>} />
*/

const itemsContext = createContext();
export const ItemsProvider = (props) => {
  const { children } = props;
  //making a state and initialize it with null
  let [items, setItems] = useState([]);
  let [allItems, setAllItems] = useState([]);
  let [allItemsLoading, setAllItemsLoading] = useState(true);



  useEffect(() => {
    setAllItemsLoading(true);
  
    try {
      const data = async () => {
        const back = await API.get(`/items/all`).then(
          (response) => response.data
        );
        setAllItems(back);
        //console.log(allItems);
        setAllItemsLoading(false);
        //{date,description,id,images,isLost,latitude,location,longitude,subCategory,superCategory,title,userId }= allItems
      };
      data();
    } catch (error) {
      console.log(error + "from (/items/all) endpoint");
    }
  }, []);
  const getItemById = useCallback(
    (id) => {
      //after getting Data
      // i'm going to use this function to get data of selected item Directly
      const selectedItem = allItems.find((i) => i.id === id);

      console.log(selectedItem);
      return selectedItem;
    },
    [allItems]
  );



  //memoize obeject that contain context data and send to any one who use this context ...
  let contextValue = useMemo(
    () => ({
      allItems,
      getItemById,
      setAllItems,

    }),
    [allItems, getItemById, setAllItems]
  );

  return (
    <itemsContext.Provider value={contextValue}>
      {allItemsLoading ? <Loading /> : children}
    </itemsContext.Provider>
  );
};

export default itemsContext;
