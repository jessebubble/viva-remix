import { Player } from '@lottiefiles/react-lottie-player';

export default function Jobs() {

    return (
        <main className="relative bg-white py-16">
            <div className="absolute inset-x-0 top-0 hidden h-1/2 bg-white lg:block" aria-hidden="true"></div>
            <div className="mx-auto max-w-7xl bg-logopink lg:bg-transparent lg:px-8">
                <div className="lg:grid lg:grid-cols-12">
                    <div className="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
                        <div className="absolute inset-x-0 h-1/2 bg-white lg:hidden" aria-hidden="true"></div>
                        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                            <div className=''> 
                                <Player
                                    src='https://assets6.lottiefiles.com/packages/lf20_gNCP2JOT1l.json'
                                    className=''
                                    background='transparent'
                                    loop={true}
                                    autoplay={true} >
                                </Player>
                            </div>
                        </div>
                    </div>
                    <div className="relative bg-slate-900 lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
                        <div className="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block" aria-hidden="true">
                            <svg className="absolute bottom-full left-full translate-y-1/3 -translate-x-2/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                                <defs>
                                    <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                        <rect x="0" y="0" width="4" height="4" className="text-logopink" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                            </svg>
                            <svg className="absolute top-full -translate-y-1/3 -translate-x-1/3 transform xl:-translate-y-1/2" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                                <defs>
                                    <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                        <rect x="0" y="0" width="4" height="4" className="text-logopink" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                            </svg>
                        </div>
                        <div className="relative mx-auto max-w-md space-y-6 py-12 px-4 sm:max-w-3xl sm:py-16 sm:px-6 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
                            <h2 className="text-3xl font-bold tracking-tight text-white" id="join-heading">
                                Grow with our team
                            </h2>
                            <p className="text-lg text-white lg:w-3/4">
                                Join our passionate team of designers and developers who are excited to help our local community grow their business online.
                            </p>
                            <a href="/contact" className="block w-full rounded-md border border-transparent bg-white py-3 px-5 text-center text-base font-medium text-indigo-600 shadow-md hover:bg-gray-50 sm:inline-block sm:w-auto">
                                Let's Connect 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}