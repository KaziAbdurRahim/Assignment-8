import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
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
            <div className="card card-compact bg-base-100 lg:w-96 shadow-xl p-2">
            <figure>
                <img
                // product_image ||
                    src={ product_image}
                    alt={product_title }
                    className="object-cover w-full h-48"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product_title}</h2>
                <p>Price: {price} tk</p>
                <div className="card-actions">
                    <Link to={`/gadgets/${product_id}`}>
                        <button className="btn rounded-3xl btn-outline text-violet-500">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Gadget;
