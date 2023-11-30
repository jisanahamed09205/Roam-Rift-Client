import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import TourismAndTravelGuideSection from "../Tourism&TravelGuideSection/TourismAndTravelGuideSection";
import TourType from "../TourType/TourType";
import TouristStory from "../TouristStory/TouristStory";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {

    const popularDatas = useLoaderData()

    const [dataLength,setDataLength] = useState(4)

    return (
        <div>
            <Helmet>
                <title>Roam Rift || Home</title>
            </Helmet>
            <Banner></Banner>
            <TourismAndTravelGuideSection popularDatas={popularDatas} dataLength={dataLength} setDataLength={setDataLength}></TourismAndTravelGuideSection>
            <TourType></TourType>
            <TouristStory></TouristStory>
        </div>
    );
};

export default Home;