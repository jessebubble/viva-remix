export default function Authentication() {
    return (
        <div className="mx-auto mt-24 max-w-7xl sm:mt-48 sm:px-6 lg:px-8">
            <div className="relative isolate overflow-hidden bg-slate-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div>
                        <h2 className="mt-6 text-3xl font-bold tracking-tight text-white">
                            Authentication powered by <span className="text-logo-pink">Supabase</span>
                        </h2>
                    </div>
                    <div className="mt-8">
                        <div>
                            <div>
                                <p className="text-sm font-medium leading-6 text-indigo-600">
                                    Sign in with
                                </p>
                                <div className="mt-2 grid grid-cols-3 gap-3">
                                    <div>
                                        <a href="/" className="inline-flex w-full justify-center rounded-md bg-white py-2 px-3 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" >
                                            <span className="sr-only">Sign in with Facebook</span>
                                            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/" className="inline-flex w-full justify-center rounded-md bg-white py-2 px-3 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" >
                                            <span className="sr-only">Sign in with Twitter</span>
                                            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/" className="inline-flex w-full justify-center rounded-md bg-white py-2 px-3 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" >
                                            <span className="sr-only">Sign in with GitHub</span>
                                            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="relative mt-6">
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="w-full border-t border-gray-300" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 text-logo-pink bg-cta-blue-dark rounded-md">or use your email below</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <form action="#" method="POST" className="space-y-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-400">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-400">
                                        Password
                                    </label>
                                    <div className="mt-2">
                                        <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                                            Remember me
                                        </label>
                                    </div>
                                    <div className="text-sm">
                                        <a href="/" className="font-medium text-indigo-500 hover:text-indigo-600">
                                            Forgot your password?
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-logo-pink py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            > Sign in
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
                <svg className="absolute inset-0 -z-10 h-full w-full stroke-slate-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true" >
                    <defs>
                        <pattern id="3096c803-efce-4a18-a601-c2f068f9adf3" width={200} height={200} x="50%" y={-24} patternUnits="userSpaceOnUse">
                            <path d="M.5 200V.5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-24} className="overflow-visible fill-slate-800/20">
                        <path d="M0 0h201v201h-201Z" strokeWidth={0} />
                    </svg>
                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#3096c803-efce-4a18-a601-c2f068f9adf3)" />
                </svg>
                <svg viewBox="0 0 1108 632" aria-hidden="true" className="absolute -top-24 -right-14 -z-10 w-[69.25rem] transform-gpu blur-3xl">
                    <path fill="url(#986f4ec8-ca62-4906-a05f-981d15a9baf5)" fillOpacity=".25" d="M235.233 229.055 57.541 310.091.83.615l234.404 228.44L555.251 83.11c-65.036 115.261-134.286 322.756 109.01 230.655C968.382 198.638 1031-19.583 1092.23 172.304c48.98 153.51-34.51 321.107-82.37 385.717L810.952 307.442 648.261 631.576 235.233 229.055Z" />
                    <defs>
                        <linearGradient
                            id="986f4ec8-ca62-4906-a05f-981d15a9baf5" x1="1220.59" x2="-85.053" y1="198.898" y2="-7.05" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#4F46E5" />
                            <stop offset={1} stopColor="#80CAFF" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    )
}  