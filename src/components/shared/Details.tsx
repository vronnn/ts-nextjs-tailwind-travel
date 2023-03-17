import React from "react";
import Image from "next/image";
import { GoPerson } from "react-icons/go";
import { HiOutlineHeart } from "react-icons/hi";
import { IoBookmarksOutline } from "react-icons/io5";

type PhotoDetails = {
  src: string;
  photographer: string;
  alt: string;
  photographer_url: string;
};

const Details = ({
  src,
  photographer,
  alt,
  photographer_url,
}: PhotoDetails) => {
  return (
    <section className="bg-gray-100 flex flex-col justify-center items-center w-[65rem] h-[50rem] border-2 relative">
      <div className="flex w-full justify-between absolute top-0 min-h-[7rem] px-8">
        <div className="flex items-center text-gray-700 gap-x-3">
          <div className="p-2 rounded-full shadow-lg ">
            <GoPerson color="#374151" size={35} />
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-lg font-semibold">{photographer}</p>
            <a href={photographer_url} className="font-light">
              Follow
            </a>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <button
            type="button"
            className="px-6 py-2 shadow-lg rounded-lg flex items-center gap-x-2"
          >
            <IoBookmarksOutline /> Save
          </button>
          <button
            type="button"
            className="px-6 py-2 shadow-lg rounded-lg flex items-center gap-x-2"
          >
            <HiOutlineHeart /> Like
          </button>
          <button
            type="button"
            className="px-6 py-2 shadow-lg rounded-lg bg-emerald-900 text-gray-100"
          >
            Download
          </button>
        </div>
      </div>

      <div className="flex items-center translate-y-6">
        <div className="relative">
          <div className="">
            <Image
              src={src}
              alt={alt}
              width={920}
              height={20}
              className="max-w-[40rem] max-h-[35rem] object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full inset-x-0 h-16 bg-gradient-to-t from-black to-transparent flex items-center px-8">
            <p className="text-gray-100">{alt}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
