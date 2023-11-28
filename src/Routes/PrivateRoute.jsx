import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import './Loading.css'
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext);

    const location = useLocation();
    // console.log(location.pathname);

    // const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };

    if(loading){
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

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>;
};

export default PrivateRoute;