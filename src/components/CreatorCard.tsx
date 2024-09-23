import { creator, creatorDesc } from "@/util";
import React from "react";

const CreatorCard = ({}) => {
  return (
    <div
      className="w-full px-5 md:px-32 lg:px-60 bg-white
     rounded-lg  flex flex-col md:flex-row  md:gap-10"
    >
      <div className="flex-none md:flex-1 order-2">
        <img
          src="/images/profile.jpg"
          alt={` picture of creator`}
          className="w-full  object-cover"
        />
      </div>
      <div className="flex-none md:flex-1 order-1 text-right">
        <h2 className="text-xl font-bold mb-4">Dor</h2>
        <div>{creatorDesc}</div>
      </div>
    </div>
  );
};

export default CreatorCard;
