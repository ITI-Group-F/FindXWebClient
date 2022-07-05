import * as React from "react";
import API from "../../Services/api";
import { useContext, useEffect, useState } from "react";
import itemsContext from "../../Contexts/itemsContext";
import Loading from "../Loading";
import ActionAreaCard from "./allItems";

  //---------------------------------------------------------------------------------------

export default function Items() {
  let { allItems } = useContext(itemsContext);
  let [subKey, setsubKey] = useState(null);
  let [superKey, setsuperKey] = useState(null);
  let [underSubData, setunderSubData] = useState([]);
  let [underSuperData, setunderSuperData] = useState([]);
  let [superLoading, setSuperLoading] = useState(true);
  let [subLoading, setSubLoading] = useState(true);
  let [didMountSub, setDidMountSub] = useState(false);
  let [didMountSuper, setDidMountSuper] = useState(false);

  
  //---------------------------------------------------------------------------------------
  
      useEffect(() => { 
        
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
      
      }, [subKey])

      const GetSuperCategories = () => {

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
      };
      let Superval = () => {

        return (
          <select
            name="sub"
            id="sub"
            defaultValue="Choose a Subcategory"
            onChange={SetSuperCat}
          >
            <option disabled defaultValue="Animals">Select a Super Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Animals">Animals</option>
            <option value="Belongings">Belongings</option>
            <option value="Other">Other</option>

          </select>
        );
      };

      let SetSuperCat = (e) => {
        setsuperKey(e.target.value);
        setsubKey(null);
      }



      const GetSubCategories = () => {
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


      };



      let Subval = () => {

        return (
          <select
            name="sub"
            id="sub"
            defaultValue="Choose a Subcategory"
            onChange={SetSubCat}
          >
            <option disabled>selecet a subcategory</option>
            <option value="Tablets">Tablets</option>
            <option value="Mobiles">Mobiles</option>
            <option value="Laptops">Laptops</option>
            <option value="Birds">Birds</option>
            <option value="Cats">Cats</option>
            <option value="Dogs">Dogs</option>
            <option value="Personal cards and papers">
              Personal cards and papers
            </option>
            <option value="Wallets">Wallets</option>
            <option value="Glasses">Glasses</option>
            <option value="Money">Money</option>
            <option value="Bags">Bags</option>
            <option value="Accessories">Accessories</option>
            <option value="Other">Other</option>
          </select>
        );
      };

      let SetSubCat = (e) => {
        setsubKey(e.target.value);
        setsuperKey(null);
      }

      /* <Route path="subcategory/:subKey" element={<Items />} />
              <Route path="supercategory/:superKey" element={<Items />} /> */

      let renderAllItemsBtn = ()=>{
        setsubKey(null);
        setsuperKey(null);
      }


      if (subKey !== null) {
        return (
          <div>
            {Subval()}
            {Superval()}
            <button onClick={()=>{renderAllItemsBtn()}}>View All Items</button>
            
           <br />
            {subLoading ? <Loading /> : <ActionAreaCard allItemsData={underSubData}/>}          
          </div>
        )
      } else if (superKey !== null) {
        return (
          <div>
            {Subval()}
            {Superval()}
            <button onClick={()=>{renderAllItemsBtn()}}>View All Items</button>
            <br />
            {superLoading ? <Loading /> : <ActionAreaCard allItemsData={underSuperData}/>}
          </div>
        )
      } else {
        return (
          <div>
            {Subval()}
            {Superval()}
            <br />
            <ActionAreaCard allItemsData = {allItems}/>

          </div>
        )
      }

}

