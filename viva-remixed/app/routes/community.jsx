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
                        src="https://a-us.storyblok.com/f/1011218/500x500/82c0f8fbb9/community-array-1.svg"
                        alt="viva wreaths logo"
                    />
                    <img
                        className="col-span-2 max-h-40 w-full object-contain lg:col-span-1"
                        src="https://a-us.storyblok.com/f/1011218/500x500/4d13884fc0/community-array-2.svg"
                        alt="viva portraits logo"
                    />
                    
                    <img
                        className="col-span-2 max-h-40 w-full object-contain lg:col-span-1"
                        src="https://a-us.storyblok.com/f/1011218/500x500/afe32b775c/community-array-3.svg"
                        alt="yung guardian logo"
                    />
                    <img
                        className="col-span-2 max-h-40 w-full object-contain sm:col-start-2 lg:col-span-1"
                        src="https://a-us.storyblok.com/f/1011218/500x500/1121e52586/community-array-4.svg"
                        alt="alamo welding logo"
                    />
                    <img
                        className="col-span-2 col-start-2 max-h-40 w-full object-contain sm:col-start-auto lg:col-span-1"
                        src="https://a-us.storyblok.com/f/1011218/500x500/5caa4a1d5a/community-array-5.svg"
                        alt="nology tx triangle logo"
                    />
                </div>
            </div>
        </div>
        </>
    );
}