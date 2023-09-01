"use client";
import React, { useState, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BiMenu, BiX } from "react-icons/bi";
import axios from "axios";
import { UserInfo } from "@/context/AuthContext";

const NavBar = () => {
  const router = useRouter();
  const { user, logout } = useContext(UserInfo);
  const [isOpen, setIsOpen] = useState(false);

  const logoutHandler = () => {
    axios
      .post("http://localhost:3000/api/auth/logout")
      .then(() => {
        logout();
        router.push("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <header className="absolute top-0 left-0 right-0 z-10 text-gray-100">
      <div className="max-w-7xl px-6 mx-auto flex justify-between items-center h-24 md:h-32">
        <Link
          href="/"
          className="font-bold text-3xl text-white cursor-pointer "
        >
          <span className="text-[#f81f01]">{"{S}"}</span>
          AFWAT
        </Link>
        {/*Desktop navbar*/}
        <nav className="hidden md:flex gap-8 text-lg font-semibold">
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
          {user ? (
            <>
              <Link
                href="/dashboard"
                className="hover:text-main cursor-pointer duration-300 relative group"
              >
                Dashboard
                <div className="w-full absolute bottom-2 h-[3px] bg-main rounded-md opacity-0 group-hover:bottom-[-3px] group-hover:opacity-80 duration-300" />
              </Link>
              <button
                onClick={logoutHandler}
                className="hover:text-main cursor-pointer duration-300 relative group"
              >
                Logout
              </button>
            </>
          ) : null}
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
                  href={item.url}
                  className="hover:text-main hover:px-16 cursor-pointer duration-300 py-3 px-14 font-medium"
                  key={index}
                >
                  {item.title}
                </Link>
              ))}
              {user ? (
                <>
                  <Link
                    href={"/dashboard"}
                    className="hover:text-main hover:px-16 cursor-pointer duration-300 py-3 px-14 font-medium"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={logoutHandler}
                    className="hover:text-main hover:px-16 cursor-pointer duration-300 py-3 px-14 font-medium"
                  >
                    Logout
                  </button>
                </>
              ) : null}
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
  { title: "Contact", url: "/#contact" },
];
export default NavBar;
