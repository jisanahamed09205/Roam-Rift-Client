import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-screen bg-green-100 flex justify-center items-center font-Manrope ">
            <h1 className="text-4xl text-center"><span className=" text-orange-500 font-bold text-8xl">404</span> <br /> <span className=" text-red-500 font-semibold">Ooops</span> Sorry, we couldn't find this page!!<br /> <br /><span><Link to='/'><button className="btn btn-error font-semibold">Go Home</button></Link></span></h1>
        </div>
    );
};

export default ErrorPage;