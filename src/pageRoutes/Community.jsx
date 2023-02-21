import HeroNavigation from '../components/hero/HeroNavigation';
import Testimonials from '../components/testimonials/Testimonials';
import Footer from '../components/footer/Footer';

export default function Community() {

    return (
        <div className="relative isolate bg-slate-900">            
            <HeroNavigation />
            <Testimonials />
            <Footer />
        </div>
    );
}