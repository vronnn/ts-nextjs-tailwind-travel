import React, { useState } from "react";
import Link from "next/link";

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
            href="#home"
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
            href="#destinations"
            className={`px-2 lg:mx-4 xl:mx-5 2xl:mx-6 group-hover:font-semibold ${
              active === "destinations" ? "text-slate-100 font-semibold" : ""
            }`}
            onClick={() => updateActiveLink("destinations")}
          >
            Destinations
          </a>
        </li>
        <li className="group">
          <a
            href="#about"
            className={`px-2 lg:mx-4 xl:mx-5 2xl:mx-6 group-hover:font-semibold ${
              active === "about" ? "text-slate-100 font-semibold" : ""
            }`}
            onClick={() => updateActiveLink("about")}
          >
            About
          </a>
        </li>
        <li className="group">
          <a
            href="#review"
            className={`px-2 lg:mx-4 xl:mx-5 2xl:mx-6 group-hover:font-semibold ${
              active === "review" ? "text-slate-100 font-semibold" : ""
            }`}
            onClick={() => updateActiveLink("review")}
          >
            Review
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
