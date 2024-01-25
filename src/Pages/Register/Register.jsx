import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { FcGoogle } from 'react-icons/fc';
import { ImSpinner9 } from "react-icons/im";
import { imageUpload } from "../../api/utils";
import useAuth from '../../Hook/useAuth';
import { getToken, saveUser } from "../../api/auth";

const Register = () => {

    // 3.O
    const {createUser,signInWithGoogle,update,loading} = useAuth()

    const location = useLocation();

    const navigate = useNavigate();

    const [signUpError, setSignUpError] = useState('');

    const [signUpSuccess,setSignUpSuccess] = useState('');

    // 3.O
    const handleRegister = async(e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const accepted = form.terms.checked;
        const image = form.image.files[0];

        // 3.O
        try{
            //1. upload image
            const imageData = await imageUpload(image)
            // console.log(imageData);
            //2. create a new user
            const result =await createUser(email,password)
            console.log(result);
            //3. save username and profile photo
            await update(name, imageData?.data?.display_url)
            //4. save user data in database
            const dbResponse = await saveUser(result?.user)
            console.log(dbResponse);
            //5. get tokens
            await getToken(result?.user?.email)
            navigate(location?.state ? location.state : '/');
            swal("Success!", "Sign Up Successful!", "successful");
        }catch(err){
            console.log(err);
            swal("Error!", "Sign Up Error!", "error");
        }

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
            navigate(location?.state ? location.state : '/');
            swal("Success!", "Sign Up Successful!", "successful");
        } catch (err) {
            console.log(err);
            swal("Error!", "Sign Up Error!", "error");
        }
    }

    return (
        <div>
            <Helmet>
                <title>Roam Rift || SignUp</title>
            </Helmet>
            {/* 3.O */}
            <div className='flex justify-center items-center min-h-screen bg-gray-100'>
                <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-400 text-gray-900'>
                    <div className='mb-8 text-center'>
                        <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
                        <p className='text-sm text-black-400'>Welcome to RoamRift</p>
                    </div>
                    <form
                        onSubmit={handleRegister}
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
                                    name='image'
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
                                {loading? (<ImSpinner9 className="animate-spin m-auto text-2xl" />) : ('Sign Up')}
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
                    <div onClick={handleGoogleSignIn} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                        <FcGoogle size={32} />

                        <p>Continue with Google</p>
                    </div>
                    <p className='px-6 text-sm text-center text-black-400'>
                        Already have an account?{' '}
                        <Link
                            to='/login'
                            className='hover:underline hover:text-pink-500 text-black font-semibold'
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;