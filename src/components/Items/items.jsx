import * as React from "react";
import { useContext } from "react";
import itemsContext from "../../Contexts/itemsContext";
import ActionAreaCard from "./allItems";
import noAdds from "./../../images/myadds.webp";
import DrawerFilter from "./DrawerFilter";
import { useEffect } from "react";
import API from "../../Services/api";

//---------------------------------------------------------------------------------------

export default function Items() {
//  window.location.reload(true);
//  window.location.reload(false);
  let { allItems,setAllItems } = useContext(itemsContext);

  /*   const x=useNavigate();

  x();
 */
//window.localStorage.setItem('all_Items',allItems);


useEffect(() => {
  

  try {
    const data = async () => {
      const back = await API.get(`/items/all`).then(
        (response) => response.data
      );
      setAllItems(back);
      //console.log(allItems);
      //{date,description,id,images,isLost,latitude,location,longitude,subCategory,superCategory,title,userId }= allItems
    };
    data();
  } catch (error) {
    console.log(error + "from (/items/all) endpoint");
  }
}, []);



  

  return (
    <div>
      <DrawerFilter />
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
      <div style={{ overflow: "hidden" }}>
        <img src="https://imgur.com/2isonGi.png" />
      </div>
    </div>
  );
}
