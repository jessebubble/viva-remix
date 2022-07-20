import { Link } from 'react-router-dom';

export default function Remote() {
    return (
        <>
        <div className="w-full flex flex-col" >

            <div className="flex flex-col border-2 sticky top-0 border-black border-l-transparent bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500">
                <nav className='md:text-lg md:grid md:grid-cols-6 gap-4 px-4 py-4 text-center'>
                    <ul className='hover:text-orange-400'> <Link to="/"> Viva Web Design </Link> </ul>
                    <ul className='hover:text-orange-400'> <Link to="/discover"> Discover </Link> </ul>
                    <ul className='hover:text-purple-100'> <Link to="/pricing"> Pricing </Link> </ul>
                    <ul className='hover:text-purple-100'> <Link to="/contact"> Contact </Link> </ul>
                    <ul className='hover:text-rose-600 '> <Link to="/design"> Design </Link> </ul>
                    <ul className='hover:text-rose-600'> <Link to="/about"> About </Link> </ul>
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
            <footer className='grid grid-cols-1 border-2 border-black'>
                <main className="px-4 py-60 bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500">
                    <h2 className='text-2xl text-center md:text-4xl'>THE END</h2>
                </main>
            </footer>
        </div>
        </>
    );
}