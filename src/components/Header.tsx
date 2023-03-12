import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Image from "next/image";
import Link from "next/link";
import { FaPlaneDeparture } from "react-icons/fa";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const [dark, setDark] = useState(false);
  const navbarVisible = () => {
    if (window.scrollY > 10 && window.scrollY < window.innerHeight - 60) {
      setVisible(true);
      setDark(false);
    } else if (window.scrollY >= window.innerHeight - 60) {
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
        <div className="flex items-center justify-between relative min-h-[5.2rem]">
          {/* Logo */}
          <div className="flex items-center gap-x-4 px-6 lg:px-12 lg:mr-12 order-1">
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
          <div className="order-2 lg:order-3 lg:px-10 px-5">
            <Link
              href="/Login"
              className={`uppercase hidden xs:inline xs:text-sm sm:text-base tracking-widest border-r px-2 hover:font-bold ${
                dark ? "text-gray-700 border-gray-700" : "text-gray-100 "
              }`}
            >
              log in
            </Link>
            <Link
              href="/Register"
              className={`uppercase hidden xs:inline xs:text-sm sm:text-base tracking-widest px-2 hover:font-bold ${
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
