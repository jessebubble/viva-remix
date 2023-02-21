import HeroNavigation from '../components/hero/HeroNavigation';
import PageNotFoundCTA from '../components/cta/PageNotFoundCTA';

import Footer from '../components/footer/Footer';

export default function PageNotFound() {
    return (
        <div className="relative isolate bg-slate-900">            
            <HeroNavigation />
            <PageNotFoundCTA />
            <Footer />
        </div>
    )
}