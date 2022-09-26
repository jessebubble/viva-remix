import { FiInstagram, FiFacebook, FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import { IconContext } from 'react-icons';
import { Player } from '@lottiefiles/react-lottie-player';


export default function Footer() {
    return (
      <>
      <div className='bg-slate-900 border-t border-slate-100 p-4 md:p-0'>
        <div className='flex items-center justify-center md:justify-around flex-col md:flex-row'>
          <span className='text-sm tracking-tighter text-slate-500'>
            © 2022 vivawebdesign.dev
          </span>
          <div className=''> 
            <Player
            src='https://assets7.lottiefiles.com/packages/lf20_kovKmF.json'
            className='md:w-20 w-16'
            background='transparent'
            loop={true}
            autoplay={true} >
            </Player>
        </div>
          <div className='flex space-x-2'>
            <IconContext.Provider 
              value={{ className: 'text-slate-300 hover:text-indigo-600 h-6 w-8' }}>
                <a href='https://github.com/jessebubble' className=''>
                  <FiGithub />
                </a>
                <a href='https://twitter.com/jessebubble' className=''>
                  <FiLinkedin />
                </a>
                <a href='https://www.instagram.com/jessebubble' className=''>
                  <FiInstagram />
                </a>
                <a href='https://www.facebook.com/jessebubble' className=''>
                  <FiFacebook />
                </a>
                <a href='https://www.linkedin.com/in/jessebubble' className=''>
                  <FiTwitter />
                </a>
            </IconContext.Provider>
          </div>
        </div>
      </div>
      </>
    );
}