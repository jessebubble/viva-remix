import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactFormInput() {
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
        <div className="bg-slate-900 py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12 -mt-20 md:-mt-24 lg:-mt-0">
            <div className="mx-auto max-w-lg lg:max-w-none">
                <form ref={form} onSubmit={sendEmail} action="#" method="POST" className="grid grid-cols-1 gap-y-6">
                    <div>
                        <label htmlFor="name" className="sr-only">Full name</label>
                        <input 
                            type="text" name="name" id="name" autoComplete="name" 
                            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-400/60 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Full name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input 
                            type="email" name="email" id="email" autoComplete="email" 
                            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-400/60 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Email"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="sr-only">Phone</label>
                        <input 
                            type="text" name="phone" id="phone" autoComplete="tel" 
                            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-400/60 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Phone"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="sr-only">Message</label>
                        <textarea id="message" name="message" rows="4" className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-400/60 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Message"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-500 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}