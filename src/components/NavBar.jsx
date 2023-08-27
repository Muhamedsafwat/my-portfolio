"use client";
import React, { useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="absolute top-0 left-0 right-0 z-10 text-gray-100">
      <div className="max-w-7xl px-6 mx-auto flex justify-between items-center h-24 md:h-32">
        <Link
          href="/"
          className="font-bold text-3xl text-white cursor-pointer "
        >
          <span className="text-[#f81f01] stroke-white stroke-2">{"{S}"}</span>
          AFWAT
        </Link>
        <nav className="md:flex gap-8 text-lg font-semibold hidden ">
          {links.map((item, index) => (
            <Link
              href={item.url}
              className="hover:text-main cursor-pointer duration-300"
              key={index}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

const links = [
  { title: "Home", url: "/" },
  { title: "Services", url: "/" },
  { title: "About", url: "/" },
  { title: "Portfolio", url: "/" },
  { title: "Contact", url: "/" },
];
export default NavBar;
