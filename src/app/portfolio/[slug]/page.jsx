import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

import { BiCodeAlt, BiLinkExternal } from "react-icons/bi";

import { Footer, Gallery } from "@/components";

async function getData(slug) {
  const res = await fetch(`http://127.0.0.1:3000/api/projects/${slug}`, {
    next: { revalidate: 100 },
  });
  if (res.ok) {
    return res.json();
  } else {
    return notFound();
  }
}

const ProjectDetails = async ({ params }) => {
  const data = await getData(params.slug);
  return (
    <>
      <header className="relative w-screen overflow-hidden h-[70vh]">
        <Image
          src={data.cover}
          fill
          className="object-cover"
          alt="project cover"
          priority
        />
        <div className="w-full h-full bg-[rgba(0,0,0,0.3)] backdrop-blur-[3px] absolute flex justify-center items-center">
          <h1 className="text-6xl md:text-7xl uppercase font-black bg-gradient-to-br from-[#f81f01] to-[#ee076e] bg-clip-text text-transparent">
            {data.title}
          </h1>
        </div>
      </header>
      <section className=" max-w-5xl mx-auto pb-10 px-10 mt-5 lg:pb-0">
        <h2 className="text-4xl font-extrabold py-5 my-5 border-b-[1px] border-gray-200">
          Description:
        </h2>
        <p className="text-2xl ">{data.description}</p>
        <div className="flex gap-16 mt-8">
          <div>
            <h3 className="text-3xl mb-2">Project type</h3>
            <p className="text-xl">{data.category}</p>
          </div>
          <div>
            <h3 className="text-3xl mb-2">Live preview</h3>
            <a
              href={data.previewLink}
              className="flex items-center gap-1 hover:text-main"
            >
              <BiLinkExternal size={23} className="text-main" />
              <p className="text-xl mb-[2px]">Visit website</p>
            </a>
          </div>
          <div>
            <h3 className="text-3xl mb-2">Source code </h3>
            <a
              href={data.sourceCodeLink}
              className="flex items-center gap-1 hover:text-main"
            >
              <BiCodeAlt size={25} className="text-main" />
              <p className="text-xl mb-1">View repository</p>
            </a>
          </div>
        </div>
      </section>
      <section className=" max-w-5xl mx-auto pb-10 px-10  lg:pb-0">
        <h2 className="text-3xl font-extrabold py-5 mt-5 border-b-[1px] border-gray-200">
          Features:
        </h2>
        <ul className="text-xl">
          {data.features.map((item, index) => (
            <li className="my-4 list-disc ml-8" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </section>
      <section className=" max-w-5xl mx-auto pb-10 px-10 lg:pb-0">
        <h2 className="text-3xl font-extrabold py-5 mt-5 border-b-[1px] border-gray-200">
          Technologies used:
        </h2>
        <ul className="text-xl">
          {data.technologiesUsed.map((item, index) => (
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
        <Gallery gallery={data.gallery} />
      </section>
      <Footer />
    </>
  );
};

export default ProjectDetails;
