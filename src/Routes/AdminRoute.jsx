import { Navigate } from "react-router-dom";
import './Loading.css'
import useRole from "../Hook/useRole";

const AdminRoute = ({children}) => {


    // const [role,loading] = useRole()
    //TanStackQuery
    const [role,isLoading] = useRole()



    // if(loading){
    //TanStackQuery
    if(isLoading){
        return <>
            <div>
                <div className="box-of-star1">
                    <div className="star star-position1" />
                    <div className="star star-position2" />
                    <div className="star star-position3" />
                    <div className="star star-position4" />
                    <div className="star star-position5" />
                    <div className="star star-position6" />
                    <div className="star star-position7" />
                </div>
                <div className="box-of-star2">
                    <div className="star star-position1" />
                    <div className="star star-position2" />
                    <div className="star star-position3" />
                    <div className="star star-position4" />
                    <div className="star star-position5" />
                    <div className="star star-position6" />
                    <div className="star star-position7" />
                </div>
                <div className="box-of-star3">
                    <div className="star star-position1" />
                    <div className="star star-position2" />
                    <div className="star star-position3" />
                    <div className="star star-position4" />
                    <div className="star star-position5" />
                    <div className="star star-position6" />
                    <div className="star star-position7" />
                </div>
                <div className="box-of-star4">
                    <div className="star star-position1" />
                    <div className="star star-position2" />
                    <div className="star star-position3" />
                    <div className="star star-position4" />
                    <div className="star star-position5" />
                    <div className="star star-position6" />
                    <div className="star star-position7" />
                </div>
                <div data-js="astro" className="astronaut">
                    <div className="head" />
                    <div className="arm arm-left" />
                    <div className="arm arm-right" />
                    <div className="body">
                        <div className="panel" />
                    </div>
                    <div className="leg leg-left" />
                    <div className="leg leg-right" />
                    <div className="schoolbag" />
                </div>
            </div>
    </>
    }

    if(role === 'Admin'){
        return children;
    }

    return <Navigate to='/dashboard'></Navigate>;
};

export default AdminRoute;