import { Link } from '@remix-run/react';
import { Container } from '~/components/Container';
import { FadeIn, FadeInStagger } from '~/components/FadeIn';
import { Border } from '~/components/Border';
import { SectionIntro } from '~/components/SectionIntro';
import { GridPattern } from '~/components/GridPattern';

const collections = [
   {
      title: 'Creative Services',
      examples: [
         {
            name: 'Vector Graphics',
            role: 'Ready for print, web, and more',
            image: {
               src: 'https://res.cloudinary.com/jessebubble/image/upload/v1707188269/midjourney/flyer_w7xj6k.png',
            },
            href: '/showcase',
         },
         {
            name: 'Flyers',
            role: 'For events, promotions, and more',
            image: {
               src: 'https://res.cloudinary.com/jessebubble/image/upload/v1707188269/midjourney/flyer_w7xj6k.png',
            },
            href: '/showcase',
         },
         {
            name: 'Menus',
            role: 'For restaurants, cafes, and more',
            image: {
               src: 'https://res.cloudinary.com/jessebubble/image/upload/v1707188269/midjourney/flyer_w7xj6k.png',
            },
            href: '/showcase',
         },
         {
            name: 'Info Graphics',
            role: 'Visualize data, processes, and more',
            image: {
               src: 'https://res.cloudinary.com/jessebubble/image/upload/v1707188269/midjourney/flyer_w7xj6k.png',
            },
            href: '/showcase',
         },
         {
            name: '+ More',
            role: 'Brochures, Business cards, stickers, posters, and more',
            image: {
               src: 'https://res.cloudinary.com/jessebubble/image/upload/v1707188269/midjourney/flyer_w7xj6k.png',
            },
            href: '/showcase',
         },
      ],
   },
];

export function DesignSection() {
   return (
      <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
         <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-3xl bg-gradient-to-b from-neutral-50">
            <GridPattern
               className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
               yOffset={-270}
            />
         </div>
         <SectionIntro
            eyebrow="Design Studio"
            title="Dive deep into the infinite possibilities"
            invert={false}
         >
            <p>
               <strong>Powered by Adobe Creative Cloud</strong> we offer a wide
               range of design services to help you create stunning visuals for
               your business
            </p>
         </SectionIntro>
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
