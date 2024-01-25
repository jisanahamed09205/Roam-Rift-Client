import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'

const SignUp = () => {
  return (
      <div className='flex justify-center items-center min-h-screen bg-gray-100'>
          <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-400 text-gray-900'>
              <div className='mb-8 text-center'>
                  <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
                  <p className='text-sm text-black-400'>Welcome to RoamRift</p>
              </div>
              <form
                  // onSubmit={handleRegister}
                  noValidate=''
                  action=''
                  className='space-y-6 ng-untouched ng-pristine ng-valid'
              >
                  <div className='space-y-4'>
                      <div>
                          <label htmlFor='email' className='block mb-2 text-sm'>
                              Name
                          </label>
                          <input
                              type='text'
                              name='name'
                              id='name'
                              placeholder='Enter Your Name Here'
                              className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                              data-temp-mail-org='0'
                          />
                      </div>
                      <div>
                          <label htmlFor='image' className='block mb-2 text-sm'>
                              Select Image:
                          </label>
                          <input
                              required
                              type='file'
                              id='image'
                              name='photo'
                              accept='image/*'
                          />
                      </div>
                      <div>
                          <label htmlFor='email' className='block mb-2 text-sm'>
                              Email address
                          </label>
                          <input
                              type='email'
                              name='email'
                              id='email'
                              required
                              placeholder='Enter Your Email Here'
                              className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                              data-temp-mail-org='0'
                          />
                      </div>
                      <div>
                          <div className='flex justify-between'>
                              <label htmlFor='password' className='text-sm mb-2'>
                                  Password
                              </label>
                          </div>
                          <input
                              type='password'
                              name='password'
                              autoComplete='new-password'
                              id='password'
                              required
                              placeholder='*******'
                              className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                          />
                      </div>
                      <div className="inline-flex items-center">
                          <label
                              className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
                              data-ripple-dark="true"
                          >
                              <input
                                  name="terms"
                                  type="checkbox"
                                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-pink-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                                  id="terms"
                              />
                              <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-black opacity-0 transition-opacity peer-checked:opacity-100">
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-3.5 w-3.5"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      stroke="currentColor"
                                      strokeWidth="1"
                                  >
                                      <path
                                          fillRule="evenodd"
                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                          clipRule="evenodd"
                                      ></path>
                                  </svg>
                              </span>
                          </label>
                          <label
                              className="mt-px cursor-pointer select-none font-light"
                              htmlFor="terms"
                          >
                              <p className="text-black flex items-center font-sans text-sm font-normal leading-normal antialiased">
                                  I agree the
                                  <a
                                      className="font-medium transition-colors hover:text-pink-500"
                                      href="#"
                                  >
                                      &nbsp;Terms and Conditions
                                  </a>
                              </p>
                          </label>
                      </div>
                  </div>

                  <div>
                      <button
                          type='submit'
                          className='bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-orange-900 via-amber-100 to-orange-900 w-full rounded-md py-3 font-bold text-black'
                      >
                          Sign Up
                      </button>
                  </div>
              </form>
              <div className='flex items-center pt-4 space-x-1'>
                  <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                  <p className='px-3 text-sm dark:text-gray-400'>
                      Sign up with social accounts
                  </p>
                  <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
              </div>
              <div className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                  <FcGoogle size={32} />

                  <p>Continue with Google</p>
              </div>
              <p className='px-6 text-sm text-center text-black-400'>
                  Already have an account?{' '}
                  <Link
                      to='/login'
                      className='hover:underline hover:text-pink-500 text-black-600'
                  >
                      Login
                  </Link>
                  .
              </p>
          </div>
      </div>
  )
}

export default SignUp



// ////////////////////////////Resgister page code 
// import { Helmet } from "react-helmet-async";
// import { useContext, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import swal from "sweetalert";
// import { FcGoogle } from 'react-icons/fc';
// import { AuthContext } from "../../Provider/AuthProvider";
// import { useForm } from "react-hook-form";

const Register = () => {

    const {register,handleSubmit,watch,formState: { errors },} = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }

    const {createUser,signInWithGoogle,update} = useContext(AuthContext)

    const location = useLocation();

    const navigate = useNavigate();

    const [signUpError, setSignUpError] = useState('');

    const [signUpSuccess,setSignUpSuccess] = useState('');

    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        // console.log(name,email,password,accepted);
        // console.log(photo);

        //reset error
        setSignUpError('');
        setSignUpSuccess('');

        if(password.length < 6){
            swal("Error!", "Password Should be at last 6 characters or longer !", "warning")
            return ;
        }
        else if(!/[A-Z]/.test(password)){
            swal("Error!", "Your password should have at least one upper case characters or longer!", "warning")
            return;
        }
        else if(!/^(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹]).*$/.test(password)){
            swal("Error!", "Your password should at least one special characters or longer!", "warning")
            return;
        }
        else if(!accepted){
            swal("Error!", "Please Accept our terms and conditions!", "warning")
            return ;
        }

        //create user
        createUser(email,password)
        .then(result =>{
            // console.log(result.user);
            swal("Successful!", "Your Registration Success!", "success")

            update(name,photo)
            .then()
            .catch()
            navigate(location?.state ? location.state : '/');
            // {location.state ? navigate(location.state) : navigate('/')}
            // location.reload()
            // {location.state ? navigate(location.state) : navigate('/')}

            //update profile
            // updateProfile(result.user, {
            //     displayName: name,
            //     photoURL: "https://example.com/jane-q-user/profile.jpg"
            // })
            // .then( () =>console.log('profile updated'))
            // .catch()
        })
        .catch(error =>{
            console.error(error);
            swal("Success!", "Registration Successful!", "successful");
        })
    }
    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result=>{
            // console.log(result.user);
            swal("Successful!", "Your Login Success!", "success")
            // {location.state ? navigate(location.state) : navigate('/')}
            navigate(location?.state ? location.state : '/');
        })
        .catch(error=>{
            console.error(error)
        })
    }

    return (
        <div>
            <Helmet>
                <title>Roam Rift || SignUp</title>
            </Helmet>
            <div className='bg-blue-200 flex justify-center items-center py-5'>
                <div className="text-black relative flex flex-col rounded-xl bg-transparent bg-clip-border shadow-none">
                    <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-black">
                        Register
                    </h4>
                    <p className="text-black mt-1 block font-sans text-base font-normal leading-relaxed antialiased">
                        Enter your details to register.
                    </p>
                    <form onSubmit={handleRegister} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-2 flex flex-col gap-6">
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    type="text"
                                    name="name"
                                    className="peer h-full w-full rounded-md border border-pink-500 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=""
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Name
                                </label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    type="text"
                                    name="photo"
                                    className="peer h-full w-full rounded-md border border-pink-500 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=""
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    PhotoURL
                                </label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    className="peer h-full w-full rounded-md border border-pink-500 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                    type="email"
                                    name="email"
                                    required
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Email
                                </label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    type="password"
                                    name="password"
                                    className="peer h-full w-full rounded-md border border-pink-500 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                    required
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Password
                                </label>
                            </div>
                        </div>


                        <div className="inline-flex items-center">
                            <label
                                className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
                                // htmlFor="checkbox"
                                data-ripple-dark="true"
                            >
                                <input
                                    name="terms"
                                    type="checkbox"
                                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-pink-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                                    id="terms"
                                />
                                <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-black opacity-0 transition-opacity peer-checked:opacity-100">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-3.5 w-3.5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </span>
                            </label>
                            <label
                                className="mt-px cursor-pointer select-none font-light"
                                htmlFor="terms"
                            >
                                <p className="text-black flex items-center font-sans text-sm font-normal leading-normal antialiased">
                                    I agree the
                                    <a
                                        className="font-medium transition-colors hover:text-pink-500"
                                        href="#"
                                    >
                                        &nbsp;Terms and Conditions
                                    </a>
                                </p>
                            </label>
                        </div>
                        {/* <div className='mb-2'>
                            <input type="checkbox" />
                        </div> */}
                        <button
                            className="mt-2 block w-full select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            // type="button"
                            data-ripple-light="true"
                        >
                            Register
                        </button>
                        <p className="mt-2 block text-center font-sans text-base font-normal leading-relaxed antialiased">
                            Already have an account?
                            <Link
                                to='/login'
                                className="font-medium text-pink-500 transition-colors hover:text-blue-700"
                                href="#"
                            >
                                Login
                            </Link>
                        </p>
                    </form>
                    {/* <div className="social-account-container">
                        <span className="title">Or Sign up with</span>
                        <div className="social-accounts">
                            <button onClick={handleGoogleSignIn} className="social-button google">
                                <svg viewBox="0 0 488 512" height="1em" xmlns="http://www.w3.org/2000/svg" className="svg">
                                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                                </svg>
                            </button>
                        </div>
                    </div> */}
                    <p className="flex mx-auto text-center"><button
                    onClick={handleGoogleSignIn}
                    className=''>Sign Up with<br /><FcGoogle className="text-4xl mx-auto"></FcGoogle></button></p>
                    {/* {
                        signupError && swal("Error!", "Email Already in use!", "warning")
                    }
                    {
                        signUpSuccess && swal("Successfull!", "Your Registration Success!", "success")
                    } */}
                </div>
            </div>
        </div>
    );
};

// export default Register;

/////////////////////Auth Provider raw code
import { createContext, useEffect, useState } from "react";
// import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from "axios";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const update = (name,photo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName:name, 
            photoURL:photo
        })
    }

    const login = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth,currentUser =>{
            // console.log('user in the auth state changed',currentUser);
            // const userEmail = currentUser?.email || user.email;
            setUser(currentUser);
            setLoading(false)
            //if user exist
            if(currentUser){
                const loggedUser = {email:currentUser?.email}
                axios.post('http://localhost:5000/jwt',loggedUser, { withCredentials:true })
                .then(res=>{
                    console.log('token response',res.data);
                })
            }
            // else{
            //     axios.post('https://repair-revivalists-server.vercel.app/logout',loggedUser, {
            //         withCredentials: true
            //     })
            //     .then(res=>{
            //         console.log(res.data);
            //     })
            // }
        })
        return () =>{
            unSubscribe();
        }
    },[])

    const authInfo ={
        user,createUser,logOut,login,loading,signInWithGoogle,update
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

// export default AuthProvider;