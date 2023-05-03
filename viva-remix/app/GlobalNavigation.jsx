import { useState, Fragment } from 'react';
import { Dialog, Popover, Transition } from '@headlessui/react';
import { Link, NavLink } from '@remix-run/react';
import { ShoppingBagIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export const navbarArray = [
    { title: "La Tienda!", link: "/store" },
    { title: "Community", link: "/community" },
    { title: "Services", link: "/services" },
    { title: "Contact", link: "/contact" },
];

const products = [
    {
        id: 1,
        name: "Twitchin Sunflower Robot Poster",
        href: '#',
        color: 'Midjourney',
        imageSrc: 'https://cdn.sanity.io/images/vk33ybcu/production/73991ac6619f11d11bcdb7a7a1b342fb23fdaa02-1536x1536.png',
        imageAlt: 'Twitchin Sunflower Robot',
    },
    {
      id: 2,
      name: "Twitchin' Calavera Coasters",
      href: '#',
      color: 'Midjourney',
      imageSrc: 'https://cdn.sanity.io/images/vk33ybcu/production/0c8a06e8db41368a4954db29b57cd6c74a56611b-896x1344.png',
      imageAlt: 'Twitchin Calavera',
    },
]

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
                    <div className="flex md:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-logopink"
                            onClick={() => setMobileMenuOpen(true)} >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6 md:h-12 md:w-12" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden md:flex md:gap-x-12">
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
                    <div className="hidden md:flex md:flex-1 md:justify-end">
                        {/* Desktop shoppingBagIcon */}
                        <Popover className="ml-4 flow-root text-sm lg:relative lg:ml-8">
                            <Popover.Button className="-m-2 flex items-center p-2">
                                <ShoppingBagIcon className="h-6 w-6 flex-shrink-0 text-logopink hover:text-indigo-600" aria-hidden="true" />
                                <span className="ml-2 text-sm font-medium text-gray-500 hover:text-indigo-600"></span>
                                <span className="sr-only">items in cart, view bag</span>
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0" 
                                >
                                <Popover.Panel className="absolute inset-x-0 top-16 mt-px bg-white pb-6 shadow-lg sm:px-2 lg:left-auto lg:right-0 lg:top-full lg:-mr-1.5 lg:mt-3 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5">
                                    <h2 className="sr-only">Shopping Cart</h2>

                                    <form className="mx-auto max-w-2xl px-4">
                                        <ul className="divide-y divide-gray-200">
                                            {products.map((product) => (
                                                <li key={product.id} className="flex items-center py-6">
                                                    <img
                                                        src={product.imageSrc}
                                                        alt={product.imageAlt}
                                                        className="h-16 w-16 flex-none rounded-md border border-gray-200 object-cover"
                                                    />
                                                    <div className="ml-4 flex-auto">
                                                        <h3 className="font-medium text-gray-900">
                                                            <a href={product.href}>{product.name}</a>
                                                        </h3>
                                                        <p className="text-gray-500">{product.color}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                        <div>
                                            <button className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50" >
                                                <Link to="/store/checkout">Checkout</Link>
                                            </button>                                                                 
                                            <p className="mt-6 text-center">
                                                <Link to="/store/cart" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
                                                    View Shopping Cart
                                                </Link>
                                            </p>
                                        </div>
                                    </form>
                                </Popover.Panel>
                            </Transition>
                        </Popover>                  
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
                                    {/* Mobile shoppingBagIcon */}
                                    <Popover className="ml-4 flow-root text-sm lg:relative lg:ml-8">
                                        <Popover.Button className="-m-2 flex items-center p-2">
                                            <ShoppingBagIcon className="h-6 w-6 flex-shrink-0 text-logopink hover:text-indigo-600" aria-hidden="true" />
                                            <span className="ml-2 text-sm font-medium text-gray-500 hover:text-indigo-600">0</span>
                                            <span className="sr-only">items in cart, view bag</span>
                                        </Popover.Button>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0" 
                                            >
                                            <Popover.Panel className="absolute inset-x-0 top-16 mt-px bg-white pb-6 shadow-lg sm:px-2 lg:left-auto lg:right-0 lg:top-full lg:-mr-1.5 lg:mt-3 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5">
                                                <h2 className="sr-only">Shopping Cart</h2>

                                                <form className="mx-auto max-w-2xl px-4">
                                                    <ul className="divide-y divide-gray-200">
                                                        {products.map((product) => (
                                                            <li key={product.id} className="flex items-center py-6">
                                                                <img
                                                                    src={product.imageSrc}
                                                                    alt={product.imageAlt}
                                                                    className="h-16 w-16 flex-none rounded-md border border-gray-200"
                                                                />
                                                                <div className="ml-4 flex-auto">
                                                                    <h3 className="font-medium text-gray-900">
                                                                        <a href={product.href}>{product.name}</a>
                                                                    </h3>
                                                                    <p className="text-gray-500">{product.color}</p>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <div>
                                                        <button className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50" >
                                                            <Link to="/store/checkout">Checkout</Link>
                                                        </button>                                                                 
                                                        <p className="mt-6 text-center">
                                                            <Link to="/store/cart" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
                                                                View Shopping Cart
                                                            </Link>
                                                        </p>
                                                    </div>
                                                </form>
                                            </Popover.Panel>
                                        </Transition>
                                    </Popover> 
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </div>
        </div>
    );
}