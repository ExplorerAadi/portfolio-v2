"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { classNames } from "../utils";
import { useState } from "react";
import { motion, MotionConfig } from "framer-motion";

export const Header = () => {
  const pathname = usePathname();
  const [hoveredTab, setHoveredTab] = useState(pathname);

  return (
    <nav className="flex justify-between items-center h-20 text-gray-500">
      <div className="flex space-x-2 sm:space-x-4 items-center">
        <MotionConfig transition={{ type: "spring", bounce: 0, duration: 0.4 }}>
          <motion.ul
            className="mx-auto flex w-fit gap-2"
            // onMouseLeave={() => setHoveredTab(pathname)}
          >
            {links.map((link) => (
              <motion.li
                key={link.url}
                className={classNames(
                  pathname === link.url ? "text-white" : "",
                  "rounded-full px-5 py-1 relative cursor-pointer outline-none transition-colors"
                )}
                onMouseOver={() => setHoveredTab(link.url)}
              >
                {hoveredTab === link.url && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute inset-0 rounded-lg bg-white/10 z-0"
                  />
                )}
                {link.isExternal ? (
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="z-10 relative"
                  >
                    {link.title}
                  </a>
                ) : (
                  <Link
                    key={link.title}
                    href={link.url}
                    className="z-10 relative"
                  >
                    {link.title}
                  </Link>
                )}
              </motion.li>
            ))}
          </motion.ul>
        </MotionConfig>
      </div>
      <div></div>
    </nav>
  );
};

const links = [
  {
    title: "Home",
    url: "/",
    isExternal: false,
  },
  {
    title: "Work",
    url: "/work",
    isExternal: false,
  },
  {
    title: "About",
    url: "/about",
    isExternal: false,
  },
  // {
  //   title: "Blog",
  //   url: "https://blog.exploreraadi.com",
  //   isExternal: true,
  // },
  {
    title: "Resume",
    url: "/Aditya_Raj_Frontend_Resume.pdf",
    isExternal: true,
  },
];
