import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../vivawebdesign3.svg'
import React, { useState } from "react";
import { Transition } from "@headlessui/react";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <nav className="bg-slate-900 pb-4 md:pb-2 md:-mt-2">
            <div className="w-full">
                <div className='flex flex-col md:flex-row items-center justify-center md:justify-around'>
                    <div className="">
                        <Link to="/">
                            <Logo className='w-44 lg:w-36 h-full'/>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex flex-col md:flex-row items-center justify-center tracking-tight antialiased gap-4 md:gap-6 lg:gap-8">
                            <Link to="/community" className="hover:text-indigo-600 text-white text-md font-medium">
                                Community
                            </Link>
                            <Link to="/pricing" className="hover:text-indigo-600 text-white text-md font-medium">
                                Pricing
                            </Link>               
                            <Link to="/contact" className="hover:text-indigo-600 text-white text-md font-medium">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex md:hidden items-center justify-center mb-4 md:mb-0">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="flex items-center justify-center bg-transparent border-2 border-white p-2 rounded-md text-white hover:text-indigo-400"
                    aria-controls="mobile-menu"
                    aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    {!isOpen ? (
                        <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true">
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                        ) : (
                        <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true">
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    )}
                </button>
            </div>
            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
            {(ref) => (
                <div className="md:hidden" id="mobile-menu">
                    <div ref={ref} className="">
                        <Link to="/community" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                        Community
                        </Link>
                        <Link to="/pricing" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                        Pricing
                        </Link>            
                        <Link to="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                        Contact
                        </Link>
                    </div>
                </div>
            )}
            </Transition>
        </nav>
        </>
    )
}