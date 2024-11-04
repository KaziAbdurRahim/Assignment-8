import { RxCrossCircled } from "react-icons/rx";

const CartList = ({gadget}) => {
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
    return (
        <div>
            <div className="flex justify-between border-2 rounded-lg mb-2">
                <div className="flex p-2 ">
                <div><img className="w-[200px] rounded-lg" src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="" /></div>
              
              <div className="p-3 ">
                    <h2 className="font-bold text-2xl ">{product_title}</h2>
                    <p className="font-semibold text-gray-500 ">{ description}</p>
                    <p className="font-bold ">Price:{price}Tk</p>
                </div>
                
             
                </div>
                <div className="text-3xl justify-end text-red-600 p-1">
                <RxCrossCircled />
                </div>
                
            </div>
            
        </div>
    );
};

export default CartList;