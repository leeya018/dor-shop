"use client";

type PostCardProps = {
  image: string;
};
const PostCard = ({ image }: PostCardProps) => {
  return (
    <div
      className="cursor-pointer bg-gray-800 
      text-white rounded-lg overflow-hidden shadow-lg
       w-full h-80 relative"
    >
      <img
        src={image}
        alt={"title"}
        className="object-cover h-full w-full bg-center transform transition-transform 
                        duration-300 hover:scale-105 "
      />
      <div className="p-4 absolute bottom-0 left-0"></div>
    </div>
  );
};

export default PostCard;
