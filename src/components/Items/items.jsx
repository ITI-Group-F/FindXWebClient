import * as React from "react";
import { useContext } from "react";
import itemsContext from "../../Contexts/itemsContext";
import ActionAreaCard from "./allItems";
import noAdds from "./../../images/myadds.webp";
import DrawerFilter from "./DrawerFilter";

//---------------------------------------------------------------------------------------

export default function Items() {
  let { allItems} = useContext(itemsContext);
  

/*   const x=useNavigate();

  x();
 */
 
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
    </div>
  );
}
