import ContactFormSocial from "./ContactFormSocial";
import ContactFormInput from "./ContactFormInput";

export default function ContactForm() {
    
    return (
        <>
            <main className="relative bg-slate-900 p-2 md:p-6 lg:p-10">
                <div className="absolute inset-0">
                    <div className="absolute inset-y-0 left-0 w-1/2 bg-slate-900"></div>
                </div>
                <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
                    <ContactFormSocial />
                    <ContactFormInput />
                </div>
            </main>
        </>
    )
}