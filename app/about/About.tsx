"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const About = () => {
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true });

  return (
    <div className="h-screen mx-auto container px-4 max-w-4xl">
      <div
        className="flex-col flex md:flex-row items-center justify-center mt-44 mb-24 md:m-0 h-full"
        ref={inViewRef}
      >
        <motion.div
          initial={{ y: -25, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: -25, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="md:h-[510px] w-full"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-full w-full sm:object-contain md:object-cover rounded-lg"
            src="dp-full.jpg"
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ y: -25, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: -25, opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="md:max-w-lg py-6 md:pl-8 md:pt-0"
        >
          <h1
            className="text-4xl sm:text-5xl font-bold text-white max-w-xl leading-10"
            style={{ fontFamily: "Lato" }}
          >
            Hey, I&apos;m Aditya
          </h1>
          <div
            className="text-gray-300 space-y-5 pt-4"
            style={{ fontFamily: "Work Sans" }}
          >
            <p>
              I&apos;m a Frontend Engineer and a{" "}
              <a
                href="https://blog.exploreraadi.com/developer-journey-of-a-failure-student"
                target="_blank"
                rel="noreferrer"
                className="border-orange-500 border-b-2 transition-all duration-400"
              >
                college dropout
              </a>{" "}
              currently working for a social commerce startup.
            </p>
            <p>
              I&apos;ve spent the last 3+ years building user experiences across
              different domains of frontend engineering including web apps,
              mobile apps, and even desktop apps.
            </p>
            <p>
              These days my time is spent working across both frontend and
              backend of a web and a mobile app, researching and being updated
              with the latest frontend technologies and mentoring new team
              members.
            </p>
            <p>
              Apart from work, you&apos;ll find me reading books, writing blogs
              or interacting with industry professionals either on Twitter or
              in-person because I love to listen to their journeys and learn
              from their experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
