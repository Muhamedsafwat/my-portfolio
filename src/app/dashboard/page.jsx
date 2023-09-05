"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AiOutlineFolderAdd,
  AiOutlineEdit,
  AiOutlineDelete,
} from "react-icons/ai";
import axios from "axios";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getData = () => {
      axios
        .get(`${process.env.API_URL}/api/projects`)
        .then((res) => {
          if (res.status == 200) {
            console.log(res.data);
            setProjects(res.data);
            setIsLoading(false);
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

  return (
    <div className="max-w-7xl p-10 mx-auto w-full">
      <Link href="/dashboard/add-project">
        <button className="px-4 py-2 bg-main text-white rounded-md text-lg flex items-center gap-2">
          <AiOutlineFolderAdd size={25} />
          <span>Add project</span>
        </button>
      </Link>
      {!isLoading ? (
        <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 ">
          {projects.map((item, index) => (
            <div className="aspect-[8/11] group duration-300" key={index}>
              <div className="relative h-full w-full rounded-lg overflow-hidden duration-300 shadow-lg shadow-gray-800">
                <Image
                  src={item.thumbnail}
                  alt="thumbnail"
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
                  <div className="flex gap-4">
                    <Link href={`/dashboard/${item.slug}`}>
                      <button className="bg-transparent border-gray-400 border-2 px-5 rounded-md py-2 duration-300 flex items-center gap-2 hover:border-main">
                        <AiOutlineEdit />
                        <p>Edit</p>
                      </button>
                    </Link>
                    <Link href={`/portfolio/${item.slug}`}>
                      <button className="bg-transparent border-gray-400 border-2 px-5 flex items-center gap-2 rounded-md py-2 duration-300 hover:border-red-600">
                        <AiOutlineDelete />
                        <p>Delete</p>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-5xl text-white"> loading </div>
      )}
    </div>
  );
};

export default Dashboard;
