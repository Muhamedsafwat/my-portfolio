import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="bg-gray-100">
      <div className="flex max-w-7xl mx-auto gap-20">
        <div className="hidden md:block basis-[40%] relative h-screen overflow-hidden rounded-lg top-[-4rem] shadow-xl">
          <Image
            sizes="100vw"
            alt="Laptop image"
            src="/about.jpg"
            className="object-cover"
            fill={true}
          />
        </div>
        <div className="md:basis-2/3 px-10 flex flex-col mt-10 md:mt-36 md:text-start">
          <h2 className="text-6xl font-bold mb-6">About</h2>
          <p className="text-2xl text-gray-600">
            A Sofware Engineer and a frontend focused web developer who is
            passionate about building websites and web applications that lead to
            the success of your business.
          </p>
          <p className="text-2xl text-gray-600 mt-3">
            I'm passionate about cutting-edge, pixel-perfect beautiful
            interfaces and intuitively implemented UX
          </p>
          <div>
            <h3 className="text-3xl font-bold mt-10 mb-3">Education</h3>
            <p>Bachelor's degree (2022 - present)</p>
            <p className="text-lg font-semibold">
              Computer and Systems Engineering
            </p>
            <p>Zagazig University</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
