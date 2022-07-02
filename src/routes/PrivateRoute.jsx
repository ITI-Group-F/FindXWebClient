import { Navigate } from "react-router-dom";
import useToken from "../hooks/useToken";

const PrivateRoute = ({ children }) => {
  const { token } = useToken();

  if (!token) {
    return <Navigate to="/auth/login" />;
  }
  return <>{children}</>;
};

export default PrivateRoute;
