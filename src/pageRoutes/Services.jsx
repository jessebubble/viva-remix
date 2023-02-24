import HeroNavigation from "../components/hero/HeroNavigation"
import ServiceCTA from "../components/cta/ServiceCTA"
import WhatWeBuild from "../components/service/what-we-build/WhatWeBuild"
import Footer from "../components/footer/Footer"

export default function Services() {

    return (
        <div className="relative isolate bg-slate-900">            
            <HeroNavigation />
            <ServiceCTA />
            <WhatWeBuild />
            <Footer />
        </div>
    )
}