
export default function Store() {

    return (
        <div className="bg-slate-900/10 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="sm:flex sm:items-baseline sm:justify-between">
                    <h2 className="text-3xl font-bold tracking-tight text-white">We're more than just a creative agency</h2>
                    <a href="/collections" className="hidden text-lg font-semibold text-logopink hover:text-indigo-500 sm:block">
                        Shop our collections
                        <span aria-hidden="true"> &rarr;</span>
                    </a>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
                    <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
                        <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-featured-category.jpg"
                            alt="logo"
                            className="object-cover object-center group-hover:opacity-75"
                            />
                        <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
                        <div className="flex items-end p-6">
                            <div>
                                <h3 className="font-semibold text-white">
                                    <a href="/collections">
                                        <span className="absolute inset-0" />
                                        Community Collection
                                    </a>
                                </h3>
                                <p aria-hidden="true" className="mt-1 text-sm text-white">
                                    Shop now
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
                        <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg"
                            alt="logo"
                            className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
                        />
                        <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"/>
                        <div className="flex items-end p-6 sm:absolute sm:inset-0">
                            <div>
                                <h3 className="font-semibold text-white">
                                    <a href="/collections">
                                        <span className="absolute inset-0" />
                                        Web Developer Collection
                                    </a>
                                </h3>
                                <p aria-hidden="true" className="mt-1 text-sm text-white">
                                    Shop now
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
                        <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg"
                            alt="logo"
                            className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
                        />
                        <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"/>
                        <div className="flex items-end p-6 sm:absolute sm:inset-0">
                            <div>
                                <h3 className="font-semibold text-white">
                                    <a href="/collections">
                                        <span className="absolute inset-0" />
                                        Twitchin' in the Kitchen Collection
                                    </a>
                                </h3>
                                <p aria-hidden="true" className="mt-1 text-sm text-white">
                                    Shop now
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 sm:hidden">
                    <a href="/collections" className="block text-sm font-semibold text-logopink hover:text-indigo-500">
                        Shop our collections
                        <span aria-hidden="true"> &rarr;</span>
                    </a>
                </div>   
            </div>
        </div>
    )
}