import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Header from "../../Components/PackDetails/Header";
import PackInfo from "./PackInfo";
import MeetOur from "../Home/Tourism&TravelGuideSection/MeetOur/MeetOur";
import BookingModal from "../../Components/Modal/BookingModal";

const PackageDetail = () => {

    let [isOpen, setIsOpen] = useState(false)
    const closeModal = () =>{
        setIsOpen(false)
    }

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


    // const handlePurchase=(e)=>{
        // e.preventDefault();
        // const form = e.target;
        // const name = form.name.value;
        // const userEmail = user?.email;
        // const date = form.date.value;
        // const area = form.area.value;
        // const providerEmail = form.providerEmail.value;
        // const price = form.price.value;
        // const imgURL = form.imgURL.value;


        // const booking ={
        //     name,
        //     userEmail,
        //     date,
        //     area,
        //     providerEmail,
        //     price,
        //     imgURL,
        //     service_id: singlePackage?._id
        // }
        // Swal.fire({
        //     position: "top-end",
        //     icon: "success",
        //     title: "Service Purchased Successfully",
        //     showConfirmButton: false,
        //     timer: 2000
        //   });
    // }

    return (
        <div className="max-w-[1200px] mx-auto mb-5">
            <Helmet>
                <title>{singlePackage?.title}</title>
            </Helmet>
            {/* <div className="max-w-screen-lg mx-auto"> */}
            <div className="max-w-screen-lg mx-auto">
                <div className="flex flex-col gap-6">
                    <Header singlePackage={singlePackage}/>
                </div>
                <div className="w-4/5 md:w-full mx-auto mb-8">
                    <div className="flex">
                        <h2 className="text-3xl font-bold mb-4 text-blue-600">
                            About The Tour
                        </h2>
                    </div>

                    <p className="dark:text-white text-gray-800 text-lg mb-2">{singlePackage?.tour_type}</p>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{singlePackage?.title}</h3>
                    <p className="text-green-600 font-semibold text-xl mb-4">$ {singlePackage?.price}</p>
                </div>
                <div className="w-4/5 md:w-full mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Tour Plan</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-4/5 md:w-full mx-auto">
                        {singlePackage?.tourPlan.map((day, index) => (
                            <div key={index} className="p-4 border rounded-md shadow-md bg-yellow-200">
                                <h3 className="text-lg font-semibold mb-2">Day {index + 1}</h3>
                                <p className="text-gray-700">{day}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-4/5 md:w-full mx-auto">
                    <PackInfo singlePackage={singlePackage}/>
                </div>
                <div>
                    <MeetOur></MeetOur>
                </div>
                <div className="flex justify-center mt-4 mb-4">
                    <button onClick={()=>setIsOpen(true)} className="bg-slate-700 text-white px-4 py-2 rounded">Book This Package
                    </button>
                    {/* Modal */}
                    {/* <dialog id="my_modal_3" className="modal ">
                        <div className="modal-box bg-green-200">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h2 className=" text-3xl text-center">Book This Package</h2>
                            <section className="text-gray-600 body-font relative">
                                <div className="container px-5 py-5 mx-auto ">
                                    <div className=" mx-auto">
                                        <form>
                                            <div className="flex flex-wrap -m-2">
                                                <div className="p-2 w-1/2">
                                                    <div className="relative">
                                                        <label className="leading-7 text-sm text-gray-600">Tourist Name</label>
                                                        <input type="text" id="name" defaultValue={user?.displayName} name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                    </div>
                                                </div>
                                                <div className="p-2 w-1/2">
                                                    <div className="relative">
                                                        <label className="leading-7 text-sm text-gray-600">Tourist Email</label>
                                                        <input
                                                            defaultValue={user?.email}
                                                            type="email" id="phn" name="userEmail" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                    </div>
                                                </div>
                                                <div className="p-2 w-1/2">
                                                    <div className="relative">
                                                        <label className="leading-7 text-sm text-gray-600">Date</label>
                                                        <input required type="date" id="date" name="date" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                    </div>
                                                </div>
                                                <div className="p-2 w-1/2">
                                                    <div className="relative">
                                                        <label className="leading-7 text-sm text-gray-600">Area</label>
                                                        <input type="text" id="" name="area" defaultValue={singlePackage?.location} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                    </div>
                                                </div>
                                                <div className="p-2 w-1/2">
                                                    <div className="relative">
                                                        <label className="leading-7 text-sm text-gray-600">Service Provider Email</label>
                                                        <input disabled defaultValue={singlePackage?.host?.service_provider_email} type="email" id="providerEmail" name="providerEmail" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                    </div>
                                                </div>
                                                <div className="p-2 w-1/2">
                                                    <div className="relative">
                                                        <label className="leading-7 text-sm text-gray-600">Price</label>
                                                        <input disabled type="text" id="" name="price" defaultValue={singlePackage?.price} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                    </div>
                                                </div>
                                                <div className="p-2 w-full">
                                                    <div className="relative">
                                                        <label className="leading-7 text-sm text-gray-600">Tourist Img</label>
                                                        <input type="text" id="" name="imgURL" defaultValue={user?.photoURL} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                    </div>
                                                </div>
                                                <div className="p-2 w-full ">
                                                    <input className="btn btn-primary w-full normal-case" type="submit" value="Book Package" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </dialog> */}
                </div>
                <BookingModal closeModal={closeModal} isOpen={isOpen} singlePackage={singlePackage}></BookingModal>
            </div>
        </div>
    );
};

export default PackageDetail;