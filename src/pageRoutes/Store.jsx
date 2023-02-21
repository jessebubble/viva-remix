import HeroNavigation from "../components/hero/HeroNavigation"
import StoreCTA from "../components/cta/StoreCTA"
import Footer from "../components/footer/Footer"

export default function Store() {

    return (
        <div className="relative isolate bg-slate-900">            
            <HeroNavigation />
            <StoreCTA />
            <Footer />
        </div>
    )
}