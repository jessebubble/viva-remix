import Nav from './nav'
import Footer from './footer'
import { Link } from 'react-router-dom'

export default function Pricing() {
    return (
        <>
        <Nav />

        <main className="bg-slate-900">
            <div className="px-4 pt-12 sm:px-6 lg:px-8 lg:pt-20">
                <div className="text-center">
                    <h2 className="text-xl font-semibold leading-6 text-gray-300">
                        Pricing
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        The Future is Transparency
                    </p>
                    <p className="mx-auto mt-3 max-w-4xl text-xl text-gray-300 sm:mt-5 sm:text-2xl">
                        Your Site, Your Way.
                    </p>
                </div>
            </div>
            <div className="mt-16 bg-white pb-12 lg:mt-20 lg:pb-20">
                <div className="relative z-0">
                    <div className="absolute inset-0 h-5/6 bg-gray-900 lg:h-2/3"></div>
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="relative lg:grid lg:grid-cols-7">
                                <div className="mx-auto max-w-md lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3 lg:mx-0 lg:max-w-none">
                                    <div className="flex h-full flex-col overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-l-lg">
                                        <div className="flex flex-1 flex-col">
                                            <div className="bg-white px-6 py-10">
                                                <div>
                                                    <h3 className="text-center text-2xl font-medium text-gray-900" id="tier-hobby">
                                                        Hello World
                                                    </h3>
                                                    <div className="mt-4 flex items-center justify-center">
                                                        <span className="flex items-start px-3 text-6xl tracking-tight text-gray-900">
                                                            <span className="mt-2 mr-2 text-4xl font-medium tracking-tight">$</span>
                                                            <span className="font-bold">1,199</span>
                                                        </span>
                                                        <span className="text-xl lg:text-lg font-medium text-gray-500">/one-time</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-1 flex-col justify-between border-t-2 border-gray-100 bg-gray-50 p-6 sm:p-10 lg:p-6 xl:p-10">
                                                <div role="list" className="space-y-4">
                                                    <li className="flex items-start">
                                                        <div className="flex-shrink-0">
                                                            {/*  <!-- Heroicon name: outline/check --> */}
                                                            <svg className="h-6 w-6 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                            </svg>
                                                        </div>
                                                        <p className="ml-3 text-base font-medium text-gray-500">
                                                            Pariatur quod similique
                                                        </p>
                                                    </li>

                                                    <li className="flex items-start">
                                                         <div className="flex-shrink-0">
                                                            {/*   <!-- Heroicon name: outline/check --> */}
                                                            <svg className="h-6 w-6 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                            </svg>
                                                        </div>
                                                        <p className="ml-3 text-base font-medium text-gray-500">Sapiente libero doloribus</p>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <div className="flex-shrink-0">
                                                            {/* <!-- Heroicon name: outline/check --> */}
                                                            <svg className="h-6 w-6 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                            </svg>
                                                        </div>
                                                        <p className="ml-3 text-base font-medium text-gray-500">Vel ipsa esse repudiandae</p>
                                                    </li>
                                                </div>
                                                <div className="mt-8">
                                                    <div className="rounded-lg shadow-md">
                                                        <a href="/" className="block w-full rounded-lg border border-transparent bg-white px-6 py-3 text-center text-base font-medium text-indigo-600 hover:bg-gray-50" aria-describedby="tier-hobby">Get started</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mx-auto mt-10 max-w-lg lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4 lg:mx-0 lg:mt-0 lg:max-w-none">
                                    <div className="relative z-10 rounded-lg shadow-xl">
                                        <div className="pointer-events-none absolute inset-0 rounded-lg border-2 border-indigo-600" aria-hidden="true"></div>
                                        <div className="absolute inset-x-0 top-0 translate-y-px transform">
                                            <div className="flex -translate-y-1/2 transform justify-center">
                                                <span className="inline-flex rounded-full bg-indigo-600 px-4 py-1 text-base font-semibold text-white">Subscription</span>
                                            </div>
                                        </div>
                                        <div className="rounded-t-lg bg-white px-6 pt-12 pb-10">
                                            <div>
                                                <h3 className="text-center text-3xl font-semibold tracking-tight text-gray-900 sm:-mx-6" id="tier-growth">
                                                    VIVA+
                                                </h3>
                                                <div className="mt-4 flex items-center justify-center">
                                                    <span className="flex items-start px-3 text-6xl tracking-tight text-gray-900 sm:text-6xl">
                                                        <span className="mt-2 mr-2 text-4xl font-medium tracking-tight">$</span>
                                                        <span className="font-bold">249</span>
                                                    </span>
                                                    <span className="text-2xl font-medium text-gray-500">/year</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rounded-b-lg border-t-2 border-gray-100 bg-gray-50 px-6 pt-10 pb-8 sm:px-10 sm:py-10">
                                            <div role="list" className="space-y-4">
                                                <li className="flex items-start">
                                                    <div className="flex-shrink-0">
                                                        {/* <!-- Heroicon name: outline/check --> */}
                                                        <svg className="h-6 w-6 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                        </svg>
                                                    </div>
                                                    <p className="ml-3 text-base font-medium text-gray-500">Quia rem est sed impedit magnam</p>
                                                </li>
                                                <li className="flex items-start">
                                                    <div className="flex-shrink-0">
                                                        {/* <!-- Heroicon name: outline/check --> */}
                                                        <svg className="h-6 w-6 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                        </svg>
                                                    </div>
                                                    <p className="ml-3 text-base font-medium text-gray-500">Dolorem vero ratione voluptates</p>
                                                </li>
                                                <li className="flex items-start">
                                                    <div className="flex-shrink-0">
                                                        {/*  <!-- Heroicon name: outline/check --> */}
                                                        <svg className="h-6 w-6 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                        </svg>
                                                    </div>
                                                    <p className="ml-3 text-base font-medium text-gray-500">Qui sed ab doloribus voluptatem dolore</p>
                                                </li>
                                                <li className="flex items-start">
                                                    <div className="flex-shrink-0">
                                                        {/* <!-- Heroicon name: outline/check --> */}
                                                        <svg className="h-6 w-6 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                        </svg>
                                                    </div>
                                                    <p className="ml-3 text-base font-medium text-gray-500">Laborum commodi molestiae id et fugiat</p>
                                                </li>
                                                <li className="flex items-start">
                                                    <div className="flex-shrink-0">
                                                        {/* <!-- Heroicon name: outline/check --> */}
                                                        <svg className="h-6 w-6 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                        </svg>
                                                    </div>
                                                    <p className="ml-3 text-base font-medium text-gray-500">Nam ut ipsa nesciunt culpa modi dolor</p>
                                                </li>
                                            </div>
                                            <div className="mt-10">
                                                <div className="rounded-lg shadow-md">
                                                    <a href="/" className="block w-full rounded-lg border border-transparent bg-indigo-600 px-6 py-4 text-center text-xl font-medium leading-6 text-white hover:bg-indigo-700" aria-describedby="tier-growth">Get VIVA+</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mx-auto mt-10 max-w-md lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3 lg:m-0 lg:max-w-none">
                                    <div className="flex h-full flex-col overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-r-lg">
                                        <div className="flex flex-1 flex-col">
                                            <div className="bg-white px-6 py-10">
                                                <div>
                                                    <h3 className="text-center text-2xl font-medium text-gray-900" id="tier-scale">
                                                        Hello CMS
                                                    </h3>
                                                    <div className="mt-4 flex items-center justify-center">
                                                    <span className="flex items-start px-3 text-6xl tracking-tight text-gray-900">
                                                        <span className="mt-2 mr-2 text-4xl font-medium tracking-tight">$</span>
                                                        <span className="font-bold">2,499</span>
                                                    </span>
                                                    <span className="text-xl lg:text-lg font-medium text-gray-500">/one-time</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-1 flex-col justify-between border-t-2 border-gray-100 bg-gray-50 p-6 sm:p-10 lg:p-6 xl:p-10">
                                            <div role="list" className="space-y-4">
                                                <li className="flex items-start">
                                                    <div className="flex-shrink-0">
                                                        {/* <!-- Heroicon name: outline/check --> */}
                                                        <svg className="h-6 w-6 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                        </svg>
                                                    </div>
                                                    <p className="ml-3 text-base font-medium text-gray-500">Pariatur quod similique</p>
                                                </li>
                                                <li className="flex items-start">
                                                <div className="flex-shrink-0">
                                                    {/* <!-- Heroicon name: outline/check --> */}
                                                    <svg className="h-6 w-6 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                    <   path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                    </svg>
                                                </div>
                                                <p className="ml-3 text-base font-medium text-gray-500">Sapiente libero doloribus</p>
                                                </li>
                                                <li className="flex items-start">
                                                    <div className="flex-shrink-0">
                                                        {/* <!-- Heroicon name: outline/check --> */}
                                                        <svg className="h-6 w-6 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                        </svg>
                                                    </div>
                                                    <p className="ml-3 text-base font-medium text-gray-500">Vel ipsa esse repudiandae</p>
                                                </li>
                                            </div>
                                            <div className="mt-8">
                                                <div className="rounded-lg shadow-md">
                                                    <a href="/" className="block w-full rounded-lg border border-transparent bg-white px-6 py-3 text-center text-base font-medium text-indigo-600 hover:bg-gray-50" aria-describedby="tier-scale">Get started</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>


        <main className="bg-slate-100 py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-lg font-semibold text-gray-900">Built Into Every Design</h2>
                    <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-indigo-500 sm:text-4xl ">VIVA+</p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"></p>
                </div>
                <div className="mt-10">
                    <dl className="space-y-10 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10 md:space-y-0">
                        <div className="relative">
                            <dt>
                                <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 hover:bg-indigo-300 text-white">
                                    {/*  <!-- Heroicon name: outline/globe-alt --> */}
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                    </svg>
                                </div>
                                <p className="ml-16 text-lg font-medium leading-6 text-gray-900">Search Engine Optimization</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
                        </div>
                        <div className="relative">
                            <dt>
                                <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-slate-400 hover:bg-slate-300 text-white">
                                    {/* <!-- Heroicon name: outline/scale --> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                    </svg>

                                </div>
                                <p className="ml-16 text-lg font-medium leading-6 text-gray-900">Responsive Web Design</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
                        </div>
                        <div className="relative">
                            <dt>
                                <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-slate-400 hover:bg-slate-300 text-white">
                                {/*  <!-- Heroicon name: outline/bolt --> */}
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                    </svg>
                                </div>
                                <p className="ml-16 text-lg font-medium leading-6 text-gray-900">Domain Name | Web Hosting</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </main>

        <main className="bg-slate-50">
            <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <h2 className="mx-auto max-w-md text-center text-3xl font-bold tracking-tight text-gray-500 lg:max-w-xl lg:text-left">
                    Your idea brought to life
                    <span className='block text-gray-900'>Trusted by the San Antonio community</span>
                </h2>
                <div className="mt-8 flow-root self-center lg:mt-0">
                    <div className="-mt-4 md:-mt-8 -ml-8 flex flex-wrap justify-evenly lg:-ml-4">
                        <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0">
                            <img 
                                className="w-24 bg-gray-900 rounded-xl" 
                                src="./bl.png" 
                                alt="logo"
                            />
                        </div>
                        <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0">
                            <img 
                                className="w-24 bg-lime-400 rounded-xl" 
                                src="./pr.png" 
                                alt="logo"
                            />
                        </div>
                        <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0">
                            <img 
                                className="w-24 bg-indigo-800 rounded-xl" 
                                src="./vplogo.png" 
                                alt="logo"
                            />
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </main>

        <main className="bg-slate-900">
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-evenly lg:py-16 lg:px-8">
                    <div className="">
                        <Link to='/'>
                            <img
                            className='md:w-52'
                            src="./viva.png"
                            alt="logo"
                            />
                        </Link>
                    </div>
                <h2 className="text-3xl font-bold tracking-tight text-purple-400 sm:text-4xl">
                    <span className="block">Ready to VIVA?</span>
                    <span className="block text-white">Start sharing your work today.</span>
                </h2>
                
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <a href="/" className="inline-flex items-center justify-center rounded-md border border-transparent bg-purple-400 px-5 py-3 text-base font-medium text-gray-900 hover:bg-slate-200">Get started</a>
                    </div>
                    <div className="ml-3 inline-flex rounded-md shadow">
                        <a href="/" className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-slate-200">Learn more</a>
                    </div>
                </div>
            </div>
        </main>

        <Footer />
        </>
    );
}