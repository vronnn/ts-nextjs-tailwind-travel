import React, { UIEvent } from "react";
import Nav from "./Nav";
import Image from "next/image";
import Link from "next/link";
import { FaPlaneDeparture } from "react-icons/fa";

const Darkheader = () => {
  return (
    <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
      <div id="navbar" className="w-screen 2xl:container relative">
        <div className="flex items-center justify-between relative min-h-[5.2rem]">
          {/* Logo */}
          <div className="flex items-center gap-x-4 px-6 lg:px-12 lg:mr-12 order-1">
            <Link href="/">
              <FaPlaneDeparture size={25} color={`#374151`} />
            </Link>
            <Link
              href="/"
              className={`hidden lg:inline text-gray-700 text-lg sm:text-xl lg:text-[1.375rem] font-bold tracking-wide`}
            >
              Travel
            </Link>
          </div>

          {/* login & register */}
          <div className="order-2 lg:order-3 lg:px-10 px-5">
            <Link
              href="/Login"
              className="uppercase hidden xs:inline text-slate-700 tracking-widest border-r px-2 hover:font-bold"
            >
              log in
            </Link>
            <Link
              href="/Register"
              className="uppercase hidden xs:inline text-slate-700 tracking-widest px-2 hover:font-bold"
            >
              register
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Darkheader;
