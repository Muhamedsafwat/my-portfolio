"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BiMenu, BiX } from "react-icons/bi";

const NavBar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-10 text-gray-100">
      <div className="max-w-7xl px-5 mx-auto flex justify-between items-center h-24 md:h-32">
        <Link
          href="/"
          className="font-bold text-3xl text-white cursor-pointer "
        >
          <span className="text-[#f81f01]">{"{S}"}</span>
          AFWAT
        </Link>
        {/*Desktop navbar*/}
        <nav className="hidden md:flex text-white gap-8 text-lg font-semibold">
          {links.map((item, index) => (
            <Link
              href={item.url}
              className="hover:text-main cursor-pointer duration-300 relative group"
              key={index}
            >
              {item.title}
              <div className="w-full absolute bottom-2 h-[3px] bg-main rounded-md opacity-0 group-hover:bottom-[-3px] group-hover:opacity-80 duration-300" />
            </Link>
          ))}
        </nav>
        {/*Mobile nav bar*/}
        <div className="md:hidden overflow-hidden">
          <button onClick={() => setIsOpen(true)}>
            <BiMenu size={32} />
          </button>
          <nav
            className={`${
              isOpen ? "w-1/2 opacity-100" : "w-0 overflow-hidden opacity-0"
            } duration-300 absolute right-0 top-0 h-screen bg-gray-100 text-gray-900 `}
          >
            <div className="pt-5 px-8">
              <button onClick={() => setIsOpen(false)}>
                <BiX size={32} />
              </button>
            </div>
            <div className="flex flex-col text-lg">
              {links.map((item, index) => (
                <Link
                  onClick={() => setIsOpen(false)}
                  href={item.url}
                  className="hover:text-main hover:px-16 cursor-pointer duration-300 py-3 px-14 font-medium"
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
  { title: "About", url: "/#about" },
  { title: "Services", url: "/#services" },
  { title: "Portfolio", url: "/portfolio" },
  { title: "Contact", url: "/contact" },
];
export default NavBar;
