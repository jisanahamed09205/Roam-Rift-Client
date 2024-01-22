import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PackagesPage = () => {
    // const packagesData = useLoaderData();
    const { tourType } = useParams();
    const [packages, setPackages] = useState([]);
    const [tourData, setTourData] = useState([]);
  
    useEffect(() => {
      fetch("https://roam-rift-server.vercel.app/services")
        .then((res) => res.json())
        .then((data) => setTourData(data));
    }, []);
  
    useEffect(() => {
      const filteredPackages = tourData.filter(
        (tour) => tour.tour_type === tourType
      );
      setPackages(filteredPackages);
    }, [tourType, tourData]);

    return (
        <div className="pt-5 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* {
                packages.map((packData)=> <PackagesCard key={packData.title} packages={packages}></PackagesCard>)
            } */}
            {
               packages.length? packages.map((tour,index)=>(
                    <div key={index} className='col-span-1 cursor-pointer group mx-auto'>
                        <div className='flex flex-col gap-2 w-96'>
                            <div
                                className='
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
            '
                            >
                                <img
                                    className='
                object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition
              '
                                    src={tour.img}
                                    alt='Card'
                                />
                                <div
                                    className='
              absolute
              top-3
              right-3
            '
                                >
                                </div>
                            </div>
                            <div className='font-semibold text-lg'>{tour.title}</div>
                            <div className='font-light text-neutral-500'>
                                5 nights . June 19 - 26
                            </div>
                            <div className='flex flex-row items-center gap-1'>
                                <div className='font-semibold'>$ {tour.price}</div>
                                <div className='font-light'>{tour.tour_type}</div>
                            </div>
                        </div>
                    </div>
                )) :
                // flex justify-center items-center text-center
                <div className="flex justify-center items-center text-center">
                    <p className="text-xl lg:text-3xl font-medium lg:font-bold"><span className=" text-red-700 text-5xl">Oops!!</span> Sorry, This TourType <br /> Package are not Available Now</p>
                </div>
            }
        </div>
    );
};

export default PackagesPage;