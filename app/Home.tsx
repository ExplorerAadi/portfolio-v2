"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/globals.css";

export const Home = () => {
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true });

  return (
    <>
      <div className="flex-col-reverse flex md:flex-row items-center justify-center pt-20">
        <motion.div
          initial={{ y: -25, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: -25, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-6 w-80 sm:w-96 md:w-full md:max-w-lg"
        >
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-violet-500 via-pink-500 to-orange-400 bg-clip-text text-transparent max-w-xl"
            style={{ fontFamily: "Lato" }}
          >
            Engineer. Writer. Conversationalist.
          </h1>
          <p
            className="text-gray-100 text-lg"
            style={{ fontFamily: "Work Sans" }}
          >
            I&apos;m Aditya - a frontend engineer by profession, a writer by
            heart and a conversationalist by nature.
          </p>
        </motion.div>
        <div className="mr-10 md:m-0 max-w-2xl">
          <motion.img
            className="h-full w-full object-contain"
            src="boy-3d.png"
            alt=""
            ref={inViewRef}
            initial={{ y: -25, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: -25, opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          />
        </div>
      </div>
    </>
  );
};
