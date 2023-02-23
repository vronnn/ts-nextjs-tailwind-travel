import React, { useState } from "react";

const Scroller = () => {
  const [active, setActive] = useState("satu");
  const updateActiveButton = (value: string) => {
    setActive(value);
  };
  return (
    <div className="flex justify-between items-center py-4 md:py-16 lg:py-6 lg:container h-1/6">
      <button className="px-4 py-2 rounded-full border shadow-md hover:shadow-sm hover:bg-slate-300">
        Back<span className="hidden xs:inline"> Page</span>
      </button>
      <div className="">
        <button
          className={`px-4 py-2 border shadow-md hover:shadow-sm hover:bg-slate-300 rounded-full mx-2 ${
            active === "satu" ? "border-none bg-emerald-900 text-slate-100" : ""
          }`}
          onClick={() => setActive("satu")}
        >
          1
        </button>
        <button
          className={`px-4 py-2 border shadow-md hover:shadow-sm hover:bg-slate-300 rounded-full mx-2 hidden s:inline-flex ${
            active === "dua" ? "border-none bg-emerald-900 text-slate-100" : ""
          }`}
          onClick={() => setActive("dua")}
        >
          2
        </button>
        <button
          className={`px-4 py-2 border shadow-md hover:shadow-sm hover:bg-slate-300 rounded-full mx-2 hidden s:inline-flex ${
            active === "tiga" ? "border-none bg-emerald-900 text-slate-100" : ""
          }`}
          onClick={() => setActive("tiga")}
        >
          3
        </button>
        <button
          className={`px-4 py-2 border shadow-md hover:shadow-sm hover:bg-slate-300 rounded-full mx-2 hidden sm:inline-flex ${
            active === "empat"
              ? "border-none bg-emerald-900 text-slate-100"
              : ""
          }`}
          onClick={() => setActive("empat")}
        >
          4
        </button>
        <button
          className={`px-4 py-2 border shadow-md hover:shadow-sm hover:bg-slate-300 rounded-full mx-2 hidden sm:inline-flex ${
            active === "lima" ? "border-none bg-emerald-900 text-slate-100" : ""
          }`}
          onClick={() => setActive("lima")}
        >
          5
        </button>
      </div>
      <button className="px-4 py-2 rounded-full border shadow-md hover:shadow-sm hover:bg-slate-300">
        Next<span className="hidden xs:inline"> Page</span>
      </button>
    </div>
  );
};

export default Scroller;
