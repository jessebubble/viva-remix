import { SectionIntro } from '~/components/SectionIntro';
import { Container } from '~/components/Container';
import { GrayscaleTransitionImage } from './GrayscaleTransitionImage';
import { FadeIn } from './FadeIn';
import { useRef, useEffect } from 'react';

export function SecretSection() {
   return (
      <div className="mt-24 pt-24 sm:mt-32 sm:pt-32">
         <SectionIntro
            eyebrow="Online Experiences"
            title="Experiences so good you might start to think we're automated"
         >
            <p>
               We've assisted clients of all sizes by creating custom web
               applications, mission-centric marketing content, and interactive
               online experiences.
               <strong className="block">
                  What's our secret? <ViewTransitions />
               </strong>
            </p>
         </SectionIntro>
         <FadeIn>
            <div className="mt-24 border-t border-neutral-200 bg-white/50 sm:mt-32 lg:mt-40">
               <Container>
                  <div className="mx-auto max-w-5xl">
                     <dl className="-mx-6 grid grid-cols-1 text-sm text-neutral-950 sm:mx-0 sm:grid-cols-3">
                        <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                           <dt className="font-semibold">Client</dt>
                           <dd>Phobia</dd>
                        </div>
                        <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                           <dt className="font-semibold">Year</dt>
                           <dd>
                              <time>{new Date().getFullYear()}</time>
                           </dd>
                        </div>
                        <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                           <dt className="font-semibold">Service</dt>
                           <dd>Web Application</dd>
                        </div>
                     </dl>
                  </div>
               </Container>
            </div>

            <div className="border-y border-neutral-200 bg-neutral-100">
               <div className="-my-px mx-auto max-w-[76rem] bg-neutral-200">
                  <GrayscaleTransitionImage
                     src="https://res.cloudinary.com/jessebubble/image/upload/v1707537773/hero_mztbcy.jpg"
                     alt="App screenshot"
                     quality={90}
                     className="w-full"
                     sizes="(min-width: 1216px) 76rem, 100vw"
                  />
               </div>
            </div>
         </FadeIn>
      </div>
   );
}

const WORDS = [
   'Dynamic Data',
   'User Experience',
   'Performance',
   'Integration',
   'Web Standards',
   'Scalability',
];

function ViewTransitions() {
   const swapperRef = useRef(null);

   useEffect(() => {
      let count = 0;
      const SWAP = () => {
         if (!document.startViewTransition) {
            swapperRef.current.innerText = WORDS[(count += 1) % WORDS.length];
         } else {
            document.startViewTransition(() => {
               swapperRef.current.innerText =
                  WORDS[(count += 1) % WORDS.length];
            });
         }
      };
      const intervalId = setInterval(SWAP, 2000);

      return () => clearInterval(intervalId);
   }, []);

   return (
      <>
         <span></span>{' '}
         <span ref={swapperRef} className="text-spursPink">
            Authentication
         </span>{' '}
         <style>
            {`      
      span:nth-of-type(2) {
        view-transition-name: swap;
      }
      
      /* span:first-of-type {
        view-transition-name: first;
      } */
      span:last-of-type {
        view-transition-name: last
      }
      
      ::view-transition-new(swap),
      ::view-transition-old(swap) {
        height: 100%;
        object-fit: none;
        object-position: top left;
      }
      
      ::view-transition-old(swap) {
        animation-name: slide-out;
        animation-duration: 0.75s;
          animation-timing-function: linear(
          0, 0.6832 7.89%, 0.9171 11.07%, 1.0251,
          1.1058 14.9%, 1.1619 16.86%,
          1.1945 18.91%, 1.2024 20.02%,
          1.2043 21.18%, 1.1907, 1.1598 26.27%,
          1.0604 32.59%, 1.0172 35.84%,
          0.9839 39.49%, 0.967 43.26%,
          0.9639 45.77%, 0.9661 48.59%,
          0.9963 60.54%, 1.0054 67.42%, 1
        );
      }
      ::view-transition-new(swap) {
        animation-name: slide-in;
        animation-duration: 0.75s;
        animation-timing-function: linear(
          0, 0.6832 7.89%, 0.9171 11.07%, 1.0251,
          1.1058 14.9%, 1.1619 16.86%,
          1.1945 18.91%, 1.2024 20.02%,
          1.2043 21.18%, 1.1907, 1.1598 26.27%,
          1.0604 32.59%, 1.0172 35.84%,
          0.9839 39.49%, 0.967 43.26%,
          0.9639 45.77%, 0.9661 48.59%,
          0.9963 60.54%, 1.0054 67.42%, 1
        );
      }
      
      ::view-transition-group(last) {
        animation-duration: 0.75s;
          animation-timing-function: linear(
          0, 0.6832 7.89%, 0.9171 11.07%, 1.0251,
          1.1058 14.9%, 1.1619 16.86%,
          1.1945 18.91%, 1.2024 20.02%,
          1.2043 21.18%, 1.1907, 1.1598 26.27%,
          1.0604 32.59%, 1.0172 35.84%,
          0.9839 39.49%, 0.967 43.26%,
          0.9639 45.77%, 0.9661 48.59%,
          0.9963 60.54%, 1.0054 67.42%, 1
        );
      }
      
      @keyframes slide-out {
        100% {
          opacity: 0;
          translate: 0 100%;
        }
      }
      
      @keyframes slide-in {
        0% {
          opacity: 0;
          translate: 0 -100%;
        }
      }
      
      `}
         </style>
      </>
   );
}
