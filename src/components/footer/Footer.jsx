import { IconContext } from "react-icons";
import { footerLinksArray } from "./footerLinksArray";

export default function Footer() {    
    let year = new Date().getFullYear();
    
    return (
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
            <div className="flex justify-center space-x-6 md:order-2">
                <IconContext.Provider value={{ className: "w-6 h-6 text-gray-400 hover:text-logo-pink" }}>
                    {footerLinksArray.map((socialMedia, index) => {
                        return ( <socialMedia.icon key={index} onClick={() => window.open(socialMedia.link, "_blank")} /> );
                    })}
                </IconContext.Provider>
            </div>
            <div className="mt-8 md:order-1 md:mt-0">
                <p className="text-center text-base text-gray-400">&copy;{year} VIVA Web Design</p>
            </div>
        </div>
      </footer>
    );
}