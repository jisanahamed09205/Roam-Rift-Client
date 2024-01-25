import { useEffect, useState } from "react";
import AllPackCard from "./AllPackCard";

const AllPackages = () => {

    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch("https://roam-rift-server.vercel.app/services")
          .then((res) => res.json())
          .then((data) => setPackages(data));
      }, []);

    return (
        <div>
            <div className='max-w-[1000px] mx-auto mb-5 grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    packages.map((allData) => <AllPackCard key={allData.tour_type} allData={allData}></AllPackCard>)
                }
            </div>
        </div>
    );
};

export default AllPackages;