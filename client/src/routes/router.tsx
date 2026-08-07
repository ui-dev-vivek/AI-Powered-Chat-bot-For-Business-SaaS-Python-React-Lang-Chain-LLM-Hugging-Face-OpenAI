import { BrowserRouter, Routes } from "react-router-dom";

import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                {PublicRoutes}
                {PrivateRoutes}
            </Routes>
        </BrowserRouter>
    );
}

export default Router;