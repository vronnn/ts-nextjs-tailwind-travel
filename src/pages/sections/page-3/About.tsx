import React from "react";
import Image from "next/image";
import LeftCard from "@/pages/components/LeftCard";
import RightCard from "@/pages/components/RightCard";

const About = () => {
  return (
    <div className="min-h-screen pt-10 mt-8 pb-16 px-8 lg:container flex flex-col gap-y-20">
      <RightCard
        image="/4.jpg"
        title="Complete Package Tour"
        desc="The most satisfying service tour you&lsquo;ll ever try"
      />
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
