"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "50px",
    customPaging: function (i) {
      return (
        <div className="rounded-full w-2 h-2 bg-gray-400 border-[3px] border-gray-400 duration-200 mt-2"></div>
      );
    },
  };
  return (
    <section id="portfolio">
      <div className="max-w-7xl mx-auto px-10 md:px-0 pt-16 pb-10">
        <h2 className="text-6xl font-bold mb-6">Top projects</h2>
        <p className="text-xl text-gray-600 ml-1">
          Here are some of my latest projects
        </p>
      </div>
      <div className="pb-16 max-w-[100vw] overflow-hidden">
        <Slider {...sliderSettings}>
          {projects.map((item, index) => (
            <div className="h-[570px] p-4 pb-8 group  duration-300" key={index}>
              <div className="relative h-full w-full rounded-lg overflow-hidden group-hover:scale-105 duration-300 shadow-lg shadow-gray-500">
                <Image src={item.cover} fill className="object-cover z-0" />
                <div className="w-full h-full bg-gradient-to-b from-main to-[rgba(0,0,0,0.8)] z-[2] absolute opacity-0 group-hover:opacity-80 duration-300" />
                <div className="w-full h-full bg-gradient-to-t to-transparent from-[rgba(0,0,0,0.8)] z-[3] absolute" />
                <div className="absolute bottom-0 left-0 text-white z-10 duration-300 p-10 flex flex-col gap-5 items-start">
                  <p className="text-base text-gray-300 tracking-wider font-medium ">
                    {item.category}
                  </p>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <Link href={`/portfolio/${item.slug}`}>
                    <button className="bg-transparent border-gray-400 border-2 px-5 rounded-md py-2 duration-300 hover:bg-main hover:border-main">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex justify-center pb-24">
        <Link href="/portfolio">
          <button className="bg-main border-main border-2 px-5 rounded-md py-2 duration-300 hover:bg-transparent hover:border-main hover:text-main hover:translate-y-[-8px] text-white mx-auto text-lg">
            View All Projects
          </button>
        </Link>
      </div>
    </section>
  );
};

const projects = [
  {
    cover:
      "https://trydo.rainbowit.net/assets/images/portfolio/portfolio-1.jpg",
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
