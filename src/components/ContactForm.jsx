"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //check for all inputs
  useEffect(() => {
    if (name && phone && email && subject && message) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [name, phone, email, subject, message]);

  //submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/api/messages`, {
        name,
        phone,
        email,
        subject,
        message,
      })
      .then((res) => {
        if (res.status == 201) {
          setName("");
          setPhone("");
          setEmail("");
          setSubject("");
          setMessage("");
          alert("Message sent successfully");
        } else {
          alert("Network error");
          console.log(res);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        alert("Network error");
        console.log(err);
        setIsLoading(false);
      });
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col gap-5 mt-8 [&>input]:py-2 [&>input]:px-4 [&>input]:border-[1px] [&>input]:border-gray-300 [&>input]:rounded-md text-lg"
    >
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="your name"
        minLength={5}
      />
      <input
        onChange={(e) => setPhone(e.target.value)}
        type="tel"
        placeholder="phone number"
        minLength={11}
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="email"
        minLength={12}
      />
      <input
        onChange={(e) => setSubject(e.target.value)}
        type="text"
        placeholder="subject"
        minLength={5}
      />
      <textarea
        minLength={20}
        onChange={(e) => setMessage(e.target.value)}
        cols="30"
        rows="5"
        placeholder="Leave your message here"
        className="py-2 px-4 border-[1px] border-gray-300 rounded-md"
      ></textarea>
      <button
        disabled={!isValid || isLoading}
        className="bg-main rounded-md px-7 py-3 text-white mr-auto border-2 border-main hover:bg-transparent hover:text-main duration-300 disabled:opacity-50 disabled:hover:text-white disabled:hover:bg-main "
      >
        {isLoading ? "Sending..." : "Submit"}
      </button>
    </form>
  );
};

export default ContactForm;
