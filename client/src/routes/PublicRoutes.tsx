import { Route } from "react-router-dom";
import { Home } from "../pages/main/Home";
import { Login } from "../pages/auth/Login";
import { Registration } from "../pages/auth/Registration";

export const PublicRoutes = (
    <>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
    </>
);