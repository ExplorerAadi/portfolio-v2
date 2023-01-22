import "../styles/globals.css";
import Link from "next/link";
import { GithubIcon, TwitterIcon } from "../assets/Icons";

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
          <Footer />
        </div>
      </body>
    </html>
  );
}

const Header = () => {
  return (
    <nav className="flex justify-between items-center h-16 text-gray-300 max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex md:space-x-12 space-x-4">
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
      <div className="flex items-center md:space-x-12 space-x-4">
        <a
          href="https://github.com/exploreraadi"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon className="hover:opacity-50" />
        </a>
        <a
          href="https://twitter.com/exploreraadi"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon className="hover:opacity-50" />
        </a>
      </div>
    </nav>
  );
};

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[600px] space-y-6 max-w-lg text-center mx-auto px-8">
      <h1
        className="text-5xl font-semibold bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 bg-clip-text text-transparent"
        style={{ fontFamily: "Lato" }}
      >
        Get in touch.
      </h1>
      <p className="text-gray-300" style={{ fontFamily: "Work Sans" }}>
        Have an exciting opportunity for me or simply want to drop for a chat?{" "}
        <a href="mailto:hey@exploreraadi.com" className="underline">
          Say hi.
        </a>
      </p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center h-12 text-gray-600 mx-auto absolute bottom-0 w-full text-xs">
      <p>
        Design inspired from{" "}
        <a
          href="https://www.seanhalpin.design"
          target="_blank"
          rel="noreferrer"
        >
          Sean Halpin.
        </a>
      </p>
    </footer>
  );
};
