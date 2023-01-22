"use client";

import { useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import useMeasure from "react-use-measure";
import { useInView } from "react-intersection-observer";
import { ChevronDownIcon } from "../../assets/Icons";
import { classNames } from "../../utils";

export const Experience = () => {
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true });

  return (
    <MotionConfig transition={{ duration: 0.4, ease: "easeIn" }}>
      <div
        className="h-96"
        style={{
          background:
            "linear-gradient(180deg,#111 20%,rgba(20,44,105,0) 60%),#1a1a1a",
        }}
        ref={inViewRef}
      >
        <motion.div
          initial={{ y: -25, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: -25, opacity: 0 }}
          className="max-w-4xl flex flex-col justify-center items-center space-y-6 h-full mx-auto px-4"
        >
          <h3
            className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 text-5xl"
            style={{ fontFamily: "Lato" }}
          >
            Experience
          </h3>
          <p
            className="text-gray-300 max-w-xl text-center"
            style={{ fontFamily: "Work Sans" }}
          >
            Detailed professional experience showing some of the major
            contributions I had in my past work.
          </p>
        </motion.div>
      </div>
      <div className="max-w-4xl mx-auto mt-20 px-4">
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
      </div>
    </MotionConfig>
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
  contributionData: { title: string; summary: string; data: string[] }[];
}) => {
  const [isExpanded, setIsExpanded] = useState(title === "Plaza");
  const [ref, { height }] = useMeasure();

  return (
    <>
      <button
        className={classNames(
          "px-4 sm:px-12 py-4 rounded-md flex items-center justify-between w-full bg-gradient-to-r",
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
          className={classNames("my-14", isExpanded ? "pb-24" : "")}
          ref={ref}
        >
          {contributionData.map((c, index) => (
            <Contribution
              key={c.title}
              title={c.title}
              summary={c.summary}
              contributionData={c.data}
              index={index}
              isExpanded={isExpanded}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
};

const Contribution = ({
  title,
  summary,
  contributionData,
  index,
  isExpanded,
}: {
  title: string;
  summary: string;
  contributionData: string[];
  index: number;
  isExpanded: boolean;
}) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref}>
      <motion.div
        className="px-4 sm:px-8"
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
              <div className="flex items-center space-x-4 sm:space-x-8">
                {/* Add image here */}
                <div className="w-10 h-10 border rounded-md rotate-45 bg-black shrink-0"></div>
                <div className="text-xl font-medium">
                  {title}
                  <p className="text-sm text-gray-500 font-normal">{summary}</p>
                </div>
              </div>
              <div
                className={classNames(
                  "ml-5 pl-9 sm:pl-[52px] border-gray-800 pt-4 pb-12 space-y-4 text-gray-300",
                  "border-l"
                )}
              >
                {contributionData.map((data) => (
                  <p key={data}>{data}</p>
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
        data: [
          "Worked on creating a dynamic and configurable UI for creators where they can have a catalog of their recommended products, affiliate links, etc.",
          "It has OAuth login for users to help them track the creators they are following and products they have wishlisted/ordered and supports a variety of themes that a creator can configure to match better with their personal brand.",
          "We had to improve our SEO because an ecommerce page catering to influencers need better visibility so I worked on making the pages web crawler friendly and also better preview experience.",
          "Collecting data is another important aspect of ecommerce so we needed accurate analytics to get better insight about the pages and show it to creators as well. I contributed to setting up precise event capturing using the right tools for every user interaction happening on the page.",
          "And finally, a storefront needs a checkout page so created a checkout flow with a similar UX of what the users were used to (in our case - Shopify) so that they don't feel the friction of being on a different platform.",
        ],
      },
      {
        title: "Creator App",
        summary:
          "A mobile app for creators to manage and customize their storefront and get all the analytics in one place.",
        data: [
          "Having no prior experience with mobile apps, picked up react-native on the fly and started contributing to small features within weeks.",
          "Initially we needed to add flows for adding and editing products but that required users to fill multiple fields and ended up creating a huge form so I worked on breaking it into multiple modular flows across different screens for a better UX.",
          "After picking up pace, another major feature I worked on was a date range picker similar to what you will see in the insights screen of a public Instagram account. We needed it for, you guessed it, our analytics screen to show insights as per selected date ranges.",
        ],
      },
      {
        title: "Dashboard",
        summary:
          "A web dashboard for creators to customize their storefront UI and manage products, links, etc.",
        data: [
          "Worked on a complex form that enabled the creators to choose from a variety of themes and configure other aspects of their Plaza page like reordering the tabs, setting button shapes, etc. Also added a preview experience just beside the form to help them see the effect of their changes in real-time.",
          "Contributed to a small design system that we came up with to help us iterate faster. It included buttons with different states, form fields of different input types (some styled and some unstyled), custom hooks like media upload etc.",
        ],
      },
      {
        title: "Miscellaneous",
        summary:
          "Some contributions that didn't affect any product individually but rather as a whole.",
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
