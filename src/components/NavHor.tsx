import React from "react";
import Navigation from "./Navigation";
import { Navdata } from "@/constant/Data";

const NavVer = () => {
  return (
    <nav id="nav-menu" className="hidden lg:block">
      <ul className="flex text-gray-800">
        {Navdata.map((item) => (
          <div key={item.reference}>
            <Navigation title={item.title} reference={item.reference} />
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default NavVer;
