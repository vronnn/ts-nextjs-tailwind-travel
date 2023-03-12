import React, { useState, useEffect } from "react";

const NavHor = () => {
  return (
    <nav
      id="nav-menu"
      className={`lg:hidden absolute top-[4.5rem] right-4 py-[0.6rem] px-3 bg-gray-800`}
    >
      <ul className="flex flex-col gap-2 pr-2 text-gray-800">
        <li className="group">
          <a
            href="#home"
            className={`px-2 text-[.95rem] hover:text-opacity-60 text-gray-100`}
          >
            Home
          </a>
        </li>
        <li className="group">
          <a
            href="#about"
            className={`px-2 text-[.95rem] hover:text-opacity-60 text-gray-100`}
          >
            About
          </a>
        </li>
        <li className="group">
          <a
            href="#destinations"
            className={`px-2 text-[.95rem] hover:text-opacity-60 text-gray-100`}
          >
            Destinations
          </a>
        </li>
        <li className="group">
          <a
            href="#review"
            className={`px-2 text-[.95rem] hover:text-opacity-60 text-gray-100`}
          >
            Review
          </a>
        </li>
        <li className="group">
          <a
            href="#contact"
            className={`px-2 text-[.95rem] hover:text-opacity-60 text-gray-100`}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavHor;
