"use client";

import { MotionConfig, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const About = () => {
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true });

  return (
    <div className="pt-8 sm:pt-32 min-h-screen" ref={inViewRef}>
      <MotionConfig transition={{ duration: 0.4, ease: "easeIn" }}>
        <motion.div
          initial={{ y: -25, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: -25, opacity: 0 }}
        >
          <h3
            className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 text-4xl sm:text-5xl lg:text-6xl pb-2 sm:pb-10"
            style={{ fontFamily: "Lato" }}
          >
            Hey, I&apos;m Aditya
          </h3>
        </motion.div>
        <div className="flex-col flex md:flex-row items-start justify-center h-full sm:space-x-10 space-y-4 sm:space-y-0">
          <motion.div
            initial={{ y: -25, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: -25, opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className=""
          >
            <h1
              className="text-2xl sm:text-4xl font-semibold text-white max-w-xl leading-7 sm:leading-10"
              style={{ fontFamily: "Lato" }}
            >
              I&apos;m a Frontend Engineer based out of Bangalore, India.
            </h1>
            <div
              className="text-gray-300 space-y-5 pt-2 sm:pt-4"
              style={{ fontFamily: "Work Sans" }}
            >
              <p>
                I{" "}
                <a
                  href="https://blog.exploreraadi.com/developer-journey-of-a-failure-student"
                  target="_blank"
                  rel="noreferrer"
                  className="border-orange-500 border-b-2 transition-all duration-400"
                >
                  dropped out
                </a>{" "}
                of college to learn hard skills quickly while building products
              </p>
              <p>
                Over the last 3+ years, I&apos;ve built user experiences across
                different domains of frontend engineering including web apps,
                mobile apps, and even desktop apps.
              </p>
              <p>
                Currently, I am working at{" "}
                <a
                  href="https://blog.exploreraadi.com/developer-journey-of-a-failure-student"
                  target="_blank"
                  rel="noreferrer"
                  className="border-orange-500 border-b-2 transition-all duration-400"
                >
                  Plaza
                </a>{" "}
                - an early stage startup building for social commerce and my
                time is spent working across both frontend and backend of two
                web apps and a mobile app, researching and being updated with
                the latest frontend technologies and mentoring new team members.
              </p>
              <p>
                Apart from work, you&apos;ll find me reading books, writing
                blogs, tinkering with some latest tech or interacting with
                industry professionals either on Twitter or in-person because I
                love to listen to their journeys and learn from their
                experiences.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: -25, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: -25, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="h-full w-full sm:object-contain md:object-cover rounded-lg"
              src="dp.jpg"
              alt=""
            />
          </motion.div>
        </div>
      </MotionConfig>
    </div>
  );
};
