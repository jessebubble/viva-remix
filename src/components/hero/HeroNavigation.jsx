import logoDark from "../../assets/viva-dark.svg"
import logoLight from "../../assets/viva-light.svg"
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { heroNavArray } from './heroNavArray'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ShoppingBagIcon } from "@heroicons/react/20/solid"


export default function HeroNavigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="px-6 pt-6 lg:px-8 lg:pt-0">
            <nav className="flex items-center justify-between" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Viva Web Design</span>
                        <img className="max-h-36 md:max-h-60 lg:max-h-32 w-full object-contain object-left" src={logoDark} alt="Viva Web Design" />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-logo-pink"
                        onClick={() => setMobileMenuOpen(true)} >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6 md:h-12 md:w-12" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {heroNavArray.map((item) => (
                        <Link key={item.title} to={item.path} className="text-sm font-semibold leading-6 text-white hover:text-logo-pink">
                            {item.title}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link to="/store" className="leading-6 ">
                        <ShoppingBagIcon className='w-6 h-6 text-logo-pink hover:text-white' />
                    </Link>
                </div>
            </nav>
            <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Viva Web Design</span>
                            <img className="max-h-36 md:max-h-60 lg:max-h-32 w-full object-contain object-left" src={logoLight} alt="Viva Web Design" />
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
                                {heroNavArray.map((item) => (
                                    <Link key={item.title} to={item.path} className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                                        > {item.title}
                                    </Link>
                                ))}
                            </div>
                            <div className="py-6">
                                <Link to="/store" className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                                    > Store
                                </Link>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </div>
    )
}