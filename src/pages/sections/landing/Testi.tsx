import React from "react";
import Link from "next/link";
import Revcard from "@/components/Revcard";
import myImage from "@/../public/21.jpg";

const Testi = () => {
  return (
    <section
      id="review"
      data-testid="review"
      className="flex flex-col xl:container"
    >
      <div className="min-h-[8rem]"></div>
      <div className="flex flex-wrap justify-center px-8 gap-y-10 min-h-[80vh] md:min-h-[50vh] gap-x-6">
        <div className="flex flex-col justify-center items-center gap-y-6 lmd:w-[47%] lmd:order-2">
          <div className="flex flex-col items-center gap-y-2">
            <h2 className="text-4xl font-semibold text-center text-emerald-900 md:font-bold lg:text-5xl">
              Help some travelers?
            </h2>
            <p className="text-xl font-semibold text-gray-700 md:text-2xl lg:text-3xl">
              Write a review.
            </p>
          </div>
          <p className="text-center font-light max-w-md lg:text-lg">
            Share your experience to help over 5 million travelers to decide
            their journey in Travel
          </p>
          <div className="flex items-center gap-x-4">
            <Link
              href=""
              className="px-4 py-2 border-2 border-gray-700 bg-gray-700 text-gray-100 font-semibold w-fit lg:px-6 lg:py-3"
            >
              Write a Review
            </Link>
            <Link
              href=""
              className="px-4 py-2 border-2 border-gray-700 text-gray-700 font-semibold w-fit lg:px-6 lg:py-3"
            >
              Read Reviews
            </Link>
          </div>
        </div>

        <div className="flex justify-center w-full lmd:w-[47%] lmd:order-1 h-[30rem] items-center bg-[#fefefe]">
          <div className="relative h-[20rem] w-[27rem] lg:w-[33rem]">
            <div className="w-full p-5 card-shadow max-w-[21rem] lg:max-w-[25rem] bg-white z-30 absolute top-0 right-0">
              <Revcard
                name="David Johns"
                job="Graphic Designer"
                company="Apple Company"
                comment={myImage}
                image="/pp2.jpg"
                headline="It's a breathtaking journey"
              />
            </div>
            <div className="w-full p-5 card-shadow max-w-[21rem] lg:max-w-[25rem] bg-white absolute z-10 -top-[15%] right-1/4">
              <Revcard
                name="Renka Nawasena"
                job="Software Developer"
                company="Google Company"
                comment="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
              placeat quibusdam odio nesciunt! Debitis, ducimus blanditiis! Nulla
              veniam quae adipisci."
                image="/pp1.jpg"
                headline="Wish i discover sooner"
              />
            </div>

            <div className="w-full p-5 card-shadow max-w-[21rem] lg:max-w-[25rem] bg-white absolute z-20 top-[45%] left-[5%]">
              <Revcard
                name="Alexander William"
                job="Mechanical Engineer"
                company="Chevron Company"
                comment="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
                placeat quibusdam odio nesciunt! Debitis, ducimus blanditiis! Nulla
                veniam quae adipisci."
                image="/pp2.jpg"
                headline="Worth to try!"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[3rem]"></div>
    </section>
  );
};

export default Testi;
