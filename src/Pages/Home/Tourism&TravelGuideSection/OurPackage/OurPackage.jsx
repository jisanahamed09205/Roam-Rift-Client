import { Link } from "react-router-dom";
import PackageCard from "./PackageCard";

const OurPackage = ({popularDatas,dataLength,setDataLength}) => {

    

    return (
        <div>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    {
                        popularDatas.slice(0, dataLength).map((popularData) => <PackageCard key={popularData.tour_type} popularData={popularData}></PackageCard>)
                    }
                </div>
            </div>
            <div className="text-center my-5">
                <Link
                    data-aos="fade-up"

                    className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800" href="#">
                    All Services
                    <svg className="w-2.5 h-2.5" width={16} height={16} viewBox="0 0 16 16" fill="none">
                        <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default OurPackage;