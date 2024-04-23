"use client";

import React from "react";
import { m } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "../styles/globals.css";
import { ExternalLink, GithubIcon } from "../assets/Icons";

export const Projects = () => {
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true });

  return (
    <div className="flex justify-center pt-52">
      <div className="w-full" ref={inViewRef}>
        <m.div
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
        </m.div>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 700: 2 }}>
          <Masonry style={{ gap: "8px" }}>
            <ProjectCard
              title="Giftwise"
              desc="A gift recommendation app built with GPT-3 and launched
              during Valentine's week for personalised gifting
              recommendations that generated 100s of recommendations
              within hours."
              media={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/c_fit,h_2160,q_60,w_1440/v1683310460/giftwise-demo_lhfort.mov`}
              externalLink="https://giftwise.vercel.app"
              githubLink="https://github.com/ExplorerAadi/giftwise"
            />
            <ProjectCard
              title="Intersection Counter"
              desc="A library to track the count of elements yet to enter the
              viewport and be used to build features like unread count of
              unread messages."
              media={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/c_fit,h_2160,q_60,w_1440/v1683310461/intersection_counter_guo2zq.mov`}
              githubLink="https://github.com/ExplorerAadi/intersection-counter"
            />
            <ProjectCard
              title="Infinite Grids"
              desc="a simple and easy to use library that allows you to create
              a masonry layout with infinite loading while controlling everything
              about the nodes being rendered in the layout."
              media={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/c_fit,h_2160,q_60,w_1440/v1713819324/zbexnn3xc3uxd3yrttzj.mp4`}
              githubLink="https://github.com/ExplorerAadi/infinite-grids"
              externalLink="https://www.npmjs.com/package/infinite-grids"
            />
            <ProjectCard
              title="Motion La La Land"
              desc="An ever-growing set of polished animating components,
              leveraging the best of framer motion and inspired from across the web."
              media={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/c_fit,h_2160,q_60,w_1440/v1683310460/menu_animation_gns0ji.mov`}
              githubLink="https://github.com/ExplorerAadi/motion-la-la-land"
              externalLink="https://motion-la-la-land.vercel.app/"
            />
            <ProjectCard
              title="Google Keep Clone"
              desc="A Google Keep Clone that to replicate their grid UI with
              animations and dark mode including state management using
              redux-toolkit."
              media={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/c_fit,h_2160,q_60,w_1440/v1683310461/google_keep_clone_jgg0tp.mov`}
              githubLink="https://github.com/ExplorerAadi/google-keep-clone"
              externalLink="https://google-keep-clone-mauve.vercel.app"
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
      <m.div
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
      </m.div>
    </div>
  );
};
