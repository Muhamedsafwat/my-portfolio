import React from "react";
import Image from "next/image";

import { CiLocationOn } from "react-icons/ci";

const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="flex max-w-7xl mx-auto gap-20 pb-10 lg:pb-0">
        <div className="hidden lg:block basis-[40%] relative h-screen overflow-hidden rounded-lg top-[-4rem] shadow-2xl shadow-gray-600">
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="Laptop image"
            src="/about.jpg"
            className="object-cover"
            fill={true}
          />
        </div>
        <div className="lg:basis-2/3 px-5 flex flex-col mt-10 lg:mt-36 lg:text-start">
          <h2 className="text-6xl font-bold mb-6">About</h2>
          <p className="text-2xl text-gray-600">
            A Software Engineer and a frontend focused web developer who is
            passionate about building websites and web applications that lead to
            the success of your business.
          </p>
          <p className="text-2xl text-gray-600 mt-3">
            I&apos;m passionate about cutting-edge, pixel-perfect beautiful
            interfaces and intuitively implemented UX
          </p>
          <div>
            <h3 className="text-3xl font-bold mt-10 mb-3">Education</h3>
            <p>Bachelor&apos;s degree (2022 - Present)</p>
            <p className="text-lg font-semibold">
              Computer and Systems Engineering
            </p>
            <p className="flex items-center">
              <CiLocationOn size={20} className="text-main" /> Zagazig
              University
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
