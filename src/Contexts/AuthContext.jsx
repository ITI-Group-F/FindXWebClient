import { createContext, useState } from "react";
import useClaims from "../hooks/useClaims";


export const authenticationContext = createContext();

export const AuthContextProvider = (props) => {
    const { children } = props;
    const token = sessionStorage.getItem("token");
    
    const [isloggedIn, setisloggedIn] = useState((() => {
        if (token) {
            return true;
        }
        else{
            return false;
        }
    }));

    const login = () => {
        setisloggedIn(true);
    }
    return (

        <authenticationContext.Provider value={[isloggedIn, login]}>
            {children}
        </authenticationContext.Provider>
    );
};



export default authenticationContext;