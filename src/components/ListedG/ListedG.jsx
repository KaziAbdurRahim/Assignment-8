import { useEffect, useState, useRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredGList, removeFromStoredGList, addToStoredGLst } from '../../utilities/utility';
import { getStoredwGList, removeFromStoredwList, addToStoredwLst } from '../../utilities/utility2';
import CartList from '../CartList/CartList.jsx';
import Wishl from '../Wishl/Wishl.jsx';
import { BiSort } from "react-icons/bi";
import { toast } from 'react-toastify';  // Ensure toast is properly imported
import check from '../../assets/Group.png';

const ListedG = () => {
    const [cartLst, setCartList] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const [wishList, setWishList] = useState([]);
    const [finalCost, setFinalCost] = useState(0); // New state for final purchase amount
    const allG = useLoaderData();
    const modalRef = useRef(null);

    useEffect(() => {
        const storedG = getStoredGList();
        const cart = allG.filter(g => storedG.includes(g.product_id));
        setCartList(cart);
        calculateTotalCost(cart);
    }, [allG]);

    useEffect(() => {
        const storedW = getStoredwGList();
        const wish = allG.filter(g => storedW.includes(g.product_id) && !cartLst.some(c => c.product_id === g.product_id));
        setWishList(wish);
    }, [allG, cartLst]);

    const calculateTotalCost = (cart) => {
        const total = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);
        setTotalCost(total);
    };

    const sortByPrice = () => {
        const sortedCart = [...cartLst].sort((a, b) => b.price - a.price);
        setCartList(sortedCart);
    };

    const handleRemoveItem = (id) => {
        removeFromStoredGList(id);
        const updatedCart = cartLst.filter(item => item.product_id !== id);
        setCartList(updatedCart);
        calculateTotalCost(updatedCart);
    };

    const handleRemoveFromWishlist = (id) => {
        removeFromStoredwList(id);
        const updatedWishlist = wishList.filter(item => item.product_id !== id);
        setWishList(updatedWishlist);
    };

    const handleAddToCartFromWishlist = (gadget) => {
        handleRemoveFromWishlist(gadget.product_id);
        addToStoredGLst(gadget.product_id);
        const updatedCart = [...cartLst, gadget];
        setCartList(updatedCart);
        calculateTotalCost(updatedCart);
    };

    const handlePurchase = () => {
        setFinalCost(totalCost); // Store the total cost before clearing the cart
        setCartList([]);
        setTotalCost(0);
        localStorage.removeItem('added-list'); // Clear cart from local storage
        toast.success("Purchase successful! Your cart is now empty.");

        // Show the modal
        modalRef.current.showModal();
    };

    return (
        <div className="">
            <Tabs className="align-middle items-center ">
                <TabList className="bg-violet-500 flex justify-center space-x-4 py-2">
                    <Tab className="px-4 py-2 rounded-lg text-white bg-violet-600 cursor-pointer">Cart</Tab>
                    <Tab className="px-4 py-2 rounded-lg text-white bg-violet-600 cursor-pointer">Wishlist</Tab>
                </TabList>

                <TabPanel>
                    <div className="border p-4 rounded-b-lg shadow-lg mt-2">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">Cart</h2>
                            <div className="flex items-center space-x-4">
                                <h3 className="text-lg font-semibold">Total cost: ${totalCost.toFixed(2)}</h3>
                                <button onClick={sortByPrice} className="btn btn-outline text-violet-600 border-violet-600">
                                    Sort by Price <BiSort />
                                </button>
                                <button onClick={handlePurchase} className="btn btn-primary bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg">
                                    Purchase
                                </button>
                            </div>
                        </div>
                        {cartLst.length > 0 ? (
                            cartLst.map(gadget => (
                                <CartList key={gadget.product_id} gadget={gadget} onRemove={handleRemoveItem} />
                            ))
                        ) : (
                            <p className="text-gray-500">Your cart is empty.</p>
                        )}
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="border p-4 rounded-b-lg shadow-lg mt-2">
                        <h2 className="text-xl font-bold mb-4">Wishlist</h2>
                        {wishList.length > 0 ? (
                            wishList.map(gadget => (
                                <Wishl
                                    key={gadget.product_id}
                                    gadget={gadget}
                                    onRemove={handleRemoveFromWishlist}
                                    onAddToCart={() => handleAddToCartFromWishlist(gadget)}
                                />
                            ))
                        ) : (
                            <p className="text-gray-500">Your wishlist is empty.</p>
                        )}
                    </div>
                </TabPanel>
            </Tabs>

            <dialog ref={modalRef} id="my_modal_1" className="modal">
                <div className="modal-box items-center flex flex-col space-y-3">
                    <img src={check} alt="" className=''/>
                    <h3 className="font-bold text-lg">Payment Successfully</h3>
                    <p className="py-4 text-sm">Thanks for purchasing.</p>
                    <p className='text-sm'>Total: ${finalCost.toFixed(2)}</p> {/* Use finalCost here */}
                    <div className="modal-action">
                        <button className="btn w-full " onClick={() => modalRef.current.close()}>Close</button>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default ListedG;
