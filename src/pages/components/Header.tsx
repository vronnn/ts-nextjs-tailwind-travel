import React, { UIEvent } from "react";
import Nav from "./Nav";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const handleUIEvent = (e: UIEvent<HTMLDivElement>) => {};
  return (
    <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
      <div
        id="navbar"
        onScroll={handleUIEvent}
        className="w-screen xl:container relative"
      >
        <div className="flex items-center justify-between relative min-h-[5.2rem]">
          {/* Logo */}
          <div className="flex items-center px-5 lg:px-10 lg:mr-6 xl:px-0 order-1">
            <Link href="/">
              <Image
                src={"/white-logo.png"}
                width={65}
                height={20}
                alt=""
              ></Image>
            </Link>
            <Link
              href=""
              className="hidden lg:inline text-slate-100 text-lg sm:text-xl lg:text-2xl font-bold tracking-wide"
            >
              Travel
            </Link>
          </div>
          {/* navigation */}
          <Nav />
          {/* login & register */}
          <div className="order-2 lg:order-3 lg:px-10 xl:px-0">
            <Link
              href="/Login"
              className="uppercase hidden xs:inline xs:text-sm sm:text-base text-slate-100 tracking-widest border-r px-2 hover:font-bold"
            >
              log in
            </Link>
            <Link
              href="/Register"
              className="uppercase hidden xs:inline xs:text-sm sm:text-base text-slate-100 tracking-widest px-2 hover:font-bold"
            >
              register
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
