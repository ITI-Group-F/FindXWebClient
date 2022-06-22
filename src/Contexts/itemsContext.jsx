import { createContext } from "react";

export const itemsContext = createContext();
                                     // how to deal with context api
                 //1 - ** DON'T FORGET TO MAKE THE PROVIDER AS A PARENT TO YOUR COMPONENT**
                 //2 - import useContext from "react" and itemsContext in your component 
                 //3 - give itemsContext as a parameter to the useContext hook in your component i.e : useCoentxt(itemsContext)

export const itemstProvider = (props) =>{
    const {children} = props;

    return (
        
        //call the items endpoint and apply your desired logic here
        
        //you can use useMemo() to send your implemintation to the children for example : .... 
        
        // const contextValues = useMemo(.....)
        /*<itemsContext.Provider value = {contextValues}>
            {children}
        </itemsContext.Provider> */
    
        <itemsContext.Provider>
            {children}
        </itemsContext.Provider>
    );
};


export default itemsContext;