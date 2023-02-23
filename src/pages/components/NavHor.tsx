import React, { useState } from "react";

const NavVer = () => {
  const [active, setActive] = useState("home");
  const updateActiveLink = (value: string) => {
    setActive(value);
  };
  return (
    <nav id="nav-menu" className="hidden lg:block">
      <ul className="flex text-slate-300">
        <li className="group">
          <a
            href=""
            className={`px-2 lg:mx-4 xl:mx-5 2xl:mx-6 group-hover:font-semibold ${
              active === "home" ? "text-slate-100 font-semibold" : ""
            }`}
            onClick={() => updateActiveLink("home")}
          >
            Home
          </a>
        </li>
        <li className="group">
          <a
            href="#custom-travel-planning"
            className={`px-2 lg:mx-4 xl:mx-5 2xl:mx-6 group-hover:font-semibold ${
              active === "ctp" ? "text-slate-100 font-semibold" : ""
            }`}
            onClick={() => updateActiveLink("ctp")}
          >
            Custom travel planning
          </a>
        </li>
        <li className="group">
          <a
            href="#destinations"
            className={`px-2 lg:mx-4 xl:mx-5 2xl:mx-6 group-hover:font-semibold ${
              active === "dest" ? "text-slate-100 font-semibold" : ""
            }`}
            onClick={() => updateActiveLink("dest")}
          >
            Destinations
          </a>
        </li>
        <li className="group">
          <a
            href="#contact"
            className={`px-2 lg:mx-4 xl:mx-5 2xl:mx-6 group-hover:font-semibold ${
              active === "contact" ? "text-slate-100 font-semibold" : ""
            }`}
            onClick={() => updateActiveLink("contact")}
          >
            Contact us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavVer;
