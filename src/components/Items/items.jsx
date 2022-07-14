import * as React from "react";
import API from "../../Services/api";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import itemsContext from "../../Contexts/itemsContext";
import subAndSuperContext from "../../Contexts/subAndsuperContext";
import Loading from "../Loading";
import ActionAreaCard from "./allItems";
import Filters from "./filters";
import SubAndSuperItems from "./subAndSuperItems";
import SearchResults from "./searchResults";
import noAdds from "./../../images/myadds.webp";
import DrawerFilter from "./DrawerFilter";

//---------------------------------------------------------------------------------------

export default function Items() {
  let { allItems} = useContext(itemsContext);
  let {
    underSubData,
    underSuperData,
    SetSubCat,
    SetSuperCat,
    subKey,
    superKey,
    superLoading,
    subLoading,
    setSuperLoading,
    setSubLoading,
  } = useContext(subAndSuperContext);

/*   const x=useNavigate();

  x();
 */
  /*  let [subKey, setsubKey] = useState(null);
  let [superKey, setsuperKey] = useState(null);
  let [underSubData, setunderSubData] = useState([]);
  let [underSuperData, setunderSuperData] = useState([]); 
  let [superLoading, setSuperLoading] = useState(true);
  let [subLoading, setSubLoading] = useState(true);
  let [didMountSub, setDidMountSub] = useState(false);
  let [didMountSuper, setDidMountSuper] = useState(false);
  */

  //---------------------------------------------------------------------------------------

  /*   useEffect(() => { 
        
          setDidMountSub(true) }
        
        , [])
      useEffect(() => { 
        
          setDidMountSuper(true) }
        
        , [])

      useEffect(() => {
        
        if (didMountSuper) GetSuperCategories();
        
          setDidMountSuper(true);

      }, [superKey])

      useEffect(() => {
      
        if (didMountSub) GetSubCategories();
        
          setDidMountSub(true);
      
      }, [subKey]) */

  // let navigate = useNavigate();

  /* const GetSuperCategories = () => {

        try {
          const data = async () => {
            const back = await API.get(`/Items/undersup/${superKey}`).then(
              (response) => response.data
              );
              //console.log(back);
              
              setunderSuperData(back);
              setSuperLoading(false);
          };
          data();
        } catch (error) {
          console.log(error + "from (/Items/undersuper) endpoint");
        }
      }; */

  /*   let SetSuperCat = (e) => {
        setsuperKey(e.target.value);
        setsubKey(null);
        //navigate(`/about`);
      } */

  /*   const GetSubCategories = () => {
        try {
          const data = async () => {
            const back = await API.get(`/Items/undersub/${subKey}`).then(
              (response) => response.data
            );
            //console.log(back);
            setunderSubData(back);
            setSubLoading(false);
          };
          data();
        } catch (error) {
          console.log(error + "from (/Items/undersub) endpoint");
        }


      }; */

  /*  let SetSubCat = (e) => {
        setsubKey(e.target.value);
        setsuperKey(null);
        //navigate(`/subcategory/${e.target.value}`);

      } */

  /* <Route path="subcategory/:subKey" element={<Items />} />
              <Route path="supercategory/:superKey" element={<Items />} /> */

  /*  let renderAllItemsBtn = ()=>{
        setsubKey(null);
        setsuperKey(null);
        
      } */
  /* 

                        ** htsa3dny f mwdo3 el go back **

https://dev.to/raaynaldo/react-router-usehistory-uselocation-and-useparams-10cd


*/
  /* console.log("sub " +subLoading);
console.log("super " + superLoading); */
  //console.log(allItems);

  return (
    <div>
      <DrawerFilter />
      {/* <Filters /> */}
      <br />
      {allItems === [] ? (
        <img
          src={noAdds}
          alt=""
          className="img-fluid"
          width="200"
          height="auto"
        />
      ) : (
        <ActionAreaCard allItemsData={allItems} />
      )}
    </div>
  );
}
