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
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import WishList from "../Pages/WishList/WishList";
import PackagesPage from "../Pages/Home/TourType/PackagesPage/PackagesPage";
import AllPackages from "../Pages/Home/AllPackages/AllPackages";
import PackageDetail from "../Pages/PackageDetail/PackageDetail";
import GuideBio from '../Components/GuideBio/GuideBio';
import DashboardLayout from "../Layout/DashboardLayout";
import AddPackage from "../Pages/Dashboard/Admin/AddPackage";
import MyAssignedTours from "../Pages/Dashboard/Tour Guide/MyAssignedTours";
import MyListing from "../Pages/Dashboard/Tour Guide/MyListing";
import TourGuideRoute from "./TourGuideRoute";
import AdminRoute from "./AdminRoute";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import MyProfile from "../Pages/Dashboard/Common/MyProfile";
import MyBookings from "../Pages/Dashboard/Tourist/MyBookings";

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
        },
        {
          path:'community',
          element: <PrivateRoute><Community></Community></PrivateRoute>
        },
        {
          path: 'blogs',
          element: <PrivateRoute><Blogs></Blogs></PrivateRoute>
        },
        {
          path:'aboutUs' ,
          element: <PrivateRoute><AboutUs></AboutUs></PrivateRoute>
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
          path: 'offer',
          element: <Offer></Offer>
        },
        {
          path:'packagesPage/:tourType',
          element: <PackagesPage></PackagesPage>,
          // loader: ({params}) => fetch(`./services.json/${params.name}`)
          // loader: () => fetch('https://roam-rift-server.vercel.app/services')
          // loader: () => fetch(`./services.json`)
        },
        {
          path:'allPackages',
          element: <AllPackages></AllPackages>
        },
        {
          path:'packageDetail/:id',
          element: <PrivateRoute><PackageDetail></PackageDetail></PrivateRoute>
        },
        {
          path:'guideBio/:email',
          element: <GuideBio></GuideBio>,
          // loader: ({params}) => fetch(`./tourGuid.json/guideBio/${params.id}`)
          // loader: () => fetch(`https://roam-rift-server.vercel.app/services`)
        }
      ]
    },
    {
      path:'/dashboard',
      element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
      // errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'add-package',
          element: 
            <PrivateRoute>
              <TourGuideRoute>
                <AddPackage></AddPackage>
              </TourGuideRoute>
            </PrivateRoute>
        },
        {
          path:'my-listing',
          element:
            <PrivateRoute>
              <TourGuideRoute>
                <MyListing></MyListing>
              </TourGuideRoute>
            </PrivateRoute>
        },
        {
          path:'assigned-tours',
          element: 
            <PrivateRoute>
              <TourGuideRoute>
                <MyAssignedTours></MyAssignedTours>
              </TourGuideRoute>
            </PrivateRoute>
        },
        {
          path: 'manage-users',
          element:
          <PrivateRoute>
            <AdminRoute>
              <ManageUsers></ManageUsers>
            </AdminRoute>
          </PrivateRoute>
        },
        {
          path: '/dashboard',
          element: 
            <PrivateRoute>
                <MyProfile></MyProfile>
            </PrivateRoute>
        },
        {
          path: 'my-bookings',
          element:
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        },
        {
          path: 'my-wishlist',
          element: 
          <PrivateRoute>
            <WishList></WishList>
          </PrivateRoute>
        }
      ]
    }
  ]);

export default router;