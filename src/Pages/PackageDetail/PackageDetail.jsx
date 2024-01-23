import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Header from "../../Components/PackDetails/Header";

const PackageDetail = () => {
    const {id} = useParams()
    const [singlePackage, setSinglePackage] = useState({});
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch("https://roam-rift-server.vercel.app/services")
            .then((res) => res.json())
            .then((data) => {
                const singlePackage = data.find((singlePackage)=>singlePackage._id === id)
                setSinglePackage(singlePackage)
                setLoading(false)
            });
    }, [id]);

    if(loading) return <div className="flex justify-center items-center text-center min-h-[calc(100vh-370px)]">Loading...</div>

    return (
        <div className="max-w-[1200px] mx-auto mb-5">
            <Helmet>
                <title>{singlePackage?.title}</title>
            </Helmet>
            <div>
                <div className="flex flex-col gap-6">
                    <Header singlePackage={singlePackage}/>
                </div>
                <div className="mb-8">
                    <div className="flex">
                        <h2 className="text-3xl font-bold mb-4 text-blue-600">
                            About The Tour
                        </h2>
                    </div>

                    <p className="dark:text-white text-gray-800 text-lg mb-2">{singlePackage?.tour_type}</p>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{singlePackage?.title}</h3>
                    <p className="text-green-600 font-semibold text-xl mb-4">$ {singlePackage?.price}</p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Tour Plan</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {singlePackage?.tourPlan.map((day, index) => (
                            <div key={index} className="p-4 border rounded-md shadow-md">
                                <h3 className="text-lg font-semibold mb-2">Day {index + 1}</h3>
                                <p className="text-gray-700">{day}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageDetail;