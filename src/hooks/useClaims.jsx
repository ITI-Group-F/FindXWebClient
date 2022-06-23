import { useState } from "react";

export default function useClaims() {
  const getClaims = () => {
    const claims = {
      userId: sessionStorage.getItem("userId"),
      userName: sessionStorage.getItem("userName"),
      email: sessionStorage.getItem("email"),
    };
    return claims;
  };

  const [claims, setClaims] = useState(getClaims());

  return {
    claims,
  };
}
