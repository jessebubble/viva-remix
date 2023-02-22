import HeroNavigation from "../components/hero/HeroNavigation"
import Service from "../components/service/Service"
import Footer from "../components/footer/Footer"

export default function Services() {

    return (
        <div className="relative isolate bg-slate-900">            
            <HeroNavigation />
            <Service />
            <Footer />
        </div>
    )
}