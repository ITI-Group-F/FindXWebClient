import axios from "../Services/api";
import { createContext, useCallback, useEffect, useMemo, useState } from "react";

const itemsContext = createContext();
                                     // how to deal with context api
                 //1 - ** DON'T FORGET TO MAKE THE PROVIDER AS A PARENT TO YOUR COMPONENT**
                 //2 - import useContext from "react" and itemsContext in your component 
                 //3 - give itemsContext as a parameter to the useContext hook in your component i.e : useCoentxt(itemsContext)

export const ItemstProvider = (props) =>{
    const {children} = props;
    
    //making a state and initialize it with null
    const [items,setItems]=useState([]);

    useEffect(()=>{
        //gohary you will get items based on search condition and set items and also you will send me the id of selected item and the getItemById function
        //please make sure that you are calling the right end point to get data
        axios.get('/UserItems/ab34115c-bd2f-4ec2-abbc-c5646cd62ecb').then(data=>{
            setItems(data);
        }).catch(err=>{
            //oops somthing might went wrong..
            // route to our Error Page...

        })
    },[])


    const getItemById=useCallback((id)=>{

        //after getting Data 
        // i'm going to use this function to get data of selected item Directly
       const selectedItem=items.find(i=>i.id===id);

       return selectedItem;
    },[items])

    //memoize obeject that contain context data and send to any one who use this context ...
    const contextValue=useMemo(()=>({

        getItemById,
        items
    }),[items,getItemById])

    return (

    
        <itemsContext.Provider value={contextValue}>
            {children}
        </itemsContext.Provider>
    );
};


export default itemsContext;