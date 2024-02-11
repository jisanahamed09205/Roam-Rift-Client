import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import Loader from "../Shared/Loader/Loader";

const PrivateRoute = ({children}) => {

    const {user,loading} = useAuth();

    const location = useLocation();
    // console.log(location.pathname);

    // const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };

    if(loading){
        return <Loader/>
    }

    if(user){
        return children;
    }

    // return <Navigate state={location.pathname} to='/login' replace></Navigate>;
    return <Navigate to='/login' state={{from:location}} replace='true'></Navigate>;
};

export default PrivateRoute;