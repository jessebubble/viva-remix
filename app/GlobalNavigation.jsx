import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Link, NavLink } from '@remix-run/react';
import { ShoppingBagIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export const navbarArray = [
    { title: "Services", link: "/services" },
    { title: "Community", link: "/community" },
    { title: "Store", link: "/store" },
    { title: "Contact", link: "/contact" },
    { title: "Pricing", link: "/pricing" },
];

export default function GlobalNavigation(props) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="">
            <div className="px-6 pt-6 lg:px-8 lg:pt-0">
                <nav className="flex items-center justify-between" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Viva Web Design</span>
                            <img 
                            className="max-h-80 md:max-h-60 lg:max-h-32 w-full object-contain object-left" 
                            src="https://cdn.sanity.io/images/etrj839y/production/f348be3278254433173339a7f0ff0ecfe390d516-500x500.svg"
                            alt="Viva Web Design" 
                            />
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-logopink"
                            onClick={() => setMobileMenuOpen(true)} >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6 md:h-12 md:w-12" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navbarArray.map((item) => (
                            <Link key={item.title} to={item.link} className="text-sm font-semibold leading-6">
                                <NavLink 
                                    to={item.link} 
                                    className={({ isActive }) => (isActive ? 'text-logopink' : 'text-gray-100 hover:text-logopink')} 
                                    > {item.title}
                                </NavLink>
                            </Link>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <Link to="/cart" className="text-sm font-semibold leading-6">
                            <ShoppingBagIcon className='w-6 h-6 text-logopink hover:text-gray-100' />
                        </Link>
                    </div>
                </nav>
                <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
                        <div className="flex items-center justify-between">
                            <Link to="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">Viva Web Design</span>
                                <img 
                                className="max-h-80 md:max-h-60 lg:max-h-40 w-full object-contain object-left" 
                                src="https://cdn.sanity.io/images/etrj839y/production/00e9093f731b9aca9eb096222822a4640ec462c4-500x500.svg" 
                                alt="Viva Web Design" 
                                />
                            </Link>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)} >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navbarArray.map((item) => (
                                        <Link key={item.title} to={item.link} className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7">
                                            <NavLink 
                                                to={item.link}
                                                className={({ isActive }) => (isActive ? 'text-logopink' : 'text-gray-900 hover:bg-gray-400/10')}
                                                > {item.title}
                                            </NavLink>
                                        </Link>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <Link to="/cart" className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10">
                                        <ShoppingBagIcon className='w-6 h-6 text-logopink hover:text-gray-900' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </div>
        </div>
    );
}