import React, { useState, useEffect } from "react";
import { IoCaretUpOutline } from "react-icons/io5";

type linkProps = {
  title?: string;
  reference: string;
};

const NavHor = ({ title, reference }: linkProps) => {
  return (
    <li className="group">
      <a
        href={`#${reference}`}
        className={`px-2 text-[.95rem] hover:text-opacity-60 text-gray-100`}
      >
        {title}
      </a>
    </li>
  );
};

export default NavHor;
