import React from "react";
import Hero from "../sections/page-1/Hero";
import Desc from "../sections/page-1/Desc";

const Content = () => {
  return (
    <div className="w-full h-screen">
      {/* social, hero, scroll */}
      <Hero />
      {/* desc */}
      <Desc />
    </div>
  );
};

export default Content;
