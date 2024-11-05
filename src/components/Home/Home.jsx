import Banner from "../Banner/Banner";
import Gadgets from "../Gadgets/Gadgets";
import Bannerimg from '../../assets/banner.jpg'
const Home = () => {
    return (
        <div>
            <Banner></Banner>
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
           <Gadgets></Gadgets>
           </div>
        </div>
    );
};

export default Home;