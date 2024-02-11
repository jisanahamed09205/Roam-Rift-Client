import { Navigate } from "react-router-dom";
import useRole from "../Hook/useRole";
import Loader from "../Shared/Loader/Loader";

const CommonRoute = ({children}) => {


    // const [role,loading] = useRole()
    //TanStackQuery
    const [role,isLoading] = useRole()



    // if(loading){
    //TanStackQuery
    if(isLoading){
        return <Loader/>
    }

    if (role === 'Admin' || role === 'Tour Guide') {
        return children;
    }

    return <Navigate to='/dashboard'></Navigate>;
};

export default CommonRoute;