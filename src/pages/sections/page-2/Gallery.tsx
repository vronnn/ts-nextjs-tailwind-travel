import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className="flex flex-wrap items-center ">
      <div className="text-slate-700 sm:px-2 xl:px-4 my-2 pt-4 max-w-screen-xs sm:max-w-none mx-auto sm:w-1/2 md:w-1/3 xl:w-1/4 xl:pt-6">
        <div className="group rounded-xl overflow-hidden">
          <Image
            src="/44.jpg"
            alt="img"
            width={600}
            height={300}
            className="group-hover:scale-125 transition-all duration-300"
          />
        </div>
        <div className="py-2">
          <h2 className="text-lg font-bold">Castlewellan Forest, Ireland</h2>
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
            nesciunt saepe iusto.
          </p>
        </div>
      </div>
      <div className="text-slate-700 px-2 xl:px-4 my-2 pt-4 w-full sm:w-1/2 md:w-1/3 xl:w-1/4 xl:pt-6 hidden sm:inline">
        <div className="group rounded-xl overflow-hidden">
          <Image
            src="/45.jpg"
            alt="img"
            width={600}
            height={300}
            className="group-hover:scale-125 transition-all duration-300"
          />
        </div>
        <div className="py-2">
          <h2 className="text-lg font-bold">Snow Lake, Swiss</h2>
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
            nesciunt saepe iusto.
          </p>
        </div>
      </div>
      <div className="text-slate-700 px-2 xl:px-4 my-2 pt-4 w-full sm:w-1/2 md:w-1/3 xl:w-1/4 xl:pt-6 hidden md:inline">
        <div className="group rounded-xl overflow-hidden">
          <Image
            src="/43.jpg"
            alt="img"
            width={600}
            height={300}
            className="group-hover:scale-125 transition-all duration-300"
          />
        </div>
        <div className="py-2">
          <h2 className="text-lg font-bold">Life Bridge, Ecuador</h2>
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
            nesciunt saepe iusto.
          </p>
        </div>
      </div>
      <div className="text-slate-700 px-2 xl:px-4 my-2 pt-4 w-full sm:w-1/2 md:w-1/3 xl:w-1/4 xl:pt-6 hidden xl:inline">
        <div className="group rounded-xl overflow-hidden">
          <Image
            src="/46.jpg"
            alt="img"
            width={600}
            height={300}
            className="group-hover:scale-125 transition-all duration-300"
          />
        </div>
        <div className="py-2">
          <h2 className="text-lg font-bold">Luang Prabang, Laos</h2>
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
            nesciunt saepe iusto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
