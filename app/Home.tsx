import React from "react";
import "../styles/globals.css";

export const Home = () => {
  return (
    <div className="flex-col-reverse flex md:flex-row items-center justify-center h-screen pb-48 mx-auto container px-4">
      <div className="space-y-6 w-80 sm:w-96 md:w-full md:max-w-lg">
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold bg-gradient-to-r from-violet-500 via-pink-500 to-orange-400 bg-clip-text text-transparent max-w-xl"
          style={{ fontFamily: "Lato" }}
        >
          Engineer. Writer. Conversationalist.
        </h1>
        <p className="text-gray-300" style={{ fontFamily: "Work Sans" }}>
          I&apos;m Aditya - a frontend engineer by profession, a writer by heart
          and a conversationalist by nature.
        </p>
      </div>
      <div className="mr-10 md:m-0 max-w-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="h-full w-full object-contain" src="boy-3d.png" alt="" />
      </div>
    </div>
  );
};
