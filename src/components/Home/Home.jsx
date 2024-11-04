import Banner from "../Banner/Banner";
import Gadgets from "../Gadgets/Gadgets";
const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <div className="container mx-auto md:mt-96 mt-56">
           <Gadgets></Gadgets>
           </div>
        </div>
    );
};

export default Home;