import React, { useState } from "react";
import { RiHome5Line } from "react-icons/ri";
import { RiSuitcase2Line } from "react-icons/ri";
import { RiMapPin2Line } from "react-icons/ri";
import { RiPhoneLine } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";
import { RiChat3Line } from "react-icons/ri";

const NavHor = () => {
  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      {!toggle ? null : (
        <nav className="lg:hidden text-slate-600 fixed left-0 top-0 px-8 h-screen py-9 bg-slate-100 bg-opacity-60 backdrop-blur">
          <button
            className="flex justify-between space-x-2 items-center mb-4"
            onClick={handleClick}
          >
            <RiCloseLine size={30} />
            <h4 className="font-bold text-xl">Travel</h4>
          </button>
          <ul className="flex flex-col items-center justify-center">
            <li className="group my-[5px] flex justify-start w-full rounded-lg py-[6px] pl-3 pr-5 hover:bg-slate-200 shadow-lg">
              <RiHome5Line size={24} className="mr-2" />
              <a href="" className="tracking-wide">
                Home
              </a>
            </li>
            <li className="group my-[5px] flex justify-start w-full rounded-lg py-[6px] pl-3 pr-5 hover:bg-slate-200 shadow-lg">
              <RiMapPin2Line size={23} className="mr-2" />
              <a href="#destinations" className="tracking-wide">
                Destinations
              </a>
            </li>
            <li className="group my-[5px] flex justify-start w-full rounded-lg py-[6px] pl-3 pr-5 hover:bg-slate-200 shadow-lg">
              <RiSuitcase2Line size={23} className="mr-2" />
              <a href="#about" className="tracking-wide">
                About
              </a>
            </li>
            <li className="group my-[5px] flex justify-start w-full rounded-lg py-[6px] pl-3 pr-5 hover:bg-slate-200 shadow-lg">
              <RiChat3Line size={23} className="mr-2" />
              <a href="#review" className="tracking-wide">
                Review
              </a>
            </li>
            <li className="group my-[5px] flex justify-start w-full rounded-lg py-[6px] pl-3 pr-5 hover:bg-slate-200 shadow-lg">
              <RiPhoneLine size={23} className="mr-2" />
              <a href="#contact" className="tracking-wide">
                Contact us
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default NavHor;
