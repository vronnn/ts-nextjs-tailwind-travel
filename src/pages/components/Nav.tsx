import React, { useState } from "react";
import NavHor from "./NavHor";
import NavVer from "./NavVer";

const Nav = () => {
  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <div className="flex order-3 px-5 lg:px-0 lg:order-2">
      <button
        className="flex flex-col px-5 lg:hidden py-[9px] rounded-full hover:bg-slate-400  hover:bg-opacity-30"
        onClick={handleClick}
      >
        <span className="w-1 h-1 bg-slate-100 my-[2px] rounded-full"></span>
        <span className="w-1 h-1 bg-slate-100 my-[2px] rounded-full"></span>
        <span className="w-1 h-1 bg-slate-100 my-[2px] rounded-full"></span>
      </button>

      {!toggle ? <NavVer /> : null}

      <NavHor />
    </div>
  );
};

export default Nav;
