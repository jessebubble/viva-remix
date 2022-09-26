import Nav from './nav'
import Footer from './footer'
import Form from './form'

export default function Contact() {
    return (
        <>
        <Nav />
        <Form />

        <main className="relative bg-slate-900">
            <div className="absolute bottom-0 h-80 w-full xl:inset-0 xl:h-full">
                <div className="h-full w-full xl:grid xl:grid-cols-2">
                    <div className="h-full xl:relative xl:col-start-2">
                        <img 
                            className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0" 
                            src="right.png" 
                            alt="3d rocket"
                        />
                        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"></div>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
                <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
                    <h2 className="text-base font-semibold text-slate-400">
                        VIVA Web Design
                    </h2>
                    <p className="mt-3 text-3xl font-bold tracking-tight text-white">
                        Create Your Own Path
                    </p>
                    <p className="mt-5 text-lg text-gray-300">
                        You have great ideas and we want you to try them, lots of them. 
                        We can help bring your ideas to life and we can help you do it quickly. 
                    </p>
                    <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                        <p>
                            <span className="block text-2xl font-bold text-white">Transparency</span>
                            <span className="mt-1 block text-base text-gray-300">The future is transparency and that's how we run our business.</span>
                        </p>
                        <p>
                            <span className="block text-2xl font-bold text-white">Your Site, Your Way</span>
                            <span className="mt-1 block text-base text-gray-300"> Listen, collaborate and build. Our goal is to bring your idea to life.</span>
                        </p>
                        <p>
                            <span className="block text-2xl font-bold text-white">Community</span>
                            <span className="mt-1 block text-base text-gray-300">Network with our growing Community for your future needs.</span>
                        </p>
                        <p>
                            <span className="block text-2xl font-bold text-white">VIVA+</span>
                            <span className="mt-1 block text-base text-gray-300">With our yearly subscription, gain access to seasonal content updates.</span>
                        </p>
                    </div>
                </div>
            </div>
        </main>

        <main className="bg-slate-900">
            <div className="mx-auto md:max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    <span className="">Share Your Work </span>
                    <span className="block text-slate-500">Someone Out there needs it</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <a href="/contact" className="inline-flex items-center justify-center rounded-md border border-transparent bg-slate-500 px-5 py-3 text-base font-medium text-white hover:bg-slate-700">Get started</a>
                    </div>
                    <div className="ml-3 inline-flex rounded-md shadow">
                        <a href="/contact" className="inline-flex items-center justify-center rounded-md border border-slate-900 px-5 py-3 text-base font-medium text-slate-900 hover:bg-slate-200">Learn more</a>
                    </div>
                </div>
            </div>
        </main>

        <Footer />
        </>
    );
}