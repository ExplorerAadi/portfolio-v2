"use client";

import { MotionConfig, motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import {
  ArrowRight,
  EmailIcon,
  GithubIcon,
  TwitterIcon,
} from "../../assets/Icons";

export const About = () => {
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true });

  return (
    <div className="pt-8 sm:pt-32 min-h-[calc(100vh-148px)]" ref={inViewRef}>
      <MotionConfig transition={{ duration: 0.4, ease: "easeIn" }}>
        {/* <motion.div
          initial={{ y: -25, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: -25, opacity: 0 }}
        >
          <h1
            className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 text-4xl sm:text-5xl lg:text-6xl pb-2"
            style={{ fontFamily: "Lato" }}
          >
            Hey, I&apos;m Aditya
          </h1>
        </motion.div> */}
        <div className="flex-col-reverse flex md:flex-row items-center justify-center h-full md:space-x-10 space-y-4 md:space-y-0">
          <motion.div
            initial={{ y: -25, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: -25, opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="w-full mt-4 md:mt-0"
          >
            <motion.div
              initial={{ y: -25, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: -25, opacity: 0 }}
            >
              <h1
                className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 text-4xl sm:text-5xl lg:text-6xl pb-2"
                style={{ fontFamily: "Lato" }}
              >
                Hey, I&apos;m Aditya
              </h1>
            </motion.div>
            <h3
              className="text-2xl sm:text-4xl font-semibold text-white max-w-xl leading-7 sm:leading-10 mt-4"
              style={{ fontFamily: "Lato" }}
            >
              I&apos;m a Frontend Engineer based out of Bangalore, India.
            </h3>
            <div
              className="text-gray-300 mt-2"
              style={{ fontFamily: "Work Sans" }}
            >
              <p>
                I dropped out of college to learn some hard skills quickly while
                building products with startups.
              </p>
              <a
                href="https://blog.exploreraadi.com/developer-journey-of-a-failure-student"
                target="_blank"
                rel="noreferrer"
                className="items-center inline-flex text-gray-600 group transition-all duration-300 hover:border-b-gray-600 border-b border-b-transparent"
              >
                Full story here
                <ArrowRight className="ml-1 w-6 text-gray-600 transition-all duration-300 group-hover:scale-125" />
              </a>
              <p className="mt-4">
                Over the last 3+ years, I&apos;ve built user experiences across
                different domains of frontend engineering including web apps,
                mobile apps, and even desktop apps.{" "}
              </p>
              <Link
                href={"/work"}
                className="items-center inline-flex text-gray-600 group transition-all duration-300 hover:border-b-gray-600 border-b border-b-transparent"
              >
                Read about my work
                <ArrowRight className="ml-1 w-6 text-gray-600 transition-all duration-300 group-hover:scale-125" />
              </Link>
              <p className="mt-4">
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
              <p className="mt-4">
                Apart from work, you&apos;ll find me reading books, writing
                blogs, tinkering with some latest tech or interacting with
                industry professionals either on Twitter or in-person because I
                love to listen to their journeys and learn from their
                experiences.
              </p>
              <Link
                href={"/"}
                className="items-center inline-flex text-gray-600 group transition-all duration-300 hover:border-b-gray-600 border-b border-b-transparent"
              >
                Checkout my projects
                <ArrowRight className="ml-1 w-6 text-gray-600 transition-all duration-300 group-hover:scale-125" />
              </Link>
              <h3 className="text-2xl font-semibold text-white max-w-xl leading-7 sm:leading-10 mt-8">
                Reach out to me
              </h3>
              <div className="flex md:space-x-6 md:flex-row flex-col items-start md:items-center space-y-1 md:space-y-0 mt-2 md:my-0 mb-20">
                <a
                  href="mailto:hey@exploreraadi.com"
                  target="_blank"
                  rel="noreferrer"
                  className="items-center inline-flex text-gray-300 group transition-all duration-300 hover:border-b-gray-300 border-b border-b-transparent"
                >
                  hey@exploreraadi.com
                  <EmailIcon className="ml-1.5 w-6 transition-all duration-300 group-hover:scale-125" />
                </a>
                <a
                  href="https://github.com/ExplorerAadi"
                  target="_blank"
                  rel="noreferrer"
                  className="items-center inline-flex text-gray-300 group transition-all duration-300 hover:border-b-gray-300 border-b border-b-transparent"
                >
                  @ExplorerAadi
                  <GithubIcon className="ml-1.5 w-6 transition-all duration-300 group-hover:scale-125" />
                </a>
                <a
                  href="https://twitter.com/ExplorerAadi"
                  target="_blank"
                  rel="noreferrer"
                  className="items-center inline-flex text-gray-300 group transition-all duration-300 hover:border-b-gray-300 border-b border-b-transparent"
                >
                  @ExplorerAadi
                  <TwitterIcon className="ml-1.5 w-6 transition-all duration-300 group-hover:scale-125" />
                </a>
              </div>
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
              className="h-full w-full object-contain rounded-lg"
              src="dp.jpg"
              alt=""
            />
          </motion.div>
        </div>
      </MotionConfig>
    </div>
  );
};
