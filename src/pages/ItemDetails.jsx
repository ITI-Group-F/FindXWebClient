import React from "react";
import Wrapper from "../components/ItemDetails/Wrapper/wrapper";
import { ItemsProvider } from "../Contexts/itemsContext";


 function ItemDetailsPage() {
  return (
    <div>
      <ItemsProvider>
        <Wrapper/>
        </ItemsProvider>
    </div>
  );
}


export default React.memo(ItemDetailsPage);