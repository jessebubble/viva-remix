import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { SectionIntro } from '~/components/SectionIntro';
import { Logo } from '~/components/Logo';
import { useEffect, useRef } from 'react';

export function SoftwareFormSection() {
   return (
      <>
         <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
            <SectionIntro
               eyebrow="Authentication"
               title="We keep it simple and focus on the essentials"
               invert={false}
            >
               <p className="text-balance">
                  Authentication is a complex topic, one that is riddled with
                  numerous security considerations. We're not trying to reinvent
                  the wheel regarding user authentication and application
                  security. Instead, we focus on industry standards, striving to
                  provide a simple, secure, and reliable solution
               </p>
            </SectionIntro>
            <Container className="mt-16">
               <FadeIn>
                  <SampleForm />
               </FadeIn>
            </Container>
         </div>
      </>
   );
}

const WORDS = [
   'User Identification',
   'Access Control',
   'Personalization',
   'Security',
   'Session Management',
   'Multi-factor Authentication (MFA)',
   'Social Login',
   'Password Reset',
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
         <main className="resize overflow-hidden text-balance">
            <p className="">
               <span>Tailored</span>{' '}
               <span ref={swapperRef} className="text-centroIndigo">
                  Authentication
               </span>{' '}
               <span> solutions for your business needs</span>
            </p>
         </main>

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

function SampleForm() {
   return (
      <>
         <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
               <Logo className="mx-auto h-12 w-auto" />
               <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-neutral-950">
                  <ViewTransitions />
               </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
               <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
                  <form className="space-y-6" action="#" method="POST">
                     <div>
                        <label
                           htmlFor="email"
                           className="block text-sm font-medium leading-6 text-neutral-950"
                        >
                           Email address
                        </label>
                        <div className="mt-2">
                           <input
                              id="email"
                              name="email"
                              type="email"
                              autoComplete="email"
                              required
                              className="block w-full rounded-md border-0 py-1.5 text-neutral-950 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-centroIndigo sm:text-sm sm:leading-6"
                           />
                        </div>
                     </div>

                     <div>
                        <label
                           htmlFor="password"
                           className="block text-sm font-medium leading-6 text-neutral-950"
                        >
                           Password
                        </label>
                        <div className="mt-2">
                           <input
                              id="password"
                              name="password"
                              type="password"
                              autoComplete="current-password"
                              required
                              className="block w-full rounded-md border-0 py-1.5 text-neutral-950 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-centroIndigo sm:text-sm sm:leading-6"
                           />
                        </div>
                     </div>

                     <div className="flex items-center justify-between">
                        <div className="flex items-center">
                           <input
                              id="remember-me"
                              name="remember-me"
                              type="checkbox"
                              className="h-4 w-4 rounded border-neutral-300 text-centroIndigo focus:ring-centroIndigo"
                           />
                           <label
                              htmlFor="remember-me"
                              className="ml-3 block text-sm leading-6 text-neutral-950"
                           >
                              Remember me
                           </label>
                        </div>

                        <div className="text-sm leading-6">
                           <a
                              href="#"
                              className="font-semibold text-centroIndigo hover:text-centroIndigo/80"
                           >
                              Forgot password?
                           </a>
                        </div>
                     </div>

                     <div>
                        <button
                           type="submit"
                           className="flex w-full justify-center rounded-md bg-centroIndigo px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-centroIndigo/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-centroIndigo"
                        >
                           Sign in
                        </button>
                     </div>
                  </form>

                  <div>
                     <div className="relative mt-10">
                        <div
                           className="absolute inset-0 flex items-center"
                           aria-hidden="true"
                        >
                           <div className="w-full border-t border-neutral-200" />
                        </div>
                        <div className="relative flex justify-center text-sm font-medium leading-6">
                           <span className="bg-white px-6 text-neutral-950">
                              Or continue with
                           </span>
                        </div>
                     </div>

                     <div className="mt-6 grid grid-cols-2 gap-4">
                        <a
                           href="#"
                           className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-neutral-950 shadow-sm ring-1 ring-inset ring-neutral-300 hover:bg-neutral-50 focus-visible:ring-transparent"
                        >
                           <svg
                              className="h-5 w-5"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                           >
                              <path
                                 d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                                 fill="#EA4335"
                              />
                              <path
                                 d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                                 fill="#4285F4"
                              />
                              <path
                                 d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                                 fill="#FBBC05"
                              />
                              <path
                                 d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                                 fill="#34A853"
                              />
                           </svg>
                           <span className="text-sm font-semibold leading-6">
                              Google
                           </span>
                        </a>

                        <a
                           href="#"
                           className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-neutral-950 shadow-sm ring-1 ring-inset ring-neutral-300 hover:bg-neutral-50 focus-visible:ring-transparent"
                        >
                           <svg
                              className="h-5 w-5 fill-[#24292F]"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                           >
                              <path
                                 fillRule="evenodd"
                                 d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                                 clipRule="evenodd"
                              />
                           </svg>
                           <span className="text-sm font-semibold leading-6">
                              Apple
                           </span>
                        </a>
                     </div>
                  </div>
               </div>

               <p className="mt-10 text-center text-sm text-neutral-500">
                  Not a member?{' '}
                  <a
                     href="#"
                     className="font-semibold leading-6 text-centroIndigo hover:text-centroIndigo/80"
                  >
                     Start a 14 day free trial
                  </a>
               </p>
            </div>
         </div>
      </>
   );
}
