import React from "react";

const Title = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[6rem] pt-14 sm:pt-16 pb-6 ">
      <h1 className="text-center text-3xl max-w-[200px] s:max-w-none font-bold s:text-4xl lg:text-5xl mb-1 md:mb-2">
        Discover your dream places
      </h1>
      <p className="text-sm s:text-base text-center lg:text-lg">
        Lorem ipsum dolor sit amet consectetur{" "}
        <span className="hidden s:inline">adipisicing elit.</span>
      </p>
    </div>
  );
};

export default Title;
