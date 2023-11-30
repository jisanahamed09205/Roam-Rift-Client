import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../Layout/MainLayout';
import Home from "../Pages/Home/Home/Home";
import Community from '../Pages/Community/Community';
import Blogs from '../Pages/Blogs/Blogs';
import AboutUs from '../Pages/AboutUs/AboutUs';
import ContactUs from '../Pages/ContactUs/ContactUs';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Offer from "../Pages/Offer/Offer";
import Dashboard from '../Pages/Dashboard/Dashboard';
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import WishList from "../Pages/WishList/WishList";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        //normal user routes
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('https://roam-rift-server.vercel.app/services')
        },
        {
          path:'community',
          element: <Community></Community>
        },
        {
          path: 'blogs',
          element: <PrivateRoute><Blogs></Blogs></PrivateRoute>
        },
        {
          path:'aboutUs' ,
          element: <AboutUs></AboutUs>
        },
        {
          path:'contactUs',
          element: <ContactUs></ContactUs>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path:'register',
          element:<Register></Register>
        },
        {
          path: 'wishList',
          element: <WishList></WishList>
        },
        {
          path: 'offer',
          element: <Offer></Offer>
        }
      ]
    },
    {
      path:'dashboard',
      element: <Dashboard></Dashboard>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[]
    }
  ]);

export default router;