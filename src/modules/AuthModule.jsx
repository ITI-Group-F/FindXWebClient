import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../components/NotFound";
import useToken from "../hooks/useToken";

const Login = lazy(() => import("../components/auth/Login"));
const Register = lazy(() => import("../components/auth/Register"));

const AuthModule = () => {
  const { token, setToken } = useToken();

  return (
    <>
      <Routes>
        <Route path="login" element={<Login setToken={setToken} />} />
        <Route path="register" element={<Register setToken={setToken} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AuthModule;
