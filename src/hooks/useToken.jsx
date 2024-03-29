import { useState,useContext } from "react";
import jwt from "jwt-decode";
import ChatContext from "../Contexts/ChatContext";

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    // const userToken = JSON.parse(tokenString);
    return tokenString ? tokenString : null;
    
    // return userToken?.token;
  };

  const [token, setToken] = useState(getToken());
  const {upDateChatData} = useContext(ChatContext);

  const saveToken = (userToken) => {
    const claims = jwt(userToken);
    sessionStorage.setItem("token", JSON.stringify(userToken));
    sessionStorage.setItem("userId", claims.userId);
    sessionStorage.setItem("userName", claims.userName);
    sessionStorage.setItem("email", claims.email);
    sessionStorage.setItem("roles", claims.roles);
    sessionStorage.setItem("fullName", claims.fullName);
    sessionStorage.setItem("firstName", claims.firstname);
    sessionStorage.setItem("lastName", claims.lasttname);
    if(claims.phone){
      sessionStorage.setItem("phone", claims.phone);
    }
    upDateChatData(claims.userId);
  
    console.log(claims);
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token,
  };
}
