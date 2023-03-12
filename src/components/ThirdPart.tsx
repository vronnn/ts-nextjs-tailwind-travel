import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ThirdPartProps {
  link: string;
  image: string;
  desc: string;
}

const ThirdPart = ({ link, image, desc }: ThirdPartProps) => {
  return (
    <div className="flex justify-center my-4">
      <Link
        href={link}
        target="_blank"
        className="px-4 py-2 rounded-lg shadow-lg flex gap-x-2"
      >
        <Image src={image} alt="img" width={24} height={24}></Image>
        <p className="text-slate-600">{desc}</p>
      </Link>
    </div>
  );
};

export default ThirdPart;
