"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectGallery = ({ gallery }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "50px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "5px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "5px",
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
    <Slider {...sliderSettings}>
      {gallery.map((item, index) => (
        <div key={index} className="p-0 md:p-2">
          <div className="relative aspect-[12/6]">
            <Image
              className="object-contain"
              fill
              src={item}
              alt={`project image #${index}`}
            />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ProjectGallery;
