import { link } from "fs";
import { type } from "os";
import React, { useState } from "react";

type numLink = {
  link: number;
};

const Scroller = () => {
  const [active, setActive] = useState(1);
  const updateActiveButton = ({ link }: numLink) => {
    setActive(link);
  };
  const updateNextPage = () => {
    if (active < 5) {
      setActive(active + 1);
    }
  };
  const updateBackPage = () => {
    if (active > 1) {
      setActive(active - 1);
    }
  };
  return (
    <div className="flex justify-between items-center px-6 sm:px-0 xl:px-3 py-6 md:py-16 lg:py-6 lg:container h-1/6">
      <button
        className="px-4 py-2 rounded-full border shadow-md hover:shadow-sm hover:bg-slate-300"
        onClick={() => updateBackPage()}
      >
        Back<span className="hidden xs:inline"> Page</span>
      </button>
      <div className="">
        <button
          className={`px-4 py-2 border shadow-md hover:shadow-sm hover:bg-slate-300 rounded-full mx-2 hidden s:inline ${
            active === 1 ? "border-none bg-emerald-900 text-slate-100" : ""
          }`}
          onClick={() => setActive(1)}
        >
          1
        </button>
        <button
          className={`px-4 py-2 border shadow-md hover:shadow-sm hover:bg-slate-300 rounded-full mx-2 hidden s:inline-flex ${
            active === 2 ? "border-none bg-emerald-900 text-slate-100" : ""
          }`}
          onClick={() => setActive(2)}
        >
          2
        </button>
        <button
          className={`px-4 py-2 border shadow-md hover:shadow-sm hover:bg-slate-300 rounded-full mx-2 hidden s:inline-flex ${
            active === 3 ? "border-none bg-emerald-900 text-slate-100" : ""
          }`}
          onClick={() => setActive(3)}
        >
          3
        </button>
        <button
          className={`px-4 py-2 border shadow-md hover:shadow-sm hover:bg-slate-300 rounded-full mx-2 hidden sm:inline-flex ${
            active === 4 ? "border-none bg-emerald-900 text-slate-100" : ""
          }`}
          onClick={() => setActive(4)}
        >
          4
        </button>
        <button
          className={`px-4 py-2 border shadow-md hover:shadow-sm hover:bg-slate-300 rounded-full mx-2 hidden sm:inline-flex ${
            active === 5 ? "border-none bg-emerald-900 text-slate-100" : ""
          }`}
          onClick={() => setActive(5)}
        >
          5
        </button>
      </div>
      <button
        className="px-4 py-2 rounded-full border shadow-md hover:shadow-sm hover:bg-slate-300"
        onClick={() => updateNextPage()}
      >
        Next<span className="hidden xs:inline"> Page</span>
      </button>
    </div>
  );
};

export default Scroller;
