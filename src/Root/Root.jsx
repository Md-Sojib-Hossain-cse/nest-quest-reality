import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div  className="max-w-7xl mx-auto"><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default Root;