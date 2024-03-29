import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import swal from 'sweetalert';
import useAuth from '../../Hook/useAuth';
import { getToken, saveUser } from "../../api/auth";


const Login = () => {

    const {login,signInWithGoogle} = useAuth();

    const location = useLocation();

    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/'

    const handleLogin = async (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password);

         // 3.O
         try {
            //2. create a new user
            const result = await login(email,password)
            console.log(result);
            //4. save user data in database
            const dbResponse = await saveUser(result?.user)
            console.log(dbResponse);
            //5. get tokens
            await getToken(result?.user?.email)
            navigate(from,{replace:true});
            swal("Success!", "Login Successful!", "success");
        } catch (err) {
            console.log(err);
            swal("Error!", "Login Error!", "error");
        }
    }
    const handleGoogleSignIn =async () =>{
        // 3.O
        try {
            //2. create a new user
            const result = await signInWithGoogle()
            console.log(result);
            //4. save user data in database
            const dbResponse = await saveUser(result?.user)
            console.log(dbResponse);
            //5. get tokens
            await getToken(result?.user?.email)
            navigate(from,{replace:true});
            swal("Success!", "Login Successful!", "success");
        } catch (err) {
            console.log(err);
            swal("Error!", "Login Error!", "error");
        }
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Roam Rift || Login</title>
            </Helmet>
            <div className="container-login bg-green-200">
                <div className="heading">Sign In</div>
                <form onSubmit={handleLogin} className="form" action>
                    <input placeholder="E-mail" id="email" name="email" type="email" className="input" required />
                    <input placeholder="Password" id="password" name="password" type="password" className="input" required />
                    <input defaultValue="Sign In" type="submit" className="login-button" />
                    <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        Don not have an account?
                        <Link
                            to='/register'
                            className="font-medium text-pink-500 transition-colors hover:text-blue-700"
                            href="#"
                        >
                            Register
                        </Link>
                    </p>
                </form>
                <div className="social-account-container">
                    <span className="title">Or Sign in with</span>
                    <div className="social-accounts">
                        <button onClick={handleGoogleSignIn} className="social-button google">
                            <svg viewBox="0 0 488 512" height="1em" xmlns="http://www.w3.org/2000/svg" className="svg">
                                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;