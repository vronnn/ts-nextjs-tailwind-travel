import React from "react";
import Image from "next/image";
import { IoChevronDownCircle } from "react-icons/io5";

type CardProps = {
  cardImg: string;
  title: string;
  desc: string;
};

const Card = ({ cardImg, title, desc }: CardProps) => {
  return (
    <div className="group rounded-xl overflow-hidden relative">
      <Image
        src={cardImg}
        alt="img"
        width={600}
        height={300}
        className="group-hover:scale-125 group-hover:brightness-50 transition-all duration-300"
      />
      <div className="hidden group-hover:absolute top-1/2 left-1/2 -translate-x-1/2 group-hover:flex flex-col items-center justify-center transition-all duration-500">
        <a
          href=""
          className="text-slate-100 text-center text-2xl mb-4 font-semibold"
        >
          Explore now
        </a>
        <IoChevronDownCircle
          color="#f1f5f9"
          size={38}
          className=" animate-bounce"
        />
      </div>
      <div className="flex flex-col px-6 items-center justify-center absolute bottom-0 text-slate-100 py-2 bg-gradient-to-t from-slate-800 to-transparent h-1/3">
        <h2 className="text-lg font-bold text-center">{title}</h2>
        <p className="text-sm text-center">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
