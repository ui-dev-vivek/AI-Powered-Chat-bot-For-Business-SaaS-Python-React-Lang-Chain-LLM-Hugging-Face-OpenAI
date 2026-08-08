import { Route } from "react-router-dom";
import { Home } from "../pages/main/Home";
import { Login } from "../pages/auth/Login";
import { Registration } from "../pages/auth/Registration";
import PublicLayout from "@/components/layouts/public/PublicLayout";

export const PublicRoutes = (
    <>
        <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />            
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
    </>
);