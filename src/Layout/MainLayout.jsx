import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
// import { motion, useScroll } from "framer-motion"


const MainLayout = () => {
    // const { scrollYProgress } = useScroll();
    return (
        <div>
            {/* <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
            /> */}
            <Navbar></Navbar>
            <div className="pt-[86px] min-h-[calc(100vh-280px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;