import React, { UIEvent } from "react";
import Nav from "./Nav";
import Image from "next/image";
import Link from "next/link";

const Darkheader = () => {
  const handleUIEvent = (e: UIEvent<HTMLDivElement>) => {};
  return (
    <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
      <div
        id="navbar"
        onScroll={handleUIEvent}
        className="w-screen 2xl:container relative"
      >
        <div className="flex items-center justify-between relative min-h-[5.2rem]">
          {/* Logo */}
          <div className="flex items-center px-5 lg:px-10 lg:mr-6 order-1">
            <Link href="http://localhost:3000/">
              <Image
                src={"/dark-logo.png"}
                width={65}
                height={20}
                alt=""
              ></Image>
            </Link>
            <Link
              href="http://localhost:3000/"
              className="hidden lg:inline text-slate-700 text-lg sm:text-xl lg:text-2xl font-bold tracking-wide"
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
