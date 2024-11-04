import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

import { BiCodeAlt, BiLinkExternal } from "react-icons/bi";

import { Gallery } from "@/components";

export async function generateMetadata({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/projects/${params.slug}`
  );
  const data = await res.json();

  return {
    title: `Project || ${data.title}`,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://www.muhamedsafwat.com/portfolio/${data.slug}`,
      siteName: "Muhamed Safwat",
      images: [
        {
          url: data.cover,
          width: 1250,
          height: 300,
        },
      ],
    },
  };
}

async function getData(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/projects/${slug}`,
    {
      next: { revalidate: 100 },
    }
  );
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
        <div className="w-full h-full px-5 bg-[rgba(0,0,0,0.3)] backdrop-blur-[3px] absolute flex justify-center items-center">
          <h1 className="text-6xl md:text-7xl text-center uppercase font-black bg-gradient-to-br from-[#f81f01] to-[#ee076e] bg-clip-text text-transparent">
            {data.title}
          </h1>
        </div>
      </header>
      <section className=" max-w-5xl mx-auto px-5 mt-5 lg:pb-0">
        <h2 className="text-4xl font-extrabold py-5 my-5 border-b-[1px] border-gray-200">
          Description:
        </h2>
        <p className="text-2xl ">{data.description}</p>
        <div className="flex flex-col gap-10 mt-10 lg:flex-row lg:gap-16">
          <div>
            <h3 className="text-3xl mb-2">Project type</h3>
            <p className="text-xl">{data.category}</p>
          </div>
          <div>
            <h3 className="text-3xl mb-2">Live preview</h3>
            <a
              target="_blank"
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
              target="blank"
              href={data.sourceCodeLink}
              className="flex items-center gap-1 hover:text-main"
            >
              <BiCodeAlt size={25} className="text-main" />
              <p className="text-xl mb-1">View repository</p>
            </a>
          </div>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-5 lg:pb-0">
        <h2 className="text-3xl font-extrabold py-5 mt-5 border-b-[1px] border-gray-200">
          Features:
        </h2>
        <ul className="text-xl">
          {data.features.map((item, index) => (
            <li className="mt-4 list-disc ml-8 lg:my-4" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </section>
      <section className=" max-w-5xl mx-auto pb-1 px-5 lg:pb-0">
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
      <section className="pb-16 w-screen overflow-hidden max-w-6xl mx-auto">
        <h2 className="text-3xl ml-5 font-extrabold py-5 mt-5 border-b-[1px] border-gray-200">
          Gallery:
        </h2>
        <Gallery gallery={data.gallery} />
      </section>
    </>
  );
};

export default ProjectDetails;
