import React from "react";
import Image from "next/image";
import LeftCard from "@/pages/components/LeftCard";
import RightCard from "@/pages/components/RightCard";

const About = () => {
  return (
    <div className="min-h-screen pt-10 pb-16 lg:container">
      <div className="lmd:flex lmd:flex-wrap mt-8 space-y-4 lmd:space-y-0">
        <div className="border-slate-500 lmd:w-5/12 lmd:mr-8">
          <Image src="/4.jpg" alt="" width={800} height={20} />
        </div>
        <div className="lmd:w-6/12 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold lg:text-4xl mb-2">
            Complete Package Tour
          </h2>
          <h3 className="text-md lg:text-lg text-emerald-900 mb-2">
            The most satisfying service tour you&lsquo;ll ever try
          </h3>
          <p className="text-sm sm:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos sint
            harum fugiat, odit sunt veritatis aspernatur voluptatibus in soluta
            nesciunt ut veniam omnis, quia
            <span className="hidden lg:inline">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              saepe accusamus fugit laudantium error ipsa veritatis soluta cum
              commodi nihil.
            </span>
          </p>
        </div>
      </div>
      <LeftCard
        image="/3.jpg"
        title="Safe and Convenient Trip"
        desc="Led by our trained and experienced tour guide"
      />
      <RightCard
        image="/5.jpg"
        title="Pacify and Content Journey"
        desc="The most satisfying service tour you&lsquo;ll ever try"
      />
      <LeftCard
        image="/6.jpg"
        title="Nice and Comfy Lodging"
        desc="Stay at one of the best resort in the spot"
      />
    </div>
  );
};

export default About;
