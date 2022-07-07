import { createContext } from "react";

export const userItemsContext = createContext();
// how to deal with context api
//1 - ** DON'T FORGET TO MAKE THE PROVIDER AS A PARENT TO YOUR COMPONENT**
//2 - import useContext from "react" and userItemsContext in your component
//3 - give userItemsContext as a parameter to the useContext hook in your component i.e : useCoentxt(userItemsContext)

export const userItemstProvider = (props) => {
  const { children } = props;

  return (
    //call the userItems endpoint and apply your desired logic here

    //you can use useMemo() to send your implemintation to the children for example : ....

    // const contextValues = useMemo(.....)
    /*<userItemsContext.Provider value = {contextValues}>
            {children}
        </userItemsContext.Provider> */

    <userItemsContext.Provider>{children}</userItemsContext.Provider>
  );
};

export default userItemsContext;
