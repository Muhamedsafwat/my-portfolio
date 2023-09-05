"use client";
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";

import { UserInfo } from "@/context/AuthContext";
import axios from "axios";

const LoginPage = () => {
  const { user, login } = useContext(UserInfo);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;

    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth`,
        { username, password },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.status == 200) {
          login(res.data);
          router.push("/");
        } else {
          console.log(res);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (user) {
      router.push("/");
    } else {
      setIsLoading(false);
    }
  }, [user]);

  return (
    <>
      {isLoading ? (
        <h1 className="text-5xl">loading...</h1>
      ) : (
        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-8 bg-gray-400 bg-opacity-20 p-10 pb-7 w-1/3 rounded-lg"
        >
          <h1 className="text-4xl mb-3">Admin login</h1>
          <input
            type="text"
            placeholder="username"
            className="bg-transparent p-4 border-2 border-gray-400 rounded-lg text-lg"
          />
          <input
            type="password"
            placeholder="password"
            className="bg-transparent p-4 border-2 border-gray-400 rounded-lg text-lg"
          />
          <button
            type="submit"
            className="border-2 border-gray-400 rounded-lg w-min py-2 px-4 mx-auto hover:bg-gray-400 duration-300 font-medium"
          >
            Login
          </button>
        </form>
      )}
    </>
  );
};

export default LoginPage;
