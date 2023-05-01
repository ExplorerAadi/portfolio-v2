"use client";

import { useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import useMeasure from "react-use-measure";
import { useInView } from "react-intersection-observer";
import { ChevronDownIcon } from "../../assets/Icons";
import { classNames } from "../../utils";

export const Work = () => {
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true });

  return (
    <div className="min-h-[calc(100vh-148px)]">
      <MotionConfig transition={{ duration: 0.4, ease: "easeIn" }}>
        <div className="pt-8 sm:pt-32" ref={inViewRef}>
          <motion.div
            initial={{ y: -25, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: -25, opacity: 0 }}
            className="flex flex-col justify-center items-left space-y-6 lg:space-y-16 h-full"
          >
            <h3
              className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 text-4xl sm:text-5xl lg:text-6xl pb-2 sm:pb-6"
              style={{ fontFamily: "Lato" }}
            >
              Professional highlights
            </h3>
            {/* <p
            className="text-gray-300 max-w-xl"
            style={{ fontFamily: "Work Sans" }}
          >
            Detailed professional experience showing some of the major
            contributions I had in my past work.
          </p> */}
          </motion.div>
        </div>
        {companiesData.map((c) => (
          <Companies
            key={c.link}
            role={c.role}
            title={c.title}
            link={c.link}
            duration={c.duration}
            styles={c.styles}
            contributionData={c.contributionData}
          />
        ))}
      </MotionConfig>
    </div>
  );
};

const Companies = ({
  role,
  title,
  link,
  duration,
  styles,
  contributionData,
}: {
  role: string;
  title: string;
  link: string;
  duration: string;
  styles: { [key: string]: string };
  contributionData: {
    title: string;
    summary: string;
    logo: string;
    data: string[];
  }[];
}) => {
  const [isExpanded, setIsExpanded] = useState(title === "Plaza");
  const [ref, { height }] = useMeasure();

  return (
    <>
      <button
        className={classNames(
          "px-4 sm:px-12 py-4 rounded-md flex items-center justify-between w-full bg-gradient-to-r text-gray-100",
          styles.background
        )}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex flex-col items-start sm:block">
          {role}{" "}
          <a
            className={classNames("hover:underline", styles.textColor)}
            onClick={(e) => e.stopPropagation()}
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            @{title}
          </a>
        </div>
        <div className="flex items-center space-x-4 text-gray-300">
          <span className="w-28 sm:w-auto">{duration}</span>
          <ChevronDownIcon
            className={classNames(
              "h-5 w-5 transition-all duration-700",
              isExpanded ? "rotate-180" : ""
            )}
          />
        </div>
      </button>
      <motion.div
        animate={{ height: height || "auto" }}
        transition={{ duration: 0.8 }}
      >
        <div
          className={classNames("my-10", isExpanded ? "pb-24" : "")}
          ref={ref}
        >
          {contributionData.map((c, index) => (
            <Contribution
              key={c.title}
              contributionData={c}
              index={index}
              isExpanded={isExpanded}
              isLast={index === contributionData.length - 1}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
};

const Contribution = ({
  contributionData,
  index,
  isExpanded,
  isLast,
}: {
  contributionData: {
    title: string;
    summary: string;
    logo: string;
    data: string[];
  };
  index: number;
  isExpanded: boolean;
  isLast: boolean;
}) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const { title, summary, logo, data } = contributionData;

  return (
    <div ref={ref}>
      <motion.div
        className="pr-2 sm:px-14 text-gray-100"
        initial={{ y: -20, opacity: 0 }}
        animate={
          inView && isExpanded ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }
        }
        transition={{
          duration: 0.4,
          ease: "easeIn",
          delay: index > 0 ? 0.4 : 0,
        }}
      >
        <AnimatePresence>
          {isExpanded && (
            <motion.div exit={{ y: -20, opacity: 0 }}>
              <div className="flex items-center space-x-4 sm:space-x-5">
                <div className="sm:w-14 sm:h-14 h-10 w-10 shrink-0 relative my-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo}
                    alt=""
                    className="h-full w-full absolute left-0 top-0 object-contain"
                  />
                </div>
                <div className="text-xl font-medium">
                  {title}
                  <p className="text-sm text-gray-500 font-normal">{summary}</p>
                </div>
              </div>
              <div
                className={classNames(
                  "ml-5 sm:ml-7 pl-8 sm:pl-[48px] border-gray-800 space-y-4 text-gray-300 border-l",
                  isLast ? "pb-0" : "pb-12"
                )}
              >
                {data.map((d) => (
                  <p key={d}>{d}</p>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

const companiesData = [
  {
    role: "Frontend Engineer",
    title: "Plaza",
    link: "https://useplaza.com",
    duration: "May 2021 - Present",
    styles: {
      textColor: "text-violet-400",
      background: "bg-gradient-to-r from-[#16082c] to-[#16082c00]",
    },
    contributionData: [
      {
        title: "Plaza Page",
        summary:
          "A customizable storefront for creators to showcase their favorite products, affiliate links, etc.",
        logo: "/shopping-bag.png",
        data: [
          "Developed a dynamic and configurable UI for creators that includes a catalog of their recommended products and affiliate links. Users can log in via OAuth to track the creators they follow, and keep track of wishlisted and ordered products.",
          "The UI supports a variety of themes to match each creator's personal brand. To improve SEO, I made the ecommerce pages more web crawler-friendly and enhanced the preview experience. Accurate analytics were crucial for collecting data and providing insight to creators, so I helped set up event capturing for every user interaction on the page.",
          "Lastly, worked on a checkout flow with a UX similar to Shopify to reduce user friction that generated the first revenue of the company.",
        ],
      },
      {
        title: "Creator App",
        summary:
          "A mobile app for creators to manage and customize their storefront and get all the analytics in one place.",
        logo: "/user-interface.png",
        data: [
          "Picked up React Native and co-authored the creator app from scratch.",
          "One of our immediate needs were to improve the flows for adding and editing products. However, we faced the challenge of creating a huge form that required users to fill out multiple fields, which made the user experience cumbersome. I took on the task of breaking down the process into multiple modular flows across different screens, resulting in a much-improved user experience.",
          "Took on major features after gaining momentum like a date range picker similar to the insights screen of a public Instagram account, a complex multi-part form wizard for customizing creator page themes, generic image and video upload components, etc.",
        ],
      },
      {
        title: "Dashboard",
        summary:
          "A web dashboard for creators to customize their storefront UI and manage products, links, etc.",
        logo: "/shopping.png",
        data: [
          "Worked on a complex form that enabled the creators to choose from a variety of themes and configure other aspects of their Plaza page like reordering the tabs, setting button shapes, etc. Also added a preview experience just beside the form to help them see the effect of their changes in real-time.",
          "Contributed to a small design system that we came up with to help us iterate faster. It included buttons with different states, form fields of different input types (some styled and some unstyled), custom hooks like media upload etc.",
        ],
      },
      {
        title: "Miscellaneous",
        summary:
          "Some contributions that didn't affect any product individually but rather as a whole.",
        logo: "/settings.png",
        data: [
          "Images are the soul of an e-commerce platform but there was a major problems with ours - the dimension and orientation varied a lot because we didn't control the type of images being uploaded which made the UI inconsistent.",
          "I took the help of a third party provider called Cloudinary to apply on the fly transformations on the image and also control their dpi to preserve the quality while keeping their size small. I optimised it even further in our mobile app by using react-native-fast-image to cache the image on user’s device after the first load.",
          "Contributed in migrating our apps in a monorepo. We were one of the earliest adopters of Turborepo which also presented some challenges. One of the major ones that I dealt with was triggering a deployment only for the apps which were affected by the respective file changes instead of all of them. It ended up saving a couple of extra dollars from being spent on bumping concurrent deployments.",
        ],
      },
    ],
  },
  {
    role: "Frontend Engineer",
    title: "Lirisoft",
    link: "https://www.lirisoft.com",
    duration: "June 2020 - April 2021",
    styles: {
      textColor: "text-pink-400",
      background: "bg-gradient-to-r from-[#1a1119] to-[#1a111900]",
    },
    contributionData: [
      {
        title: "Messaging App",
        summary:
          "A cross-platform desktop messaging app for a telecommunication giant in U.S.",
        logo: "/messenger.png",
        data: [
          "I had to pick up three new technologies - Electron, Redux and Typescript on the fly when I joined the startup while fixing bugs but still started contributing to the codebase meaningfully within a few weeks.",
          "Got handed over my first feature request when I was just 2 months into the job which was to build an OTP component for our sign up screen and there began the journey of constant learnings and bigger mistakes.",
          "After that I contributed to some important features like implementing virtualisation of conversation lists to improve performance, marking unread messages as read when the user opened that conversation, dynamic search which basically meant that if the user is searching for a particular conversation or contact, they should still be able to see new messages in the list.",
          "Management had some doubts about hiring a dropout as a fresher amidst COVID when their product was on a tight dealine but I cleared the air up well and got offered an appraisal in < 8 months.",
        ],
      },
    ],
  },
];
