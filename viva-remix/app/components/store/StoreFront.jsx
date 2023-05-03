import { Link } from '@remix-run/react'

export default function StoreFront() {

    return (
        <>
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center lg:mb-6">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-logopink">VIVA La Tienda!</h2>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        The Online experience brought to life
                    </p>
                </div>
                <div className="mt-6 lg:mt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
                    <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
                        <img
                            src="https://cdn.sanity.io/images/vk33ybcu/production/0c8a06e8db41368a4954db29b57cd6c74a56611b-896x1344.png"
                            alt="logo"
                            className="object-cover object-center group-hover:brightness-125"
                            />
                        <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
                        <div className="flex items-end p-6">
                            <div>
                                <h3 className="font-semibold text-white">
                                    <Link to="/store">
                                        <span className="absolute inset-0" />
                                        Community Collection
                                    </Link>
                                </h3>
                                <p aria-hidden="true" className="mt-1 text-sm text-white">
                                    Shop now
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
                        <img
                            src="https://cdn.sanity.io/images/vk33ybcu/production/666bcd4c351fd0d2af7795f94c996d6a31d9c424-1024x1024.png"
                            alt="logo"
                            className="object-cover object-top group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
                        />
                        <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"/>
                        <div className="flex items-end p-6 sm:absolute sm:inset-0">
                            <div>
                                <h3 className="font-semibold text-white">
                                    <Link to="/store">
                                        <span className="absolute inset-0" />
                                        Web Developer Collection
                                    </Link>
                                </h3>
                                <p aria-hidden="true" className="mt-1 text-sm text-white">
                                    Shop now
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
                        <img
                            src="https://cdn.sanity.io/images/vk33ybcu/production/73991ac6619f11d11bcdb7a7a1b342fb23fdaa02-1536x1536.png"
                            alt="logo"
                            className="object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
                        />
                        <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"/>
                        <div className="flex items-end p-6 sm:absolute sm:inset-0">
                            <div>
                                <h3 className="font-semibold text-white">
                                    <Link to="/store">
                                        <span className="absolute inset-0" />
                                        Twitchin' in the Kitchen Collection
                                    </Link>
                                </h3>
                                <p aria-hidden="true" className="mt-1 text-sm text-white">
                                    Shop now
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 sm:hidden">
                    <Link to="/store" className="block text-sm font-semibold text-logopink hover:text-indigo-500">
                        Shop our collections
                        <span aria-hidden="true"> &rarr;</span>
                    </Link>
                </div>   
            </div>
        </div>
        </>
    )
}