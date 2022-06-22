import { createContext } from "react";

export const chatHistoryContext = createContext();
                                     // how to deal with context api
                 //1 - ** DON'T FORGET TO MAKE THE PROVIDER AS A PARENT TO YOUR COMPONENT**
                 //2 - import useContext from "react" and chatHistoryContext in your component 
                 //3 - give chatHistoryContext as a parameter to the useContext hook in your component i.e : useCoentxt(chatHistoryContext)

export const chatHistorytProvider = (props) =>{
    const {children} = props;

    return (
        
        //call the chatHistory endpoint and apply your desired logic here
        
        //you can use useMemo() to send your implemintation to the children for example : .... 
        
        // const contextValues = useMemo(.....)
        /*<chatHistoryContext.Provider value = {contextValues}>
            {children}
        </chatHistoryContext.Provider> */
    
        <chatHistoryContext.Provider>
            {children}
        </chatHistoryContext.Provider>
    );
};


export default chatHistoryContext;