import { Link } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';

export default function Hero() {
  return (
    <>
    <main className='bg-slate-900 lg:pb-10 lg:pt-10'>
        <div className="flex flex-col lg:flex-row items-center justify-evenly p-8 md:p-10 lg:p-16">
            <div className="">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight antialiased text-white">
                    More Than Just A<span className="block text-rose-400">Creative Agency </span>
                </h1>
                <p className="tracking-tight antialiased mt-3 md:mt-5 text-white max-w-xl text-lg md:text-xl">
                    <span className='lg:block'>We're a team of independent creatives, designers and developers who are passionate about helping our community continue to grow.</span> 
                    <span className="text-rose-400"> Hablamos español.</span>                     
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
                            <div className="absolute inset-0 bg-rose-400 mix-blend-multiply"></div>
                        </div>
                        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                            <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                                {/* <span className="block text-white">VIVA Web Design </span>
                                <span className="block text-indigo-200">your site, your way </span> */}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </>
  )
}