import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { useLoaderData } from 'react-router-dom';
const Root = () => {
    const data = useLoaderData();
    
    return (
        // 
        <div>
            <Navbar data={data}></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;