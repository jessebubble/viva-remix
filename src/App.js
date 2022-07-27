import { Link } from 'react-router-dom';
import { ImInstagram, ImFacebook2, ImTwitter, ImYoutube, ImLinkedin } from "react-icons/im";
import { IconContext } from 'react-icons';

export default function App() {
    return (
        <>
        <main className='bg-stone-50 border-gray-200 dark:bg-gray-900'>
            <div className='flex flex-col justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2'>
                <h1 className='text-6xl md:text-8xl font-black tracking-tight text-center leading-none'>
                    <span className='whitespace-nowrap block uppercase bg-clip-text text-transparent bg-gradient-to-r from-lime-400 via-teal-400 to-rose-400'>Viva</span>
                    <span className='whitespace-nowrap block dark:text-white text-gray-900'>Web Design</span>
                </h1>
            </div>
        </main>
        <nav className='bg-stone-50 border border-black dark:border-rose-400 dark:bg-gray-900 sticky top-0'>
            <div className='py-3 px-12 mx-auto max-w-screen-xl md:px-14'>
                <div className='flex content-center md:justify-evenly'>
                    <ul className='flex flex-row space-x-6 items-center text-sm md:text-lg font-medium'>
                        <li>
                            <Link to='/design' className='text-gray-900 dark:text-white hover:text-rose-400'>Design</Link>
                        </li>
                        <li>
                            <Link to='/animation' className='text-gray-900 dark:text-white hover:text-rose-400'>Animation</Link>
                        </li>
                        <li>
                            <Link to='/pricing' className='text-gray-900 dark:text-white hover:text-rose-400'>Pricing</Link>
                        </li>
                        <li>
                            <Link to='/contact' className='text-rose-400 hover:text-yellow-300'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <main className='flex flex-col xl:flex-row h-screen'>
            <div className='w-full xl:w-1/2 h-screen flex items-start justify-center bg-teal-400 xl:border-r border-black'>
                <div className='w-4/6'>
                    <h1 className="text-3xl text-center tracking-tight font-bold text-gray-900 dark:text-white md:text-6xl pt-4">
                        <span className='font-light text-rose-400'>VIVA</span> Design</h1>
                    <p className="mt-3 text-lg text-center tracking-tight text-gray-900 dark:text-white">
                        Your ideas brought to life
                    </p>
                </div>
            </div>
            <div className='w-full xl:w-1/2 h-screen flex items-start justify-center bg-sky-400 xl:border-l border-black'>
                <div className='w-4/6'>
                    <h1 className="text-3xl text-center tracking-tight font-bold text-gray-900 dark:text-white md:text-6xl pt-4">
                        <span className='font-light text-lime-400'>VIVA</span> Control</h1>
                    <p className="mt-3 text-lg text-center tracking-tight text-gray-900 dark:text-white">
                        Don't let the Algorithms win
                    </p>
                </div>
            </div>
        </main>
        <main className="grid grid-cols-1 border border-black">
            <div className="bg-black px-4 py-10">
                <h1 className="text-2xl text-center md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-lime-400 via-teal-400 to-rose-400">Search Enging Optimization </h1>
            </div>
        </main>
        <main className='flex flex-col xl:flex-row h-screen'>
            <div className='w-full h-screen flex items-start justify-center bg-white xl:border border-black'>
                <div className='w-4/6'>
                    <h1 className="text-3xl text-center tracking-tight font-bold text-gray-900 md:text-6xl pt-4">
                        <span className='font-light text-emerald-400'>VIVA</span> Discover</h1>
                    <p className='mt-3 text-lg text-center tracking-tight text-gray-900'>
                        The World of Viva Web Design
                    </p>
                </div>
            </div>
        </main>
        <main className='flex flex-col xl:flex-row h-screen'>
            <div className='w-full xl:w-1/2 h-screen flex items-center justify-center bg-emerald-300 xl:border-r border-black'>
                <div className='w-4/6'>
                    <h1 className="text-3xl text-center tracking-tight font-bold text-gray-900 dark:text-white md:text-6xl">
                    <span className='font-light text-red-400'>VIVA</span> Community</h1>
                    <p className='mt-3 md:mt-5 xl:mt-6 text-3xl md:text-6xl font-bold text-start tracking-tight text-gray-900'>
                        We make it easy for you to create your own road. 
                    </p>
                    <p className='mt-3 md:mt-5 xl:mt-6 text-3xl md:text-6xl font-bold text-start tracking-tight text-gray-900'>
                        With our team, Independent doesn't mean alone 
                    </p>
                </div>
            </div>
            <div className='w-full xl:w-1/2 h-screen flex items-center justify-center bg-yellow-300 xl:border-l border-black'>
                <div className='w-4/6'>
                    <h1 className="text-3xl md:mt-4 text-center tracking-tight font-bold text-gray-900 dark:text-white md:text-6xl">
                    <span className='font-light text-sky-400'>VIVA</span> Ideas</h1>
                    <p className='mt-3 md:mt-5 xl:mt-6 text-3xl text-start tracking-tight font-bold text-gray-900 md:text-6xl'>
                        You know all those great ideas you have?
                    </p>
                    <p className='mt-3 md:mt-5 xl:mt-6 text-3xl text-start tracking-tight font-bold text-gray-900 md:text-6xl'>
                        We want you to <span className='text-sky-400'> try them</span>, lots of them,
                        and find out what works.
                    </p>
                </div>
            </div>
        </main>
        <main className='flex flex-col xl:flex-row h-screen'>
            <div className='w-full h-screen flex flex-col items-center justify-center bg-rose-400 xl:border border-black'>
                <div className='w-4/6'>
                    <h1 className="text-3xl text-center tracking-tight font-medium text-gray-900 md:text-6xl">
                        Share your work. 
                    </h1>
                    <h1 className="mt-6 xl:mt-8 text-3xl text-center tracking-tight font-medium text-gray-900 md:text-6xl">
                        Someone out there needs it.
                    </h1>

                </div>
                <div className='flex'>
                    <div className='mt-6 xl:mt-8 p-3 text-center shadow-md lg:shadow-lg shadow-indigo-300 border-2 border-white px-3 md:px-6 bg-black text-2xl md:text-4xl font-lighter lg:p-5'>
                        <Link to="/contact" className='text-rose-400 hover:text-yellow-300'>
                            Let's Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </main>
        <main className='flex flex-col xl:flex-row h-screen'>
            <div className='w-full xl:w-1/2 h-screen flex items-start justify-center bg-black xl:border-r border-black'>
                <div className='w-4/6'>
                    <h1 className="text-3xl text-center tracking-tight font-bold text-gray-900 dark:text-white md:text-6xl pt-4">
                        <span className='font-light text-lime-400'>VIVA</span> Pricing</h1>
                    <p className="mt-3 text-lg text-center tracking-tight text-gray-900 dark:text-white">
                        The future is transparency.
                    </p>
                </div>
            </div>
            <div className='w-full xl:w-1/2 h-screen flex items-start justify-center bg-yellow-300 xl:border-l border-black'>
                <div className='w-4/6'>
                    <h1 className="text-3xl text-center tracking-tight font-bold text-gray-900 dark:text-white md:text-6xl pt-4">
                        <span className='font-light text-rose-400'>VIVA</span> Digital</h1>
                    <p className="mt-3 text-lg text-center tracking-tight text-gray-900 dark:text-white">
                        More for you. Less for us.
                    </p>
                </div>
            </div>
        </main>

        <footer className='p-4 bg-stone-50 dark:bg-gray-900 md:p-6'>
            <div className='md:flex md:justify-between flex flex-col'>
                <div className='mb-6 md:mb-10'>
                    <h1 className='text-4xl md:text-6xl font-black tracking-tight text-center lg:text-start leading-none'>
                        <span className='whitespace-nowrap block text-rose-400 uppercase'>Viva</span>
                        <span className='whitespace-nowrap block dark:text-white text-gray-900'>Web Design</span>
                    </h1>
                </div>
                <div className='pt-2 lg:pt-6 md:py-8 lg:justify-between'>
                    <h2 className='items-center text-center text-4xl font-bold tracking-tight md:text-6xl md:pl-1 lg:pb-4'>
                        <span className="block text-teal-300 ">Ready to VIVA</span>
                        <span className="block text-gray-900 dark:text-white lg:pt-2">Let's get started today.</span>
                    </h2>
                    <div className='mt-6 flex justify-around'>
                        <div className='mb-4 p-2 items-center text-center shadow-md lg:shadow-lg shadow-indigo-300 border-2 border-white px-5 md:px-7 bg-black text-2xl md:text-4xl font-lighter lg:p-3'>
                            <Link to="/contact" className='text-rose-400 hover:text-yellow-300'>
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
                <hr className='my-6 border-yellow-300 dark:border-white lg:my-8'/>
                <div className='sm:flex sm:items-center sm:justify-between'>
                    <span className='text-gray-900 dark:text-white text-sm text-start '>&copy; 2022 Viva Web Design</span>
                    <div className='flex justify-between mt-4 space-x-6 md:justify-center sm:mt-0'>
                        <IconContext.Provider 
                            value={{ className: 'text-rose-400 hover:text-yellow-300 h-6 w-8' }}>
                            <ImInstagram />
                            <ImFacebook2 />
                            <ImTwitter />
                            <ImLinkedin />
                            <ImYoutube />
                        </IconContext.Provider>
                    </div>            
                </div>
            </div>
        </footer>
        </>
    );
}