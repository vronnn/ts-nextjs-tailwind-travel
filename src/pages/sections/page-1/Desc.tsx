import React from "react";

const Desc = () => {
  return (
    <div className="h-1/6 flex text-slate-100 backdrop-blur-sm">
      {/* place */}
      <div className=" basis-1/3 flex items-center justify-center px-4 xl:basis-1/4">
        <img src="/location.png" alt="" className="w-6 mr-2 lg:w-8 lg:mr-3" />
        <h1 className="xs:text-xl sm:text-2xl lg:text-3xl font-bold">
          Sri Lanka
        </h1>
      </div>
      {/* advertisment */}
      <div className=" basis-2/3 flex xl:basis-3/4">
        <div className="flex items-center justify-center text-sm px-2 sm:hidden">
          <h3>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum,
            commodi!
          </h3>
        </div>
        <div className="hidden sm:flex sm:w-full sm:items-center">
          <div className=" basis-1/3 flex flex-col justify-center px-2 lg:px-6 xl:px-9">
            <h2 className="text-xl lg:text-2xl font-bold">01</h2>
            <p className="hidden xs:block text-xs lg:text-sm">
              Lorem ipsum dolor sit{" "}
              <span className="hidden lg:inline">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                <span className="hidden 2xl:inline">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  nevite.
                </span>
              </span>
            </p>
          </div>
          <div className=" basis-1/3 flex flex-col justify-center px-2 lg:px-6 xl:px-9">
            <h2 className="text-xl lg:text-2xl font-bold">02</h2>
            <p className="hidden xs:block text-xs lg:text-sm">
              Lorem ipsum dolor sit{" "}
              <span className="hidden lg:inline">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                <span className="hidden 2xl:inline">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  nevite.
                </span>
              </span>
            </p>
          </div>
          <div className=" basis-1/3 flex flex-col justify-center px-2 lg:px-6 xl:px-9">
            <h2 className="text-xl lg:text-2xl font-bold">03</h2>
            <p className="hidden xs:block text-xs lg:text-sm">
              Lorem ipsum dolor sit{" "}
              <span className="hidden lg:inline">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                <span className="hidden 2xl:inline">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  nevite.
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desc;
