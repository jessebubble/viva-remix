import Nav from './components/nav';
import Footer from './components/footer';
import Hero from './components/hero';
import Price from './components/pricecards';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';

export default function App() {
    return (
        <>
        <Nav />
        <Hero />

        <main className="bg-indigo-500">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        <span className='text-emerald-400'>VIVA</span> Community
                    </h2>
                    <p className="mt-4 text-gray-200">You have great ideas and we want you to try them, lots of them. 
                        <span className='md:block'> We can help bring your ideas to life and we can help you do it quickly.</span>  
                        <span className=''>Share your work, someone out there needs it!</span>
                    </p>
                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        <div className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-900">Create Your Own Road</dt>
                            <dd className="mt-2 text-gray-200">Independent doesn't mean alone. We're here to help you create your own path.</dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-900">Your Site, Your Way</dt>
                            <dd className="mt-2 text-gray-200">We have the team and the tools to help you bring your idea to life and build the platform you want.</dd>
                       </div>
                        <div className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-900">Design | Develop</dt>
                            <dd className="mt-2 text-sm text-gray-200">Need a platform for E-Commerce and User Authentication? We can create that!</dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-900">Transparency</dt>
                            <dd className="mt-2 text-sm text-gray-200">The Future is transparency and our business is built on that.</dd>
                        </div>
                    </dl>
                </div>
                <div className="">
                    <div className=''> 
                        <Player
                        src='https://assets3.lottiefiles.com/packages/lf20_d4vi3spp.json'
                        className=''
                        background='transparent'
                        loop={true}
                        autoplay={true} >
                        </Player>
                    </div>
                </div>
            </div>
        </main>

        <main className="bg-white">
            <div className="mx-auto md:max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-evenly lg:py-16 lg:px-8">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="">Share Your Work </span>
                    <span className="block text-rose-500">Someone Out there needs it</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <a href="/contact" className="inline-flex items-center justify-center rounded-md border border-transparent bg-slate-900 px-5 py-3 text-base font-medium text-white hover:bg-slate-700">Get started</a>
                    </div>
                    <div className="ml-3 inline-flex rounded-md shadow">
                        <a href="/community" className="inline-flex items-center justify-center rounded-md border border-slate-900 px-5 py-3 text-base font-medium text-slate-900 hover:bg-slate-200">Learn more</a>
                    </div>
                </div>
            </div>
        </main>

        <main className="relative overflow-hidden bg-slate-200 pt-16 pb-32">
            <div className="relative">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                    <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                        <div>
                            <div>
                                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-indigo-600">
                                    {/* <!-- Heroicon name: outline/inbox --> */}
                                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
                                    </svg>
                                </span>
                            </div>
                            <div className="mt-6">
                                <h2 className="text-xl md:text-2xl font-medium tracking-tight text-gray-900">
                                    <span className='block text-2xl md:text-3xl text-rose-500 font-semibold'>Modern </span>Web Design and Animation</h2>                            
                                <p className="mt-4 text-lg text-gray-500">
                                    Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia porttitor. 
                                    Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra.
                                </p>
                                <div className="mt-6">
                                    <a href="/contact" className="inline-flex rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Get started</a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 border-t border-gray-200 pt-6">
                            <blockquote>
                                <div>
                                    <p className="text-base text-gray-500">&ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed diam. Sit orci risus aenean curabitur donec aliquet. Mi venenatis in euismod ut.&rdquo;</p>
                                </div>
                                <footer className="mt-3">
                                    <div className="flex items-center space-x-3">
                                        <div className="flex-shrink-0">
                                            <img 
                                                className="h-6 w-6 rounded-full" 
                                                src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" 
                                                alt=""
                                            />
                                        </div>
                                        <div className="text-base font-medium text-gray-700">
                                            Marcia Hill, Digital Marketing Manager
                                        </div>
                                    </div>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                    <div className="mt-12 sm:mt-16 lg:mt-0">
                        <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                            <img 
                                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none" 
                                src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg" 
                                alt="Inbox user interface"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-24">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                    <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
                        <div>
                            <div>
                                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-indigo-600">
                                    {/* <!-- Heroicon name: outline/sparkles --> */}
                                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                                    </svg>
                                </span>
                            </div>
                            <div className="mt-6">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                                    <span className='block text-2xl md:text-3xl text-rose-500 font-semibold'>Headless </span>Content Management System</h2>                            
                                <p className="mt-4 text-lg text-gray-500">
                                    Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia porttitor. 
                                    Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra.
                                </p>
                                <div className="mt-6">
                                    <a href="/contact" className="inline-flex rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Get started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
                        <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                            <img 
                                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none" 
                                src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg" 
                                alt="Customer profile user interface"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <main className="relative bg-white py-16">
            <div className="absolute inset-x-0 top-0 hidden h-1/2 bg-gray-50 lg:block" aria-hidden="true"></div>
            <div className="mx-auto max-w-7xl bg-indigo-600 lg:bg-transparent lg:px-8">
                <div className="lg:grid lg:grid-cols-12">
                    <div className="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
                        <div className="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden" aria-hidden="true"></div>
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
                                        <rect x="0" y="0" width="4" height="4" className="text-indigo-500" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                            </svg>
                            <svg className="absolute top-full -translate-y-1/3 -translate-x-1/3 transform xl:-translate-y-1/2" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                                <defs>
                                    <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                        <rect x="0" y="0" width="4" height="4" className="text-indigo-500" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                            </svg>
                        </div>
                        <div className="relative mx-auto max-w-md space-y-6 py-12 px-4 sm:max-w-3xl sm:py-16 sm:px-6 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
                            <h2 className="text-3xl font-bold tracking-tight text-white" id="join-heading">
                                Unlimted Revisions
                            </h2>
                            <p className="text-lg text-white">
                                Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.
                            </p>
                            <a href="/contact" className="block w-full rounded-md border border-transparent bg-white py-3 px-5 text-center text-base font-medium text-indigo-700 shadow-md hover:bg-gray-50 sm:inline-block sm:w-auto">
                                Get VIVA+ 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <Price />

        <main className="relative bg-slate-900">
            <div className="absolute bottom-0 h-80 w-full xl:inset-0 xl:h-full">
                <div className="h-full w-full xl:grid xl:grid-cols-2">
                    <div className="h-full xl:relative xl:col-start-2">
                        <img 
                            className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0" 
                            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100" 
                            alt="People working on laptops"
                        />
                        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"></div>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
                <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
                    <h2 className="text-base font-semibold text-indigo-300">
                        Valuable Metrics
                    </h2>
                    <p className="mt-3 text-3xl font-bold tracking-tight text-white">
                        Get actionable data that will help grow your business
                    </p>
                    <p className="mt-5 text-lg text-gray-300">
                        Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing quis in viverra tristique sem. 
                        Ornare feugiat viverra eleifend fusce orci in quis amet. Sit in et vitae tortor, massa. Dapibus laoreet amet lacus nibh integer quis. Eu vulputate diam sit tellus quis at.
                    </p>
                    <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                        <p>
                            <span className="block text-2xl font-bold text-white">8K+</span>
                            <span className="mt-1 block text-base text-gray-300"><span className="font-medium text-white">Companies</span> use laoreet amet lacus nibh integer quis.</span>
                        </p>
                        <p>
                            <span className="block text-2xl font-bold text-white">25K+</span>
                            <span className="mt-1 block text-base text-gray-300"><span className="font-medium text-white">Countries around the globe</span> lacus nibh integer quis.</span>
                        </p>
                        <p>
                            <span className="block text-2xl font-bold text-white">98%</span>
                            <span className="mt-1 block text-base text-gray-300"><span className="font-medium text-white">Customer satisfaction</span> laoreet amet lacus nibh integer quis.</span>
                        </p>
                        <p>
                            <span className="block text-2xl font-bold text-white">12M+</span>
                            <span className="mt-1 block text-base text-gray-300"><span className="font-medium text-white">Issues resolved</span> lacus nibh integer quis.</span>
                        </p>
                    </div>
                </div>
            </div>
        </main>

        <main className="bg-white lg:bg-heroPattern lg:p-10">
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:flex-col lg:items-center lg:justify-center lg:py-16 lg:px-8 lg:border-2 lg:border-gray-900 lg:rounded-xl lg:bg-white lg:max-w-md lg:shadow-md lg:hover:bg-yellow-300">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900-600 sm:text-4xl lg:text-center">
                    Questions?
                </h2>
                <div className="flex mt-8 lg:mt-4 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <a href="/contact" className="inline-flex items-center justify-center rounded-md border border-gray-900 bg-transparent px-5 py-3 text-base font-medium text-gray-900 hover:bg-indigo-500">Contact us</a>
                    </div>
                </div>
            </div>
        </main>
       
        <main className="bg-slate-900">
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-evenly lg:py-16 lg:px-8">
                    <div className="">
                        <Link to='/'>
                            <img
                            className='md:w-52'
                            src="./viva.png"
                            alt="logo"
                            />
                        </Link>
                    </div>
                <h2 className="text-3xl font-bold tracking-tight text-yellow-400 sm:text-4xl">
                    <span className="block">Ready to VIVA?</span>
                    <span className="block text-white">Start sharing your work today.</span>
                </h2>
                
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <a href="/contact" className="inline-flex items-center justify-center rounded-md border border-transparent bg-yellow-400 px-5 py-3 text-base font-medium text-gray-900 hover:bg-slate-200">Get started</a>
                    </div>
                    <div className="ml-3 inline-flex rounded-md shadow">
                        <a href="/design" className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-slate-200">Learn more</a>
                    </div>
                </div>
            </div>
        </main>

        <Footer />
        </>
    );
}