import { createContext,useState} from "react";
import useClaims  from "../hooks/useClaims";

export const authenticationContext = createContext();

export const AuthContextProvider = (props) =>{
    const {children} = props;
    const [isloggedIn,setisloggedIn] = useState(false);
  
    const login = () =>{
        setisloggedIn(true);
        console.log("login");
    }
    return (
        
        <authenticationContext.Provider value={[isloggedIn,login]}>
            {children}
        </authenticationContext.Provider>
    );
};



export default authenticationContext;