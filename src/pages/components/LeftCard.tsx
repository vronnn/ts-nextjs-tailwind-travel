import React from "react";
import Image from "next/image";

type aboutContent = {
  image: string;
  title: string;
  desc: string;
};

const LeftCard = ({ image, title, desc }: aboutContent) => {
  return (
    <div className="lmd:flex lmd:flex-wrap lmd:justify-end mt-20 space-y-4 lmd:space-y-0">
      <div className="border-slate-500 lmd:w-5/12 lmd:order-2">
        <Image src={image} alt="" width={800} height={20} />
      </div>
      <div className="lmd:w-6/12 flex flex-col justify-center lmd:order-1 lmd:mr-8">
        <h2 className="text-2xl sm:text-3xl font-bold lg:text-4xl mb-2">
          {title}
        </h2>
        <h3 className="text-md lg:text-lg text-emerald-900 mb-2">{desc}</h3>
        <p className="text-sm sm:text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos sint
          harum fugiat, odit sunt veritatis aspernatur voluptatibus in soluta
          nesciunt ut veniam omnis, quia{" "}
          <span className="hidden lg:inline">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse saepe
            accusamus fugit laudantium error ipsa veritatis soluta cum commodi
            nihil.
          </span>
        </p>
      </div>
    </div>
  );
};

export default LeftCard;
