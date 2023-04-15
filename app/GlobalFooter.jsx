import { Mail, Linkedin, Facebook, Instagram } from "~/components/icons";

const footerArray = [
    { name: "mail", icon: Mail, link: "mailto:jesse@vivawebdesign.dev" },
    { name: "linkedin", icon: Linkedin, link: "https://www.linkedin.com/company/vivawebdesign/" },
    { name: "facebook", icon: Facebook, link: "https://www.facebook.com/vivawebdesign" },
    { name: "instagram", icon: Instagram, link: "https://www.instagram.com/vivawebdesign_" },
];

export default function GlobalFooter() {    
    let year = new Date().getFullYear();
    
    return (
        <footer className="bg-slate-900">
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
                <div className="md:order-2">
                    <div className="flex justify-center space-x-6 text-gray-400">
                        {footerArray.map((item) => {
                            return ( <item.icon key={item.name} onClick={() => window.open(item.link, "_blank")} className="hover:text-logopink" /> );
                        })}
                    </div>
                </div>
                <div className="mt-8 md:order-1 md:mt-0">
                    <p className="text-center text-base text-gray-400">&copy;{year} VIVA Web Design</p>
                </div>
            </div>
        </footer>
    );
}