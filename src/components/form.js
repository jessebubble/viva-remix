import { Link } from 'react-router-dom'
import { FiInstagram, FiTwitter, FiLinkedin, FiMail } from "react-icons/fi";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Form() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hxrxpdb', 'template_p9czz9g', form.current, 'Vg9DbywednMl26hQU')
            .then((result) => {
                    console.log(result.text);
                },(error) => {
                    console.log(error.text);
                });
                e.target.reset();
    };
    return (
        <>
        <main className="relative bg-slate-900 p-2 md:p-6 lg:p-10">
            <div className="absolute inset-0">
                <div className="absolute inset-y-0 left-0 w-1/2 bg-slate-900"></div>
            </div>
            <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
                <div className="bg-slate-900 rounded-3xl py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                    <div className="mx-auto max-w-lg">
                        <h2 className="text-2xl font-bold tracking-tight text-slate-400 sm:text-3xl">
                            Join the VIVA <span className='text-white'>Community</span>
                        </h2>
                        <p className="mt-3 text-lg leading-6 text-slate-400">
                            Have an idea, Let's collaborate and bring your idea to life! Send us a message and our team will get back to you as soon as possible.
                        </p>
                        <dl className="mt-8 text-base text-slate-400">
                            <div className="mt-6">
                                <dt className="sr-only">Email</dt>
                                <dd className="flex">
                                    <FiMail className='h-6 w-6' />
                                    <span className="ml-3">jesse@vivawebdesign.dev</span>
                                </dd>
                            </div>
                            <div className="mt-3">
                                <dt className="sr-only">Social</dt>
                                <dd className="flex">
                                    <FiInstagram className='h-6 w-6' />
                                    <span className="ml-3">@vivawebdesign</span>
                                </dd>
                            </div>
                            <div className="mt-3">
                                <dt className="sr-only">Social</dt>
                                    <dd className="flex">
                                        <FiTwitter className='h-6 w-6' />
                                        <span className="ml-3">@vivawebdesign</span>
                                    </dd>
                            </div>
                            <div className="mt-3">
                                <dt className="sr-only">Social</dt>
                                    <dd className="flex">
                                        <FiLinkedin className='h-6 w-6' />
                                        <span className="ml-3">@vivawebdesign</span>
                                    </dd>
                            </div>
                        </dl>
                        <div className="">
                            <Link to='/'>
                                <img
                                className='md:w-52'
                                src="./viva.png"
                                alt="logo"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-900 py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12 -mt-36 md:-mt-0">
                    <div className="mx-auto max-w-lg lg:max-w-none">
                        <form ref={form} onSubmit={sendEmail} action="#" method="POST" className="grid grid-cols-1 gap-y-6">
                            <div>
                                <label htmlFor="name" className="sr-only">Full name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    autoComplete="name" 
                                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Full name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input 
                                    id="email" 
                                    name="email" 
                                    type="email" 
                                    autoComplete="email" 
                                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Email"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="sr-only">Phone</label>
                                <input 
                                    type="text" 
                                    name="phone" 
                                    id="phone" 
                                    autoComplete="tel" 
                                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Phone"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">Message</label>
                                <textarea id="message" name="message" rows="4" className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Message"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-slate-500 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>

        <main className="bg-white ">
            <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
                <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                            Frequently asked questions
                        </h2>
                        <p className="mt-4 text-lg text-gray-500">
                            Can't find the answer you're looking for? Reach out to us directly and our team will get back to you as soon as possible.
                        </p>
                    </div>
                    <div className="mt-12 lg:col-span-2 lg:mt-0">
                        <dl className="space-y-12">
                            <div>
                                <dt className="text-lg font-medium leading-6 text-gray-900">What is Viva Plus?</dt>
                                <dd className="mt-2 text-base text-gray-500">
                                    Our yearly supscription service, gain access to seasonal visual updates, unlimited site revisions, and a dedicated support team
                                </dd>
                                <dt className="mt-4 text-lg font-medium leading-6 text-gray-900">What is Hello World?</dt>
                                <dd className="mt-2 text-base text-gray-500">
                                    As developers, Hello World is the first line of code we learn and at VIVA web design it's our way of introducing your idea to the world. 
                                    Your website is the first impression of your business, let us help you make a great one. 
                                </dd>
                                <dt className="mt-4 text-lg font-medium leading-6 text-gray-900">What is Hello CMS?</dt>
                                <dd className="mt-2 text-base text-gray-500">
                                    Our Content Managment System opens the door to a world of possibilities. 
                                    From blogs to E-Commerce, Hello CMS is the perfect platform for your website to grow. 
                                    With Hello CMS, you will be able to update website content and create new pages with just a few clicks.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </main>

        </>
    )
}