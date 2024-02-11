import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import { motion, useScroll } from "framer-motion";


// import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { SyncLoader} from 'react-spinners';
import { useEffect, useState } from "react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;`

const MainLayout = () => {
  const [loading, setLoading] = useState(true);
  const [showProgressBar, setShowProgressBar] = useState(false); // Add state to track whether to show the progress bar or not

  useEffect(() => {
    // Check if the flag indicating initial load is present in local storage
    const initialLoadCompleted = localStorage.getItem('initialLoadCompleted');

    if (initialLoadCompleted) {
      // Subsequent reload, set loading to false
      setLoading(false);
    } else {
      // Initial load, simulate an asynchronous operation (e.g., fetching initial data)
      const simulateInitialLoad = async () => {
        try {
          // Simulate a delay for demo purposes
          await new Promise(resolve => setTimeout(resolve, 5000));

          // Once the initial data is "loaded", update the loading state
          setLoading(false);

          // Set the flag in local storage to indicate that the initial load is completed
          localStorage.setItem('initialLoadCompleted', 'true');
        } catch (error) {
          console.error('Error during initial load:', error);
          // Handle error and update loading state accordingly
          setLoading(false);
        }
      };

      // Call the simulateInitialLoad function
      simulateInitialLoad();
    }
  }, []);
  const { scrollYProgress } = useScroll();

  // When user scrolls, set showProgressBar to true
  useEffect(() => {
    const handleScroll = () => {
      setShowProgressBar(true);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Conditionally render the progress bar based on showProgressBar state */}
      {showProgressBar && (
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
      )}
      {loading ? (
        // Show a loading spinner while the website is loading
        //className="flex justify-center items-center text-red-600 bg-green"
        // 
        <div className="flex justify-center items-center min-h-screen">
            <p className="font-medium text-4xl text-[#36D7B7]">Please Wait</p>
            <SyncLoader color="#36D7B7" size={10} loading={loading} css={override}  />
        </div>
      ) : (
        // Render your actual content once the loading is complete
        <div>
            <Navbar></Navbar>
            <div className="pt-[86px] min-h-[calc(100vh-280px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
      )}
    </div>
  );
};

export default MainLayout;



// import { Outlet } from "react-router-dom";
// import Navbar from "../Pages/Shared/Navbar/Navbar";
// import Footer from "../Pages/Shared/Footer/Footer";


// const MainLayout = () => {
//     return (
//         <div>
//             <Navbar></Navbar>
//             <div className="pt-[86px] min-h-[calc(100vh-280px)]">
//                 <Outlet></Outlet>
//             </div>
//             <Footer></Footer>
//         </div>
//     );
// };

// export default MainLayout;

// import { Outlet } from "react-router-dom";
// import Navbar from "../Pages/Shared/Navbar/Navbar";
// import Footer from "../Pages/Shared/Footer/Footer";
// import { motion, useScroll } from "framer-motion";
// import { useEffect, useState } from "react";

// const MainLayout = () => {
//   const [loading, setLoading] = useState(true);
//   const [showProgressBar, setShowProgressBar] = useState(false); // Add state to track whether to show the progress bar or not

//   useEffect(() => {
//     const initialLoadCompleted = localStorage.getItem('initialLoadCompleted');

//     if (initialLoadCompleted) {
//       setLoading(false);
//     } else {
//       const simulateInitialLoad = async () => {
//         try {
//           await new Promise(resolve => setTimeout(resolve, 5000));
//           setLoading(false);
//           localStorage.setItem('initialLoadCompleted', 'true');
//         } catch (error) {
//           console.error('Error during initial load:', error);
//           setLoading(false);
//         }
//       };

//       simulateInitialLoad();
//     }
//   }, []);

//   const { scrollYProgress } = useScroll();

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowProgressBar(true);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div>
//       {showProgressBar && (
//         <motion.div
//           className="progress-bar"
//           style={{ scaleX: scrollYProgress }}
//         />
//       )}
//       {loading ? (
//         <div className="flex justify-center items-center min-h-screen">
//           <p className="font-medium text-4xl text-[#36D7B7]">Please Wait</p>
//           <SyncLoader color="#36D7B7" size={10} loading={loading} css={override} />
//         </div>
//       ) : (
//         <div>
//           <Navbar />
//           <div className="pt-[86px] min-h-[calc(100vh-280px)]">
//             <Outlet />
//           </div>
//           <Footer />
//         </div>
//       )}
//     </div>
//   );
// };

// export default MainLayout;
