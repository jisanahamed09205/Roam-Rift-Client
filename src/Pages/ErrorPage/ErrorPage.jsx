/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div className="h-screen bg-green-100 flex justify-center items-center font-Manrope ">
            <h1 className="text-4xl text-center"><span className=" text-orange-500 font-bold text-8xl">404</span> <br /> <span className=" text-red-500 font-semibold">Ooops</span> Sorry, we couldn't find this page!!<br /> <br />
                <div className="flex justify-center">
                    <button
                        onClick={() => navigate(-1)}
                        className='flex items-center justify-center w-1/2 px-5 py-1 text-sm text-black font-bold transition-colors duration-200 bg-green-500 border rounded-lg gap-x-2 sm:w-auto   hover:bg-green-400 '
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='w-5 h-5 rtl:rotate-180 text-black'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
                            />
                        </svg>

                        <span>Go back</span>
                    </button><span><a href="/"><button className="btn btn-error font-semibold">Go Home</button></a></span></div></h1>
        </div>
    );
};

export default ErrorPage;