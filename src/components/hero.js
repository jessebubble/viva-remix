import { Link } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';

export default function Hero() {
  return (
    <>
    <main className='bg-slate-900 lg:pt-2 lg:pb-2'>
        <div className="flex flex-col lg:flex-row items-center justify-evenly p-8 md:p-10 lg:p-16">
            <div className="">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight antialiased text-white">
                    More Than Just A<span className="block text-cyan-400">Creative Agency </span>
                </h1>
                <p className="tracking-tight antialiased mt-3 md:mt-5 text-white max-w-xl text-lg md:text-xl">
                    <span className='block'>We're a team of independent creatives, designers and developers who are passionate about helping our community continue to grow.</span> 
                    <span className="text-cyan-400"> Hablamos español.</span>                     
                </p>
                <div className="mt-5 flex items-center justify-start">
                    <div className='tracking-tight subpixel-antialiased p-2 items-center text-center border border-white bg-transparent text-lg md:text-xl rounded-xl font-light hover:border-cyan-400'>
                        <Link to="/design" className='text-white hover:text-cyan-600 pr-2 pl-2'>
                            Let's Connect 
                        </Link>
                    </div>
                </div>
            </div>
            <div className=''> 
                <Player
                src='https://assets6.lottiefiles.com/packages/lf20_8qDRX7nBln.json'
                className='md:w-60 lg:w-80'
                background='transparent'
                loop={true}
                autoplay={true} >
                </Player>
            </div>
        </div> 
    </main>

    <main className='bg-white mt-6 md:mt-10 lg:mt-16'>
        <div>
            {/*  <!-- Hero card --> */}
            <div className="relative">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-slate-100"></div>
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl pt-32 lg:pt-48 lg:pb-48">
                        <div className="absolute inset-0">
                            <img 
                                className="h-full w-full object-cover" 
                                src="./passion-unsplash.jpg" 
                                alt="passion led us hear"
                            />
                            <div className="absolute inset-0 bg-cyan-400 mix-blend-multiply"></div>
                        </div>
                        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                            <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                                {/* <span className="block text-white">VIVA Web Design </span>
                                <span className="block text-indigo-200">your site, your way </span> */}
                            </h1>
                            {/* <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                                <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                                    <a href="/" className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8">Get started</a>
                                    <a href="/" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8">Contact us</a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Logo cloud --> */}
            {/* <div className="bg-gray-100">
                <div className="mx-auto max-w-7xl md:max-w-2xl py-16 px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-base font-semibold text-gray-500 md:text-xl tracking-tight antialiased">Trusted by the community</p>
                    <div className="mt-6 lg:mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
                        <div className="col-span-1 flex justify-evenly md:col-span-2 lg:col-span-1">
                            <img 
                                className='w-24 bg-slate-900 shadow rounded-xl hover:bg-black'
                                src="./dev.png" 
                                alt="logo"
                            />
                        </div>
                        <div className="col-span-1 flex justify-evenly md:col-span-2 lg:col-span-1">
                            <img 
                                className="w-24 bg-indigo-700 shadow rounded-xl hover:bg-gray-200" 
                                src="./vplogo.png" 
                                alt="logo"
                            />
                        </div>
                        <div className="col-span-1 flex justify-evenly md:col-span-2 lg:col-span-1">
                            <img 
                                className="w-24 bg-lime-800 shadow rounded-xl hover:bg-fuchsia-200" 
                                src="./bl.png" 
                                alt="logo"
                            />
                        </div>
                        <div className="col-span-1 flex justify-evenly md:col-span-2 md:col-start-2 lg:col-span-1">
                            <img 
                                className="w-24 bg-slate-200 shadow rounded-xl hover:bg-fuchsia-200" 
                                src="./pr.png" 
                                alt="logo"
                            />
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    </main>

    <main className="bg-slate-100 py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-lg font-semibold text-gray-900">Built Into Every Design</h2>
                    <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-sky-500 sm:text-4xl ">VIVA+</p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"></p>
                </div>
                <div className="mt-10">
                    <dl className="space-y-10 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10 md:space-y-0">
                        <div className="relative">
                            <dt>
                                <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-sky-500 hover:bg-fuchsia-300 text-white">
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
    </>
  )
}