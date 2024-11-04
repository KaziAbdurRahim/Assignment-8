import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";


const Gadgets = () => {

    const [gadgets,setGadgets]=useState([]);
//    console.log(gadgets);
    useEffect( ()=>{
        fetch('gadget.json')
        .then(res => res.json())
        .then(data =>setGadgets(data))
    },[])
    return (
        // mt-[10%]
        <div className="flex  mx-auto ">
           <div className="flex-col flex space-y-3 text-white gap-2">
           <button className="btn    bg-purple-500  rounded-3xl text-white">Audio</button>
           <button className="btn   bg-purple-500 rounded-3xl text-white">Wearables</button>
           <button className="btn btn-  bg-purple-500 rounded-3xl text-white">Cameras</button>
           <button className="btn text-white bg-purple-500 rounded-3xl">Smart Home</button>
           <button className="btn text-white bg-purple-500 rounded-3xl">Tablets</button>
           <button className="btn text-white bg-purple-500 rounded-3xl">Computers</button>
           <button className="btn text-white  bg-purple-500 rounded-3xl">Home Entertainment</button>
            </div> 
          <div className="gap-2 lg:grid-cols-3 grid grid-cols-1 md:grid-cols-2">
          {
               gadgets.map(gadget => (<Gadget key={gadget.product_id} gadget={gadget}></Gadget>))
            
            }
            
          </div>
        </div>
    );
};

export default Gadgets;