import { LockClosedIcon } from '@heroicons/react/20/solid'

export default function Payment() {

    return (
        <div className="mx-auto mt-24 max-w-7xl sm:mt-48 sm:px-6 lg:px-8">
            <div className="relative isolate overflow-hidden bg-slate-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div>
                        <h2 className="mt-6 mb-6 text-3xl font-bold tracking-tight text-white">
                            Payments powered by <span className="text-logo-pink">Stripe</span>
                        </h2>
                    </div>
                    <button type="button" className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-white py-2 text-gray-900 hover:bg-logo-pink focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
                        <span className="sr-only">Pay with Apple Pay</span>
                        <svg className="h-5 w-auto" fill="currentColor" viewBox="0 0 50 20">
                            <path d="M9.536 2.579c-.571.675-1.485 1.208-2.4 1.132-.113-.914.334-1.884.858-2.484C8.565.533 9.564.038 10.374 0c.095.951-.276 1.884-.838 2.579zm.829 1.313c-1.324-.077-2.457.751-3.085.751-.638 0-1.6-.713-2.647-.694-1.362.019-2.628.79-3.323 2.017-1.429 2.455-.372 6.09 1.009 8.087.676.99 1.485 2.075 2.552 2.036 1.009-.038 1.409-.656 2.628-.656 1.228 0 1.58.656 2.647.637 1.104-.019 1.8-.99 2.475-1.979.771-1.122 1.086-2.217 1.105-2.274-.02-.019-2.133-.828-2.152-3.263-.02-2.036 1.666-3.007 1.742-3.064-.952-1.408-2.437-1.56-2.951-1.598zm7.645-2.76v14.834h2.305v-5.072h3.19c2.913 0 4.96-1.998 4.96-4.89 0-2.893-2.01-4.872-4.885-4.872h-5.57zm2.305 1.941h2.656c2 0 3.142 1.066 3.142 2.94 0 1.875-1.142 2.95-3.151 2.95h-2.647v-5.89zM32.673 16.08c1.448 0 2.79-.733 3.4-1.893h.047v1.779h2.133V8.582c0-2.14-1.714-3.52-4.351-3.52-2.447 0-4.256 1.399-4.323 3.32h2.076c.171-.913 1.018-1.512 2.18-1.512 1.41 0 2.2.656 2.2 1.865v.818l-2.876.171c-2.675.162-4.123 1.256-4.123 3.159 0 1.922 1.495 3.197 3.637 3.197zm.62-1.76c-1.229 0-2.01-.59-2.01-1.494 0-.933.752-1.475 2.19-1.56l2.562-.162v.837c0 1.39-1.181 2.379-2.743 2.379zM41.1 20c2.247 0 3.304-.856 4.227-3.454l4.047-11.341h-2.342l-2.714 8.763h-.047l-2.714-8.763h-2.409l3.904 10.799-.21.656c-.352 1.114-.923 1.542-1.942 1.542-.18 0-.533-.02-.676-.038v1.779c.133.038.705.057.876.057z" />
                        </svg>
                    </button>
                    <div className="relative mt-8">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-cta-blue rounded-md px-2 text-sm font-medium text-logo-pink">or fill out the form below</span>
                        </div>
                    </div>
                    <form className="mt-6">
                        <div className="grid grid-cols-12 gap-y-6 gap-x-4">
                            <div className="col-span-full">
                                <label htmlFor="email-address" className="block text-sm font-medium leading-6 text-gray-400">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="email" id="email-address" name="email-address" autoComplete="email"
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                                    />
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="name-on-card" className="block text-sm font-medium leading-6 text-gray-400">
                                    Name on card
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text" id="name-on-card" name="name-on-card" autoComplete="cc-name"
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                                    />
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="card-number" className="block text-sm font-medium leading-6 text-gray-400">
                                    Card number
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="number" id="card-number" name="card-number" autoComplete="cc-number"
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                                    />
                                </div>
                            </div>
                            <div className="col-span-8 sm:col-span-9">
                                <label htmlFor="expiration-date" className="block text-sm font-medium leading-6 text-gray-400">
                                    Expiration date (MM/YY)
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="number" name="expiration-date" id="expiration-date" autoComplete="cc-exp"
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                                    />
                                </div>
                            </div>
                            <div className="col-span-4 sm:col-span-3">
                                <label htmlFor="cvc" className="block text-sm font-medium leading-6 text-gray-400">
                                    CVC
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="number" name="cvc" id="cvc" autoComplete="csc"
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                                    />
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-400">
                                    Address
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text" id="address" name="address" autoComplete="street-address"
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                                    />
                                </div>
                            </div>
                            <div className="col-span-full sm:col-span-4">
                                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-400">
                                    City
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text" id="city" name="city" autoComplete="address-level2"
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                                    />
                                </div>
                            </div>
                            <div className="col-span-full sm:col-span-4">
                                <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-400">
                                    State / Province
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text" id="region" name="region" autoComplete="address-level1"
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                                    />
                                </div>
                            </div>
                            <div className="col-span-full sm:col-span-4">
                                <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-400">
                                    Postal code
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="number" id="postal-code" name="postal-code" autoComplete="postal-code"
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flex space-x-2">
                            <div className="flex h-5 items-center">
                                <input
                                    id="same-as-shipping" name="same-as-shipping" type="checkbox" defaultChecked
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                            </div>
                            <label htmlFor="same-as-shipping" className="text-sm font-medium text-gray-500">
                                Billing address is the same as shipping address
                            </label>
                        </div>
                        <button type="submit" className="mt-6 w-full rounded-md border border-transparent bg-logo-pink py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Pay
                        </button>
                        <p className="mt-6 flex justify-center text-sm font-medium text-gray-500">
                            <LockClosedIcon className="mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                            Payment details stored in plain text
                        </p>
                    </form>
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