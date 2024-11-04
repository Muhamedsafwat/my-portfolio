"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const path = usePathname();
  return (
    <footer
      id="contact"
      className={`items-end text-white ${
        path.includes("dashboard") ? "hidden" : "flex"
      } `}
    >
      <div className="basis-1/2 relative h-[500px] rounded-tr-lg shadow-lg shadow-gray-700 overflow-hidden bg-[url(/pattern-1.png)] hidden lg:block">
        <div className="bg-gradient-to-br from-[#da1900] to-[#c5075d] absolute w-full h-full opacity-[0.85] z-0" />
        <div className="z-10 relative h-full w-full flex justify-center flex-col px-20 2xl:px-40 ">
          <p className="text-lg tracking-[3.5px]">READY TO DO THIS</p>
          <h2 className="text-7xl font-black">
            Let&apos;s get <br /> to work!
          </h2>
          <Link href="/contact">
            <button className="px-10 py-4 border-2 rounded-md border-white text-lg tracking-widest mt-10 hover:bg-white hover:text-main hover:translate-y-[-7px] duration-300">
              CONTACT ME
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-gray-900 text-gray-400 h-auto pt-6 pb-16 flex justify-center items-center flex-col w-full lg:basis-1/2 lg:h-96 lg:pt-0 lg:pb-0">
        <div className="flex justify-around w-4/5 mt-5 ">
          <div className="hidden sm:block">
            <h3 className="text-xl font-medium mb-7">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {internalLinks.map((item, index) => (
                <li key={index} className="duration-300 hover:text-main">
                  <Link href={item.url}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col w-full sm:w-auto">
            <h3 className="text-xl font-medium mb-7">Say Hello</h3>
            {externalLinks.slice(0, 2).map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                className="duration-300 hover:text-main mb-3 flex items-center gap-1"
              >
                {item.icon}
                <p>{item.label}</p>
              </a>
            ))}
            <div className="flex gap-6 mt-4">
              {externalLinks.slice(2, 6).map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  className="duration-300 hover:text-white hover:scale-110 mb-3 flex items-center gap-1"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-500 text-center text-sm md:text-md translate-y-10">
          Developed and powered by Muhamed Safwat
        </p>
      </div>
    </footer>
  );
};

const internalLinks = [
  { label: "Work", url: "/portfolio" },
  { label: "Contact", url: "/contact" },
  { label: "Services", url: "/#services" },
];

const externalLinks = [
  {
    label: "Musafwat666@gmail.com",
    icon: <FiMail size={20} />,
    url: "mailto:musafwat666@gmail.com",
  },
  {
    label: "+201016596908",
    icon: <AiOutlineWhatsApp size={20} />,
    url: "https://api.whatsapp.com/send?phone=201016596908&text=Hi%2C%20I%20have%20a%20question%20are%20you%20available%20to%20chat%3F",
  },
  {
    icon: <FaLinkedinIn size={22} />,
    url: "https://www.linkedin.com/in/mohamedsafwat911/",
  },
  {
    icon: <FaGithub size={22} />,
    url: "https://github.com/Muhamedsafwat",
  },
  {
    icon: <FaFacebookF size={22} />,
    url: "https://www.facebook.com/profile.php?id=100084124117560",
  },
  {
    icon: <FaInstagram size={22} />,
    url: "https://www.instagram.com/muhamedsafwat_/",
  },
];

export default Footer;
