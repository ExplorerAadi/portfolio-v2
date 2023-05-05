"use client";

import { GithubIcon, TwitterIcon } from "../assets/Icons";
import { m } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Contact = () => {
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true });

  return (
    <div className="h-16 flex items-center justify-center text-gray-600 text-center sticky bottom-0 pt-10">
      Built with ❤️ by Aditya Raj
    </div>
  );

  return (
    <div
      className="max-w-lg text-center mx-auto px-8 h-[600px] lg:h-[800px] flex flex-col items-center justify-center"
      ref={inViewRef}
    >
      <m.div
        initial={{ y: -25, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: -25, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6 flex flex-col justify-center items-center"
      >
        <h1
          className="text-5xl lg:text-6xl font-semibold bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 bg-clip-text text-transparent"
          style={{ fontFamily: "Lato" }}
        >
          Get in touch.
        </h1>
        <p className="text-gray-300" style={{ fontFamily: "Work Sans" }}>
          Have an exciting opportunity for me or simply want to drop for a chat?{" "}
          <a href="mailto:hey@exploreraadi.com" className="underline">
            Say hi.
          </a>
        </p>
        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/exploreraadi"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon className="hover:opacity-50 h-10 w-10" />
          </a>
          <a
            href="https://twitter.com/exploreraadi"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon className="hover:opacity-50 h-8 w-8" />
          </a>
        </div>
      </m.div>
    </div>
  );
};
