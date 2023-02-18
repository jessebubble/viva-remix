import HeroSVG from './HeroSVG'
import HeroNavigation from './HeroNavigation'
import HeroBody from './HeroBody'

export default function Hero() {

    return (
        <div className="relative isolate bg-slate-900">
            <HeroSVG />
            <HeroNavigation />
            <HeroBody />
        </div>
    )
}