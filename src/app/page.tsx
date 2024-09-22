"use client";
import React, { useEffect, useState } from "react";
import Slideshow from "../components/Slideshow";
import { creator, postList, songList } from "@/util";
import SongCard from "@/components/SongCard";
import Footer from "@/components/Footer";
import CreatorCard from "@/components/CreatorCard";
import PostCard from "@/components/postCard";

export default function HomePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="w-full h-screen overflow-auto">
      <Slideshow />
      <div className="mt-10 mx-5 md:mx-10 lg:mx-20 flex flex-col items-center  ">
        <h1 className="text-4xl font-bold text-gray-800 flex justify-center w-full">
          שירים
        </h1>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
          xl:grid-cols-4 gap-5 mt-10 "
        >
          {songList.map((song, index) => (
            <SongCard key={index} {...song} />
          ))}
        </div>
        <ul className="flex flex-col justify-center mt-10 ">
          {creator.songsDesc.map((songDesc, key) => (
            <li className="text-right" key={key}>
              {songDesc}
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-5 md:mx-10 lg:mx-20 flex flex-col items-center mb-10 ">
        <h1 className="text-4xl font-bold text-gray-800 flex justify-center w-full mt-10">
          פעילויות
        </h1>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
          xl:grid-cols-4 gap-5 mt-20 "
        >
          {postList.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>
      </div>

      {isClient && (
        <div className="w-full flex justify-center">
          <video controls className="w-[90%] lg:w-auto h-auto mx-10">
            <source src="/vids/dance.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      <div className="flex justify-center my-20 ">
        <CreatorCard />
      </div>
      <Footer />
    </div>
  );
}
// s
