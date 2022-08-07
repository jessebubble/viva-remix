import { Link } from 'react-router-dom';
import { ImInstagram, ImFacebook2, ImTwitter, ImYoutube, ImLinkedin } from "react-icons/im";
import { IconContext } from 'react-icons';
import { Player } from '@lottiefiles/react-lottie-player';


export default function App() {
    return (
        <>
        <main className='border-gray-200 bg-gray-900'>
            <div className='flex flex-col justify-between mx-auto max-w-screen-xl px-4 md:px-6 py-2 xl:p-3'>
                <h1 className='text-6xl md:text-8xl font-black tracking-tight text-center'>
                    <span className='bg-clip-text text-transparent bg-gradient-to-r from-lime-400 via-teal-400 to-rose-400'>VIVA</span>
                    <span className='block text-white'>Web Design</span>
                </h1>
            </div>
        </main>
        <nav className='border border-rose-400 bg-gray-900 sticky top-0'>
            <div className='py-3 mx-auto max-w-screen-xl'>
                <div className='flex justify-center'>
                    <ul className='flex flex-row space-x-6 items-center text-md md:text-lg xl:text-xl font-medium'>
                        <li>
                            <Link to='/' className='text-lime-300 hover:text-rose-400'>VIVA</Link>
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

        <main className='bg-gradient-to-r from-white via-white to-lime-500'>
            <div className='flex flex-col items-center justify-center w-full'>
                <div className='inline-grid grid-col'>
                    <h1 className='text-3xl md:text-5xl xl:text-7xl text-center tracking-tight font-light pt-2 xl:pt-4'>
                        <span className='text-sky-500'>VIVA</span> Design
                    </h1>
                    <p className='text-lg xl:text-2xl text-gray-900 text-center tracking-tight font-light'>
                        Your Site, Your Way
                    </p>
                </div>
            </div>
            <div className='flex flex-col xl:flex-row w-full items-center justify-center pb-4'>
                <div className='w-1/2 inline-grid grid-col items-center '> 
                <div className='overflow-hidden pt-1 xl:pr-24'>
                    <Player
                    src='https://assets6.lottiefiles.com/packages/lf20_yy4qdhah.json'
                    className='xl:pb-2'
                    background='transparent'
                    loop={true}
                    autoplay={true}
                    >
                    </Player>
                </div>
                </div>
                <div className='inline-grid grid-cols-1 '> 
                    <div className='pt-4 lg:pr-32'>
                        <h2 className='text-center text-3xl xl:text-6xl pb-4 xl:pb-8 font-light tracking-tight '>
                            <span className='text-sky-500 '>VIVA </span>➕
                            <span className=' block xl:text-5xl text-gray-900'>Built into every Design</span>
                        </h2>
                    <div className='pb-3 xl:pb-6 p-2 text-center  shadow-none shadow-gray-100 text-lg md:text-2xl font-medium lg:p-5
                                transform hover:translate-y-4 transition duration-300 ease-in-out'>
                    <div className='text-gray-900 hover:text-rose-500 '>
                        Search Engine Optimization
                    </div>
                    </div>
                    <div className='pb-3 xl:pb-6 p-2 text-center  shadow-sm shadow-gray-100 bg-transparent text-lg md:text-2xl font-medium lg:p-5
                                transform hover:translate-y-4 transition duration-300 ease-in-out'>
                    <div className='text-gray-900 hover:text-rose-500 '>
                        Domain Name Registration
                    </div>
                    </div>
                    <div className='pb-3 xl:pb-6 p-2 text-center  shadow-sm shadow-gray-100 bg-transparent text-lg md:text-2xl font-medium lg:p-5
                                transform hover:translate-y-4 transition duration-300 ease-in-out'>
                    <div className='text-gray-900 hover:text-rose-500 '>
                        Responsive Web Design
                    </div>
                    </div>
                    <div className='pb-3 xl:pb-6 p-2 text-center  shadow-sm shadow-gray-100 bg-transparent text-lg md:text-2xl font-medium lg:p-5
                                transform hover:translate-y-4 transition duration-300 ease-in-out'>
                    <div className='text-gray-900 hover:text-rose-500 '>
                        Modern Web Technologies
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </main>
        <main className="grid grid-col">
            <div className="bg-black px-4 py-6">
                <h1 className="text-2xl md:text-4xl text-center bg-clip-text text-transparent bg-gradient-to-r from-lime-400 via-teal-400 to-rose-400">
                    Independent doesn't mean alone 
                </h1>
            </div>
        </main>
        <main className='bg-gradient-to-r from-white via-white to-fuchsia-500'>
            <div className='flex flex-col xl:flex-row w-full items-center justify-center pt-4 xl:pt-10 pb-4 xl:pb-10'>
                <div className='w-8/12 xl:w-3/12 inline-grid grid-cols-2 items-center'> 
                        <img src='../bianca-berg-unsplash.png' alt='portrait' className='bg-amber-400 rotate-6' />
                        <img src='../bianca-berg-unsplash.png' alt='portrait' className='bg-emerald-400 hover:-rotate-6' />
                        <img src='../bianca-berg-unsplash.png' alt='portrait' className='bg-rose-400 hover:rotate-6' />
                        <img src='../bianca-berg-unsplash.png' alt='portrait' className='bg-fuchsia-400 -rotate-6' />
                </div>
                <div className='inline-grid grid-col'> 
                    <div className='pt-4 lg:pl-32'>
                        <h2 className='text-center text-3xl xl:text-8xl pb-4 xl:pb-8 font-light tracking-tight'>
                            Hello <span className='text-sky-500 '>World</span>
                        </h2>
                    <div className='pb-3 xl:pb-6 p-2 text-center shadow-sm shadow-gray-50 text-lg xl:text-2xl font-medium lg:p-5
                                transform hover:translate-y-4 transition duration-300 ease-in-out'>
                    <div className='text-gray-900 hover:text-rose-500 '>
                        Your idea starts here
                    </div>
                    </div>
                    <div className='pb-3 xl:pb-6 p-2 text-center shadow-sm shadow-gray-50 bg-transparent text-lg md:text-2xl font-medium lg:p-5
                                transform hover:translate-y-4 transition duration-300 ease-in-out'>
                    <div className='text-gray-900 hover:text-rose-500 '>
                        Your site, your way
                    </div>
                    </div>
                    <div className='pb-3 xl:pb-6 p-2 text-center shadow-sm shadow-gray-50 bg-transparent text-lg md:text-2xl font-medium lg:p-5
                                transform hover:translate-y-4 transition duration-300 ease-in-out'>
                    <div className='text-gray-900 hover:text-rose-500 '>
                        Modern web experience
                    </div>
                    </div>
                    <div className='pb-3 xl:pb-6 p-2 text-center  shadow-sm shadow-gray-50 bg-transparent text-lg md:text-2xl font-medium lg:p-5
                                transform hover:translate-y-4 transition duration-300 ease-in-out'>
                    <div className='text-gray-900 hover:text-rose-500 '>
                        Your idea grows with VIVA+
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </main>
        <main className='bg-gradient-to-l from-white via-white to-rose-500'>
            <div className='flex flex-col xl:flex-row w-full items-center justify-center pb-4'>
                <div className='inline-grid grid-cols-1 '> 
                    <div className='pt-4 lg:pl-32'>
                        <h2 className='text-center text-3xl xl:text-8xl font-light tracking-tight pb-4 xl:pb-8'>
                            Hello <span className='text-sky-500 '>Animation</span>
                        </h2>
                    <div className='pb-3 xl:pb-6 p-2 text-center shadow-sm shadow-gray-50 text-lg md:text-2xl font-medium lg:p-5
                                transform hover:translate-y-4 transition duration-300 ease-in-out'>
                    <div className='text-gray-900 hover:text-rose-500 '>
                        Motion with a purpose
                    </div>
                    </div>
                    <div className='pb-3 xl:pb-6 p-2 text-center shadow-sm shadow-gray-50 bg-transparent text-lg md:text-2xl font-medium lg:p-5
                                transform hover:translate-y-4 transition duration-300 ease-in-out'>
                    <div className='text-gray-900 hover:text-rose-500 '>
                        Motion brings your ideas to life
                    </div>
                    </div>
                    <div className='pb-3 xl:pb-6 p-2 text-center shadow-sm shadow-gray-50 bg-transparent text-lg md:text-2xl font-medium lg:p-5
                                transform hover:translate-y-4 transition duration-300 ease-in-out'>
                    <div className='text-gray-900 hover:text-rose-500 '>
                        Motion helps keep your users engaged
                    </div>
                    </div>
                    <div className='pb-3 xl:pb-6 p-2 text-center shadow-sm shadow-gray-50 bg-transparent text-lg md:text-2xl font-medium lg:p-5
                                transform hover:translate-y-4 transition duration-300 ease-in-out'>
                    <div className='text-gray-900 hover:text-rose-500 '>
                        Motion helps drive your message
                    </div>
                    </div>
                    </div>
                </div>
                <div className='w-1/2 inline-grid grid-col items-center '> 
                <div className='overflow-hidden pt-1 xl:pl-24'>
                    <Player
                    src='https://assets1.lottiefiles.com/packages/lf20_ju61m9x9.json'
                    className='xl:pb-2'
                    background='transparent'
                    loop={true}
                    autoplay={true} >
                    </Player>
                </div>
                </div>
            </div>
        </main>
        <main className='bg-gradient-to-r from-white via-white to-amber-500'>
            <div className='flex flex-col xl:flex-row w-full items-center justify-center pb-4'>
                <div className='w-1/2 inline-grid grid-col items-center '> 
                <div className='overflow-hidden pt-1 xl:pr-24'>
                    <Player
                    src='https://assets5.lottiefiles.com/packages/lf20_pounvezv.json'
                    className='xl:pb-2'
                    background='transparent'
                    loop={true}
                    autoplay={true} >
                    </Player>
                </div>
                </div>
                <div className='inline-grid grid-cols-1 '> 
                    <div className='pt-4 lg:pr-32'>
                        <h2 className='text-center xl:text-start text-3xl xl:text-8xl font-light tracking-tight pb-4 xl:pb-8'>
                            Hello <span className='text-sky-500 '>Data</span>
                        </h2>
                    <div className='pb-3 xl:pb-6 p-2 text-center shadow-sm shadow-gray-100 text-lg md:text-2xl font-medium lg:p-5
                                transform hover:translate-y-4 transition duration-300 ease-in-out'>
                    <div className='text-gray-900 hover:text-rose-500 '>
                        Your data, your way
                    </div>
                    </div>
                    <div className='pb-3 xl:pb-6 p-2 text-center shadow-sm shadow-gray-50 bg-transparent text-lg md:text-2xl font-medium lg:p-5
                                transform hover:translate-y-4 transition duration-300 ease-in-out'>
                    <div className='text-gray-900 hover:text-rose-500 '>
                        Security with Auth0
                    </div>
                    </div>
                    <div className='pb-3 xl:pb-6 p-2 text-center shadow-sm shadow-gray-50 bg-transparent text-lg md:text-2xl font-medium lg:p-5
                                transform hover:translate-y-4 transition duration-300 ease-in-out'>
                    <div className='text-gray-900 hover:text-rose-500 '>
                        Communicate with APIs
                    </div>
                    </div>
                    <div className='pb-3 xl:pb-6 p-2 text-center shadow-sm shadow-gray-50 bg-transparent text-lg md:text-2xl font-medium lg:p-5
                                transform hover:translate-y-4 transition duration-300 ease-in-out'>
                    <div className='text-gray-900 hover:text-rose-500 '>
                        Connect to a database
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </main>
        <main className="grid grid-col">
            <div className="bg-black px-4 py-6">
                <h1 className="text-center text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-lime-400 via-teal-400 to-rose-400">
                    Your Site, Your Way 
                </h1>
            </div>
        </main>
        <main className='bg-rose-400'>
            <div className='flex flex-col xl:flex-row w-full items-center justify-center pb-4'>
                <div className='inline-grid grid-col'> 
                    <h1 className="pt-4 md:pt-8 xl:pt-20 text-3xl md:text-6xl xl:text-7xl text-center tracking-tight font-medium text-gray-900 ">
                        Share your work. 
                    </h1>
                    <h1 className="pt-4 md:pt-8 xl:pt-20 text-3xl md:text-6xl xl:text-7xl text-center tracking-tight font-medium text-gray-900 ">
                        Someone out there needs it.
                    </h1>
                    <div className='flex pt-6 xl:pb-20 xl:pt-20 justify-center'>
                    <div className='text-2xl md:text-3xl xl:text-4xl font-medium pb-3 xl:pb-6 p-2 xl:p-7 px-3 md:px-6 xl:px-9 text-center shadow-md lg:shadow-lg shadow-indigo-300 border-2 border-white bg-black 
                                    transform hover:translate-y-4 transition duration-300 ease-in-out hover:bg-white hover:border-black'>
                        <Link to="/contact" className='text-rose-400 hover:text-gray-900 '>
                            Let's Get Started
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
        </main>

        <footer className='bg-gray-900 border-gray-200 px-2 sm:px-4 py-2.5'>
            <div className='container flex flex-wrap justify-center xl:justify-between items-center mx-auto'>
                <h1 className='p-4 text-4xl md:text-5xl xl:text-6xl font-medium tracking-tight text-center lg:text-start'>
                    <span className='text-rose-400'>VIVA</span>
                    <span className='block text-white'>Web Design</span>
                </h1>
            </div>
            <div className='flex flex-col pt-4 md:pt-6 xl:pt-12'>
                <h2 className='text-4xl md:text-6xl xl:text-7xl items-center text-center font-medium tracking-tight pb-8 xl:pb-10'>
                    <span className="block text-teal-300 ">Ready to VIVA</span>
                    <span className="block text-white lg:pt-2">Let's get started today.</span>
                </h2>
            </div>
            <div className='flex justify-center pb-20'>
                <div className='text-2xl md:text-3xl xl:text-4xl font-medium pb-3 xl:pb-6 p-2 xl:p-7 px-3 md:px-6 xl:px-9 text-center shadow-md lg:shadow-lg shadow-indigo-300 border-2 border-white bg-black 
                                transform hover:translate-y-4 transition duration-300 ease-in-out hover:bg-white hover:border-black'>
                    <Link to="/contact" className='text-rose-400 hover:text-gray-900'>
                        Contact Us
                    </Link>
                </div>
            </div>
            <hr className='border-white'/>
            <div className='grid grid-cols-2'>
                    <ul className='items-center justify-center p-4 pt-4
                          md:space-x-2 md:text-lg md:font-medium md:border-0 '>
                        <h3 className='text-white '>&copy; 2022 Viva Web Design</h3>
                    </ul>
                    <ul className='inline-flex items-center justify-end space-x-2 xl:space-x-4'>
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
                    </ul>
                </div>     
        </footer>
        </>
    );
}