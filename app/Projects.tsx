"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "../styles/globals.css";
import { ExternalLink, GithubIcon } from "../assets/Icons";

export const Projects = () => {
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true });

  return (
    <div className="flex justify-center pt-52">
      <div className="w-full" ref={inViewRef}>
        <motion.div
          initial={{ y: -25, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: -25, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="flex w-full items-center"
        >
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-violet-500 via-pink-500 to-orange-400 bg-clip-text text-transparent max-w-xl pb-2 sm:pb-4"
            style={{ fontFamily: "Lato" }}
          >
            Projects
          </h2>
        </motion.div>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 700: 2 }}>
          <Masonry style={{ gap: "8px" }}>
            <ProjectCard
              title="Giftwise"
              desc="A gift recommendation app built with GPT-3 and launched
              during Valentine's week for personalised gifting
              recommendations that generated 100s of recommendations
              within hours."
              media="./giftwise-demo.mov"
              externalLink="https://giftwise.vercel.app"
              githubLink="https://github.com/ExplorerAadi/giftwise"
            />
            <ProjectCard
              title="Intersection Counter"
              desc="A library to track the count of elements yet to enter the
              viewport and be used to build features like unread count of
              unread messages."
              media="./intersection_counter.mp4"
              githubLink="https://github.com/ExplorerAadi/intersection-counter"
            />
            <ProjectCard
              title="Google Keep Clone"
              desc="A Google Keep Clone that to replicate their grid UI with
              animations and dark mode including state management using
              redux-toolkit."
              media="./google_keep_clone.mov"
              githubLink="https://github.com/ExplorerAadi/google-keep-clone"
              externalLink="https://google-keep-clone-mauve.vercel.app"
            />
            <ProjectCard
              title="Styling and Interactions"
              desc="An ever-growing set of components that are a result of my
              experiments with micro-interactions. It currently utilizes
              the best of Tailwind CSS and Framer Motion but I will be
              adding some 3D ones soon too."
              media="./menu_animation.mov"
              githubLink="https://github.com/ExplorerAadi/styling-and-interactions"
              externalLink="https://styling-and-interactions.vercel.app"
            />
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

const ProjectCard = ({
  title,
  desc,
  media,
  githubLink,
  externalLink,
}: {
  title: string;
  desc: string;
  media: string;
  githubLink: string;
  externalLink?: string;
}) => {
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true });

  return (
    <div className="text-gray-400" ref={inViewRef}>
      <motion.div
        initial={{ y: -25, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: -25, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full flex justify-center items-start mt-2"
      >
        <div className="space-y-3 p-2 bg-white/5 rounded-lg">
          <video
            className="h-full w-full rounded-md"
            src={media}
            autoPlay
            loop
          />
          <div className="space-y-1 hover:text-white">
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
        </div>
      </motion.div>
    </div>
  );
};
