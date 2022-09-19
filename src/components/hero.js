import { Link } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';

export default function Hero() {
  return (

    <main className='bg-gradient-to-b from-slate-900 via-slate-900 to-sky-400 border-b-2'>
        <div className="flex flex-col lg:flex-row items-center justify-evenly p-8 md:p-10 lg:p-16">
            <div className="">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight antialiased text-white">
                    More Than Just A<span className="block text-cyan-400">Creative Agency </span>
                </h1>
                <p className="tracking-tight antialiased mt-3 md:mt-5 text-white max-w-xl text-lg md:text-xl">
                    We're a team of local independent creatives, designers, and developers who are passionate about helping our community continue to grow and thrive. 
                    We are proud to call this beautiful growing city of <span className="text-sky-400">San Antonio</span> home.                      
                </p>
                <div className="mt-5 flex items-center justify-start">
                    <div className='tracking-tight subpixel-antialiased p-2 items-center text-center border border-white bg-transparent text-xl md:text-2xl font-light hover:bg-sky-100 hover:border-sky-600 hover:border-2'>
                        <Link to="/design" className='text-white hover:text-sky-600 pr-2 pl-2'>
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
        <div className='bg-white p-6 md:p-10'>
            <div className='flex items-center justify-center mt-6 md:mt-4'>
                <h1 className='text-lg md:text-xl font-medium tracking-tight antialiased text-gray-500'>
                    Trusted By The Local <span className="text-sky-500">Community</span>
                </h1>
            </div>
            <div className='mt-6 md:mt-10 '>
                <div className='grid grid-cols-2 justify-items-center md:flex md:flex-row md:justify-evenly items-center gap-3 md:gap-0'>
                    <div>
                        <img
                            src='./bl.png'
                            alt='logo'
                            className='w-28 md:w-32 shadow-sm shadow-lime-500 bg-sky-700 rounded-xl hover:bg-black'
                        />
                    </div>
                    <div>
                        <img
                            src='./vplogo.png'
                            alt='logo'
                            className='w-28 md:w-32 shadow-sm shadow-amber-600 rounded-xl hover:bg-lime-200'
                        />
                    </div>
                    <div>
                        <img
                            src='./pr.png'
                            alt='logo'
                            className='w-28 md:w-32 shadow-sm shadow-black rounded-xl hover:bg-fuchsia-200'
                        />
                    </div>
                    <div>
                        <img
                            src='./dev.png'
                            alt='logo'
                            className='w-28 md:w-32 shadow-sm shadow-cyan-200 bg-slate-900 rounded-xl hover:bg-indigo-300'
                        />
                    </div>            
                </div>
            </div>
        </div>
    </main>
  )
}