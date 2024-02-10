import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PackagesPage = () => {
    const { tourType } = useParams();
    const [packages, setPackages] = useState([]);
    const [loading,setLoading] = useState(true)
  
    useEffect(() => {
        setLoading(true)
      fetch("https://roam-rift-server.vercel.app/services")
        .then((res) => res.json())
        .then((data) => {
            if(tourType){
                const filteredPackages = data.filter((tour)=>tour.tour_type === tourType)
                setPackages(filteredPackages)
            }
            else setPackages(data)
            setLoading(false)
        });
    }, [tourType]);

    if(loading) return <div className="flex justify-center items-center text-center min-h-[calc(100vh-370px)]">Loading...</div>

    return (
        <div>
            {packages && packages.length > 0 ? <div className="pt-5 grid grid-cols-1 md:grid-cols-2 gap-8">
                {packages.map((tour) => (
                    <div key={tour._id} className='col-span-1 cursor-pointer group mx-auto'>
                        <div className='flex flex-col gap-2 w-96'>
                            <div
                                className='aspect-square w-full relative overflow-hidden rounded-xl'>
                                <img
                                    className='object-cover h-full w-full group-hover:scale-110 transition' src={tour.img} alt='Card' />
                                <div
                                    className='absolute top-3 right-3'>
                                </div>
                            </div>
                            <div className='font-semibold text-lg'>{tour.title}</div>
                            {/* <div className='font-light text-neutral-500'>
                                5 nights . June 19 - 26
                            </div> */}
                            <div className='flex flex-row items-center gap-1'>
                                <div className='font-semibold'>$ {tour.price}</div>
                                <div className='font-light'>{tour.tour_type}</div>
                            </div>
                            <Link to={`/packageDetail/${tour._id}`} className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
                                View Package
                                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </Link>
                        </div>
                    </div>
                ))}
            </div> : 
                <div className="flex justify-center items-center text-center min-h-[calc(100vh-370px)]">
                    <p className="text-xl lg:text-3xl font-medium lg:font-bold"><span className=" text-red-700 text-5xl">Oops!!</span> Sorry, This Tour <br /> Package is not Available Now</p>
                </div>
            }
                 
            
        </div>
    );
};

export default PackagesPage;