import { useState } from "react";
import jwt from "jwt-decode";

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    const claims = jwt(userToken);
    sessionStorage.setItem("token", JSON.stringify(userToken));
    sessionStorage.setItem("userId", JSON.stringify(claims.userId));
    sessionStorage.setItem("userName", JSON.stringify(claims.userName));
    sessionStorage.setItem("email", JSON.stringify(claims.email));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token,
  };
}
