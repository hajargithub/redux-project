import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routers } from "./routing";

function App() {
  return (
    // <div className="container mx-auto">
    <RouterProvider router={routers}></RouterProvider>
    // </div>
  );
}

export default App;
