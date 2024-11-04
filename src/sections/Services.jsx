import React from "react";
import Link from "next/link";

import { GoStack } from "react-icons/go";
import { FiUsers, FiMonitor, FiServer } from "react-icons/fi";

const Services = () => {
  return (
    <section id="services" className="bg-gray-100">
      <div className="lg:h-screen max-w-7xl mx-auto py-12 flex gap-10 flex-col lg:flex-row lg:gap-16 px-5">
        <div className="basis-1/3 lg:mt-32 ">
          <h2 className="text-6xl font-bold mb-5 md:mb-10">Services</h2>
          <p className="text-xl ">
            I use my skills in web development to build and maintain high
            quality websites unique to your needs
          </p>
          <Link href="/contact" className="group inline-block">
            <p className="mt-8 text-black font-medium ">
              Request a custom service
            </p>
            <div className="w-1/6 h-[3px] mt-1 duration-300 group-hover:w-full rounded-md bg-main" />
          </Link>
        </div>
        <div className="flex flex-wrap justify-between basis-2/3">
          {services.map((item, index) => (
            <div
              key={index}
              className="md:basis-[48%] p-8 flex flex-col gap-5 hover:bg-main hover:translate-y-[-10px] mt-5 duration-300 rounded-xl group cursor-pointer "
            >
              <div className="text-main group-hover:text-white duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-medium group-hover:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-200">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    title: "Landing pages",
    description:
      "Building a landing page for your business can help your audience know more about your vision, services and contact info and makes you stand out in a professional look",
    icon: <FiMonitor size={60} />,
  },
  {
    title: "Personal portfolio",
    description:
      "Your personal portfolio is considered your brand as a freelancer. Showcase your skills and projects through a unique website that has your own name!",
    icon: <FiUsers size={60} />,
  },
  {
    title: "Web applications",
    description:
      "Service provider, own an online store and need a way to interact with your clients? Let's build a full-stack web application that achieves your goal.",
    icon: <GoStack size={60} />,
  },
  {
    title: "Web API's",
    description:
      "If you have a frontend template and need to integrate a third party API or even build one to fit your needs, Then I'm the one who can help you.",
    icon: <FiServer size={60} />,
  },
];

export default Services;
