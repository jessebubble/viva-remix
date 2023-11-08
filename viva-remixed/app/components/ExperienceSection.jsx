import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import useKeypress from "react-use-keypress";
import Dentist from "~/components/images/dentist.jpeg";
import Door from "~/components/images/door.png";
import Glitch from "~/components/images/glitch.png";
import Robot from "~/components/images/robot.png";
import Scarf from "~/components/images/scarf.png";
import { SectionIntro } from '~/components/SectionIntro';
import { Container } from '~/components/Container';


let images = [
    Dentist,
    Door,
    Glitch,
    Robot,
    Scarf,
];

let collapsedAspectRatio = 1 / 3;
let fullAspectRatio = 3 / 2;
let gap = 2;
let margin = 12;

export function ExperienceSection() {
  let [index, setIndex] = useState(0);

  useKeypress("ArrowRight", () => {
    if (index + 1 < images.length) {
      setIndex(index + 1);
    }
  });

  useKeypress("ArrowLeft", () => {
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
    <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
      <div className=" bg-neutral-950">
        <div className="mx-auto flex h-full max-w-7xl flex-col justify-center">
          <div className="relative overflow-hidden">
            <motion.div animate={{ x: `-${index * 100}%` }} className="flex">
              {images.map((image, i) => (
                <motion.img
                  key={image}
                  src={image}
                  animate={{ opacity: i === index ? 1 : 0.3 }}
                  className="aspect-[3/2] object-cover"
                />
              ))}
            </motion.div>
            <AnimatePresence initial={false}>
              {index > 0 && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0, pointerEvents: "none" }}
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
                  exit={{ opacity: 0, pointerEvents: "none" }}
                  whileHover={{ opacity: 1 }}
                  className="absolute right-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white"
                  onClick={() => setIndex(index + 1)}
                >
                  <ChevronRightIcon className="h-6 w-6" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          <div className="absolute inset-x-0 bottom-6 flex justify-center overflow-hidden">
            <motion.div
              initial={false}
              animate={{
                x: `-${
                  index * 100 * (collapsedAspectRatio / fullAspectRatio) +
                  index * gap +
                  margin
                }%`,
              }}
              style={{ aspectRatio: fullAspectRatio, gap: `${gap}%` }}
              className="flex h-14"
            >
              {images.map((image, i) => (
                <motion.button
                  key={image}
                  onClick={() => setIndex(i)}
                  whileHover={{ opacity: 1 }}
                  initial={false}
                  animate={i === index ? "active" : "inactive"}
                  variants={{
                    active: {
                      marginLeft: `${margin}%`,
                      marginRight: `${margin}%`,
                      opacity: 1,
                      aspectRatio: fullAspectRatio,
                    },
                    inactive: {
                      marginLeft: "0%",
                      marginRight: "0%",
                      opacity: 0.5,
                      aspectRatio: collapsedAspectRatio,
                    },
                  }}
                >
                  <motion.img src={image} className="h-full object-cover" />
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </MotionConfig>
    </Container>
    </div>
  );
}