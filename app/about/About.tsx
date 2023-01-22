"use client";

export const About = () => {
  return (
    <div className="flex-col flex md:flex-row items-center justify-center h-screen mx-auto container px-4 space-y-6 md:space-x-8 mt-44 mb-24 md:m-0">
      <div className="md:h-1/2 w-full md:w-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="h-full w-full rounded-lg object-contain"
          src="dp-full.jpg"
          alt=""
        />
      </div>
      <div className="md:max-w-lg">
        <h1
          className="text-3xl font-medium text-white max-w-xl leading-10"
          style={{ fontFamily: "Lato" }}
        >
          I&apos;m Aditya, a Frontend Engineer and a{" "}
          <a
            href="https://blog.exploreraadi.com/developer-journey-of-a-failure-student"
            target="_blank"
            rel="noreferrer"
            className="border-orange-500 hover:border-b-4 transition-all duration-400"
          >
            college dropout
          </a>{" "}
          currently working for a social commerce startup.
        </h1>
        <div
          className="text-gray-300 space-y-4 pt-8"
          style={{ fontFamily: "Work Sans" }}
        >
          <p>
            I&apos;ve spent the last 3+ years building user experiences across
            different domains of frontend engineering including web apps, mobile
            apps, and even desktop apps.
          </p>
          <p>
            These days my time is spent working across both frontend and backend
            of a web and a mobile app, researching and being updated with the
            latest frontend technologies and mentoring new team members.
          </p>
          <p>
            Apart from work, you&apos;ll find me reading books, writing blogs or
            interacting with industry professionals either on Twitter or
            in-person because I love to listen to their journeys and learn from
            their experiences.
          </p>
        </div>
      </div>
    </div>
  );
};
