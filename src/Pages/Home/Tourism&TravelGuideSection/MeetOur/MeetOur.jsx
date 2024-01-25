import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../../Hook/useAuth";

const MeetOur = () => {

    const {user} = useAuth()
    const [tourGuide, setTourGuide] = useState([]);
    // const [data, setData] = useState([])

    useEffect(() => {
      fetch("/tourGuid.json")
        .then((res) => res.json())
        .then((data) => setTourGuide(data));
    }, []);

    // const handelShowAll = (email) => {
    //     fetch(`/tourGuid.json/allguideData?email=${email}`)
    //         .then(res => {
    //             setData(res.data)
    //             document.getElementById('my_modal_3').showModal()
    //         })
    // }

    return (
        <div>
            <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
                    <div className="flex flex-row flex-wrap-reverse justify-center">

                        {
                            tourGuide.map((guide)=> <div key={guide?._id} className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={guide?.service_provider_img} />
                            <p className="text-xl font-semibold leadi">{guide?.service_provider_name}</p>
                            <p className="dark:text-gray-400">{guide?.contact?.service_provider_email}</p>
                            {
                                user?.email && <Link to={`/guideBio/${guide._id}`} className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
                                View Details
                                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </Link>
                            }
                        </div>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MeetOur;