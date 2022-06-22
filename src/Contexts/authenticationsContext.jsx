import { createContext } from "react";

export const authenticationContext = createContext();
                                     // how to deal with context api
                 //1 - ** DON'T FORGET TO MAKE THE PROVIDER AS A PARENT TO YOUR COMPONENT**
                 //2 - import useContext from "react" and authenticationContext in your component 
                 //3 - give authenticationContext as a parameter to the useContext hook in your component i.e : useCoentxt(authenticationContext)

export const authenticationContextProvider = (props) =>{
    const {children} = props;

    return (
        
        //call the authentecation endpoint and apply your desired logic here
        
        //you can use useMemo() to send your implemintation to the children as follows : .... 
        
        // const contextValues = useMemo(.....)
        /*<authenticationContext.Provider value = {contextValues}>
            {children}
        </authenticationContext.Provider> */
    
        <authenticationContext.Provider>
            {children}
        </authenticationContext.Provider>
    );
};


export default authenticationContext;