"use client";

import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "../assets/Icons";

export const Blogs = () => {
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={inViewRef} className="py-52">
      <motion.div
        initial={{ y: -25, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: -25, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="flex w-full items-center"
      >
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-violet-500 via-pink-500 to-orange-400 bg-clip-text text-transparent max-w-xl pb-2 md:pb-6"
          style={{ fontFamily: "Lato" }}
        >
          Blogs
        </h2>
      </motion.div>
      <div className="flex flex-col md:flex-row items-center md:space-x-4 justify-center md:justify-start h-full space-y-4 md:space-y-0">
        {blogMetaData.map((metadata) => (
          <LinkPreview metadata={metadata} key={metadata.title} />
        ))}
        <a
          href="https://blog.exploreraadi.com"
          target="_blank"
          rel="noreferrer"
          className="p-2 border rounded-full border-gray-600 hidden sm:block hover:scale-110 transition-all duration-300"
        >
          <ArrowRight className="w-8 h-full text-gray-600 shrink-0" />
        </a>
      </div>
    </div>
  );
};

const LinkPreview = ({
  metadata,
}: {
  metadata: { title: string; description: string; image: string; link: string };
}) => {
  // const [metadata, setMetadata] = useState<{
  //   title: string;
  //   description: string;
  //   image: string;
  // } | null>(null);

  // useEffect(() => {
  //   async function fetchMetadata() {
  //     const response = await fetch(
  //       `https://opengraph.io/api/1.1/site/${encodeURIComponent(
  //         url
  //       )}?app_id=OPENGRAPHIO_API_KEY`
  //     );

  //     if (!response.ok) {
  //       console.error("Failed to fetch link metadata");
  //       return;
  //     }

  //     const { htmlInferred } = await response.json();
  //     const metadata = {
  //       title: htmlInferred.title,
  //       description: htmlInferred.description,
  //       image: htmlInferred.image,
  //     };
  //     console.log(metadata);

  //     setMetadata(metadata);
  //   }

  //   fetchMetadata();
  // }, [url]);

  return (
    <a className="w-full h-full bg-white/5 p-4 rounded-lg" href={metadata.link}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={metadata.image} alt="Link preview" />
      <h3 className="text-xl font-semibold mt-4 line-clamp-1 text-gray-100">
        {metadata.title}
      </h3>
      <p className="line-clamp-4 text-sm mt-2 text-gray-400">
        {metadata.description}
      </p>
    </a>
  );
};

const blogMetaData = [
  {
    title: "Lessons from my first software engineering job.",
    description:
      "My name is Aditya and I am a College dropout currently building the future of commerce at Plaza with some really smart and driven people. I got my first job amidst the pandemic in 2020. Link to my full story.  Now moving on, I will share some rules t...",
    image:
      "https://hashnode.com/utility/r?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1629345324444%2FwYeYuxip3.jpeg%3Fw%3D1200%26h%3D630%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp%26fm%3Dpng",
    link: "https://blog.exploreraadi.com/lessons-from-my-first-software-engineering-job",
  },
  {
    title: "Developer Journey of a Failure Student",
    description:
      "In 2018, when I passed out of high school, I did what most Indian high school grads from the science stream do. I took a year off to prepare for the JEE exam that can get me into an IIT. But something strange happened in that one year. Along with pre...",
    image:
      "https://hashnode.com/utility/r?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1623564399306%2FTx1ax1Qun.jpeg%3Fw%3D1200%26h%3D630%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp%26fm%3Dpng",
    link: "https://blog.exploreraadi.com/developer-journey-of-a-failure-student",
  },
  {
    title: "Uploading images the right way",
    description:
      "Images are an important part of any web application so writing a clean upload logic is very important. In this article, we will try to create a custom react hook to handle that logic which can later be extended to support video uploads easily as well.",
    image:
      "https://hashnode.com/utility/r?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1670387280040%2F6ZV9FMor5.jpg%3Fw%3D1200%26h%3D630%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp%26fm%3Dpng",
    link: "https://blog.exploreraadi.com/uploading-images-the-right-way",
  },
];
