import HeroNavigation from "../components/hero/HeroNavigation";
import ContactCTA from "../components/cta/ContactCTA";
import ContactForm from "../components/contactForm/ContactForm";
import FAQs from "../components/FAQs/FAQs";
import Footer from "../components/footer/Footer";

export default function Contact() {
     
    return (
        <div className="relative isolate bg-slate-900">
            <HeroNavigation />
            <ContactCTA />
            <ContactForm />
            <FAQs />
            <Footer />
        </div>
    );
}