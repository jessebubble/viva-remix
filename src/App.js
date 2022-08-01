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
        <nav className='border border-black dark:border-rose-400 dark:bg-gray-900 sticky top-0'>
            <div className='py-3 px-10 mx-auto max-w-screen-xl md:px-14'>
                <div className='flex justify-center md:justify-evenly overflow-hidden '>
                    <ul className='flex flex-row space-x-6 items-center content-center text-sm md:text-lg font-medium'>
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

        <main className='bg-white xl:border border-black'>
            <div className='max-w-2xl mx-auto py-6 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8'>
                <h2 className='text-3xl text-center tracking-tight font-bold text-gray-900 md:text-6xl'>
                    <span className='font-light text-emerald-400'>VIVA</span> Discover
                </h2>
                <p className='text-lg text-center tracking-tight text-gray-900 mb-6 xl:mb-10'>
                    The World of Viva Web Design
                </p>
                <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 items-center'>
                    <Link to='/animation' className='group'>
                        <div className='w-full rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 bg-gradient-to-l from-lime-400 via-teal-400 to-rose-400'>
                            <h3 className='mt-1 ml-4 text-2xl text-center xl:text-start font-medium text-gray-900'>Hello World</h3>
                            <div className='xl:h-96 mb-10 xl:mb-16 object-center object-cover group-hover:opacity-75'>  
                                <Player
                                    src='https://assets1.lottiefiles.com/packages/lf20_bpmirxde.json'
                                    className='pt-6 xl:pt-10'
                                    background='transparent'
                                    loop={true}
                                    autoplay={true}
                                    >
                                </Player>
                            </div>
                        </div>
                    </Link>
                    <Link to='/animation' className='group'>
                        <div className='w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 bg-gradient-to-r from-lime-400 via-teal-400 to-rose-400'>
                            <h3 className='mt-1 ml-4 text-2xl text-center xl:text-start font-medium text-gray-900'>Hello Animation</h3>
                            <div className='xl:h-96 mb-10 xl:mb-16 object-center object-cover group-hover:opacity-75'>  
                                <Player
                                    src='https://assets2.lottiefiles.com/packages/lf20_Ns4TLz.json'
                                    className='pt-6 xl:pt-10'
                                    background='transparent'
                                    loop={true}
                                    autoplay={true}
                                    >
                                </Player>
                            </div>
                        </div>
                    </Link>
                    <Link to='/animation' className='group'>
                        <div className='w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 bg-gradient-to-l from-lime-400 via-teal-400 to-rose-400'>
                            <h3 className='mt-1 ml-4 text-2xl text-center xl:text-start font-medium text-gray-900'>Hello Server</h3>
                            <div className='xl:h-96 mb-10 xl:mb-16 object-center object-cover group-hover:opacity-75'>  
                                <Player
                                    src='https://assets1.lottiefiles.com/packages/lf20_ncubuiuo.json'
                                    className='pt-6 xl:pt-10'
                                    background='transparent'
                                    loop={true}
                                    autoplay={true}
                                    >
                                </Player>
                            </div>
                        </div>
                    </Link>
                    <Link to='/animation' className='group'>
                        <div className='w-full aspect-w-1 aspect-h-1 bg-white rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8'>
                            <h3 className='mt-1 ml-4 text-2xl text-center xl:text-start font-medium text-gray-900'>Hello World</h3>
                            <div className='xl:h-96 mb-10 xl:mb-16 object-center object-cover group-hover:opacity-75'>  
                                <Player
                                    src='https://assets7.lottiefiles.com/packages/lf20_j80rsr51.json'
                                    className='pt-6 xl:pt-10'
                                    background='transparent'
                                    loop={true}
                                    autoplay={true}
                                    >
                                </Player>
                            </div>
                        </div>
                    </Link>
                    <Link to='/animation' className='group'>
                        <div className='w-full aspect-w-1 aspect-h-1 bg-white rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8'>
                            <h3 className='mt-1 ml-4 text-2xl text-center xl:text-start font-medium text-gray-900'>Hello Animation</h3>
                            <div className='xl:h-96 mb-10 xl:mb-16 object-center object-cover group-hover:opacity-75'>  
                                <Player
                                    src='https://assets10.lottiefiles.com/private_files/lf30_celjmhga.json'
                                    className='pt-6 xl:pt-10'
                                    background='transparent'
                                    loop={true}
                                    autoplay={true}
                                    >
                                </Player>
                            </div>
                        </div>
                    </Link>
                    <Link to='/animation' className='group'>
                        <div className='w-full aspect-w-1 aspect-h-1 bg-white rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8'>
                            <h3 className='mt-1 ml-4 text-2xl text-center xl:text-start font-medium text-gray-900'>Hello Server</h3>
                            <div className='xl:h-96 mb-10 xl:mb-16 object-center object-cover group-hover:opacity-75'>  
                                <Player
                                    src='https://assets1.lottiefiles.com/packages/lf20_z9glddtj.json'
                                    className='pt-6 xl:pt-10'
                                    background='transparent'
                                    loop={true}
                                    autoplay={true}
                                    >
                                </Player>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </main>
        <main className="grid grid-cols-1 border border-black">
            <div className="bg-black px-4 py-10">
                <h1 className="text-2xl text-center md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-lime-400 via-teal-400 to-rose-400">
                    Search Engine Optimization 
                </h1>
            </div>
        </main>
        <main className='flex flex-col xl:flex-row h-screen'>
            <div className='w-full xl:w-1/2 h-screen flex items-center justify-center bg-sky-400 xl:border-r xl:border-b border-black'>
                <div className='w-4/6'>
                    <h2 className='mt-2 md:mt-3 xl:pt-10 text-2xl md:text-4xl xl:text-6xl text-start tracking-tight font-bold text-gray-900'>
                        You have great
                        <span className='text-lime-400'> ideas</span>
                    </h2>
                    <p className='mt-1 md:mt-2 xl:mt-3 text-lg md:text-2xl xl:text-4xl text-start tracking-tight font-light text-white'>
                        We want you to <span className='text-lime-300'> try them</span>, lots of them,
                        and find out what works.
                    </p>
                    <h2 className='mt-2 md:mt-3 xl:pt-10 text-2xl md:text-4xl xl:text-6xl text-start tracking-tight font-bold text-gray-900'>
                        Create your own road 
                    </h2>
                    <p className='mt-1 md:mt-2 xl:mt-3 text-lg md:text-2xl xl:text-4xl text-start tracking-tight font-light text-white'>
                        <span className='text-lime-300'>Independent</span> doesn't mean alone
                    </p>
                    <h2 className='mt-2 md:mt-3 xl:pt-10 text-2xl md:text-4xl xl:text-6xl text-start tracking-tight font-bold text-gray-900'>
                        Your site, Your way
                    </h2>
                    <p className='mt-3 md:mt-5 xl:mt-6 text-lg md:text-2xl xl:text-4xl text-start tracking-tight font-light text-white'>
                        We want to see your ideas <span className='text-lime-300'>grow</span>.
                    </p>
                </div>
            </div>
            <div className='w-full xl:w-1/2 h-screen flex items-center justify-center bg-purple-400 xl:border-l xl:border-b border-black'>
                <div className='w-4/6'>
                    <h1 className="text-3xl text-center tracking-tight font-bold text-gray-900 dark:text-white md:text-6xl">
                        <span className='font-light text-sky-400'>VIVA</span> Design</h1>
                    <p className="text-lg text-center tracking-tight text-gray-900 dark:text-white">
                        Your ideas brought to life
                    </p>
                    <Player
                        src='https://assets9.lottiefiles.com/packages/lf20_toofqbxc.json'
                        className='pt-6 xl:pt-20 overflow-hidden '
                        background='transparent'
                        loop={true}
                        autoplay={true}
                        >
                    </Player>
                </div>
            </div>
        </main>
        <main className='flex flex-col xl:flex-row h-screen'>
            <div className='w-full xl:w-1/2 h-screen flex items-center justify-center bg-lime-400 xl:border-r xl:border-b border-black'>
                <div className='w-4/6'>
                    <h1 className="text-3xl text-center tracking-tight font-bold text-gray-900 md:text-6xl">
                        <span className='font-light text-rose-500'>VIVA</span> Pricing</h1>
                    <p className="text-lg text-center tracking-tight text-gray-900">
                        The future is transparency.
                    </p>
                    <Player
                        src='https://assets8.lottiefiles.com/packages/lf20_1oucccvj.json'
                        className='pt-1 xl:pt-3'
                        background='transparent'
                        loop={true}
                        autoplay={true}
                        >
                    </Player>
                </div>
            </div>
            <div className='w-full xl:w-1/2 h-screen flex items-center justify-center bg-rose-500 xl:border-l xl:border-b border-black'>
            <div className='w-4/6'>
                    <h2 className='mt-2 md:mt-3 xl:pt-10 text-2xl md:text-4xl xl:text-6xl text-start tracking-tight font-bold text-gray-900'>
                        Hello<span className='text-sky-500'> World</span>
                    </h2>
                    <p className='mt-1 md:mt-2 xl:mt-3 text-lg md:text-2xl xl:text-4xl text-start tracking-tight font-light text-white'>
                        This is where Your idea comes to life.
                    </p>
                    <h2 className='mt-2 md:mt-3 xl:pt-10 text-2xl md:text-4xl xl:text-6xl text-start tracking-tight font-bold text-gray-900'>
                        Hello<span className='text-sky-500'> Animation</span>
                    </h2>
                    <p className='mt-1 md:mt-2 xl:mt-3 text-lg md:text-2xl xl:text-4xl text-start tracking-tight font-light text-white'>
                        Your idea is living life, now with animations.
                    </p>
                    <h2 className='mt-2 md:mt-3 xl:pt-10 text-2xl md:text-4xl xl:text-6xl text-start tracking-tight font-bold text-gray-900'>
                        Hello<span className='text-sky-500'> Server</span>
                    </h2>
                    <p className='mt-3 md:mt-5 xl:mt-6 text-lg md:text-2xl xl:text-4xl text-start tracking-tight font-light text-white'>
                        Your idea needs data to live. We introduce your idea to RESTful 
                        <span className='text-sky-500'> APIs</span> and 
                        <span className='text-sky-500'> Databases</span>. 
                    </p>
                </div>
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