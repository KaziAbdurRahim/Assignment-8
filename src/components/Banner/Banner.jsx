import Bannerimg from '../../assets/banner.jpg';

const Banner = () => {
    return (
        <div className="relative bg-violet-600 text-white pb-10">
            {/* Hero Section */}
            <div className="hero flex flex-col items-center justify-center text-center py-10 px-4 md:px-10 lg:py-16">
                <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Upgrade Your Tech Accessorize with Gadget Heaven Accessories
                    </h1>
                    <p className="py-4 text-base md:text-lg">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                    <button className="btn bg-white text-violet-600 rounded-3xl mt-4 md:mt-6">
                        Shop Now
                    </button>
                </div>
            </div>
            
            {/* Banner Image Section */}
            {/* <div className="flex justify-center mt-8 md:mt-12 absolute top-[80%] ">
                <div className="w-full md:w-3/4 lg:w-2/3 p-4 border-2 rounded-xl backdrop-blur-lg">
                    <img
                        className="rounded-2xl object-cover w-full h-auto"
                        src={Bannerimg}
                        alt="Banner"
                    />
                </div>
            </div> */}
        </div>
    );
};

export default Banner;
