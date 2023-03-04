import React, { useState } from "react";
import Link from "next/link";
import Navigation from "./Navigation";

const NavVer = () => {
  return (
    <nav id="nav-menu" className="hidden lg:block">
      <ul className="flex text-slate-300">
        <Navigation title="Home" reference="home" />
        <Navigation title="Destinations" reference="destinations" />
        <Navigation title="About" reference="about" />
        <Navigation title="Review" reference="review" />
        <Navigation title="Contact" reference="review" />
      </ul>
    </nav>
  );
};

export default NavVer;
