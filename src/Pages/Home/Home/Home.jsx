import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import TourismAndTravelGuideSection from "../Tourism&TravelGuideSection/TourismAndTravelGuideSection";
import TourType from "../TourType/TourType";
import TouristStory from "../TouristStory/TouristStory";
import { useEffect, useState } from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";

const Home = () => {

    const popularDatas = useLoaderData()

    const [dataLength,setDataLength] = useState(4)
    // useEffect(()=>{
    //     fetch('https://roam-rift-server.vercel.app/services')
    //         .then(res=> res.json())
    //         .then(data=>setDataLength(data))
    // },[])
    
    // const {params,setParams} =useSearchParams()
    // const category = params.get('tourtype')
    // console.log(category);

    return (
        <div>
            <Helmet>
                <title>Roam Rift || Home</title>
            </Helmet>
            <Banner></Banner>
            <TourismAndTravelGuideSection popularDatas={popularDatas}  dataLength={dataLength} setDataLength={setDataLength}></TourismAndTravelGuideSection>
            <TourType></TourType>
            <TouristStory></TouristStory>
        </div>
    );
};

export default Home;