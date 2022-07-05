import React from "react";
import Wrapper from "../components/ItemDetails/Wrapper/wrapper";
import { ItemsProvider } from "../Contexts/itemsContext";


export default function ItemDetailsPage() {
  return (
    <div>
      <ItemsProvider>
        <Wrapper/>
        </ItemsProvider>
    </div>
  );
}
