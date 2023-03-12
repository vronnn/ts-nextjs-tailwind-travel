import React, { useState, useEffect } from "react";
import NavHor from "./NavHor";
import NavVer from "./NavVer";

const Nav = () => {
  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    setToggle(!toggle);
  };
  const [dark, setDark] = useState(false);
  const navbarDark = () => {
    if (window.scrollY > 10 && window.scrollY < window.innerHeight - 60) {
      setDark(false);
    } else if (window.scrollY >= window.innerHeight - 60) {
      setDark(true);
    } else {
      setDark(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navbarDark);
    return () => {
      window.removeEventListener("scroll", navbarDark);
    };
  }, []);
  return (
    <div className="flex order-3 px-5 lg:px-0 lg:order-2">
      <button
        className="flex flex-col px-5 lg:hidden py-[9px] rounded-full hover:bg-slate-400  hover:bg-opacity-30"
        onClick={handleClick}
      >
        <span
          className={`w-1 h-1 my-[2px] rounded-full ${
            dark ? "bg-gray-700" : "bg-gray-100"
          }`}
        ></span>
        <span
          className={`w-1 h-1 my-[2px] rounded-full ${
            dark ? "bg-gray-700" : "bg-gray-100"
          }`}
        ></span>
        <span
          className={`w-1 h-1 my-[2px] rounded-full ${
            dark ? "bg-gray-700" : "bg-gray-100"
          }`}
        ></span>
      </button>

      {!toggle ? <NavVer /> : null}

      <NavHor />
    </div>
  );
};

export default Nav;
