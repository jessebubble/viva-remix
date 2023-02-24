import { Player } from '@lottiefiles/react-lottie-player';

export default function ServiceCTA() {

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="relative isolate overflow-hidden bg-slate-900 px-6 pt-16 pb-16 md:pb-1 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 lg:pb-0">
                    <svg viewBox="0 0 1024 1024" className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2" aria-hidden="true" >
                        <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                        <defs>
                            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                <stop stopColor="#E11887" />
                                <stop offset={1} stopColor="#E11887" />
                            </radialGradient>
                        </defs>
                    </svg>
                    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            <span className="text-logo-pink">Services</span> 
                            <br />
                            The why behind our love for creating custom blocks
                            
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            One of the perks we have with creating custom code is it enables us to work smarter not harder. 
                        </p>
                    </div>
                    <div className="relative mt-6 h-80">
                        <Player
                            src="https://assets6.lottiefiles.com/packages/lf20_XVBzBYKqBd.json"
                            className='md:w-60 lg:w-96'
                            background='transparent'
                            loop={true}
                            autoplay={true} >
                        </Player>
                    </div>
                </div>
            </div>
        </div>
    )
}  