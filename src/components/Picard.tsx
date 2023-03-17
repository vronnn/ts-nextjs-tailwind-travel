import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdFolder } from "react-icons/md";
import { BsBookmarkFill } from "react-icons/bs";

interface cardProps {
  src: string;
  title: string;
  desc: string;
}

const Picard = ({ src, title, desc }: cardProps) => {
  return (
    <div className="flex flex-col gap-y-3 snap-center px-2">
      <div className="group rounded-md overflow-hidden relative shadow-lg">
        <Image
          src={src}
          alt={`${title} picture`}
          width={808}
          height={632}
          className="group-hover:scale-110 group-hover:brightness-75 brig transition-all duration-300"
        />
        <div className="absolute top-0 opacity-0 group-hover:opacity-100 w-full flex justify-between transition-opacity duration-300 p-4">
          <Link
            href=""
            className="flex items-center gap-x-2 px-3 py-2 bg-gray-700 text-gray-100 rounded-3xl bg-opacity-70"
          >
            <MdFolder />
            <p className="text-xs">Save</p>
          </Link>
          <button className="-translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <BsBookmarkFill color="#ad9058" size={25} />
          </button>
        </div>
      </div>
      <div className="flex flex-col text-gray-800">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-xs">{desc}</p>
      </div>
    </div>
  );
};

export default Picard;
