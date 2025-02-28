import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import { NavLink, useLocation } from 'react-router-dom';
const Navbar = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isCollapseOpen, setIsCollapseOpen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const toggleCollapse = () => {
        setIsCollapseOpen(!isCollapseOpen);
    };

    return (
        <div className={`navbar bg-base-100 relative ${location.pathname === '/' ? 'bg-violet-600 text-white' : ''}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div 
                        tabIndex={0} 
                        role="button" 
                        className="btn btn-ghost lg:hidden"
                        onClick={toggleCollapse}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    {isCollapseOpen && (
                        <ul
                            tabIndex={0}
                            className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ${location.pathname === '/' ? ' text-black' : ''}`}>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="statistic">Statistic</NavLink></li>
                            <li><NavLink to="dashboard">Dashboard</NavLink></li>
                            <li><NavLink to="faq">FAQ</NavLink></li>
                        </ul>
                    )}
                </div>
                <a className="btn btn-ghost text-xl">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="statistic">Statistic</NavLink></li>
                    <li><NavLink to="dashboard">Dashboard</NavLink></li>
                    <li><NavLink to="faq">FAQ</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="relative">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle"
                        onClick={toggleCart}>
                        <div className="indicator">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </div>
                    {isCartOpen && (
                        <div
                            className="absolute right-0 mt-2 w-52 card card-compact bg-base-100 z-[1] shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button 
                                        className="btn btn-primary btn-block"
                                        onClick={() => navigate('/dashboard')}>
                                        View cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="btn rounded-full btn-ghost" onClick={() => navigate('/dashboard')}>
                    <FaRegHeart />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
