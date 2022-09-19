import Nav from './components/nav';
import Footer from './components/footer';
import Hero from './components/hero';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';

export default function App() {
    return (
        <>
        <Nav />
        <Hero />

        <main className="bg-indigo-500 border-b-2">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        <span className='text-emerald-400'>VIVA</span> Community
                    </h2>
                    <p className="mt-4 text-gray-200">You have great ideas and we want you to try them, lots of them. 
                        <span className='md:block'> We can help bring your ideas to life and we can help you do it quickly.</span>  
                        <span className=''>Share your work, someone out there needs it!</span>
                    </p>
                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        <div className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-900">Create Your Own Road</dt>
                            <dd className="mt-2 text-gray-200">Independent doesn't mean alone. We're here to help you create your own path.</dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-900">Your Site, Your Way</dt>
                            <dd className="mt-2 text-gray-200">We have the tools to help you build the site you want, and we'll help you learn how to use them.</dd>
                       </div>
                        <div className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-900">Design | Develop</dt>
                            <dd className="mt-2 text-sm text-gray-200">Need a platform for Ecommerce and User Authentication? We can create that!</dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-900">Transparency</dt>
                            <dd className="mt-2 text-sm text-gray-200">The Future is transparency and our business is built on that.</dd>
                        </div>
                    </dl>
                </div>
                <div className="">
                    <div className=''> 
                        <Player
                        src='https://assets3.lottiefiles.com/packages/lf20_d4vi3spp.json'
                        className=''
                        background='transparent'
                        loop={true}
                        autoplay={true} >
                        </Player>
                    </div>
                </div>
            </div>
        </main>

        <main className="bg-white py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-lg font-semibold text-gray-900">Built Into Every Design</h2>
                    <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-fuchsia-500 sm:text-4xl ">VIVA+</p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"></p>
                </div>
                <div className="mt-10">
                    <dl className="space-y-10 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10 md:space-y-0">
                        <div className="relative">
                            <dt>
                                <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-fuchsia-500 hover:bg-fuchsia-300 text-white">
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

        <main className="bg-gray-900 py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-lg font-semibold text-gray-50">Introducing</h2>
                    <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-teal-500 sm:text-4xl ">Hello World</p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"></p>
                </div>
                <div className="mt-10">
                    <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0 md:justify-items-evenly">
                        <div className="relative lg:max-w-lg rounded-xl border-2 pt-4 pb-4 md:pt-10 md:pb-10">
                            <dt>
                                <p className="ml-16 text-lg font-medium leading-6 text-white">Your idea brought to life</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
                        </div>
                        <div className="relative lg:max-w-lg rounded-xl border-2 pt-4 pb-4 md:pt-10 md:pb-10">
                            <dt>
                                <p className="ml-16 text-lg font-medium leading-6 text-white">Motion with a purpose</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </main>
        <main className="bg-slate-50 py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-lg font-semibold text-gray-900">Introducing</h2>
                    <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-orange-600 sm:text-4xl ">Hello CMS</p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"></p>
                </div>
                <div className="mt-10">
                    <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0 md:justify-items-evenly">
                        <div className="relative lg:max-w-lg rounded-xl border-2 pt-4 pb-4 md:pt-10 md:pb-10 border-black">
                            <dt>
                                <p className="ml-16 text-lg font-medium leading-6 text-orange-600">Content Management System</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
                        </div>
                        <div className="relative lg:max-w-lg rounded-xl border-2 pt-4 pb-4 md:pt-10 md:pb-10 border-gray-900">
                            <dt>
                                <p className="ml-16 text-lg font-medium leading-6 text-orange-600">E-Commerce Platform</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </main>
        <main className="bg-gray-900 py-12 lg:border-b-2 lg:border-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-lg font-semibold text-gray-50">Introducing</h2>
                    <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-rose-500 sm:text-4xl ">VIVA PLUS</p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"></p>
                </div>
                <div className="mt-10">
                    <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0 md:justify-items-evenly">
                        <div className="relative lg:max-w-lg rounded-xl border-2 pt-4 pb-4 md:pt-10 md:pb-10">
                            <dt>
                                <p className="ml-16 text-lg font-medium leading-6 text-white">Monthly Subscription</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
                        </div>
                        <div className="relative lg:max-w-lg rounded-xl border-2 pt-4 pb-4 md:pt-10 md:pb-10">
                            <dt>
                                <p className="ml-16 text-lg font-medium leading-6 text-white">Unlimited Revisions</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </main>

        <main className="bg-white lg:border-b-2 lg:border-gray-900">
            <div className="mx-auto md:max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-evenly lg:py-16 lg:px-8">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="">Share Your Work </span>
                    <span className="block text-rose-500">Someone Out there needs it</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <a href="/" className="inline-flex items-center justify-center rounded-md border border-transparent bg-slate-900 px-5 py-3 text-base font-medium text-white hover:bg-slate-700">Get started</a>
                    </div>
                    <div className="ml-3 inline-flex rounded-md shadow">
                        <a href="/" className="inline-flex items-center justify-center rounded-md border border-slate-900 px-5 py-3 text-base font-medium text-slate-900 hover:bg-slate-200">Learn more</a>
                    </div>
                </div>
            </div>
        </main>

        <main className="bg-yellow-400 border-b-2 border-gray-900">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:justify-items-center">
                <div className="">
                    <div className=''> 
                        <Player
                        src='https://assets9.lottiefiles.com/packages/lf20_u6jkwxkj.json'
                        className=''
                        background='transparent'
                        loop={true}
                        autoplay={true} >
                        </Player>
                    </div>
                </div> 
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-center">
                        The Future is <span className='text-emerald-600'>Transparency</span>
                    </h2>
                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        <div className="border-t border-emerald-500 pt-4">
                            <dt className="font-black">Design:</dt>
                            <dd className="mt-2 lg:mt-0 text-emerald-600 font-black">Hello World</dd>
                        </div>
                        <div className="md:border-t md:border-emerald-500 pt-4">
                            <dt className="font-black text-gray-900">One-Time Payment: $1,199</dt>
                            <dd className="mt-2 text-gray-900">We have the tools to help you build the site you want, and we'll help you learn how to use them.</dd>
                       </div>
                        <div className="border-t border-emerald-500 pt-4">
                            <dt className="font-black">Design:</dt>
                            <dd className="mt-2 lg:mt-0 text-emerald-600 font-black">Hello CMS</dd>
                        </div>
                        <div className="md:border-t md:border-emerald-500 pt-4">
                            <dt className="font-black text-gray-900">One-Time Payment: $2,499</dt>
                            <dd className="mt-2 text-gray-900">We have the tools to help you build the site you want, and we'll help you learn how to use them.</dd>
                       </div>
                        <div className="border-t border-emerald-500 pt-4">
                            <dt className="font-black">Subscription:</dt>
                            <dd className="mt-2 lg:mt-0 text-emerald-600 font-black">VIVA PLUS</dd>
                        </div>
                        <div className="md:border-t md:border-emerald-500 pt-4">
                            <dt className="font-black text-gray-900">Annual Subscription: $199</dt>
                            <dd className="mt-2 text-gray-900">We have the tools to help you build the site you want, and we'll help you learn how to use them.</dd>
                       </div>
                    </dl>
                </div>
            </div>
        </main>

        <main className="bg-white lg:bg-heroPattern lg:p-10 lg:border-b-2 lg:border-white">
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:flex-col lg:items-center lg:justify-center lg:py-16 lg:px-8 lg:border-2 lg:border-gray-900 lg:rounded-xl lg:bg-white lg:max-w-md lg:shadow-md">
                <h2 className="text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl lg:text-center">
                    Questions?<span className="block text-2xl text-gray-900">Send us an email</span>
                </h2>
                <div className="flex mt-8 lg:mt-4 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <a href="/" className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700">Email</a>
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
                <h2 className="text-3xl font-bold tracking-tight text-yellow-400 sm:text-4xl">
                    <span className="block">Ready to VIVA?</span>
                    <span className="block text-white">Start sharing your work today.</span>
                </h2>
                
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <a href="/" className="inline-flex items-center justify-center rounded-md border border-transparent bg-yellow-400 px-5 py-3 text-base font-medium text-gray-900 hover:bg-slate-200">Get started</a>
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