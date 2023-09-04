"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getData = () => {
      axios
        .get("http://localhost:3000/api/projects")
        .then((res) => {
          if (res.status == 200) {
            console.log(res.data);
            setProjects(res.data);
          } else {
            console.log(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getData();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "50px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
        {projects.length ? (
          <Slider {...sliderSettings}>
            {projects.map((item, index) => (
              <div
                className="aspect-[8/11] max-h-[80vh] p-4 pb-8 group  duration-300"
                key={index}
              >
                <div className="relative h-full w-full rounded-lg overflow-hidden group-hover:scale-105 duration-300 shadow-lg shadow-gray-500">
                  <Image
                    src={item.thumbnail}
                    fill
                    className="object-cover z-0"
                  />
                  <div className="w-full h-full bg-gradient-to-b from-main to-[rgba(0,0,0,0.8)] z-[2] absolute opacity-0 group-hover:opacity-80 duration-300" />
                  <div className="w-full h-full bg-gradient-to-t to-transparent from-[rgba(0,0,0,0.8)] z-[3] absolute" />
                  <div className="absolute bottom-0 left-0 text-white z-10 duration-300 p-10 flex flex-col gap-5 items-start">
                    <p className="text-base text-gray-300 tracking-wider font-medium ">
                      {item.category}
                    </p>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <Link href={`/portfolio/${item.slug}`}>
                      <button className="bg-transparent border-gray-400 border-2 px-5 rounded-md py-2 duration-300 hover:border-main hover:bg-main">
                        Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <div>
            <p>Loading..</p>
          </div>
        )}
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

export default Portfolio;
