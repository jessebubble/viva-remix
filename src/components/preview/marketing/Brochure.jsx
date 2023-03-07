// simple one page brochure page for marketing

export default function Brochure() {

    return (
        <div className="mx-auto mt-24 max-w-7xl sm:mt-48 sm:px-6 lg:px-8">
            <div className="relative isolate overflow-hidden bg-slate-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
                <div className="">
                    <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                        <div className="lg:pl-20">
                            <div className="max-w-xs px-2.5 lg:max-w-none">
                                <img
                                    src="https://images.unsplash.com/photo-1506499550609-14f091850544?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                                    alt="portrait"
                                    sizes="(min-width: 1024px) 32rem, 20rem"
                                    className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                                />
                            </div>
                        </div>
                        <div className="lg:order-first lg:row-span-2">
                            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                                I'm Spencer Sharp. I live in New York City, where I design the
                                future.
                            </h1>
                            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                                <p>
                                    I’ve loved making things for as long as I can remember, and
                                    wrote my first program when I was 6 years old, just two weeks
                                    after my mom brought home the brand new Macintosh LC 550 that I
                                    taught myself to type on.
                                </p>
                                <p>
                                    The only thing I loved more than computers as a kid was space.
                                    When I was 8, I climbed the 40-foot oak tree at the back of our
                                    yard while wearing my older sister’s motorcycle helmet, counted
                                    down from three, and jumped — hoping the tree was tall enough
                                    that with just a bit of momentum I’d be able to get to orbit.
                                </p>
                                <p>
                                    I spent the next few summers indoors working on a rocket design,
                                    while I recovered from the multiple surgeries it took to fix my
                                    badly broken legs. It took nine iterations, but when I was 15 I
                                    sent my dad’s Blackberry into orbit and was able to transmit a
                                    photo back down to our family computer from space.
                                </p>
                                <p>
                                    Today, I’m the founder of Planetaria, where we’re working on
                                    civilian space suits and manned shuttle kits you can assemble at
                                    home so that the next generation of kids really <em>can</em>{' '}
                                    make it to orbit — from the comfort of their own backyards.
                                </p>
                            </div>
                        </div>
                        <div className="lg:pl-20">
                            <ul className="text-white">
                                <div className=" flex items-center gap-2">
                                    <svg className="h-6 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                    Follow on Twitter
                                </div>
                                <div className="mt-4 flex items-center gap-2">
                                    <svg className="h-6 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z" />
                                    </svg>
                                    Follow on GitHub
                                </div>
                                <div className="mt-4 flex items-center gap-2">
                                    <svg className="h-6 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                                    </svg>
                                    Follow on LinkedIn
                                </div>
                                <div className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex items-center gap-2">
                                    <svg className="h-6 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z" />
                                    </svg>
                                    spencer@planetaria.tech
                                </div>
                            </ul>
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