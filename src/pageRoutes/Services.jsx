import HeroNavigation from "../components/hero/HeroNavigation"
import Create from "../components/service/create/Create"
import Tools from "../components/service/tools/Tools"
import StoreCTA from "../components/cta/StoreCTA"
import Footer from "../components/footer/Footer"

export default function Services() {

    return (
        <div className="relative isolate bg-slate-900">            
            <HeroNavigation />
            <Create />
            <Tools />
            <StoreCTA />
            <Footer />
        </div>
    )
}