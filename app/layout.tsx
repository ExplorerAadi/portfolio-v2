"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import "../styles/globals.css";
// import { Contact } from "./Contact";
import { Header } from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <LazyMotion features={domAnimation}>
          <div className="w-screen">
            <div className="relative max-w-7xl px-4 md:px-10 mx-auto">
              <Header />
              {children}
              {/* <Contact /> */}
            </div>
          </div>
        </LazyMotion>
      </body>
    </html>
  );
}
