import React from "react";
import Image from "next/image";
import { GoPerson } from "react-icons/go";
import { AiOutlineDownload } from "react-icons/ai";

interface Props {
  photo: {
    id: number;
    photographer: string;
    photographerUrl: string;
    src: {
      large2x: string;
    };
    alt: string;
  };
}

function Photo({ photo }: Props) {
  return (
    <div className="relative group/card overflow-hidden">
      <Image src={photo.src.large2x} alt={photo.alt} width={920} height={20} />
      <div className="absolute bottom-0 left-0 min-h-[4rem] w-full inset-x-0 h-16 bg-gradient-to-t from-black to-transparent group-hover/card:translate-y-0 flex items-center justify-between pl-3 translate-y-14 transition-all duration-300">
        <div className="flex items-center">
          <div className="p-2 rounded-full shadow-lg ">
            <GoPerson color="#d1d5db" size={18} />
          </div>
          <a
            href={photo.photographerUrl}
            className="text-gray-100 text-[.95rem]"
          >
            {photo.photographer}
          </a>
        </div>
        <div className="flex items-center gap-x-2 pr-4 group/download">
          <AiOutlineDownload color="#d1d5db" size={28} />
          <p className="text-gray-100 text-[.95rem] hidden group-hover/download:inline-flex">
            download
          </p>
        </div>
      </div>
    </div>
  );
}

export default Photo;
