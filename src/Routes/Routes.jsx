import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../Layout/MainLayout';
import Home from "../Pages/Home/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        //normal user routes
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    },
  ]);

export default router;