import { Navigate } from "react-router-dom";
import useToken from "../hooks/useToken";

const LoggedInRoute = ({ children }) => {
  const { token } = useToken();

  if (token) {
    return <Navigate to="/items" />;
  }
  return <>{children}</>;
};

export default LoggedInRoute;
