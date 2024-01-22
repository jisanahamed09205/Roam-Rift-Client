import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import TourismAndTravelGuideSection from "../Tourism&TravelGuideSection/TourismAndTravelGuideSection";
import TourType from "../TourType/TourType";
import TouristStory from "../TouristStory/TouristStory";

const Home = () => {


    return (
        <div>
            <Helmet>
                <title>Roam Rift || Home</title>
            </Helmet>
            <Banner></Banner>
            <TourismAndTravelGuideSection></TourismAndTravelGuideSection>
            <TourType></TourType>
            <TouristStory></TouristStory>
        </div>
    );
};

export default Home;