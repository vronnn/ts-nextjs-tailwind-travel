import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Link from "next/link";
import { FaPlaneDeparture } from "react-icons/fa";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const [dark, setDark] = useState(false);
  const navbarVisible = () => {
    if (window.scrollY > 10 && window.scrollY < window.innerHeight - 80) {
      setVisible(true);
      setDark(false);
    } else if (window.scrollY >= window.innerHeight - 80) {
      setDark(true);
      setVisible(false);
    } else {
      setVisible(false);
      setDark(false);
    }
  };

  // console.log(visible);

  useEffect(() => {
    window.addEventListener("scroll", navbarVisible);
    return () => {
      window.removeEventListener("scroll", navbarVisible);
    };
  }, []);

  return (
    <header
      className={`bg-transparent fixed top-0 left-0 w-full flex items-center z-50 ${
        visible ? "fixed backdrop-blur-sm" : ""
      } ${dark ? "fixed nav-color backdrop-blur shadow-md" : ""}`}
    >
      <div id="navbar" className="w-screen 2xl:container relative">
        <div
          className={`flex items-center justify-between relative ${
            dark ? "min-h-[4.5rem]" : " min-h-[5rem] md:min-h-[7rem]"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center gap-x-4 order-1 w-[25%] box-border pl-6 lmd:pl-14 lg:pl-24 2xl:pl-16">
            <Link href="/">
              <FaPlaneDeparture
                size={25}
                color={`${dark ? "#374151" : "#f3f4f6"}`}
              />
            </Link>
            <Link
              href="/"
              className={`hidden lg:inline  text-lg sm:text-xl lg:text-[1.375rem] font-bold tracking-wide ${
                dark ? "text-gray-700" : "text-gray-100"
              }`}
            >
              Travel
            </Link>
          </div>
          {/* navigation */}
          <Nav />
          {/* login & register */}
          <div className="order-2 lg:order-3 lg:w-[25%] box-border flex justify-center items-center lg:pr-24 2xl:pr-16 gap-x-2 lg:justify-end">
            <Link
              href="/Login"
              className={`uppercase hidden xs:inline xs:text-sm sm:text-base tracking-widest ${
                dark ? "text-gray-700 border-gray-700" : "text-gray-100 "
              }`}
            >
              log in
            </Link>
            <div
              className={` h-4 sm:h-[1.5rem] w-[1px] border-l-[1px] ${
                dark ? "border-gray-700" : "border-gray-100"
              }`}
            ></div>
            <Link
              href="/Register"
              className={`uppercase hidden xs:inline xs:text-sm sm:text-base tracking-widest ${
                dark ? "text-gray-700" : "text-gray-100"
              }`}
            >
              register
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
