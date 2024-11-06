import ListedG from "../ListedG/ListedG";
import { useEffect } from "react";

const DashBoard = () => {
    useEffect(() => {
        document.title = "Dashboard | Gadget Heaven";
    }, []);
    return (
        <div>
             <div className="bg-violet-500 p-6">
             <h1 className="font-bold text-2xl text-center text-white mb-2">Dashboard</h1>
            <p className="text-center text-sm text-white ">
                Explore the latest gadgets that will take your experience to the next level. 
                From smart devices to the coolest accessories, we have it all!
            </p>
             </div>
           <div className=" bg-base-200">
           <ListedG></ListedG>
           </div>
        </div>
    );
};

export default DashBoard;