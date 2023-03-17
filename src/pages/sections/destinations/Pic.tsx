import Picard from "@/components/Picard";
import React, { useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { picardData } from "@/constant/Data";

const Pic = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: -250,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: 250,
        behavior: "smooth",
      });
    }
  };
  return (
    <section
      id="destinations"
      data-testid="destinations"
      className="flex flex-col py-8"
    >
      <div className="min-h-[7.5rem]"></div>
      <div className="relative">
        <div
          className="px-8 grid grid-flow-col auto-cols-[100%] md:auto-cols-[50%] lg:auto-cols-[30%] overflow-x-auto overscroll-y-contain snap-x snap-mandatory scroll-pl-2 scrollbar-hide"
          ref={scrollContainer}
        >
          {picardData.map((card) => (
            <Picard
              key={card.id}
              src={card.src}
              title={card.title}
              desc={card.desc}
            />
          ))}
        </div>
        <button
          className="p-3 backdrop-blur btn-color rounded-full absolute top-1/2 -translate-y-1/2 left-6"
          onClick={scrollLeft}
        >
          <BsChevronLeft size={20} />
        </button>
        <button
          className="p-3 backdrop-blur btn-color rounded-full absolute top-1/2 -translate-y-1/2 right-6"
          onClick={scrollRight}
        >
          <BsChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Pic;
