import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";

const Gadgets = ({ gadgetsRef }) => {
    const [gadgets, setGadgets] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    
    // Fetch gadgets data on component mount
    useEffect(() => {
        fetch('gadget.json')
            .then(res => res.json())
            .then(data => setGadgets(data));
    }, []);

    // Filter data based on selected category, or show all if no category is selected
    const filteredData = selectedCategory 
        ? gadgets.filter(item => item.category === selectedCategory) 
        : gadgets;

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div  ref={gadgetsRef} className="flex flex-col mx-auto md:flex-row">
            {/* Category Buttons */}
            <div className="flex-col flex space-y-3 text-white gap-2 rounded-lg p-2 bg-base-200 h-fit borde-2">
                <button onClick={() => handleCategoryClick('Audio')} className="btn bg-purple-500 rounded-3xl text-white">Audio</button>
                <button onClick={() => handleCategoryClick('Wearables')} className="btn bg-purple-500 rounded-3xl text-white">Wearables</button>
                <button onClick={() => handleCategoryClick('Cameras')} className="btn bg-purple-500 rounded-3xl text-white">Cameras</button>
                <button onClick={() => handleCategoryClick('Smart Home')} className="btn bg-purple-500 rounded-3xl text-white">Smart Home</button>
                <button onClick={() => handleCategoryClick('Tablets')} className="btn bg-purple-500 rounded-3xl text-white">Tablets</button>
                <button onClick={() => handleCategoryClick('Computers')} className="btn bg-purple-500 rounded-3xl text-white">Computers</button>
                <button onClick={() => handleCategoryClick('Home Entertainment')} className="btn bg-purple-500 rounded-3xl text-white">Home Entertainment</button>
                {/* Button to reset and show all data */}
                <button onClick={() => handleCategoryClick('')} className="btn bg-gray-500 rounded-3xl text-white">Show All</button>
            </div>

            {/* Display Gadgets */}
            <div className="gap-2 lg:grid-cols-3 grid grid-cols-1 md:grid-cols-2">
                {filteredData.map(gadget => (
                    <Gadget key={gadget.product_id} gadget={gadget} />
                ))}
            </div>
        </div>
    );
};

export default Gadgets;
