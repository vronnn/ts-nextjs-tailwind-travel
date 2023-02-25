import React from "react";
import Title from "./Title";
import Search from "./Search";
import Scroller from "./Scroller";
import Gallery from "./Gallery";

const Destpage = () => {
  return (
    <section id="destinations" className="min-h-screen px-4 text-slate-700">
      {/* container */}
      <div className="lg:container flex flex-col">
        {/* Title */}
        <Title />
        {/* Search */}
        <Search />
        {/* card */}
        <Gallery />
        {/* scroller */}
        <Scroller />
      </div>
    </section>
  );
};

export default Destpage;
