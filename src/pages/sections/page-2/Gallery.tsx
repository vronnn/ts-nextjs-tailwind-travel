import React from "react";
import Image from "next/image";
import { IoChevronDownCircle } from "react-icons/io5";
import Card from "@/components/Card";

const Gallery = () => {
  return (
    <div className="flex flex-wrap items-center">
      <div className="text-slate-700 sm:px-2 xl:px-4 my-2 pt-4 max-w-screen-xs sm:max-w-none mx-auto sm:w-1/2 md:w-1/3 xl:w-1/4 xl:pt-6">
        <Card
          cardImg="/44.jpg"
          title="Castlewellan Forest, Ireland"
          desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
            nesciunt saepe iusto."
        />
      </div>
      <div className="text-slate-700 px-2 xl:px-4 my-2 pt-4 w-full sm:w-1/2 md:w-1/3 xl:w-1/4 xl:pt-6 hidden sm:inline">
        <Card
          cardImg="/45.jpg"
          title="Snow Lake, Swiss"
          desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
            nesciunt saepe iusto."
        />
      </div>
      <div className="text-slate-700 px-2 xl:px-4 my-2 pt-4 w-full sm:w-1/2 md:w-1/3 xl:w-1/4 xl:pt-6 hidden md:inline">
        <Card
          cardImg="/43.jpg"
          title="Life Bridge, Ecuador"
          desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
            nesciunt saepe iusto."
        />
      </div>
      <div className="text-slate-700 px-2 xl:px-4 my-2 pt-4 w-full sm:w-1/2 md:w-1/3 xl:w-1/4 xl:pt-6 hidden xl:inline">
        <Card
          cardImg="/46.jpg"
          title="Luang Prabang, Laos"
          desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
            nesciunt saepe iusto."
        />
      </div>
    </div>
  );
};

export default Gallery;
