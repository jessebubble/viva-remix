import { Link } from 'react-router-dom';
import { ImInstagram, ImFacebook2, ImTwitter, ImYoutube, ImLinkedin } from "react-icons/im";
import { IconContext } from 'react-icons';
import { Player } from '@lottiefiles/react-lottie-player';

export default function App() {
    return (
        <>
        <main className='border-gray-200 bg-gray-900'>
            <div className='flex flex-col justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2'>
                <h1 className='text-6xl md:text-8xl font-black tracking-tight text-center leading-none'>
                    <span className='whitespace-nowrap block uppercase bg-clip-text text-transparent bg-gradient-to-r from-lime-400 via-teal-400 to-rose-400'>Viva</span>
                    <span className='whitespace-nowrap block dark:text-white text-gray-900'>Web Design</span>
                </h1>
            </div>
        </main>
        <nav className='border border-rose-400 bg-gray-900 sticky top-0'>
            <div className='py-3 px-12 mx-auto max-w-screen-xl md:px-14'>
                <div className='flex content-center md:justify-evenly'>
                    <ul className='flex flex-row space-x-6 items-center text-sm md:text-lg font-medium'>
                        <li>
                            <Link to='/' className='text-lime-300 hover:text-rose-400'>VIVA</Link>
                        </li>
                        <li>
                            <Link to='/design' className='text-gray-900 dark:text-white hover:text-rose-400'>Design</Link>
                        </li>
                        <li>
                            <Link to='/animation' className='text-gray-900 dark:text-white hover:text-rose-400'>Animation</Link>
                        </li>
                        <li>
                            <Link to='/pricing' className='text-rose-400 hover:text-yellow-300'>Pricing</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <main className='xl:border border-black bg-gradient-to-t from-purple-300 via-purple-400 to-purple-500'>
            <div className='flex w-full items-center justify-center'>
                <div className='w-4/6'>
                    <h2 className='text-3xl pt-4 xl:pt-8 text-center tracking-tight font-light text-white md:text-6xl'>
                        <span className='text-sky-400'>VIVA</span> Contact
                    </h2>
                    <p className='text-lg pt-1 xl:pt-2 text-center tracking-tight text-gray-900 pb-1 xl:pb-2'>
                        Independent doesn't mean alone
                    </p>
                <div className='grid grid-cols-1 xl:grid-cols-2 items-center'>
                    <Link to='/animation'>
                        <div className='overflow-hidden'>
                            <div className='' >  
                                <Player
                                    src='https://assets1.lottiefiles.com/private_files/lf30_ies8kilu.json'
                                    className='xl:pb-2'
                                    background='transparent'
                                    loop={true}
                                    autoplay={true}
                                    >
                                </Player>
                            </div>
                        </div>
                    </Link>
                    <div className='w-full pb-6 xl:pb-8 '>
                        <h2 className='items-center text-center text-4xl font-bold tracking-tight md:text-6xl pb-6 xl:pb-8'>
                            <span className="block text-sky-400 ">Ready to VIVA</span>
                            <span className="block text-white lg:pt-2 font-light md:text-5xl">Let's talk about your ideas </span>
                        </h2>
                    <div className='pb-3 xl:pb-6 p-2 text-center shadow-md shadow-sky-300 bg-transparent text-xl md:text-2xl font-lighter lg:p-5
                                transform hover:translate-y-4 transition duration-300 ease-in-out'>
                        <div className='text-gray-900 hover:text-teal-300 '>
                            Give us a call
                        </div>
                    </div>
                    <div className='pb-3 xl:pb-6 p-2 text-center shadow-md shadow-sky-300 bg-transparent text-xl md:text-2xl font-lighter lg:p-5
                                transform hover:translate-y-4 transition duration-300 ease-in-out'>
                        <div className='text-gray-900 hover:text-teal-300 '>
                            Send us an email
                        </div>
                    </div>
                    <div className='pb-3 xl:pb-6 p-2 text-center shadow-md shadow-sky-300 bg-transparent text-xl md:text-2xl font-lighter lg:p-5
                                transform hover:translate-y-4 transition duration-300 ease-in-out'>
                        <div className='text-gray-900 hover:text-teal-300 '>
                            Schedule a remote meetup
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </main>
        <main className="grid grid-cols-1 border border-black">
            <div className="bg-black px-4 py-10">
                <h1 className="text-2xl text-center md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-lime-400 via-teal-400 to-rose-400">
                    The future is transparency 
                </h1>
            </div>
        </main>
        <main className='flex flex-col xl:flex-row h-96 xl:h-screen'>
            <div className='w-full h-screen flex flex-col items-center justify-center bg-rose-400 xl:border border-black'>
                <div className='w-4/6'>
                    <h1 className="text-3xl text-center tracking-tight font-medium text-gray-900 md:text-6xl">
                        Share your work. 
                    </h1>
                    <h1 className="pt-4 xl:pt-8 text-3xl text-center tracking-tight font-medium text-gray-900 md:text-6xl">
                        Someone out there needs it.
                    </h1>
                </div>
                <div className='flex pt-8 xl:pt-12'>
                    <div className='pb-3 xl:pb-6 p-2 text-center shadow-md lg:shadow-lg shadow-indigo-300 border-2 border-white px-3 md:px-6 bg-black text-2xl md:text-4xl font-lighter lg:p-5
                                    transform hover:translate-y-4 transition duration-300 ease-in-out hover:bg-white hover:border-black'>
                        <Link to="/contact" className='text-rose-400 hover:text-gray-900 '>
                            Let's Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </main>

        <footer className='flex flex-col xl:flex-row h-96 xl:h-screen'>
            <div className='w-full h-screen flex flex-col items-center justify-center bg-gray-900 xl:border border-black'>
                <div className='w-4/6'>
                    <h1 className='p-4 text-4xl md:text-6xl font-black tracking-tight text-center lg:text-start leading-none'>
                        <span className='whitespace-nowrap block text-rose-400 uppercase'>Viva</span>
                        <span className='whitespace-nowrap block dark:text-white text-gray-900'>Web Design</span>
                    </h1>
                    <div className='pt-4 md:pt-6 flex flex-col content-center'>
                        <h2 className='items-center text-center text-4xl font-bold tracking-tight md:text-6xl md:pl-1 lg:pb-4'>
                            <span className="block text-teal-300 ">Ready to VIVA</span>
                            <span className="block text-white lg:pt-2">Let's get started today.</span>
                        </h2>
                    </div>
                    <div className='pt-8 pb-8 flex justify-around'>
                        <div className='pb-3 p-2 items-center text-center shadow-md lg:shadow-lg shadow-indigo-300 border-2 border-white px-5 md:px-7 bg-black text-2xl md:text-4xl font-lighter lg:p-3
                                        transform hover:translate-y-4 transition duration-300 ease-in-out hover:bg-white hover:border-black'>
                            <Link to="/contact" className='text-rose-400 hover:text-gray-900'>
                                Contact Us
                            </Link>
                        </div>
                    </div>
                    <hr className='border-white'/>
                    <div className='pt-2 pb-2 flex flex-col'>
                        <h3 className='text-center xl:text-start text-white'>&copy; 2022 Viva Web Design</h3>
                        <div className='flex justify-evenly xl:justify-start pt-4 xl:pt-8 space-x-4'>
                            <IconContext.Provider 
                                value={{ className: 'text-rose-400 hover:text-yellow-300 h-6 w-8' }}>
                                    <a href='https://www.linkedin.com/company/vivawebdesign/'>
                                        <ImLinkedin />
                                    </a>
                                    <a href='https://www.instagram.com/vivawebdesign_/'>
                                        <ImInstagram />
                                    </a>
                                    <a href='https://www.instagram.com/vivawebdesign_/'>
                                        <ImFacebook2 />
                                    </a>
                                    <a href='https://www.instagram.com/vivawebdesign_/'>
                                        <ImTwitter />
                                    </a>
                                    <a href='https://www.instagram.com/vivawebdesign_/'>
                                        <ImYoutube />
                                    </a>
                            </IconContext.Provider>
                        </div>            
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
}