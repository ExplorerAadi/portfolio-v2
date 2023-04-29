/* eslint-disable @next/next/no-img-element */
import "../styles/globals.css";
import Link from "next/link";
import { Contact } from "./Contact";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <div className="relative">
          <Header />
          {children}
          <Contact />
        </div>
      </body>
    </html>
  );
}

const Header = () => {
  return (
    <nav className="flex justify-between items-center h-16 text-gray-300 max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex md:space-x-12 space-x-6 items-center">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/experience" className="hover:underline">
          Experience
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <a
          href="https://blog.exploreraadi.com"
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          Blog
        </a>
      </div>
      <div></div>
    </nav>
  );
};
