import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OverView from './Overview/OverView';
import OurPackage from './OurPackage/OurPackage';
import MeetOur from './MeetOur/MeetOur';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';

const TourismAndTravelGuideSection = ({popularDatas,dataLength,setDataLength}) => {

    const [tabIndex, setTabIndex] = useState(1);

    return (
        <div className=" max-w-[1200px] mx-auto mb-5">
            <SectionTitle subHeading="Find yours" heading="Tourism and Travel Guide"></SectionTitle>
            <div>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <div className=' text-center font-bold md:text-xl'>
                        <TabList>
                            <Tab>Overview</Tab>
                            <Tab>Our Packages</Tab>
                            <Tab>Meet Our Tour Guides</Tab>
                        </TabList>
                    </div>
                    <TabPanel>
                        <OverView></OverView>
                    </TabPanel>
                    <TabPanel>
                        <OurPackage popularDatas={popularDatas} dataLength={dataLength} setDataLength={setDataLength}>
                        </OurPackage>
                    </TabPanel>
                    <TabPanel>
                        <MeetOur></MeetOur>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default TourismAndTravelGuideSection;