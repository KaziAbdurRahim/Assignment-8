import { RxCrossCircled } from "react-icons/rx";
import { toast } from 'react-toastify';

const Wishl = ({ gadget, onRemove, onAddToCart }) => {
    const { product_title, product_id, product_image, price, description } = gadget;

    const handleRemoveWishList = (id) => {
        onRemove(id);
        toast("This item is removed from wishlist");
    };

    return (
        <div className="">
            <div className="flex justify-between border-2 rounded-lg mb-2">
                <div className="flex flex-col sm:flex-row p-2 items-center ">
                    <div><img className="w-[200px] rounded-lg" src={product_image} alt={product_title} /></div>
                    <div className="p-3">
                        <h2 className="font-bold text-2xl">{product_title}</h2>
                        <p className="font-semibold text-gray-500">{description}</p>
                        <p className="font-bold">Price: {price} Tk</p>
                        <button onClick={onAddToCart} className="btn rounded-3xl bg-violet-500 text-white">Add to Cart</button>
                    </div>
                </div>
                <p onClick={() => handleRemoveWishList(product_id)} className="text-3xl justify-end text-red-600 p-1">
                    <RxCrossCircled />
                </p>
            </div>
        </div>
    );
};

export default Wishl;
