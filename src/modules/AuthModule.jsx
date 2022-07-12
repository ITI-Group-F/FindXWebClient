import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../components/NotFound";
import useToken from "../hooks/useToken";
import LoggedInRoute from "../routes/LoggedInRoute";

const Login = lazy(() => import("../components/auth/Login"));
const Register = lazy(() => import("../components/auth/Register"));

const AuthModule = () => {
  const { token, setToken } = useToken();

  return (
    <>
      <Routes>
        <Route path="login" element={<LoggedInRoute> <Login setToken={setToken} /> </LoggedInRoute>} />
        <Route path="register" element={<LoggedInRoute><Register setToken={setToken} /></LoggedInRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AuthModule;
