import React from "react";
import Link from "next/link";

import { IoChevronDownOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <section className="h-[110vh] bg-[url(/hero.jpeg)] relative bg-right">
      <div className="absolute w-full h-full top-0 bg-gray-950 bg-opacity-50 z-0" />
      <div className="z-[2] relative flex justify-center items-center text-center h-full max-w-7xl mx-auto">
        <div>
          <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-br from-[#f81f01] to-[#ee076e] bg-clip-text text-transparent">
            MUHAMED SAFWAT
          </h1>
          <p className="text-gray-300 text-xl md:text-3xl tracking-[3px] mt-4">
            I turn coffee into code!
          </p>
          <Link href="#about">
            <button className=" py-4 px-8 group hover:pb-8 relative text-gray-300 border-2 border-gray-300 text-lg duration-300 font-semibold rounded-md mt-10 hover:bg-main hover:text-white hover:border-main ">
              About Me
              <IoChevronDownOutline
                size={27}
                className="absolute duration-200 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:translate-y-[1%] group-hover:opacity-100 text-white"
              />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
