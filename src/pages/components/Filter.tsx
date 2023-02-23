import React from "react";

const Filter = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <button
        type="button"
        className="px-4 py-2 bg-emerald-800 text-slate-100 rounded-full shadow mx-2 my-1 lg:mx-4 2xl:mx-6 lg:px-8"
      >
        All
      </button>
      <button
        type="button"
        className="px-4 py-2 border border-slate-500 rounded-full shadow mx-2 my-1 lg:mx-4 2xl:mx-6 lg:px-8"
      >
        Trending
      </button>
      <button
        type="button"
        className="px-4 py-2 border border-slate-500 rounded-full shadow mx-2 my-1 lg:mx-4 2xl:mx-6 lg:px-8"
      >
        Popular
      </button>
      <button
        type="button"
        className="px-4 py-2 border border-slate-500 rounded-full shadow mx-2 my-1 lg:mx-4 2xl:mx-6 lg:px-8"
      >
        Features
      </button>
      <button
        type="button"
        className="px-4 py-2 border border-slate-500 rounded-full shadow mx-2 my-1 lg:mx-4 2xl:mx-6 lg:px-8"
      >
        Recommend
      </button>
      <button
        type="button"
        className="px-4 py-2 border border-slate-500 rounded-full shadow mx-2 my-1 lg:mx-4 2xl:mx-6 lg:px-8"
      >
        Packages
      </button>
    </div>
  );
};

export default Filter;
