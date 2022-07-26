import { Link } from 'react-router-dom';
import { ImInstagram, ImFacebook2, ImTwitter, ImYoutube, ImLinkedin } from "react-icons/im";
import { IconContext } from 'react-icons';

export default function About() {
    return (
        <>
        <div className="w-full flex flex-col" >

            <div className="flex flex-col border-2 sticky top-0 border-black border-l-transparent bg-neutral-50">
                <nav className='md:text-lg md:grid md:grid-cols-6 gap-4 px-4 py-4 text-center'>
                    <ul className='hover:text-orange-400'> <Link to="/"> Viva Web Design </Link> </ul>
                    <ul className='hover:text-orange-400'> <Link to="/design"> Design </Link> </ul>
                    <ul className='hover:text-purple-100'> <Link to="/animation"> Animation </Link> </ul>
                    <ul className='hover:text-purple-100'> <Link to="/logo"> Brand Logo </Link> </ul>
                    <ul className='hover:text-rose-600 '> <Link to="/pricing"> Pricing </Link> </ul>
                    <ul className='hover:text-rose-600'> <Link to="/contact"> Contact </Link> </ul>
                </nav>
            </div>
            <div className="grid grid-cols-2 border-2 border-black">
                <main className="bg-rose-500 px-4 py-40">
                    <h1 className="text-2xl text-center md:text-4xl">Viva Local</h1>
                    <p className="text-center md:text-xl">We love spending time exploring our community of local Art, Beer and Music creators</p>
                </main>
                <aside className="bg-fuchsia-400 px-5 py-40">
                    <h1 className="text-2xl text-center md:text-4xl">Insert Image</h1>
                </aside>
            </div>
            <div className="grid grid-cols-2 border-2 border-black">
                <main className="bg-black px-4 py-60">
                    <h1 className="text-2xl text-center text-white md:text-4xl">Insert Image</h1>
                </main>
                <aside className="bg-yellow-300 px-5 py-60">
                    <h1 className="text-2xl text-center md:text-4xl">Viva Familia</h1>
                        <p className="text-center md:text-xl">We are a family of artists, designers, and developers</p>
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
        </div>
        </>
    );
}