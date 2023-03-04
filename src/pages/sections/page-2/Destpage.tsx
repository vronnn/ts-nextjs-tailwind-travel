import React from "react";
import Title from "./Title";
import Search from "./Search";
import Scroller from "./Scroller";
import Gallery from "./Gallery";

const Destpage = () => {
  return (
    <section
      id="destinations"
      className="min-h-screen px-4 text-slate-700 flex flex-col justify-center"
    >
      {/* container */}
      <div className="lg:container flex flex-col gap-y-8 items-center py-4">
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
