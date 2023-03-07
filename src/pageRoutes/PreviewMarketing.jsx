import MarketingCTA from "../components/preview/marketing/MarketingCTA"
import HeroNavigation from "../components/hero/HeroNavigation"
import Brochure from "../components/preview/marketing/Brochure"

export default function PreviewMarketing() {
    
    return (
        <div className="relative isolate bg-slate-900">            
            <HeroNavigation />
            <MarketingCTA />
            <Brochure />
        </div>
    )
}   
