import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useState } from "react";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    return (

        <nav className="py-5 px-5 absolute z-50 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Logo></Logo>
                    </div>
                    <div className="hidden md:block">
                        <ul className="flex gap-5 text-xl">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#FF444A] underline " : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/donation"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#FF444A] underline " : ""
                                    }
                                >
                                    Donation
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/statistics "
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#FF444A] underline " : ""
                                    }
                                >
                                    Statistics
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleNavbar} className="text-black hover:text-black focus:outline-none">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg h-24 rounded-lg w-44 mx-auto text-start pl-4 ml-40">
                    <ul className=" gap-5 text-xl">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] underline " : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/donation"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] underline " : ""
                                }
                            >
                                Donation
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/statistics "
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] underline " : ""
                                }
                            >
                                Statistics
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </nav>




    );
};


export default Navbar;