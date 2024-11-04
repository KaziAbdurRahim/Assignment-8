

const Gadget = ({ gadget }) => {

    const { product_title,product_image,category,price,description,Specification,availability,rating } = gadget;
   
    return (
        <div>
            <div className="card card-compact bg-base-100 lg:w-96 shadow-xl p-2">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <p>Price:{price}tk</p>
                    <div className="card-actions">
                        <button className="btn rounded-3xl btn-outline text-violet-500">View Details</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Gadget;