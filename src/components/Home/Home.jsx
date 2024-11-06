import Banner from "../Banner/Banner";
import Gadgets from "../Gadgets/Gadgets";
import Bannerimg from '../../assets/banner.jpg';
import { useRef } from "react";
import { useEffect } from 'react';
const Home = () => {
    const gadgetsRef = useRef(null);

    useEffect(() => {
        document.title = "Home | Gadget Heaven";
    }, []);

    const scrollToGadgets = () => {
        gadgetsRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div>
            <Banner scrollToGadgets={scrollToGadgets}></Banner>
            <div className="invisible">
            <div className="flex justify-center mt-8 md:mt-12  ">
                <div className="w-full md:w-3/4 lg:w-2/3 p-4 border-2 rounded-xl backdrop-blur-lg">
                    <img
                        className="rounded-2xl object-cover w-full h-auto"
                        src={Bannerimg}
                        alt="Banner"
                    />
                </div>
            </div>
            </div>
           <div className="container mx-auto md:mt-auto mt-56">
           <Gadgets  gadgetsRef={gadgetsRef}></Gadgets>
           </div>
        </div>
    );
};

export default Home;