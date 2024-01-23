import { useEffect, useState,useRef } from 'react';
import 'react-tabs/style/react-tabs.css';
import OverView from './Overview/OverView';
import OurPackage from './OurPackage/OurPackage';
import MeetOur from './MeetOur/MeetOur';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';


////selected code


const TabButton = ({ tabId, activeTab, onClick, label }) => (
  <button
    role="tab"
    aria-selected={activeTab === tabId ? 'true' : 'false'}
    aria-controls={`panel-${tabId}`}
    id={`tab-${tabId}`}
    tabIndex={tabId === activeTab ? '0' : '-1'}
    className={`relative block h-10 sm:h-full px-6 sm:px-3 tab rounded-full ${
      activeTab === tabId ? 'bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-orange-900 via-amber-100 to-orange-900 text-gray-800 font-bold' : 'text-gray-800'
    }`}
    onClick={() => onClick(tabId)}
  >
    <span className="text-black">{label}</span>
  </button>
);

const TourismAndTravelGuideSection = () => {
  const [activeTab, setActiveTab] = useState(2);
  const indicatorRef = useRef(null);
  const activeTabRef = useRef(null);
  const panelsRef = useRef([]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    const indicator = indicatorRef.current;
    const activeTabElement = activeTabRef.current;
    const panels = panelsRef.current;

    if (indicator && activeTabElement) {
      indicator.style.width = `${activeTabElement.getBoundingClientRect().width}px`;
      indicator.style.left = `${
        activeTabElement.getBoundingClientRect().left -
        activeTabElement.parentElement.getBoundingClientRect().left
      }px`;
    }

    panels.forEach((panel) => {
      const panelId = panel.getAttribute('id');
      if (activeTab === parseInt(panelId.split('-')[1], 10)) {
        panel.classList.remove('hidden', 'opacity-0');
        panel.classList.add('block', 'opacity-100');
      } else {
        panel.classList.add('hidden', 'opacity-0');
      }
    });
  }, [activeTab]);

  return (
    <div className="max-w-[1200px] mx-auto mb-5 px-4 md:px-6 lg:px-8">
      <SectionTitle subHeading="Find yours" heading="Tourism and Travel Guide"></SectionTitle>
      <div className="sm:w-11/12 lg:w-full mx-auto">
        <div
          role="tablist"
          aria-label="tabs"
          className="relative w-full mx-auto h-12 grid grid-cols-1 sm:grid-cols-3 items-center px-[3px] rounded-full bg-gray-900/20 shadow-2xl transition"
        >
          {[1, 2, 3].map((tabId) => (
            <TabButton
              key={tabId}
              tabId={tabId}
              activeTab={activeTab}
              onClick={handleTabClick}
              label={['Overview', 'Our Packages', 'Meet Our Guides'][tabId - 1]}
            />
          ))}
        </div>
        <div className="mt-6 sm:rounded-3xl bg-purple-50">
          {[1, 2, 3].map((tabId) => (
            <div
              key={tabId}
              role="tabpanel"
              id={`panel-${tabId}`}
              className={`tab-panel p-6 ${activeTab === tabId ? 'block opacity-100' : 'hidden opacity-0'}`}
              ref={(el) => (panelsRef.current[tabId - 1] = el)}
            >
              {tabId === 1 && <OverView />}
              {tabId === 2 && (
                <OurPackage />
              )}
              {tabId === 3 && <MeetOur />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourismAndTravelGuideSection;

////My code

// const TourismAndTravelGuideSection = ({popularDatas,dataLength,setDataLength}) => {

//     const [tabIndex, setTabIndex] = useState(1);

//     return (
//         <div className=" max-w-[1200px] mx-auto mb-5">
//             <SectionTitle subHeading="Find yours" heading="Tourism and Travel Guide"></SectionTitle>
//             <div>
//                 <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
//                     <div className=' text-center font-bold md:text-xl'>
//                         <TabList>
//                             <Tab>Overview</Tab>
//                             <Tab>Our Packages</Tab>
//                             <Tab>Meet Our Tour Guides</Tab>
//                         </TabList>
//                     </div>
//                     <TabPanel>
//                         <OverView></OverView>
//                     </TabPanel>
//                     <TabPanel>
//                         <OurPackage popularDatas={popularDatas} dataLength={dataLength} setDataLength={setDataLength}>
//                         </OurPackage>
//                     </TabPanel>
//                     <TabPanel>
//                         <MeetOur></MeetOur>
//                     </TabPanel>
//                 </Tabs>
//             </div>
//         </div>
//     );
// };

// export default TourismAndTravelGuideSection;


////Arafat bro code solve issue by Arif

// const TourismAndTravelGuideSection = ({popularDatas,dataLength,setDataLength}) => {
//     const [activeTab, setActiveTab] = useState(1);
  
//     const handleTabClick = (tabId) => {
//       setActiveTab(tabId);
//     };
  
//     useEffect(() => {
//       const indicator = document.querySelector(".indicator");
//       const activeTabElement = document.getElementById(`tab-${activeTab}`);
//       const panels = document.querySelectorAll(".tab-panel");
  
//       if (indicator && activeTabElement) {
//         indicator.style.width = `${
//           activeTabElement.getBoundingClientRect().width
//         }px`;
//         indicator.style.left = `${
//           activeTabElement.getBoundingClientRect().left -
//           activeTabElement.parentElement.getBoundingClientRect().left
//         }px`;
//       }
  
//       panels.forEach((panel) => {
//         const panelId = panel.getAttribute("id");
//         if (activeTab === parseInt(panelId.split("-")[1], 10)) {
//           panel.classList.remove("hidden", "opacity-0");
//           panel.classList.add("block", "opacity-100");
//         } else {
//           panel.classList.add("hidden", "opacity-0");
//         }
//       });
//     }, [activeTab]);
  
//     return (
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="sm:w-11/12 lg:w-full mx-auto">
//           <div
//             role="tablist"
//             aria-label="tabs"
//             className="relative w-full mx-auto h-12 grid grid-cols-1 sm:grid-cols-3 items-center px-[3px] sm:rounded-full bg-gray-900/20 shadow-2xl transition"
//           >
//             {/* <div className="absolute indicator h-11 my-auto top-0 left-0 sm:col-span-1 sm:right-auto sm:left-0 rounded-full bg-emerald-700 shadow-md"></div> */}
//             <button
//               role="tab"
//               aria-selected={activeTab === 1 ? "true" : "false"}
//               aria-controls={`panel-${1}`}
//               id={`tab-${1}`}
//               tabIndex="0"
//               className={`relative block h-10 sm:h-full px-6 sm:px-3 tab rounded-full ${
//                 activeTab === 1 ? "bg-red-600 text-gray-800" : "text-gray-800"
//               }`}
//               onClick={() => handleTabClick(1)}
//             >
//               <span className="text-white">Overview</span>
//             </button>
//             <button
//               role="tab"
//               aria-selected={activeTab === 2 ? "true" : "false"}
//               aria-controls={`panel-${2}`}
//               id={`tab-${2}`}
//               tabIndex="-1"
//               className={`relative block h-10 sm:h-full px-6 sm:px-3 tab rounded-full ${
//                 activeTab === 2 ? "bg-red-600 text-gray-800" : "text-gray-800"
//               }`}
//               onClick={() => handleTabClick(2)}
//             >
//               <span className="text-white">Our Packages</span>
//             </button>
//             <button
//               role="tab"
//               aria-selected={activeTab === 3 ? "true" : "false"}
//               aria-controls={`panel-${3}`}
//               id={`tab-${3}`}
//               tabIndex="-1"
//               className={`relative block h-10 sm:h-full px-6 sm:px-3 tab rounded-full ${
//                 activeTab === 3 ? "bg-red-600 text-gray-800" : "text-gray-800"
//               }`}
//               onClick={() => handleTabClick(3)}
//             >
//               <span className="text-white">Meet Our Guides</span>
//             </button>
//           </div>
//           <div className="mt-6  sm:rounded-3xl bg-purple-50">
//             <div
//               role="tabpanel"
//               id={`panel-${1}`}
//               className="tab-panel p-6"
//             >
//               <OverView></OverView>
//             </div>
//             <div
//               role="tabpanel"
//               id={`panel-${2}`}
//               className="tab-panel p-6"
//             >
//               <OurPackage popularDatas={popularDatas} dataLength={dataLength} setDataLength={setDataLength}>
//               </OurPackage>
//             </div>
//             <div
//               role="tabpanel"
//               id={`panel-${3}`}
//               className="tab-panel p-6"
//             >
//               <MeetOur></MeetOur>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
// export default TourismAndTravelGuideSection;




////gpt 3rd 


// const TourismAndTravelGuideSection = ({ popularDatas, dataLength, setDataLength }) => {
//   const [activeTab, setActiveTab] = useState(2);
//   const indicatorRef = useRef(null);
//   const activeTabRef = useRef(null);
//   const panelsRef = useRef([]);

//   const handleTabClick = (tabId) => {
//     setActiveTab(tabId);
//   };

//   useEffect(() => {
//     const indicator = indicatorRef.current;
//     const activeTabElement = activeTabRef.current;
//     const panels = panelsRef.current;

//     if (indicator && activeTabElement) {
//       indicator.style.width = `${activeTabElement.getBoundingClientRect().width}px`;
//       indicator.style.left = `${activeTabElement.getBoundingClientRect().left - activeTabElement.parentElement.getBoundingClientRect().left}px`;
//     }

//     panels.forEach((panel) => {
//       const panelId = panel.getAttribute("id");
//       if (activeTab === parseInt(panelId.split("-")[1], 10)) {
//         panel.classList.remove("hidden", "opacity-0");
//         panel.classList.add("block", "opacity-100");
//       } else {
//         panel.classList.add("hidden", "opacity-0");
//       }
//     });
//   }, [activeTab]);

//   return (
//     <div className="max-w-[1200px] mx-auto mb-5 px-4 sm:px-6 lg:px-8">
//       <SectionTitle subHeading="Find yours" heading="Tourism and Travel Guide"></SectionTitle>
//       <div className="sm:w-11/12 lg:w-full mx-auto">
//         <div
//           role="tablist"
//           aria-label="tabs"
//           className="w-full mx-auto h-12 grid grid-cols-1 sm:grid-cols-3 items-center px-[3px] rounded-full bg-gray-900/20 overflow-hidden shadow-2xl shadow-900/20 transition mb-5"
//         >
//           {[1, 2, 3].map((tabId) => (
//             <button
//               key={tabId}
//               role="tab"
//               aria-selected={activeTab === tabId ? "true" : "false"}
//               aria-controls={`panel-${tabId}`}
//               id={`tab-${tabId}`}
//               tabIndex={tabId === activeTab ? "0" : "-1"}
//               className={`block h-10 sm:h-full px-6 sm:px-3 tab rounded-full ${activeTab === tabId ? "bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-orange-900 via-amber-100 to-orange-900 text-gray-800 font-bold" : "text-gray-800"
//                 }`}
//               onClick={() => handleTabClick(tabId)}
//               ref={tabId === activeTab ? activeTabRef : null}
//             >
//               <span className="text-black">{tabId === 1 ? "Overview" : tabId === 2 ? "Our Packages" : "Meet Our Guides"}</span>
//             </button>
//           ))}
//         </div>
//         <div className="sm:rounded-3xl bg-purple-50">
//           {[1, 2, 3].map((tabId) => (
//             <div
//               key={tabId}
//               role="tabpanel"
//               id={`panel-${tabId}`}
//               className="tab-panel transition duration-300 invisible opacity-0"
//               ref={(el) => (panelsRef.current[tabId - 1] = el)}
//             >
//               {tabId === 1 ? <OverView /> : tabId === 2 ? <OurPackage popularDatas={popularDatas} dataLength={dataLength} setDataLength={setDataLength} /> : <MeetOur />}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TourismAndTravelGuideSection;