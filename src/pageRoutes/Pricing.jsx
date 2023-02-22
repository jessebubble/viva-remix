import HeroNavigation from "../components/hero/HeroNavigation"
import PricingCTA from "../components/cta/PricingCTA"
import PricingCard from "../components/pricing/PricingCard"
import FAQs from "../components/FAQs/FAQs"
import Footer from "../components/footer/Footer"

export default function Pricing() {

    return (
        <div className="bg-slate-900">            
            <HeroNavigation />
            <PricingCard />
            <PricingCTA />
            <FAQs />
            <Footer />
        </div>
    )
}