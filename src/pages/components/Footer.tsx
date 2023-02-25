import React from "react";

const Footer = () => {
  return (
    <div className=" min-h-[11rem] px-5 md:px-10 bg-slate-600 text-slate-200 flex flex-col justify-center gap-2 md:gap-3">
      <div className="flex justify-between">
        {/* left */}
        <div className="w-1/3">
          <h2 className="text-base lg:text-lg font-bold">Travel</h2>
          <p className="text-xs xl:text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            <span className="hidden xl:inline">
              Atque molestiae quam aperiam rem illum quos. Doloribus iure quia
              accusamus minima atque consequatur
            </span>
          </p>
        </div>
        {/* right */}
        <div className=" w-3/5 md:w-2/5 flex justify-between">
          <div className="w-30 flex flex-col">
            <h2 className="text-base font-bold lg:text-lg">About</h2>
            <a className="text-xs xl:text-sm" href="">
              How to Book
            </a>
            <a className="text-xs xl:text-sm" href="">
              Contact Us
            </a>
            <a className="text-xs xl:text-sm" href="">
              Help Center
            </a>
          </div>
          <div className="w-30 flex flex-col">
            <h2 className="text-base font-bold lg:text-lg">Products</h2>
            <a className="text-xs xl:text-sm" href="">
              Destination
            </a>
            <a className="text-xs xl:text-sm" href="">
              Flight
            </a>
            <a className="text-xs xl:text-sm" href="">
              Lodging
            </a>
          </div>
          <div className="w-30 flex flex-col">
            <h2 className="text-base font-bold lg:text-lg">Social</h2>
            <a className="text-xs xl:text-sm" href="">
              Facebook
            </a>
            <a className="text-xs xl:text-sm" href="">
              Twitter
            </a>
            <a className="text-xs xl:text-sm" href="">
              Instagram
            </a>
          </div>
        </div>
      </div>
      {/* below */}
      <div>
        <hr />
      </div>
      <div className="flex justify-between">
        <div>
          <p className="text-sm">Privacy Policy</p>
        </div>
        <div>
          <p className="text-sm">Copyright @ 2023 Travel</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
