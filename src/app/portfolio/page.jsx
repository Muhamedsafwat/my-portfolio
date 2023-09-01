import React from "react";
import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
  return (
    <>
      <header className="relative h-[65vh]">
        <Image className="object-cover" fill src="/portfolio-cover.jpg" />
        <div className="w-full h-full bg-gray-900 bg-opacity-90 backdrop-blur-[2px] absolute flex flex-col justify-center items-center">
          <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-br from-[#f81f01] to-[#ee076e] bg-clip-text text-transparent">
            ALL PROJECTS
          </h1>
          <p className="text-gray-300 text-xl md:text-2xl tracking-[3px] mt-4">
            Go around and have fun!
          </p>
        </div>
      </header>
      <div className="mt-10 grid grid-cols-1 mx-auto p-10 max-w-7xl gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 ">
        {projects.map((item, index) => (
          <div className="aspect-[8/11] group duration-300" key={index}>
            <div className="relative h-full w-full rounded-lg overflow-hidden group-hover:scale-105 duration-300 shadow-lg shadow-gray-800">
              <Image src={item.cover} fill className="object-cover z-0" />
              <div
                className={`w-full h-full bg-gradient-to-b ${
                  item.thumbnailColor || "from-main"
                } to-[rgba(0,0,0,0.8)] z-[2] absolute opacity-0 group-hover:opacity-80 duration-300`}
              />
              <div className="w-full h-full bg-gradient-to-t to-transparent from-[rgba(0,0,0,0.8)] z-[3] absolute" />
              <div className="absolute bottom-0 left-0 text-white z-10 duration-300 p-10 flex flex-col gap-5 items-start">
                <p className="text-base text-gray-300 tracking-wider font-medium ">
                  {item.category}
                </p>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <Link href={`/portfolio/${item.slug}`}>
                  <button className="bg-transparent border-gray-400 border-2 px-5 rounded-md py-2 duration-300 hover:border-main">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const projects = [
  {
    cover: "/thumbnail.png",
    thumbnailColor: "from-[#f36100]",
    title: "Fitness Coatch website",
    category: "Web application",
    slug: "fitness-website",
  },
  {
    cover:
      "https://trydo.rainbowit.net/assets/images/portfolio/portfolio-2.jpg",
    title: "Kasper Agency",
    category: "Landing page",
    slug: "fitness-website",
  },
  {
    cover:
      "https://trydo.rainbowit.net/assets/images/portfolio/portfolio-3.jpg",
    title: "Leon Agency",
    category: "Landing page",
    slug: "fitness-website",
  },
  {
    cover:
      "https://trydo.rainbowit.net/assets/images/portfolio/portfolio-4.jpg",
    title: "React portfolio",
    category: "Personal portfolio",
    slug: "fitness-website",
  },
  {
    cover:
      "https://trydo.rainbowit.net/assets/images/portfolio/portfolio-5.jpg",
    title: "URL shortener",
    category: "Web application",
    slug: "fitness-website",
  },
];

export default Portfolio;
