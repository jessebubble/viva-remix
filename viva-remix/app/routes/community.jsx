import Testimonial from "~/components/testimonials/Testimonials"
import HeroCommunity from "~/components/community/HeroCommunity";
import StoreCTA from "~/components/cta/StoreCTA";

export default function Community() {

    return (
        <>
        <HeroCommunity />
        <Testimonial />
        <StoreCTA />
        <div className="bg-slate-900/10 py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg font-semibold leading-8 text-white">
                    VIVA La Comunidad!
                </h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <img
                        className="col-span-2 max-h-40 w-full object-contain lg:col-span-1"
                        src="https://cdn.sanity.io/images/etrj839y/production/d474cdcc5bab4c9d612e92c1b78014d70e89860e-500x500.svg"
                        alt="viva wreaths logo"
                    />
                    <img
                        className="col-span-2 max-h-40 w-full object-contain lg:col-span-1"
                        src="https://cdn.sanity.io/images/etrj839y/production/c6034551074ba5264e076bb38ec82e997d457801-1024x768.svg"
                        alt="nology texas triangle logo"
                    />
                    
                    <img
                        className="col-span-2 max-h-40 w-full object-contain lg:col-span-1"
                        src="https://cdn.sanity.io/images/etrj839y/production/1824b0d45111cb453585dba1fe1cadd553d6652b-500x500.svg"
                        alt="viva portraits logo"
                    />
                    <img
                        className="col-span-2 max-h-40 w-full object-contain sm:col-start-2 lg:col-span-1"
                        src="https://cdn.sanity.io/images/etrj839y/production/0e6a1f066cb36d9816169e9f069e9efd2b56175b-1024x768.svg"
                        alt="nology brewery logo"
                    />
                    <img
                        className="col-span-2 col-start-2 max-h-40 w-full object-contain sm:col-start-auto lg:col-span-1"
                        src="https://cdn.sanity.io/images/etrj839y/production/df1f0ea5979d432f18c5f5c9348ed7bd985b3fd6-500x500.svg"
                        alt="jessebubble logo"
                    />
                </div>
            </div>
        </div>
        </>
    );
}