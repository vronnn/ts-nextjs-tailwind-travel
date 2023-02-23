import React from "react";
import { RiHome5Line } from "react-icons/ri";
import { RiSuitcase2Line } from "react-icons/ri";
import { RiMapPin2Line } from "react-icons/ri";
import { RiPhoneLine } from "react-icons/ri";

const NavHor = () => {
  return (
    <nav className="lg:hidden text-slate-200 fixed left-0 top-0 px-10 h-screen py-9 bg-transparent backdrop-blur">
      <div className="border text-center mb-4 py-1">
        <h2 className="font-bold">Overview</h2>
      </div>
      <ul className="flex flex-col items-center justify-center">
        <li className="group my-[5px] flex justify-start w-full bg-stone-500 rounded-lg py-[6px] pl-3 pr-5 hover:bg-stone-600 shadow-lg">
          <RiHome5Line size={24} className="mr-2" />
          <a href="" className="tracking-wide">
            Home
          </a>
        </li>
        <li className="group my-[5px] flex justify-start w-full bg-stone-500 rounded-lg py-[6px] pl-3 pr-5 hover:bg-stone-600 shadow-lg">
          <RiSuitcase2Line size={23} className="mr-2" />
          <a href="#custom-travel-planning" className="tracking-wide">
            Travel planning
          </a>
        </li>
        <li className="group my-[5px] flex justify-start w-full bg-stone-500 rounded-lg py-[6px] pl-3 pr-5 hover:bg-stone-600 shadow-lg">
          <RiMapPin2Line size={23} className="mr-2" />
          <a href="#destinations" className="tracking-wide">
            Destinations
          </a>
        </li>
        <li className="group my-[5px] flex justify-start w-full bg-stone-500 rounded-lg py-[6px] pl-3 pr-5 hover:bg-stone-600 shadow-lg">
          <RiPhoneLine size={23} className="mr-2" />
          <a href="#contact" className="tracking-wide">
            Contact us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavHor;
