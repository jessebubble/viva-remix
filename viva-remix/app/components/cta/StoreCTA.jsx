import { Player } from '@lottiefiles/react-lottie-player';

export default function StoreCTA() {

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-24 sm:px-6 lg:px-8">
                <div className="relative isolate overflow-hidden bg-gray-100 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            <span className="block text-logopink">VIVA La Tienda!</span>
                            The online experience is brought to life with our exclusive collections
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Our community gets the AI treatment, remixed by Midjourney. 
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            <a href="/store" className="text-base font-semibold leading-7 text-indigo-600 hover:text-indigo-500">
                                Shop our collections <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                    <div className="relative mt-6 md:mt-16 h-80">
                        <Player
                            src="https://assets6.lottiefiles.com/packages/lf20_gNCP2JOT1l.json"
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