"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { AiOutlineDelete } from "react-icons/ai";

const AddPost = () => {
  const router = useRouter();
  //needed references
  const featuresRef = useRef();
  const technologiesRef = useRef();
  //loading state
  const [isLoading, setIsLoading] = useState(false);
  //array inputs
  const [features, setFeatures] = useState([]);
  const [technologiesUsed, setTechnologiesUsed] = useState([]);
  const [gallery, setGallery] = useState([]);
  //form data
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [previewLink, setPreviewLink] = useState("");
  const [sourceCodeLink, setSourceCodeLink] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [cover, setCover] = useState(null);
  //Add feature to features array
  const addFeature = () => {
    setFeatures([...features, featuresRef.current.value]);
    featuresRef.current.value = "";
  };
  //Add technology to technologies array
  const addTechnology = () => {
    setTechnologiesUsed([...technologiesUsed, technologiesRef.current.value]);
    technologiesRef.current.value = "";
  };

  //submit handler
  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    //create upload to cloudinary function
    const uploadToCloud = async (file) => {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "n9stc05l");
      const config = {
        headers: { "X-Requested-With": "XMLHttpRequest" },
      };
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dj1aprys6/image/upload",
        data,
        config
      );
      return res.data.url;
    };

    const coverURl = await uploadToCloud(cover);
    const thumbnailUrl = await uploadToCloud(thumbnail);
    const galleryUrl = await Promise.all(
      gallery.map(async (item) => await uploadToCloud(item))
    );

    const reqBody = {
      title,
      slug,
      thumbnail: thumbnailUrl,
      cover: coverURl,

      gallery: galleryUrl,
      description,
      features,
      technologiesUsed,
      category,
      previewLink,
      sourceCodeLink,
    };
    axios
      .post(`${process.env.API_URL}/api/projects`, reqBody, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status == 201) {
          router.push("/dashboard");
        } else {
          console.log(res);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return (
    <>
      <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-br from-[#f81f01] to-[#ee076e] bg-clip-text text-transparent">
        Add proJect
      </h1>
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-8 max-w-5xl w-full p-10 [&>input]:p-4 [&>input]:bg-gray-300 [&>input]:bg-opacity-10 [&>input]:border-[1px] [&>input]:border-gray-600 [&>input]:rounded-md [&>*]:text-lg  "
      >
        <div className="flex gap-5 [&>input]:p-4 [&>input]:flex-1 [&>input]:bg-gray-300 [&>input]:bg-opacity-10 [&>input]:border-[1px] [&>input]:border-gray-600 [&>input]:rounded-md ">
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="title"
          />
          <input
            onChange={(e) => setSlug(e.target.value)}
            type="text"
            placeholder="slug"
          />
        </div>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          placeholder="description"
          className=" bg-gray-300 bg-opacity-10 border-[1px] border-gray-600 p-4 rounded-md min-h-[200px]"
        />
        <select
          onChange={(e) => setCategory(e.target.value)}
          className=" bg-gray-300 bg-opacity-10 border-[1px] border-gray-600 p-4 rounded-md text-gray-500"
        >
          <option value="Landing Page">Landing Page</option>
          <option value="Personal Portfolio">Personal Portfolio</option>
          <option value="Web Application">Web Application</option>
          <option value="Web API">Web API</option>
        </select>
        <div className="flex gap-5 [&>input]:p-4 [&>input]:flex-1 [&>input]:bg-gray-300 [&>input]:bg-opacity-10 [&>input]:border-[1px] [&>input]:border-gray-600 [&>input]:rounded-md ">
          <input
            onChange={(e) => setPreviewLink(e.target.value)}
            type="text"
            placeholder="Live preview Link"
          />
          <input
            onChange={(e) => setSourceCodeLink(e.target.value)}
            type="text"
            placeholder="Source code link"
          />
        </div>

        <div>
          <div className="flex justify-between gap-5">
            <input
              ref={featuresRef}
              type="text"
              className="bg-gray-300 bg-opacity-10 border-[1px] border-gray-600 p-4 rounded-md flex-1"
              placeholder="features"
            />
            <button
              type="button"
              onClick={addFeature}
              className="bg-main py-4 px-7 rounded md "
            >
              Add
            </button>
          </div>
          {features ? (
            <ul>
              {features.map((item, index) => (
                <li
                  className="text-lg text-white ml-5 mt-3 items-start flex gap-2"
                  key={index}
                >
                  <button type="button" className="text-main">
                    <AiOutlineDelete size={25} />
                  </button>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div>
          <div className="flex justify-between gap-5">
            <input
              ref={technologiesRef}
              type="text"
              className="bg-gray-300 bg-opacity-10 border-[1px] border-gray-600 p-4 rounded-md flex-1"
              placeholder="technologies"
            />
            <button
              type="button"
              onClick={addTechnology}
              className="bg-main py-4 px-7 rounded md "
            >
              Add
            </button>
          </div>
          {technologiesUsed ? (
            <ul>
              {technologiesUsed.map((item, index) => (
                <li
                  className="text-lg text-white list-disc ml-5 mt-3 flex gap-2 items-start"
                  key={index}
                >
                  <button type="button" className="text-main h-1">
                    <AiOutlineDelete size={25} />
                  </button>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-5 text-gray-200">
          <div>
            <label htmlFor="gallery" className="block mb-2">
              Add gallery photos
            </label>
            <input
              id="gallery"
              type="file"
              multiple
              onChange={(e) => {
                setGallery(Array.from(e.target.files));
              }}
            />
          </div>
          <div>
            <label htmlFor="thumbnail" className="block mb-2">
              Add thumbnail
            </label>
            <input
              onChange={(e) => setThumbnail(e.target.files[0])}
              id="thumbnail"
              type="file"
            />
          </div>
          <div>
            <label htmlFor="cover" className="block mb-2">
              Add cover
            </label>
            <input
              onChange={(e) => setCover(e.target.files[0])}
              id="cover"
              type="file"
            />
          </div>
        </div>
        <button
          disabled={isLoading}
          type="submit"
          className="px-4 py-2 bg-main text-white rounded-md text-lg mx-auto"
        >
          {isLoading ? "Loading..." : "Add project"}
        </button>
      </form>
    </>
  );
};

export default AddPost;
