import { Link } from '@remix-run/react';
import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { VivaLogo } from '~/components/Logo';
import { socialMediaProfiles } from '~/components/SocialMedia';
import clsx from 'clsx';

const navigation = [
   {
      title: 'What we do',
      links: [
         { title: 'Marketing campains', href: '/showcase' },
         {
            title: 'Creative web design',
            href: '/showcase',
         },
         {
            title: 'Non-Profit SPAs',
            href: '/non-profit',
         },
         {
            title: (
               <>
                  See all <span aria-hidden="true">&rarr;</span>
               </>
            ),
            href: '/services',
         },
      ],
   },
   {
      title: 'Site Navigation',
      links: [
         { title: 'Home Page', href: '/' },
         { title: 'Service we offer', href: '/services' },
         { title: 'Contact us', href: '/contact' },
         { title: 'Showcase', href: '/showcase' },
         { title: 'Hablamos español', href: '#' },
      ],
   },
   {
      title: 'Social Media',
      links: socialMediaProfiles,
   },
];

function Navigation() {
   return (
      <nav>
         <ul className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {navigation.map((section, sectionIndex) => (
               <li key={section.title + sectionIndex}>
                  <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
                     {section.title}
                  </div>
                  <ul className="mt-4 text-sm text-neutral-700">
                     {section.links.map((link, linkIndex) => (
                        <li className="mt-4" key={`${link.href}-${linkIndex}`}>
                           <Link
                              to={link.href}
                              className="transition hover:text-neutral-950"
                           >
                              {link.title}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </li>
            ))}
         </ul>
      </nav>
   );
}

export function Footer() {
   return (
      <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
         <FadeIn>
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
               <Navigation />
            </div>
            <div className="mb-20 mt-24 flex items-center justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
               <Link to="/" aria-label="Home">
                  <VivaLogo
                     className={clsx(
                        'h-8 w-auto md:h-10 lg:h-12',
                        'transition hover:animate-pulse'
                     )}
                  />
               </Link>
               <p className="text-sm text-neutral-700">
                  © Viva Web Design {new Date().getFullYear()}
               </p>
            </div>
         </FadeIn>
      </Container>
   );
}
