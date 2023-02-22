import alamoLogo from '../../assets/alamowelding.svg'
import portraitsLogo from '../../assets/vivaportraits.svg'
import wreathsLogo from '../../assets/vivawreaths.svg'
import yungLogo from '../../assets/yungguardian.svg'
import nologyLogo from '../../assets/nologyhop.svg'
import loteriaLogo from '../../assets/loteria.svg'

export default function CommunityCTA() {
  return (
    <div className="bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center lg:mb-6">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-logo-pink">Store</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Created for the local community</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our <span className="text-logo-pink">local collection</span> is an exclusive line of apparel created by the viva web design team.
            Every purchase from our store goes back to support the creatives in our local community.  
          </p>
        </div>
        <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
          <div className="bg-white/5 hover:bg-slate-900 hover:border hover:border-logo-pink sm:hover:rounded-2xl p-8 sm:p-10">
            <a href='/store'>
              <img className="max-h-40 lg:max-h-44 w-full object-contain" src={portraitsLogo} alt="Yung Guardian" />
            </a>
          </div>
          <div className="bg-white/5 hover:bg-slate-900 hover:border hover:border-logo-pink sm:hover:rounded-2xl p-6 sm:p-10">
            <a href='/store'>
              <img className="max-h-40 lg:max-h-44 w-full object-contain" src={yungLogo} alt="Viva Portraits" />
            </a>
          </div>
          <div className="bg-white/5 hover:bg-slate-900 hover:border hover:border-logo-pink sm:hover:rounded-2xl p-6 sm:p-10">
            <a href='/store'>
              <img className="max-h-40 lg:max-h-44 w-full object-contain" src={loteriaLogo} alt="Don Clemente Loteria" />
            </a>
          </div>
          <div className="bg-white/5 hover:bg-slate-900 hover:border hover:border-logo-pink sm:hover:rounded-2xl p-6 sm:p-10">
            <a href='/store'>
             <img className="max-h-40 lg:max-h-44 w-full object-contain" src={alamoLogo} alt="Nology Beer Hops" />
            </a>
          </div>
          <div className="bg-white/5 hover:bg-slate-900 hover:border hover:border-logo-pink sm:hover:rounded-2xl p-6 sm:p-10">
            <a href='/store'>
              <img className="max-h-40 lg:max-h-44 w-full object-contain" src={wreathsLogo} alt="Viva Wreaths" />
            </a>
          </div>
          <div className="bg-white/5 hover:bg-slate-900 hover:border hover:border-logo-pink sm:hover:rounded-2xl p-6 sm:p-10">
            <a href='/store'>
              <img className="max-h-40 lg:max-h-44 w-full object-contain" src={nologyLogo} alt="Alamo Welding" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}