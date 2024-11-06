import { useEffect } from 'react';
import Graph from '../Graph/Graph';
// import React, { PureComponent } from 'react';
const Statistic = () => {
    useEffect(() => {
        document.title = "Statistics | Gadget Heaven";
    }, []);

    // const allG = useLoaderData();
    // console.log(allG);
    return (
        <div>
            <div className="bg-violet-500 p-6">
             <h1 className="font-bold text-2xl text-center text-white mb-2"> Statistic</h1>
            <p className="text-center text-sm text-white ">
                Explore the latest gadgets that will take your experience to the next level. 
                From smart devices to the coolest accessories, we have it all!
            </p>
             </div>

             <div className='container mx-auto p-8 bg-base-200 rounded-lg'>
                <h1 className='font-bold text-xl m-2'>Statistics</h1>
                <Graph></Graph>

             </div>
          
        </div>
    );
};

export default Statistic;