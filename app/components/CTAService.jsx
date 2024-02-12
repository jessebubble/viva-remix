import { Fragment, useEffect, useId, useRef, useState } from 'react';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useDebouncedCallback } from 'use-debounce';
import { AppScreen } from '~/components/AppScreen';
import { Container } from '~/components/Container';
import { CircleBackground } from '~/components/CircleBackground';
import { PhoneFrame } from '~/components/PhoneFrame';
import { FadeIn } from '~/components/FadeIn';
import {
   DiageoLogo,
   DarkLogo,
   MirageLogo,
   ReversableLogo,
   StatamicLogo,
   StaticKitLogo,
   TransistorLogo,
   CityLogo,
} from '~/components/StockLogos';

export function ServiceSection() {
   return (
      <>
         <div className="relative mt-24 pt-24 sm:pt-32">
            <Container className="mt-16 md:hidden">
               <FadeIn>
                  <FeaturesMobile />
               </FadeIn>
            </Container>
            <Container className="hidden md:mt-20 md:block">
               <FeaturesDesktop />
            </Container>
         </div>
      </>
   );
}

const MotionAppScreenHeader = motion(AppScreen.Header);
const MotionAppScreenBody = motion(AppScreen.Body);

const features = [
   {
      name: 'Web Development',
      description:
         'We take pride in our ability to always meet deadlines, which is made easy by the fact that most of the work was completed years ago',
      icon: DeviceTouchIcon,
      screen: ExperienceScreen,
   },
   {
      name: 'Design Studio',
      description:
         'We prioritize transparency in all of our processes, acknowledging the reality that our clients rarely read any content',
      icon: DeviceUserIcon,
      screen: CreativeScreen,
   },
   {
      name: 'Web Applications',
      description:
         'The first step in establishing a partnership is to have our designer incorporate your logo into our template and then invoice you for the work',
      icon: DeviceNotificationIcon,
      screen: MarketingScreen,
   },
];

function DeviceUserIcon(props) {
   return (
      <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
         <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
         <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 23a3 3 0 100-6 3 3 0 000 6zm-1 2a4 4 0 00-4 4v1a2 2 0 002 2h6a2 2 0 002-2v-1a4 4 0 00-4-4h-2z"
            fill="#00b2a9"
         />
         <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 4a4 4 0 014-4h14a4 4 0 014 4v24a4.002 4.002 0 01-3.01 3.877c-.535.136-.99-.325-.99-.877s.474-.98.959-1.244A2 2 0 0025 28V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 001.041 1.756C8.525 30.02 9 30.448 9 31s-.455 1.013-.99.877A4.002 4.002 0 015 28V4z"
            fill="#A3A3A3"
         />
      </svg>
   );
}

function DeviceNotificationIcon(props) {
   return (
      <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
         <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
         <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
            fill="#A3A3A3"
         />
         <path
            d="M9 8a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H11a2 2 0 01-2-2V8z"
            fill="#00b2a9"
         />
      </svg>
   );
}

function DeviceTouchIcon(props) {
   let id = useId();

   return (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
         <defs>
            <linearGradient
               id={`${id}-gradient`}
               x1={14}
               y1={14.5}
               x2={7}
               y2={17}
               gradientUnits="userSpaceOnUse"
            >
               <stop stopColor="#00b2a9" />
               <stop offset={1} stopColor="#D4D4D4" stopOpacity={0} />
            </linearGradient>
         </defs>
         <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
         <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 4a4 4 0 014-4h14a4 4 0 014 4v13h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h4v2H9a4 4 0 01-4-4V4z"
            fill="#A3A3A3"
         />
         <path
            d="M7 22c0-4.694 3.5-8 8-8"
            stroke={`url(#${id}-gradient)`}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
         />
         <path
            d="M21 20l.217-5.513a1.431 1.431 0 00-2.85-.226L17.5 21.5l-1.51-1.51a2.107 2.107 0 00-2.98 0 .024.024 0 00-.005.024l3.083 9.25A4 4 0 0019.883 32H25a4 4 0 004-4v-5a3 3 0 00-3-3h-5z"
            fill="#00b2a9"
         />
      </svg>
   );
}

const headerAnimation = {
   initial: { opacity: 0, transition: { duration: 0.3 } },
   animate: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
   exit: { opacity: 0, transition: { duration: 0.3 } },
};

const maxZIndex = 2147483647;

const bodyVariantBackwards = {
   opacity: 0.4,
   scale: 0.8,
   zIndex: 0,
   filter: 'blur(4px)',
   transition: { duration: 0.4 },
};

const bodyVariantForwards = (custom) => ({
   y: '100%',
   zIndex: maxZIndex - custom.changeCount,
   transition: { duration: 0.4 },
});

const bodyAnimation = {
   initial: 'initial',
   animate: 'animate',
   exit: 'exit',
   variants: {
      initial: (custom) =>
         custom.isForwards ? bodyVariantForwards(custom) : bodyVariantBackwards,
      animate: (custom) => ({
         y: '0%',
         opacity: 1,
         scale: 1,
         zIndex: maxZIndex / 2 - custom.changeCount,
         filter: 'blur(0px)',
         transition: { duration: 0.4 },
      }),
      exit: (custom) =>
         custom.isForwards ? bodyVariantBackwards : bodyVariantForwards(custom),
   },
};

function CreativeScreen({ custom, animated = false }) {
   return (
      <AppScreen className="w-full">
         <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
            <AppScreen.Title>Viva Web Design</AppScreen.Title>
            <AppScreen.Subtitle>
               Our focus is creating online experiences that work for everyone
            </AppScreen.Subtitle>
         </MotionAppScreenHeader>
         <MotionAppScreenBody
            {...(animated ? { ...bodyAnimation, custom } : {})}
         >
            <div className="px-4 py-6">
               <div className="space-y-6">
                  <img
                     src="https://res.cloudinary.com/jessebubble/image/upload/v1706924009/saint-adobe3_gzvm9v.png"
                     alt="Saint Adobe"
                     className="mx-auto w-48 rounded-2xl"
                  />
               </div>
               <div className="mt-6 space-y-6">
                  <img
                     src="https://res.cloudinary.com/jessebubble/image/upload/v1706921594/glitch_axrupt.png"
                     alt="Midjourney glitch graphic"
                     className="mx-auto w-48 rounded-2xl"
                  />
               </div>
            </div>
         </MotionAppScreenBody>
      </AppScreen>
   );
}

function MarketingScreen({ custom, animated = false }) {
   return (
      <AppScreen className="w-full">
         <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
            <AppScreen.Title>Marketing Campains</AppScreen.Title>
            <AppScreen.Subtitle>
               We can create a range of promotional experiences for your events
            </AppScreen.Subtitle>
         </MotionAppScreenHeader>
         <MotionAppScreenBody
            {...(animated ? { ...bodyAnimation, custom } : {})}
         >
            <div className="divide-y divide-neutral-100">
               {[
                  {
                     name: 'Non-Profits',
                     price: '4,098.01',
                     change: '+4.98%',
                     color: '#F89225',
                     logo: DarkLogo,
                  },
                  {
                     name: 'City events',
                     price: '5,451.10',
                     change: '-3.38%',
                     color: '#dc3545',
                     logo: CityLogo,
                  },
                  {
                     name: 'Art and Music events',
                     price: '4,098.41',
                     change: '+6.25%',
                     color: '#2A5B94',
                     logo: TransistorLogo,
                  },
                  {
                     name: 'Political Campaigns',
                     price: '250.65',
                     change: '+1.25%',
                     color: '#3320A7',
                     logo: DiageoLogo,
                  },
                  {
                     name: 'Lawyer advertising',
                     price: '250.65',
                     change: '-3.38%',
                     color: '#2A3034',
                     logo: StaticKitLogo,
                  },
                  {
                     name: 'Realtor showcasing',
                     price: '5,040.85',
                     change: '-3.11%',
                     color: '#0EA5E9',
                     logo: StatamicLogo,
                  },
                  {
                     name: 'Food and Beverage Menus',
                     price: '140.44',
                     change: '+9.09%',
                     color: '#16A34A',
                     logo: MirageLogo,
                  },
                  {
                     name: 'Trifold Brochures',
                     price: '550.60',
                     change: '-1.25%',
                     color: '#8D8D8D',
                     logo: ReversableLogo,
                  },
               ].map((stock) => (
                  <div
                     key={stock.name}
                     className="flex items-center gap-4 px-4 py-3"
                  >
                     <div
                        className="flex-none rounded-full"
                        style={{ backgroundColor: stock.color }}
                     >
                        <stock.logo className="h-10 w-10" />
                     </div>
                     <div className="flex-auto text-sm text-neutral-950">
                        {stock.name}
                     </div>
                     <div className="flex-none text-right">
                        <div className="text-sm font-medium text-neutral-950">
                           {stock.price}
                        </div>
                        <div
                           className={clsx(
                              'text-xs leading-5',
                              stock.change.startsWith('+')
                                 ? 'text-centroCyan'
                                 : 'text-neutral-500'
                           )}
                        >
                           {stock.change}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </MotionAppScreenBody>
      </AppScreen>
   );
}

function ExperienceScreen({ custom, animated = false }) {
   return (
      <AppScreen className="w-full">
         <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
            <AppScreen.Title>Online Experiences</AppScreen.Title>
            <AppScreen.Subtitle>It starts with an idea...</AppScreen.Subtitle>
         </MotionAppScreenHeader>
         <MotionAppScreenBody
            {...(animated ? { ...bodyAnimation, custom } : {})}
         >
            <div className="px-4 py-6">
               <div className="space-y-4">
                  <video
                     className="mx-auto w-full rounded-2xl"
                     autoPlay
                     muted
                     loop
                     playsInline
                     poster="https://res.cloudinary.com/jessebubble/image/upload/v1706921594/glitch_axrupt.png"
                  >
                     <source
                        src="https://res.cloudinary.com/jessebubble/video/upload/v1706924126/idea_t3fpts.mp4"
                        type="video/mp4"
                     />
                  </video>
               </div>
            </div>
         </MotionAppScreenBody>
      </AppScreen>
   );
}

function usePrevious(value) {
   let ref = useRef();

   useEffect(() => {
      ref.current = value;
   }, [value]);

   return ref.current;
}

function FeaturesDesktop() {
   let [changeCount, setChangeCount] = useState(0);
   let [selectedIndex, setSelectedIndex] = useState(0);
   let prevIndex = usePrevious(selectedIndex);
   let isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex;

   let onChange = useDebouncedCallback(
      (selectedIndex) => {
         setSelectedIndex(selectedIndex);
         setChangeCount((changeCount) => changeCount + 1);
      },
      100,
      { leading: true }
   );

   return (
      <Tab.Group
         as="div"
         className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24"
         selectedIndex={selectedIndex}
         onChange={onChange}
         vertical
      >
         <Tab.List className="relative z-10 order-last col-span-6 space-y-6">
            {features.map((feature, featureIndex) => (
               <div
                  key={feature.name}
                  className="relative rounded-2xl transition-colors hover:bg-neutral-100"
               >
                  {featureIndex === selectedIndex && (
                     <motion.div
                        layoutId="activeBackground"
                        className="absolute inset-0 bg-neutral-100"
                        initial={{ borderRadius: 16 }}
                     />
                  )}
                  <div className="relative z-10 p-8">
                     <feature.icon className="h-8 w-8" />
                     <h3 className="mt-6 text-lg font-semibold text-neutral-950">
                        <Tab className="text-left [&:not(:focus-visible)]:focus:outline-none">
                           <span className="absolute inset-0 rounded-2xl" />
                           {feature.name}
                        </Tab>
                     </h3>
                     <p className="mt-2 text-sm text-neutral-800">
                        {feature.description}
                     </p>
                  </div>
               </div>
            ))}
         </Tab.List>
         <div className="relative col-span-6">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
               <CircleBackground
                  color="#ef426f"
                  className="animate-spin-slower"
               />
            </div>
            <PhoneFrame className="z-10 mx-auto w-full max-w-[366px]">
               <Tab.Panels as={Fragment}>
                  <AnimatePresence
                     initial={false}
                     custom={{ isForwards, changeCount }}
                  >
                     {features.map((feature, featureIndex) =>
                        selectedIndex === featureIndex ? (
                           <Tab.Panel
                              static
                              key={feature.name + changeCount}
                              className="col-start-1 row-start-1 flex focus:outline-offset-[32px] [&:not(:focus-visible)]:focus:outline-none"
                           >
                              <feature.screen
                                 animated
                                 custom={{ isForwards, changeCount }}
                              />
                           </Tab.Panel>
                        ) : null
                     )}
                  </AnimatePresence>
               </Tab.Panels>
            </PhoneFrame>
         </div>
      </Tab.Group>
   );
}

function FeaturesMobile() {
   let [activeIndex, setActiveIndex] = useState(0);
   let slideContainerRef = useRef();
   let slideRefs = useRef([]);

   useEffect(() => {
      let observer = new window.IntersectionObserver(
         (entries) => {
            for (let entry of entries) {
               if (entry.isIntersecting) {
                  setActiveIndex(slideRefs.current.indexOf(entry.target));
                  break;
               }
            }
         },
         {
            root: slideContainerRef.current,
            threshold: 0.6,
         }
      );

      for (let slide of slideRefs.current) {
         if (slide) {
            observer.observe(slide);
         }
      }

      return () => {
         observer.disconnect();
      };
   }, [slideContainerRef, slideRefs]);

   return (
      <>
         <div
            ref={slideContainerRef}
            className="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden"
         >
            {features.map((feature, featureIndex) => (
               <div
                  key={featureIndex}
                  ref={(ref) => (slideRefs.current[featureIndex] = ref)}
                  className="w-full flex-none snap-center px-4 sm:px-6"
               >
                  <div className="relative transform overflow-hidden rounded-2xl bg-transparent px-5 py-6">
                     <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <CircleBackground
                           color="#ef426f"
                           className={
                              featureIndex % 2 === 1 ? 'rotate-180' : undefined
                           }
                        />
                     </div>
                     <PhoneFrame className="relative mx-auto w-full max-w-[366px]">
                        <feature.screen />
                     </PhoneFrame>
                     <div className="absolute inset-x-0 bottom-0 bg-neutral-950/70 p-6 backdrop-blur sm:p-10">
                        <feature.icon className="h-8 w-8" />
                        <h3 className="mt-6 text-sm font-semibold text-white sm:text-lg">
                           {feature.name}
                        </h3>
                        <p className="mt-2 text-sm text-neutral-300">
                           {feature.description}
                        </p>
                     </div>
                  </div>
               </div>
            ))}
         </div>
         <div className="mt-6 flex justify-center gap-3">
            {features.map((_, featureIndex) => (
               <button
                  type="button"
                  key={featureIndex}
                  className={clsx(
                     'relative h-0.5 w-4 rounded-full',
                     featureIndex === activeIndex
                        ? 'bg-spursTurq'
                        : 'bg-neutral-950'
                  )}
                  aria-label={`Go to slide ${featureIndex + 1}`}
                  onClick={() => {
                     slideRefs.current[featureIndex].scrollIntoView({
                        block: 'nearest',
                        inline: 'nearest',
                     });
                  }}
               >
                  <span className="absolute -inset-x-1.5 -inset-y-3" />
               </button>
            ))}
         </div>
      </>
   );
}
