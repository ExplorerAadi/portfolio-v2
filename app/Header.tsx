"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { classNames } from "../utils";
import { Fragment } from "react";

export const Header = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center h-20 text-gray-300">
      <div className="flex space-x-2 sm:space-x-4 items-center">
        {links.map((link) => (
          <Fragment key={link.url}>
            {link.isExternal ? (
              <a
                href="https://blog.exploreraadi.com"
                target="_blank"
                rel="noreferrer"
                className={classNames(
                  pathname === link.url ? "bg-white/5" : "bg-transparent",
                  "rounded-full px-5 py-1 hover:bg-white/5"
                )}
              >
                {link.title}
              </a>
            ) : (
              <Link
                key={link.title}
                href={link.url}
                className={classNames(
                  pathname === link.url ? "bg-white/5" : "bg-transparent",
                  "rounded-full px-5 py-1 hover:bg-white/5"
                )}
              >
                {link.title}
              </Link>
            )}
          </Fragment>
        ))}
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
  {
    title: "Blog",
    url: "https://blog.exploreraadi.com",
    isExternal: true,
  },
];
