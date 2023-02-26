import React from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoLogoApple } from "react-icons/io";

const Promo = () => {
  return (
    <div className="border bg-[url('/901.jpg')] bg-cover bg-center md:bg-top bg-no-repeat px-4 brightness text-slate-700">
      <div className="flex flex-col gap-2">
        <div className=" flex flex-col justify-center items-center gap-1 pt-6">
          <h2 className="text-2xl font-bold">Set your price alert now</h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            deleniti qui, in omnis eum ipsum suscipit
          </p>
        </div>
        <div className="flex justify-center gap-6 py-6">
          <button className="flex items-center border border-slate-700 gap-1 px-4 py-2 bg-slate-100 rounded-full text-slate-700 hover:bg-slate-700 hover:text-slate-100">
            <IoLogoApple size={22} />
            <p>App Store</p>
          </button>
          <button className="flex items-center border border-slate-700 gap-1 px-4 py-2 bg-slate-100 rounded-full text-slate-700 hover:bg-slate-700 hover:text-slate-100">
            <IoLogoGooglePlaystore />
            <p>Google Play</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Promo;
