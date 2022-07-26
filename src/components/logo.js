import { Link } from 'react-router-dom';
import { ImInstagram, ImFacebook2, ImTwitter, ImYoutube, ImLinkedin } from "react-icons/im";
import { IconContext } from 'react-icons';

export default function Logo() {
    return (
        <>
        <div className='max-w-full flex flex-col justify-between items-center lg:px-6 lg:py-20 lg:flex lg:items-center lg:justify-between'>
                <h1 className='text-4xl text-center font-black tracking-tight text-gray-900 sm:text-9xl'>
                    <span className='block text-rose-400 uppercase'>Viva</span>
                    <span className='block'>Web Design</span>
                </h1>
        </div>
        <div className='max-w-full sticky top-0 flex flex-col border-2 border-black justify-between items-center lg:px-4 lg:py-10 lg:flex lg:items-center lg:justify-between bg-neutral-50'>
            <nav className='mt-1 flex align-middle lg:flex-shrink-0'>
                <div className='inline-flex rounded-md gap-10'>
                    <Link to='/' className='text-rose-400 font-medium text-3xl hover:text-yellow-300'>Viva Web Design</Link>
                    <Link to='/design' className='text-gray-900 font-medium text-3xl hover:text-rose-400'>Design</Link>
                    <Link to='/animation' className='text-gray-900 font-medium text-3xl hover:text-rose-400'>Animation</Link>
                    <Link to='/pricing' className='text-gray-900 font-medium text-3xl hover:text-rose-400'>Pricing</Link>
                    <Link to='/contact' className='font-medium text-3xl text-gray-900 hover:text-rose-400'>Contact</Link>
                </div>
            </nav>
        </div>
            <div className="grid grid-cols-2 border-2 border-black">
                <main className="bg-rose-500 px-4 py-40">
                    <h1 className="text-2xl text-center md:text-4xl">Viva Web Design Message</h1>
                </main>
                <aside className="bg-fuchsia-400 px-5 py-40">
                    <h1 className="text-2xl text-center md:text-4xl">Viva Web Design Message</h1>
                </aside>
            </div>
            <div className="grid grid-cols-2 border-2 border-black">
                <main className="bg-black px-4 py-60">
                    <h1 className="text-2xl text-center text-white md:text-4xl">Viva Web Design Message</h1>
                </main>
                <aside className="bg-yellow-300 px-5 py-60">
                    <h1 className="text-2xl text-center md:text-4xl">Viva Web Design Message</h1>
                </aside>
            </div>
            <div className="grid grid-cols-1 border-2 border-black">
                <main className="bg-white px-4 py-60">
                    <h1 className="text-2xl text-center md:text-4xl">Collaborate Communicate Message</h1>
                </main> 
            </div>
            <div className="grid grid-cols-2 border-2 border-black">
                <main className="bg-cyan-500 px-4 py-60">
                    <h1 className="text-2xl text-center text-white md:text-4xl">Viva Web Design Message</h1>
                </main>
                <aside className="bg-rose-500 px-5 py-60">
                    <h1 className="text-2xl text-center md:text-4xl">Viva Web Design Message</h1>
                </aside>
            </div>
            <div className="grid grid-cols-1 border-2 border-black">
                <main className="bg-white px-4 py-60">
                    <h1 className="text-2xl text-center md:text-4xl">Collaborate Communicate Message</h1>
                </main> 
            </div>
            <footer className='bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500'>
                <div className='max-w-7xl mx-auto px-6 py-20 sm:px-6 lg:py-30 lg:px-8 lg:flex lg:items-center lg:justify-between'>
                    <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-6xl'>
                        <span className="block">Ready to dive in?</span>
                        <span className="block text-purple-100">Let's get started today.</span>
                    </h2>
                <div className='mt-8 flex lg:mt-0 lg:flex-shrink-0'>
                    <div className='inline-flex rounded-md shadow'>
                        <Link to="/contact" 
                            className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-yellow-300'>
                            Contact Us
                        </Link>
                    </div>
                    <div className='ml-3 inline-flex rounded-md shadow-sm'>
                        <Link to="/pricing"
                            className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 hover:bg-yellow-300'>
                            Pricing
                        </Link>
                    </div>
                </div>
                </div>
                <div className='max-w-7xl mx-auto px-6 py-20 sm:px-6 lg:py-30 lg:px-8 lg:flex lg:items-center lg:justify-between'>
                    <h1 className='text-3xl font-black tracking-tight text-gray-900 sm:text-6xl'>
                        <span className='block'>@Viva Web Design</span>
                    </h1>
                    <div className='mt-8 flex lg:mt-0 lg:flex-shrink-0'>
                        <div className='inline-flex rounded-md gap-4'>
                            <IconContext.Provider 
                                value={{ className: 'text-gray-100 hover:text-yellow-300 h-6 w-8' }}>
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