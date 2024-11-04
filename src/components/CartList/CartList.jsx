import { RxCrossCircled } from "react-icons/rx";
import { removeFromStoredGList } from '../../utilities/utility';
import { toast } from 'react-toastify';

const CartList = ({ gadget, onRemove }) => {
    const {
        product_title,
        product_id,
        product_image,
        category,
        price,
        description,
        Specification,
        availability,
        rating
    } = gadget;

    const handleRemoveFCart = (id) => {
        onRemove(id); // Trigger the parent’s remove handler
        toast("This item is removed from cart");
    };

    return (
        <div className="container mx-auto">
            <div className="flex justify-between border-2 rounded-lg mb-2">
                <div className="flex p-2 ">
                    <div>
                        <img className="w-[200px] rounded-lg" src={product_image} alt={product_title} />
                    </div>

                    <div className="p-3 ">
                        <h2 className="font-bold text-2xl ">{product_title}</h2>
                        <p className="font-semibold text-gray-500 ">{description}</p>
                        <p className="font-bold ">Price: {price} Tk</p>
                    </div>
                </div>
                <div className="text-3xl justify-end text-red-600 p-1">
                    <button className="" onClick={() => handleRemoveFCart(product_id)}> <RxCrossCircled /></button>
                </div>
            </div>
        </div>
    );
};

export default CartList;
