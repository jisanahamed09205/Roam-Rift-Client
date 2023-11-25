import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../Layout/MainLayout';
import Home from "../Pages/Home/Home/Home";
import Community from '../Pages/Community/Community';
import Blogs from '../Pages/Blogs/Blogs';
import AboutUs from '../Pages/AboutUs/AboutUs';
import ContactUs from '../Pages/ContactUs/ContactUs';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Profile from '../Pages/Profile/Profile';
import Offer from "../Pages/Offer/Offer";
import Dashboard from '../Pages/Dashboard/Dashboard';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        //normal user routes
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:'community',
          element: <Community></Community>
        },
        {
          path: 'blogs',
          element: <Blogs></Blogs>
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
          path: 'profile',
          element: <Profile></Profile>
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
      children:[]
    }
  ]);

export default router;