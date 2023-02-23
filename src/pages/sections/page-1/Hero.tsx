import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-row justify-between items-center h-5/6 pt-16 2xl:container">
      {/* social */}
      <div className="hidden xs:flex xs:flex-col xs:px-5 lg:px-8 2xl:px-1">
        <a href="https://github.com/" className="w-5 py-2">
          <FaGithub color="#f1f5f9" size={24} />
        </a>
        <a href="https://www.instagram.com/" className="w-5 py-2">
          <FaInstagram color="#f1f5f9" size={24} />
        </a>
        <a href="https://twitter.com/" className="w-5 py-2">
          <FaTwitter color="#f1f5f9" size={24} />
        </a>
      </div>
      {/* hero */}
      <div className="flex flex-col items-center px-2 xs:px-0">
        <h1 className="text-3xl xs:text-4xl max-w-xs text-slate-100 font-bold text-center md:text-5xl md:max-w-lg lg:max-w-xl lg:leading-tight">
          Get started on planning the best trip ever
        </h1>
        <div>
          <button
            type="button"
            className="border mt-6 text-slate-100 px-6 py-2 text-lg rounded-full backdrop-blur-sm md:px-8 md:py-3 md:text-xl md:hover:px-[34px] md:hover:py-[14px]  transition-all duration-300"
          >
            Get started
          </button>
        </div>
      </div>
      {/* scroll */}
      <div className="hidden xs:flex flex-col items-center px-5 group lg:px-8 2xl:px-1">
        <div className="w-6 h-6 rounded-full bg-slate-100 mb-3 group-hover:animate-bounce"></div>
        <a
          href=""
          className="flex justify-center items-center px-1 py-2 border-2 w-6 md:w-7 rounded-full backdrop-blur"
        >
          <Image
            src="/arrow.png"
            alt="scroll"
            width={5}
            height={5}
            className="group-hover:w-full transition-all duration-500"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
