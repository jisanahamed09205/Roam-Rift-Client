import { TbBeach,
  //  TbMountain,
    TbPool } from 'react-icons/tb'
import {
  GiBarn,
  GiBoatFishing,
  // GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  // GiWindmill,
} from 'react-icons/gi'
import { FaSkiing } from 'react-icons/fa'
import { BsSnow } from 'react-icons/bs'
// import { IoDiamond } from 'react-icons/io5'
// import { MdOutlineVilla } from 'react-icons/md'
import { GiSchoolBag } from "react-icons/gi";
import { MdSportsSoccer } from "react-icons/md";
import { IoFootsteps } from "react-icons/io5";
import { GiBearFace } from "react-icons/gi";
import { GiParachute } from "react-icons/gi";


export const categories = [
  {
    label: 'Air Rides',
    icon: GiParachute,
    description: 'This property is brand new and luxurious!',
  },
  {
    label: 'Hiking',
    icon: GiSchoolBag,
    description: 'This property is has windmills!',
  },
  {
    label: 'Sports',
    icon: MdSportsSoccer,
    description: 'This property is modern!',
  },
  {
    label: 'Walking',
    icon: IoFootsteps,
    description: 'This property is in the countryside!',
  },
  {
    label: 'Pools',
    icon: TbPool,
    description: 'This is property has a beautiful pool!',
  },
  {
    label: 'Islands',
    icon: GiIsland,
    description: 'This property is on an island!',
  },
  {
    label: 'Lake',
    icon: GiBoatFishing,
    description: 'This property is near a lake!',
  },
  {
    label: 'Skiing',
    icon: FaSkiing,
    description: 'This property has skiing activities!',
  },
  {
    label: 'Castles',
    icon: GiCastle,
    description: 'This property is an ancient castle!',
  },
  {
    label: 'Caves',
    icon: GiCaveEntrance,
    description: 'This property is in a spooky cave!',
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    description: 'This property offers camping activities!',
  },
  {
    label: 'Arctic',
    icon: BsSnow,
    description: 'This property is in arctic environment!',
  },
  {
    label: 'WildLife',
    icon: GiBearFace,
    description: 'This property is in the desert!',
  },
  {
    label: 'Barns',
    icon: GiBarn,
    description: 'This property is in a barn!',
  },
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'This property is close to the beach!',
  },
]