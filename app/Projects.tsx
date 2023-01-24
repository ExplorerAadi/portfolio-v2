"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/globals.css";
import { ExternalLink, GithubIcon } from "../assets/Icons";

export const Projects = () => {
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true });

  return (
    <div className="flex justify-center min-h-screen mx-auto container px-4 sm:px-16 max-w-6xl">
      <div className="w-full" ref={inViewRef}>
        <motion.div
          initial={{ y: -25, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: -25, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="flex w-full items-center justify-center"
        >
          <h2
            className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 text-4xl sm:text-5xl lg:text-6xl pb-8 lg:pb-16 max-w-fit"
            style={{ fontFamily: "Lato" }}
          >
            Projects
          </h2>
        </motion.div>
        <div className="flex sm:block flex-col justify-center items-center">
          <motion.div
            initial={{ y: -25, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: -25, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full flex justify-center items-center"
          >
            <div className="sm:w-2/3 max-w-2xl space-y-3">
              <video
                className="h-full w-full rounded-md"
                src="./menu_animation.mov"
                autoPlay
                loop
              />
              <div className="space-y-1 hover:text-white text-gray-400">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium text-white">
                    Micro Interactions
                  </h3>
                  <div className="flex space-x-4 items-center">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://styling-and-interactions.vercel.app/hamburger"
                    >
                      <ExternalLink className="h-6 w-6" />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/ExplorerAadi/styling-and-interactions"
                    >
                      <GithubIcon className="h-7 w-7" />
                    </a>
                  </div>
                </div>
                <p className="text-sm leading-5 transition-all duration-400 text-ellipsis line-clamp-2">
                  An ever-growing set of components that are a result of my
                  experiments with micro-interactions. It currently utilizes the
                  best of Tailwind CSS and Framer Motion but I will be adding
                  some 3D ones soon too.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="w-full mt-12">
            <MidSection
              title="Intersection Counter"
              desc="A library to track the count of elements yet to enter the
                  viewport and be used to build features like unread count of
                  unread messages."
              media="./intersection_counter.mp4"
              githubLink="https://github.com/ExplorerAadi/intersection-counter"
            />
          </div>

          <div className="w-full sm:flex flex-col items-end mt-12 sm:-mt-48">
            <MidSection
              title="Google Keep Clone"
              desc="A Google Keep Clone that to replicate their grid UI with
                  animations and dark mode including state management using
                  redux-toolkit."
              media="./google_keep_clone.mov"
              githubLink="https://github.com/ExplorerAadi/google-keep-clone"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const MidSection = ({
  title,
  desc,
  media,
  externalLink,
  githubLink,
}: {
  title: string;
  desc: string;
  media: string;
  externalLink?: string;
  githubLink?: string;
}) => {
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true });

  return (
    <div
      className="sm:w-[46%] max-w-2xl hover:text-white text-gray-400 hover:cursor-pointer"
      ref={inViewRef}
    >
      <motion.div
        initial={{ y: -25, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: -25, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-3"
      >
        <video className="h-full w-full rounded-md" src={media} autoPlay loop />
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-medium text-white">{title}</h3>
            <div className="flex space-x-4 items-center">
              {externalLink && (
                <a target="_blank" rel="noreferrer" href={externalLink}>
                  <ExternalLink className="h-6 w-6" />
                </a>
              )}
              {githubLink && (
                <a target="_blank" rel="noreferrer" href={githubLink}>
                  <GithubIcon className="h-7 w-7" />
                </a>
              )}
            </div>
          </div>
          <p className="text-sm leading-5 transition-all duration-400 text-ellipsis line-clamp-2">
            {desc}
          </p>
        </div>
      </motion.div>
    </div>
  );
};
