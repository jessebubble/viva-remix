import HeroSVG from "../components/hero/HeroSVG"
import HeroNavigation from "../components/hero/HeroNavigation"
import Footer from "../components/footer/Footer"

export default function Store() {

    return (
        <div className="relative isolate bg-slate-900">            
            <HeroSVG />
            <HeroNavigation />
            <Footer />
        </div>
    )
}