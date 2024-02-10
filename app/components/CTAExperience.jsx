import { Link } from '@remix-run/react';
import { Container } from '~/components/Container';
import { FadeIn, FadeInStagger } from '~/components/FadeIn';
import { Border } from '~/components/Border';
import { SectionIntro } from '~/components/SectionIntro';
import { GridPattern } from '~/components/GridPattern';

const collections = [
   {
      title: 'Websites that work for everyone',
      examples: [
         {
            name: 'Online Experiences',
            role: 'Focused on web standards and modern user experiences',
            image: {
               src: 'https://res.cloudinary.com/jessebubble/image/upload/v1707188269/dogrock2_oangss.png',
            },
            href: '/services',
         },
         {
            name: '501(c)(3) Organizations',
            role: 'Your non-profit deserves more than that free template you found online',
            image: {
               src: 'https://res.cloudinary.com/jessebubble/image/upload/v1707537773/hero_mztbcy.jpg',
            },
            href: '/non-profit',
         },
         {
            name: 'Software Applications',
            role: 'Data-driven tools for managing payroll, inventory, and more',
            image: {
               src: 'https://res.cloudinary.com/jessebubble/image/upload/v1707532025/reporting_a1uqnq.png',
            },
            href: '/software-applications',
         },
      ],
   },
   {
      title: 'Designs that work for everyone',
      examples: [
         {
            name: 'Vector Graphics',
            role: 'For your website, social media, and print materials',
            image: {
               src: 'https://res.cloudinary.com/jessebubble/image/upload/v1706924009/hands_wcknbq.png',
            },
            href: '/services',
         },
         {
            name: 'Flyers',
            role: 'Flyers for your events, promotions, and more',
            image: {
               src: 'https://res.cloudinary.com/jessebubble/image/upload/v1707188269/flyer_w7xj6k.png',
            },
            href: '/services',
         },
         {
            name: 'Menus',
            role: 'Menus for your restaurant, food truck, or any other business',
            image: {
               src: 'https://res.cloudinary.com/jessebubble/image/upload/v1706921594/cat_vtjbik.png',
            },
            href: '/services',
         },
         {
            name: 'Brochures',
            role: 'Brochures for your business, event, or organization',
            image: {
               src: 'https://res.cloudinary.com/jessebubble/image/upload/v1706921594/sponsor_ejuylh.png',
            },
            href: '/services',
         },
         {
            name: 'Business Cards',
            role: 'Professional business cards for your business or organization',
            image: {
               src: 'https://res.cloudinary.com/jessebubble/image/upload/v1707188269/portrait_u5jngh.png',
            },
            href: '/services',
         },
         {
            name: 'Infographics',
            role: 'Represent your data in a visually appealing way',
            image: {
               src: 'https://res.cloudinary.com/jessebubble/image/upload/v1706924008/saint-adobe_ibzq0m.png',
            },
            href: '/services',
         },
      ],
   },
];

export function ExperienceSection() {
   return (
      <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
         <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-3xl bg-gradient-to-b from-neutral-50">
            <GridPattern
               className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
               yOffset={-270}
            />
         </div>
         <SectionIntro
            eyebrow="We sell online experiences"
            title="Experiences so good you might start to think we're automated"
            invert={false}
         ></SectionIntro>
         <Container className="mt-16">
            <div className="space-y-24">
               {collections.map((group) => (
                  <FadeInStagger key={group.title}>
                     <Border as={FadeIn} />
                     <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
                        <FadeIn>
                           <h2 className="font-display text-2xl font-semibold text-neutral-950">
                              {group.title}
                           </h2>
                        </FadeIn>
                        <div className="lg:col-span-3">
                           <ul
                              role="list"
                              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                           >
                              {group.examples.map((example) => (
                                 <li key={example.name}>
                                    <FadeIn>
                                       <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                                          <Link to={example.href}>
                                             <img
                                                alt="screen shot of the product"
                                                {...example.image}
                                                className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                                             />
                                             <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                                                <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                                                   {example.name}
                                                </p>
                                                <p className="mt-2 text-sm text-white">
                                                   {example.role}
                                                </p>
                                             </div>
                                          </Link>
                                       </div>
                                    </FadeIn>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  </FadeInStagger>
               ))}
            </div>
         </Container>
      </div>
   );
}
