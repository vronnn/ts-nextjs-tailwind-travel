import React from "react";
import Image from "next/image";
import { MdLocationOn } from "react-icons/md";

const Desc = () => {
  return (
    <div className="min-h-[9rem] w-full absolute bottom-0 flex justify-center items-center pr-10 box-border text-slate-100 backdrop-blur">
      <div className="flex items-center w-full">
        {/* place */}
        <div className="basis-1/3 flex items-center justify-center px-4 gap-x-3 xl:basis-1/4">
          <MdLocationOn size={30} />
          <h2 className="xs:text-xl sm:text-2xl lg:text-[1.7rem] font-bold">
            Sri Lanka
          </h2>
        </div>
        {/* advertisment */}
        <div className="basis-2/3 flex xl:basis-3/4">
          <div className="flex items-center justify-center text-sm px-2 sm:hidden">
            <h3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum,
              commodi!
            </h3>
          </div>
          <div className="hidden sm:flex sm:w-full sm:items-center">
            <div className=" basis-1/3 flex flex-col justify-center px-2 lg:px-6 xl:px-9">
              <h2 className="text-xl lg:text-[1.375rem] font-bold">01</h2>
              <p className="hidden xs:block text-xs lg:text-[0.8125rem] lg:leading-[1.15rem]">
                Lorem ipsum dolor sit{" "}
                <span className="hidden lg:inline">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <span className="hidden 2xl:inline">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </span>
                </span>
              </p>
            </div>
            <div className=" basis-1/3 flex flex-col justify-center px-2 lg:px-6 xl:px-9">
              <h2 className="text-xl lg:text-[1.375rem] font-bold">02</h2>
              <p className="hidden xs:block text-xs lg:text-[0.8125rem] lg:leading-[1.15rem]">
                Lorem ipsum dolor sit{" "}
                <span className="hidden lg:inline">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <span className="hidden 2xl:inline">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </span>
                </span>
              </p>
            </div>
            <div className=" basis-1/3 flex flex-col justify-center px-2 lg:px-6 xl:px-9">
              <h2 className="text-xl lg:text-[1.375rem] font-bold">03</h2>
              <p className="hidden xs:block text-xs lg:text-[0.8125rem] lg:leading-[1.15rem]">
                Lorem ipsum dolor sit{" "}
                <span className="hidden lg:inline">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <span className="hidden 2xl:inline">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desc;
