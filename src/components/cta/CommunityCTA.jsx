import alamoLogo from '../../assets/alamowelding.svg'
import portraitsLogo from '../../assets/vivaportraits.svg'
import wreathsLogo from '../../assets/vivawreaths.svg'
import yungLogo from '../../assets/yungguardian.svg'
import nologyLogo from '../../assets/nologyhop.svg'

export default function CommunityCTA() {

  return (
    <div className="bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 className="text-lg font-semibold leading-8 text-white">Building fast, SEO-optimized, user-friendly and easily manageable websites for the local community.</h2>
          <div className="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-5">  
            <img
              className="max-h-36 md:max-h-60 lg:max-h-32 w-full object-contain object-left col-span-2 lg:col-span-1"
              src={wreathsLogo}
              alt="Viva Wreaths"
            />
            <img
              className="max-h-36 md:max-h-60 lg:max-h-32 w-full object-contain object-left col-span-2 lg:col-span-1"
              src={yungLogo}
              alt="Nology Beer Hop"
            />
            <img
              className="max-h-36 md:max-h-60 lg:max-h-32 w-full object-contain object-left col-span-2 lg:col-span-1"
              src={nologyLogo}
              alt="Viva Wreaths"
            />
            <img
              className="max-h-36 md:max-h-60 lg:max-h-32 w-full object-contain object-left col-span-2 lg:col-span-1"
              src={alamoLogo}
              alt="Don Clemente Loteria"
            />
            <img
              className="max-h-36 md:max-h-60 lg:max-h-32 w-full object-contain object-left col-span-2 lg:col-span-1"
              src={portraitsLogo}
              alt="Alamo Welding"
            />
          </div>
        </div>
      </div>
    </div>
  )
}