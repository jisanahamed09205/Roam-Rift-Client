import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { GiSchoolBag } from "react-icons/gi";
import { MdSportsSoccer } from "react-icons/md";
import { IoFootsteps } from "react-icons/io5";
import { GiBearFace } from "react-icons/gi";
import { GiParachute } from "react-icons/gi";






const TourType = () => {
    return (
        <div className=" max-w-[1200px] mx-auto mb-5">
            <SectionTitle subHeading="Find a Tour by" heading="Tour Type"></SectionTitle>
            <div className="flex justify-evenly items-center text-center">
                <button className="btn btn-circle btn-outline md:w-20 md:h-20">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg> */}
                    <div>
                        <GiSchoolBag className="text-xl md:text-4xl "></GiSchoolBag>
                        <p className="uppercase">Hicking</p>
                    </div>
                </button>
                <button className="btn btn-circle btn-outline md:w-20 md:h-20">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg> */}
                    <div>
                        <MdSportsSoccer className="text-xl md:text-4xl text-center"></MdSportsSoccer>
                        <p className="uppercase">Sports</p>
                    </div>
                </button>
                <button className="btn btn-circle btn-outline md:w-20 md:h-20">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg> */}
                    <div>
                        <IoFootsteps className="text-xl md:text-4xl text-center"></IoFootsteps>
                        <p className="uppercase">Walking</p>
                    </div>
                </button>
                <button className="btn btn-circle btn-outline md:w-20 md:h-20">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg> */}
                    <div>
                        <GiBearFace className="text-xl md:text-4xl text-center"></GiBearFace>
                        <p className="uppercase">WildLife</p>
                    </div>
                </button>
                <button className="btn btn-circle btn-outline md:w-20 md:h-20">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg> */}
                    <div>
                        <GiParachute className="text-xl md:text-4xl text-center"></GiParachute>
                        <p className="uppercase">Air Rides</p>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default TourType;