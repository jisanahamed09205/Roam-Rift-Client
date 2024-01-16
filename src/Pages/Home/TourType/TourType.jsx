import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import TourTypeBox from "./TourTypeBox";
// import { GiSchoolBag } from "react-icons/gi";
// import { MdSportsSoccer } from "react-icons/md";
// import { IoFootsteps } from "react-icons/io5";
// import { GiBearFace } from "react-icons/gi";
// import { GiParachute } from "react-icons/gi";
import { categories } from "./TourTypeData";






const TourType = () => {
    return (
        <div className=" max-w-[1200px] mx-auto mb-5">
            <SectionTitle subHeading="Find a Tour by" heading="Tour Type"></SectionTitle>
            {/* <div className="flex justify-evenly items-center text-center">
                <button className="btn btn-circle btn-outline md:w-20 md:h-20">
                    <div>
                        <GiSchoolBag className="text-xl md:text-4xl "></GiSchoolBag>
                        <p className="uppercase">Hicking</p>
                    </div>
                </button>
                <button className="btn btn-circle btn-outline md:w-20 md:h-20">
                    <div>
                        <MdSportsSoccer className="text-xl md:text-4xl text-center"></MdSportsSoccer>
                        <p className="uppercase">Sports</p>
                    </div>
                </button>
                <button className="btn btn-circle btn-outline md:w-20 md:h-20">
                    <div>
                        <IoFootsteps className="text-xl md:text-4xl text-center"></IoFootsteps>
                        <p className="uppercase">Walking</p>
                    </div>
                </button>
                <button className="btn btn-circle btn-outline md:w-20 md:h-20">
                    <div>
                        <GiBearFace className="text-xl md:text-4xl text-center"></GiBearFace>
                        <p className="uppercase">WildLife</p>
                    </div>
                </button>
                <button className="btn btn-circle btn-outline md:w-20 md:h-20">
                    <div>
                        <GiParachute className="text-xl md:text-4xl text-center"></GiParachute>
                        <p className="uppercase">Air Rides</p>
                    </div>
                </button>
            </div> */}
            <div className="pt-4 flex items-center justify-between overflow-x-auto text-center">
                {categories.map((category)=> <TourTypeBox key={category.label} label={category.label} icon={category.icon}></TourTypeBox>)}
            </div>
        </div>
    );
};

export default TourType;