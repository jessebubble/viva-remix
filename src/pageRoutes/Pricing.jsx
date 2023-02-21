import HeroNavigation from "../components/hero/HeroNavigation"
import PricingCard from "../components/pricing/PricingCard"
import FAQs from "../components/FAQs/FAQs"
import Footer from "../components/footer/Footer"

export default function Pricing() {

    return (
        <div className="relative isolate bg-slate-900">            
            <HeroNavigation />
            <PricingCard />
            <FAQs />
            <Footer />
        </div>
    )
}