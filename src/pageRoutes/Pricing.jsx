import HeroNavigation from "../components/hero/HeroNavigation"
import PricingCTA from "../components/cta/PricingCTA"
import PricingCard from "../components/pricing/PricingCard"
import PricingFactors from "../components/pricing/PricingFactors"
import FAQs from "../components/FAQs/FAQs"
import ContactCTA from "../components/cta/ContactCTA"
import Footer from "../components/footer/Footer"

export default function Pricing() {

    return (
        <div className="bg-slate-900">            
            <HeroNavigation />
            <PricingCard />
            <PricingFactors />
            <PricingCTA />
            <FAQs />
            <ContactCTA />
            <Footer />
        </div>
    )
}