import React from "react";
import Image from "next/image";

import { BiCodeAlt, BiLinkExternal } from "react-icons/bi";

import { Footer, Gallery } from "@/components";

const ProjectDetails = () => {
  return (
    <>
      <header className="relative w-screen overflow-hidden h-[70vh]">
        <Image src="/cover.png" fill className="object-cover" />
        <div className="w-full h-full bg-[rgba(0,0,0,0.3)] backdrop-blur-[3px] absolute flex justify-center items-center">
          <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-br from-[#f81f01] to-[#ee076e] bg-clip-text text-transparent">
            Fintess Coach Website
          </h1>
        </div>
      </header>
      <section className=" max-w-5xl mx-auto pb-10 mt-5 lg:pb-0">
        <h2 className="text-4xl font-extrabold py-5 my-5 border-b-[1px] border-gray-200">
          Description:
        </h2>
        <p className="text-2xl ">
          A website for a fitness coach and nutrition specialist built using
          MERN stack. The main goal of the website is to show the Coach's
          services, pricing plans and contact info. The website also focuses on
          letting the clients track their own progress and update their
          information every 2 weeks.
        </p>
        <div className="flex gap-16 mt-8">
          <div>
            <h3 className="text-3xl mb-2">Project type</h3>
            <p className="text-xl">Web application</p>
          </div>
          <div>
            <h3 className="text-3xl mb-2">Live preview</h3>
            <a href="#" className="flex items-center gap-1 hover:text-main">
              <BiLinkExternal size={23} className="text-main" />
              <p className="text-xl mb-[2px]">Visit website</p>
            </a>
          </div>
          <div>
            <h3 className="text-3xl mb-2">Source code </h3>
            <a href="#" className="flex items-center gap-1 hover:text-main">
              <BiCodeAlt size={25} className="text-main" />
              <p className="text-xl mb-1">View repository</p>
            </a>
          </div>
        </div>
      </section>
      <section className=" max-w-5xl mx-auto pb-10  lg:pb-0">
        <h2 className="text-3xl font-extrabold py-5 mt-5 border-b-[1px] border-gray-200">
          Features:
        </h2>
        <ul className="text-xl">
          {features.map((item, index) => (
            <li className="my-4 list-disc ml-8" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </section>
      <section className=" max-w-5xl mx-auto pb-10  lg:pb-0">
        <h2 className="text-3xl font-extrabold py-5 mt-5 border-b-[1px] border-gray-200">
          Technologies used:
        </h2>
        <ul className="text-xl">
          {technologies.map((item, index) => (
            <li className="my-3 list-disc ml-8" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </section>
      <section className="pb-20 max-w-6xl px-10 mx-auto">
        <h2 className="text-3xl font-extrabold py-5 mt-5 border-b-[1px] border-gray-200">
          Gallery:
        </h2>
        <Gallery gallery={gallery} />
      </section>
      <Footer />
    </>
  );
};

const features = [
  " Specific operations according to the user's role (Admin, Client or Guest)",
  " Guests can only view the landing page and submit application forms to the admin",
  "A client can edit his personal information and track his progress via uploading his body measurements, weight etc.",
  "Admin can create new users, view a list of all users and track each user's progress by viewing their profile. He can also view and delete application forms and view the application form of each user. And create, edit , delete pricing plans.",
];

const technologies = ["Mongo db", "Node & Express.js", "Next.js", "Chakra-UI"];

const gallery = [
  "/project/2.png",
  "/project/1.png",
  "/project/3.png",
  "/project/4.png",
  "/project/5.png",
  "/project/6.png",
];

export default ProjectDetails;
