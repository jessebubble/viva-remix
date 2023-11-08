import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import useKeypress from 'react-use-keypress';
import { SectionIntro } from '~/components/SectionIntro';
import { Container } from '~/components/Container';
import Flyer from '~/components/images/music-flyer.png';
import MenuMex from '~/components/images/food-menu-2.png';
import Store from '~/components/images/store.png';
import Menu from '~/components/images/food-menu.png';
import Brochure from '~/components/images/brochure-lawyer-2.png';
import Docs from '~/components/images/docs.png';
import Card from '~/components/images/business-card.png';
import Graphic from '~/components/images/infographic.png';
import Portraits from '~/components/images/portraits.png';

let images = [Flyer, MenuMex, Menu, Graphic, Brochure, Card, Docs, Store, Portraits];

export function ExperienceSection() {
    let [index, setIndex] = useState(0);

    useKeypress('ArrowRight', () => {
        if (index + 1 < images.length) {
            setIndex(index + 1);
        }
    });

    useKeypress('ArrowLeft', () => {
        if (index > 0) {
            setIndex((i) => i - 1);
        }
    });

    return (
        <div className="mt-24 rounded-3xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
            <SectionIntro
                eyebrow="It's that simple"
                title="Inclusive, performant, user-friendly online experiences"
                invert
            >
                <p>
                    <span className="text-centroCyan">
                        Need help getting started with your online experience?
                    </span>{' '}
                    Viva Web Design help organisations set clear goals and{' '}
                    <span className="font-bold">
                        delivers them with confidence
                    </span>
                </p>
            </SectionIntro>
            <Container className="mt-16">
                <MotionConfig
                    transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                >
                    <div className="bg-neutral-950">
                        <div className="mx-auto flex max-w-7xl flex-col justify-center">
                            <div className="relative overflow-hidden">
                                <motion.div
                                    animate={{ x: `-${index * 100}%` }}
                                    className="flex"
                                >
                                    {images.map((image, i) => (
                                        <motion.img
                                            key={image}
                                            src={image}
                                            animate={{
                                                opacity: i === index ? 1 : 0.3,
                                            }}
                                            className="aspect-[3/2] object-cover w-full sm:h-[500px] md:h-[600px]"
                                        />
                                    ))}
                                </motion.div>
                                <AnimatePresence initial={false}>
                                    {index > 0 && (
                                        <motion.button
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 0.7 }}
                                            exit={{
                                                opacity: 0,
                                                pointerEvents: 'none',
                                            }}
                                            whileHover={{ opacity: 1 }}
                                            className="absolute left-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white"
                                            onClick={() => setIndex(index - 1)}
                                        >
                                            <ChevronLeftIcon className="h-6 w-6" />
                                        </motion.button>
                                    )}
                                </AnimatePresence>

                                <AnimatePresence initial={false}>
                                    {index + 1 < images.length && (
                                        <motion.button
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 0.7 }}
                                            exit={{
                                                opacity: 0,
                                                pointerEvents: 'none',
                                            }}
                                            whileHover={{ opacity: 1 }}
                                            className="absolute right-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white"
                                            onClick={() => setIndex(index + 1)}
                                        >
                                            <ChevronRightIcon className="h-6 w-6" />
                                        </motion.button>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </MotionConfig>
            </Container>
        </div>
    );
}
