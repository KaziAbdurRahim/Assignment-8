import { useLoaderData, useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { list } from "postcss";
import {addToStoredGLst} from '../../utilities/utility'
import {addToStoredwLst} from '../../utilities/utility2'
const GadgetDetails = () => {

    const { gadgetId } = useParams();
    const data = useLoaderData();


    const gadget = data.find(gadget => gadget.product_id === gadgetId)

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

    const availabilityStatus = availability ? 'In Stock' : 'Sold Out';

    const handleAddToCart=(id)=>{
        addToStoredGLst(id);
       

    }

    const handleWishList =(id) =>{
        addToStoredwLst(id);

    }
    return (
        <div >
            <div className="md:flex bg-base-100 shadow-xl p-3 rounded-lg border-2 ">
                <figure className="
                ">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        alt="Movie" className="rounded-lg mx-auto" />
                </figure>
                <div className="pl-3 pt-3 md:pt0 space-y-2">
                    <h2 className="card-title font-bold text-2xl">{product_title}</h2>
                    <div className={`border-2 ${availability ? 'border-green-400 text-green-400 bg-green-100 rounded-lg p-1 w-20 ' : 'border-red-400 text-red-400 bg-red-100 rounded-lg p-1 w-20 '}`}>
                        {availabilityStatus}
                    </div>
                    <p className="font-bold">Price:{price}tk</p>

                    <p className="font-semibold text-gray-500">{description}</p>
                    {/* Display Specification as a list */}
                    {Specification.length > 0 && (
                        <div>
                            <h3 className="font-semibold">Specifications:</h3>
                            <ol className=" ml-5 list-decimal">
                                {Specification.map((sp, index) => (
                                    <li key={index}>{sp}</li>
                                ))}
                            </ol>
                        </div>
                    )}

                    <h3 className="my-3">Rating <span className="mask mask-star-2 bg-orange-400 rating text-orange-400"><CiStar /></span></h3>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                            defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <h2 className="bg-base-200 rounded-lg ml-3 p-1">{rating}</h2>
                    </div>
                    <div className="card-actions ">
                        <button className="btn   bg-purple-500 rounded-3xl text-white " onClick={()=>handleAddToCart( product_id)}>Add to card</button>
                        <button className="btn rounded-full" onClick={()=>handleWishList(product_id)}>
                            <FaRegHeart />
                        </button>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default GadgetDetails;