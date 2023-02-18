import Hero from '../components/hero/Hero';
import ServiceViva from '../components/featureSections/serviceViva/ServiceViva';
import ServiceWorkflow from '../components/featureSections/serviceWorkflow/ServiceWorkflow';
import ServiceBlock from '../components/featureSections/serviceBlock/ServiceBlock';
import CommunityCTA from '../components/cta/CommunityCTA'
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
            <FAQs />
            <CommunityCTA />
            <ContactForm />
            <Footer />
        </>
    )
}