"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
        {/*Desktop navbar*/}
        <nav className="hidden md:flex gap-8 text-lg font-semibold">
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
        {/*Mobile nav bar*/}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)}>
            <Image src="/icons/hamburger.svg" width={35} height={35} />
          </button>
          <nav
            className={`${
              isOpen ? "translate-x-0" : "translate-x-96"
            } duration-300 absolute right-0 top-0 h-screen w-2/4 bg-gray-100 `}
          >
            <div className="pt-5 px-8">
              <button onClick={() => setIsOpen(false)}>
                <Image src="/icons/close.svg" width={35} height={35} />
              </button>
            </div>
            <div className="flex flex-col text-lg">
              {links.map((item, index) => (
                <Link
                  href={item.url}
                  className="hover:text-main hover:px-16 cursor-pointer duration-300 py-3 px-14 text-gray-800 font-medium"
                  key={index}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

const links = [
  { title: "Home", url: "/" },
  { title: "Services", url: "/#services" },
  { title: "About", url: "/#about" },
  { title: "Portfolio", url: "/#portfolio" },
  { title: "Contact", url: "/#contact" },
];
export default NavBar;
