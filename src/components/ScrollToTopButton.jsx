"use client";
import React, { useEffect, useState } from "react";
import { HiOutlineChevronUp } from "react-icons/hi";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
		in place of 'smooth' */
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  });

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-12 right-12 rounded-full bg-white text-main shadow-md shadow-gray-500 flex justify-center items-center z-10 duration-200 ${
        visible ? "w-12 h-12 opacity-100" : "w-0 h-0 opacity-0"
      }`}
    >
      <HiOutlineChevronUp size={25} />
    </button>
  );
};

export default ScrollButton;
