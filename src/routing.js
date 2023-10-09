import { createBrowserRouter } from "react-router-dom";
import DetailSop from "./pages/DetailSop";
import Panier from "./pages/Panier";
import Shop from "./pages/Shop";

export const routers = createBrowserRouter([{
    path: "/",
    element: < Shop />
},
{
    path: "/panier",
    element: < Panier />,

}
]);