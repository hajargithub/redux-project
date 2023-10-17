import { createBrowserRouter } from "react-router-dom";
import SiteLayout from "./components/layout/SiteLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Panier from "./pages/Panier";
import Shop from "./pages/Shop";
import { AuthLoader } from "./store/features/user/authActions";

export const routers = createBrowserRouter([{
    path: "/",
    element: < SiteLayout />,
    children: [

        {
            path: "/",
            element: < Home />,

        },

        {
            path: "/shop",
            element: < Shop />
            // ,
            // loader: AuthLoader
        },
        {
            path: "/login",
            element: < Login />,

        },
        {
            path: "/panier",
            element: < Panier />,

        }
    ]
}]);