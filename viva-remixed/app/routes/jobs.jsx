import { Player } from '@lottiefiles/react-lottie-player';

export default function Jobs() {

    return (
        <div className="bg-slate-900/10">
            <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="relative isolate overflow-hidden bg-slate-900/10 md:bg-white/10 px-6 pt-16 pb-16 md:pb-1 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 lg:pb-0">
                    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            <span className="text-logopink">Trabajos!</span> 
                            <br />
                            Grow with our team
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Join our passionate team of developers, designers, and creators who are building powerful, flexible, scalable, user-friendly, easily manageable online experiences
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            <a href="/services" className="text-base font-semibold leading-7 text-white hover:text-indigo-600">
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                    <div className="relative mt-6 h-80">
                        <Player
                            src="https://assets6.lottiefiles.com/packages/lf20_bOSKuc0XYH.json"
                            className='md:w-72 lg:w-full'
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