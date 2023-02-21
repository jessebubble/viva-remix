import HeroNavigation from "../components/hero/HeroNavigation";
import JobsCTA from "../components/cta/JobsCTA";
import Footer from "../components/footer/Footer";

export default function Jobs() {

    return (
        <div className="relative isolate bg-slate-900">            
            <HeroNavigation />
            <JobsCTA />
            <Footer />
        </div>
    );
}