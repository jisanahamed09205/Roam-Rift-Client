import { Link } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
// import tourTypeData from "./TourTypeData";
import { TbBeach, TbPool } from 'react-icons/tb';
import {
    GiBarn,
    GiBoatFishing,
    GiCastle,
    GiCaveEntrance,
    GiForestCamp,
    GiIsland,
    GiParachute,
    GiBearFace,
    GiSchoolBag,
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { MdSportsSoccer } from "react-icons/md";
import { IoFootsteps } from "react-icons/io5";


const TourType = () => {
    const tourTypeData = [
        { icon: <GiParachute size={32} />, label: 'Air Rides' },
        { icon: <GiSchoolBag size={32} />, label: 'Hiking' },
        { icon: <MdSportsSoccer size={32} />, label: 'Sports' },
        { icon: <IoFootsteps size={32} />, label: 'Walking' },
        { icon: <GiBearFace size={32} />, label: 'WildLife' },
        { icon: <TbPool size={32} />, label: 'Pools' },
        { icon: <GiIsland size={32} />, label: 'Islands' },
        { icon: <GiBoatFishing size={32} />, label: 'Lake' },
        { icon: <FaSkiing size={32} />, label: 'Skiing' },
        { icon: <GiCastle size={32} />, label: 'Castles' },
        { icon: <GiCaveEntrance size={32} />, label: 'Caves' },
        { icon: <GiForestCamp size={32} />, label: 'Camping' },
        { icon: <BsSnow size={32} />, label: 'Arctic' },
        { icon: <GiBarn size={32} />, label: 'Barns' },
        { icon: <TbBeach size={32} />, label: 'Beach' },
    ];
    return (
        <div className=" max-w-[1200px] mx-auto mb-5">
            <SectionTitle subHeading="Find a Tour by" heading="Tour Type"></SectionTitle>
            <div className="pt-4 flex items-center justify-between overflow-x-auto">
                {tourTypeData.map((tourType) => (
                    <Link
                        key={tourType.label}
                        to={`/packagesPage/${tourType?.label}`}
                    >
                        <div className="flex items-center justify-center gap-5 px-5">
                            <button className="btn btn-circle btn-outline md:w-20 md:h-20 text-center">
                                <div>
                                    {tourType?.icon}
                                    <p className="uppercase text-[10px] md:text-base font-medium">{tourType.label}</p>
                                </div>
                            </button>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default TourType;

TourType.jsx
