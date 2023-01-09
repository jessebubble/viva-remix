import { FiInstagram, FiFacebook, FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import { IconContext } from 'react-icons';


export default function Footer() {
  let year = new Date().getFullYear();

    return (
      <footer class="bg-white">
        <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div class="flex justify-center space-x-6 md:order-2">
            <IconContext.Provider value={{ className: 'hover:text-indigo-500 h-6 w-6' }}>
              <a href="https://www.instagram.com/jessebubble" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">Instagram</span>
                  <FiInstagram />
              </a>

            <a href="https://www.facebook.com/jessebubble" class="text-gray-400 hover:text-gray-500">
              <span class="sr-only">Facebook</span>
                <FiFacebook />
            </a>

            <a href="https://twitter.com/jessebubble" class="text-gray-400 hover:text-gray-500">
              <span class="sr-only">Twitter</span>
                <FiTwitter />
            </a>

            <a href="https://www.linkedin.com/in/jessebubble" class="text-gray-400 hover:text-gray-500">
              <span class="sr-only">Linkedin</span>
                <FiLinkedin />
            </a>

            <a href="https://github.com/jessebubble" class="text-gray-400 hover:text-gray-500">
              <span class="sr-only">Github</span>
                <FiGithub />
            </a>
            </IconContext.Provider>
          </div>
          <div class="mt-8 md:order-1 md:mt-0">
            <p class="text-center text-base text-gray-400">&copy; {year} Viva Web Design</p>
          </div>
        </div>
      </footer>
    );
}