"use client";
import React, { useEffect, useState } from "react";
import Slideshow from "../components/Slideshow";
import { creator, Options, postList, songList } from "@/util";
import SongCard from "@/components/SongCard";
import Footer from "@/components/Footer";
import CreatorCard from "@/components/CreatorCard";
import PostCard from "@/components/postCard";
import ToggleComponents from "@/components/ToggleComponents";
import ItemCard from "@/components/ItemCard";
import ItemCardList from "@/components/ItemCardList";

import info from "@/info.json";
import { Item } from "@/interfaces/Item";
import { Info } from "@/interfaces/Info";

export default function HomePage() {
  const [isClient, setIsClient] = useState(false);
  const [activeComponent, setActiveComponent] = useState<string>(
    Options.wallets
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="w-full h-screen overflow-auto">
      <Slideshow />
      <div className="mt-10 mx-5 md:mx-10 lg:mx-20 flex flex-col items-center  ">
        <ToggleComponents
          options={Object.keys(Options)}
          activeComponent={activeComponent}
          updateActiveComponent={setActiveComponent}
        />
        <div>{activeComponent}</div>
        <ItemCardList items={info[activeComponent as keyof Info]} />

        <div className="flex justify-center my-20 ">
          <CreatorCard />
        </div>
        <Footer />
      </div>
    </div>
  );
}
