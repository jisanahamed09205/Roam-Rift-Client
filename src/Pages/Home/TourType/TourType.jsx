import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import { TbBeach,TbPool } from 'react-icons/tb'
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
  } from 'react-icons/gi'
  import { FaSkiing } from 'react-icons/fa'
  import { BsSnow } from 'react-icons/bs'
  import { MdSportsSoccer } from "react-icons/md";
  import { IoFootsteps } from "react-icons/io5";
import { Link } from "react-router-dom";

// import { categories } from "./TourTypeData";
// import { Link } from "react-router-dom";
// import { useSearchParams } from "react-router-dom";







const TourType = () => {
    // const [tours,setTours] = useState([])
    // const [params, setParams] = useSearchParams();
    // const category =params.get('TourType');

    // useEffect(()=>{
    //     fetch('./services.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         if(category){
    //             const filtered = data.filter((tour)=>tour.category === category)
    //             setTours(filtered)
    //         }
    //         else setTours(data)
    //     })
    // },[category])
    const tourTypeData = [
        { icon: <GiParachute size={32} />, label: 'Air Rides' },
        { icon: <GiSchoolBag size={32} />, label: 'Hiking' },
        { icon: <MdSportsSoccer size={32} />, label: 'Sports' },
        { icon: <IoFootsteps size={32} />, label: 'Walking' },
        { icon: <TbPool  size={32} />, label: 'Pools' },
        { icon: <GiIsland size={32} />, label: 'Islands' },
        { icon: <GiBoatFishing size={32} />, label: 'Lake' },
        { icon: <FaSkiing size={32} />, label: 'Skiing' },
        { icon: <GiCastle size={32} />, label: 'Castles' },
        { icon: <GiCaveEntrance size={32} />, label: 'Caves' },
        { icon: <GiForestCamp size={32} />, label: 'Camping' },
        { icon: <BsSnow size={32} />, label: 'Arctic' },
        { icon: <GiBearFace size={32} />, label: 'WildLife' },
        { icon: <GiBarn size={32} />, label: 'Barns' },
        { icon: <TbBeach size={32} />, label: 'Beach' },
      ];
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

            {/* <Link to={`/packagesPage`}>
                <div className="pt-4 flex items-center justify-between overflow-x-auto">
                    {categories.map((category)=> <TourTypeBox key={category.label} label={category.label} icon={category.icon}></TourTypeBox>)}
                </div>
            </Link> */}
            <div className="pt-4 flex items-center justify-between overflow-x-auto">
                {tourTypeData.map((tourType, index) => (
                    <Link
                        key={index}
                        to={`/packagesPage/${tourType.label}`}
                    >
                        <div className="flex items-center justify-center gap-5 px-5">
                            <button className="btn btn-circle btn-outline md:w-20 md:h-20">
                                <div>
                                    {tourType.icon}
                                    <p className="uppercase text-[10px] md:text-base font-medium">{tourType.label}</p>
                                </div>
                            </button>
                        </div>
                    </Link>
                ))}
            </div>

            {/* <Link to={`/packagesPage/${tourType.label.toLowerCase()}`}></Link>
            {
                tourTypeData.map((tourType,index)=> <TourTypeBox key={index} label={tourType.label} icon={tourType.icon}></TourTypeBox>)
            } */}
        </div>
    );
};

export default TourType;