import { Navigate } from "react-router-dom";
import useToken from "../hooks/useToken";

const PrivateRoute = ({ children }) => {
  const { token, setToken } = useToken();

  return token ? <>{children}</> : <Navigate replace={true} to="/auth/login" />;
};

export default PrivateRoute;
