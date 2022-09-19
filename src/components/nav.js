import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { Transition } from "@headlessui/react";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <main className="bg-indigo-600">
            <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8 flex items-center justify-evenly">
                <div className="flex flex-wrap items-center">
                    <div className="flex flex-1 items-center justify-center">
                        <span className="flex rounded-lg bg-indigo-800 p-2">
                        {/* <!-- Heroicon name: outline/megaphone --> */}
                            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
                            </svg>
                        </span>
                        <p className="ml-3 truncate font-medium text-white">
                            <span className="md:hidden">Viva Web Design + San Antonio!</span>
                            <span className="hidden md:inline">Big news! San Antonio welcomes local creative agency VIVA Web Design 10/2022</span>
                        </p>
                    </div>
                    <div className="pl-4 order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                        <Link 
                            to="/" 
                            className=" flex items-center justify-center rounded-md border border-transparent bg-white p-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50">
                                Learn More
                        </Link>
                    </div>
                    <div className="order-2 flex-shrink-0 sm:order-3">
                        <button type="button" className="flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white">
                            <span className="sr-only">Dismiss</span>
                            {/* <!-- Heroicon name: outline/x-mark --> */}
                            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </main>

        <nav className="bg-slate-900 border-b-2 border-yellow-200 pb-4 md:pb-0">
            <div className="w-full">
                <div className='flex items-center justify-center md:justify-evenly'>
                    <div className="w-1/2 ">
                        <Link to='/'>
                            <img
                            className='md:w-44 -mt-10 -mb-10 md:-mb-8 md:-mt-8'
                            src="./viva.png"
                            alt="logo"
                            />
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex flex-col md:flex-row items-center justify-center md:justify-evenly tracking-tight antialiased gap-4">
                            <Link to="/design" className="hover:text-indigo-600 text-white text-md md:text-lg lg:text-xl font-medium">
                                Design
                            </Link>
                            <Link to="/community" className="hover:text-indigo-600 text-white text-md md:text-lg lg:text-xl font-medium">
                                Community
                            </Link>
                            <Link to="/pricing" className="hover:text-indigo-600 text-white text-md md:text-lg lg:text-xl font-medium">
                                Pricing
                            </Link>               
                            <Link to="/contact" className="hover:text-indigo-600 text-white text-md md:text-lg lg:text-xl font-medium">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex md:hidden items-center justify-center">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="flex items-center justify-center bg-transparent border-2 border-white p-2 rounded-md text-white hover:text-indigo-400"
                    aria-controls="mobile-menu"
                    aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    {!isOpen ? (
                        <svg
                            className="block h-8 w-8"
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
                        <Link to="/design" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                        Design
                        </Link>
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