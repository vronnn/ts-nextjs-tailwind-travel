import React from "react";
import Image from "next/image";
import ReviewCard from "@/pages/components/ReviewCard";
import { AiFillStar } from "react-icons/ai";

const Review = () => {
  return (
    <div className="flex flex-wrap lg:container px-4 ">
      {/* review card */}
      <div className="w-full flex s:w-1/2 py-2 px-4 lmd:w-1/3 lg:w-1/4 mb-4">
        <ReviewCard
          image="/avatar.jpg"
          name="Renka Nawasena"
          job="Food blogger"
          rate={5}
          comment="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero earum
          deserunt magni impedit saepe voluptates esse temporibus, qui ut sunt."
        />
      </div>
      <div className="w-full flex s:w-1/2 py-2 px-4 lmd:w-1/3 lg:w-1/4 mb-4">
        <ReviewCard
          image="/avatar.jpg"
          name="Renka Nawasena"
          job="Food blogger"
          rate={5}
          comment="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero earum
          deserunt magni impedit saepe voluptates esse temporibus, qui ut sunt."
        />
      </div>
      <div className="w-full sm:flex s:w-1/2 py-2 px-4 lmd:w-1/3 lg:w-1/4 mb-4 hidden">
        <ReviewCard
          image="/avatar.jpg"
          name="Renka Nawasena"
          job="Food blogger"
          rate={5}
          comment="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero earum
          deserunt magni impedit saepe voluptates esse temporibus, qui ut sunt."
        />
      </div>
      <div className="w-full sm:flex s:w-1/2 py-2 px-4 lmd:w-1/3 lg:w-1/4 mb-4 hidden">
        <ReviewCard
          image="/avatar.jpg"
          name="Renka Nawasena"
          job="Food blogger"
          rate={5}
          comment="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero earum
          deserunt magni impedit saepe voluptates esse temporibus, qui ut sunt."
        />
      </div>
      <div className="w-full md:flex s:w-1/2 py-2 px-4 lmd:w-1/3 lg:w-1/4 mb-4 hidden">
        <ReviewCard
          image="/avatar.jpg"
          name="Renka Nawasena"
          job="Food blogger"
          rate={5}
          comment="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero earum
          deserunt magni impedit saepe voluptates esse temporibus, qui ut sunt."
        />
      </div>
      <div className="w-full md:flex s:w-1/2 py-2 px-4 lmd:w-1/3 lg:w-1/4 mb-4 hidden">
        <ReviewCard
          image="/avatar.jpg"
          name="Renka Nawasena"
          job="Food blogger"
          rate={5}
          comment="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero earum
          deserunt magni impedit saepe voluptates esse temporibus, qui ut sunt."
        />
      </div>
      <div className="w-full lg:flex s:w-1/2 py-2 px-4 lmd:w-1/3 lg:w-1/4 mb-4 hidden">
        <ReviewCard
          image="/avatar.jpg"
          name="Renka Nawasena"
          job="Food blogger"
          rate={5}
          comment="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero earum
          deserunt magni impedit saepe voluptates esse temporibus, qui ut sunt."
        />
      </div>
      <div className="w-full lg:flex s:w-1/2 py-2 px-4 lmd:w-1/3 lg:w-1/4 mb-4 hidden">
        <ReviewCard
          image="/avatar.jpg"
          name="Renka Nawasena"
          job="Food blogger"
          rate={5}
          comment="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero earum
          deserunt magni impedit saepe voluptates esse temporibus, qui ut sunt."
        />
      </div>
    </div>
  );
};

export default Review;
