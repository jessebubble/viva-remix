import Hero from '../components/hero/Hero';
import ServiceViva from '../components/featureSections/serviceViva/ServiceViva';
import ServiceWorkflow from '../components/featureSections/serviceWorkflow/ServiceWorkflow';
import ServiceBlock from '../components/featureSections/serviceBlock/ServiceBlock';
import CommunityCTA from '../components/cta/CommunityCTA'
import Testimonials from '../components/testimonials/Testimonials';
import FAQs from '../components/FAQs/FAQs';
import ContactForm from '../components/contactForm/ContactForm';
import Footer from '../components/footer/Footer';

export default function LandingPage() {

    return (
        <>
            <Hero />
            <ServiceViva />
            <ServiceWorkflow />
            <ServiceBlock />
            <Testimonials />
            <CommunityCTA />
            <ContactForm />
            <FAQs />
            <Footer />
        </>
    )
}