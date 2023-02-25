import React from "react";
import Image from "next/image";
import ReviewCard from "@/pages/components/ReviewCard";
import { AiFillStar } from "react-icons/ai";

const Review = () => {
  return (
    <div className="flex flex-wrap lg:container">
      {/* review card */}
      <ReviewCard image="/avatar.jpg" />
      <ReviewCard image="/avatar.jpg" />

      <div className="w-full sm:flex flex-col gap-2 s:w-1/2 py-2 px-4 lmd:w-1/3 lg:w-1/4 mb-4 hidden">
        {/* profile & rating */}
        <div className="flex gap-6">
          {/* profile */}
          <div className="flex gap-2">
            <div className="rounded-full overflow-hidden">
              <Image src="/avatar.jpg" alt="" width={50} height={50} />
            </div>
            <div>
              <h4 className="text-lg font-semibold lmd:text-sm lg:text-lg">
                Renka Nawasena
              </h4>
              <p className="text-sm font-light">Food Blogger</p>
            </div>
          </div>
          {/* rating */}
          <div className="flex items-center gap-1">
            <AiFillStar size={20} color="#fbbf24" />
            <p className="text-slate-500">3.4</p>
          </div>
        </div>
        <hr />
        {/* comment */}
        <div>
          <p className=" text-sm text-slate-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
            earum deserunt magni impedit saepe voluptates esse temporibus, qui
            ut sunt.
          </p>
        </div>
      </div>
      <div className="w-full sm:flex flex-col gap-2 s:w-1/2 py-2 px-4 lmd:w-1/3 lg:w-1/4 mb-4 hidden">
        {/* profile & rating */}
        <div className="flex gap-6">
          {/* profile */}
          <div className="flex gap-2">
            <div className="rounded-full overflow-hidden">
              <Image src="/avatar.jpg" alt="" width={50} height={50} />
            </div>
            <div>
              <h4 className="text-lg font-semibold lmd:text-sm lg:text-lg">
                Renka Nawasena
              </h4>
              <p className="text-sm font-light">Food Blogger</p>
            </div>
          </div>
          {/* rating */}
          <div className="flex items-center gap-1">
            <AiFillStar size={20} color="#fbbf24" />
            <p className="text-slate-500">3.4</p>
          </div>
        </div>
        <hr />
        {/* comment */}
        <div>
          <p className=" text-sm text-slate-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
            earum deserunt magni impedit saepe voluptates esse temporibus, qui
            ut sunt.
          </p>
        </div>
      </div>
      <div className="w-full md:flex flex-col gap-2 s:w-1/2 py-2 px-4 lmd:w-1/3 lg:w-1/4 mb-4 hidden">
        {/* profile & rating */}
        <div className="flex gap-6">
          {/* profile */}
          <div className="flex gap-2">
            <div className="rounded-full overflow-hidden">
              <Image src="/avatar.jpg" alt="" width={50} height={50} />
            </div>
            <div>
              <h4 className="text-lg font-semibold lmd:text-sm lg:text-lg">
                Renka Nawasena
              </h4>
              <p className="text-sm font-light">Food Blogger</p>
            </div>
          </div>
          {/* rating */}
          <div className="flex items-center gap-1">
            <AiFillStar size={20} color="#fbbf24" />
            <p className="text-slate-500">3.4</p>
          </div>
        </div>
        <hr />
        {/* comment */}
        <div>
          <p className=" text-sm text-slate-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
            earum deserunt magni impedit saepe voluptates esse temporibus, qui
            ut sunt.
          </p>
        </div>
      </div>
      <div className="w-full md:flex flex-col gap-2 s:w-1/2 py-2 px-4 lmd:w-1/3 lg:w-1/4 mb-4 hidden">
        {/* profile & rating */}
        <div className="flex gap-6">
          {/* profile */}
          <div className="flex gap-2">
            <div className="rounded-full overflow-hidden">
              <Image src="/avatar.jpg" alt="" width={50} height={50} />
            </div>
            <div>
              <h4 className="text-lg font-semibold lmd:text-sm lg:text-lg">
                Renka Nawasena
              </h4>
              <p className="text-sm font-light">Food Blogger</p>
            </div>
          </div>
          {/* rating */}
          <div className="flex items-center gap-1">
            <AiFillStar size={20} color="#fbbf24" />
            <p className="text-slate-500">3.4</p>
          </div>
        </div>
        <hr />
        {/* comment */}
        <div>
          <p className=" text-sm text-slate-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
            earum deserunt magni impedit saepe voluptates esse temporibus, qui
            ut sunt.
          </p>
        </div>
      </div>
      <div className="w-full lg:flex flex-col gap-2 s:w-1/2 py-2 px-4 lmd:w-1/3 lg:w-1/4 mb-4 hidden">
        {/* profile & rating */}
        <div className="flex gap-6">
          {/* profile */}
          <div className="flex gap-2">
            <div className="rounded-full overflow-hidden">
              <Image src="/avatar.jpg" alt="" width={50} height={50} />
            </div>
            <div>
              <h4 className="text-lg font-semibold lmd:text-sm lg:text-lg">
                Renka Nawasena
              </h4>
              <p className="text-sm font-light">Food Blogger</p>
            </div>
          </div>
          {/* rating */}
          <div className="flex items-center gap-1">
            <AiFillStar size={20} color="#fbbf24" />
            <p className="text-slate-500">3.4</p>
          </div>
        </div>
        <hr />
        {/* comment */}
        <div>
          <p className=" text-sm text-slate-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
            earum deserunt magni impedit saepe voluptates esse temporibus, qui
            ut sunt.
          </p>
        </div>
      </div>
      <div className="w-full lg:flex flex-col gap-2 s:w-1/2 py-2 px-4 lmd:w-1/3 lg:w-1/4 mb-4 hidden">
        {/* profile & rating */}
        <div className="flex gap-6">
          {/* profile */}
          <div className="flex gap-2">
            <div className="rounded-full overflow-hidden">
              <Image src="/avatar.jpg" alt="" width={50} height={50} />
            </div>
            <div>
              <h4 className="text-lg font-semibold lmd:text-sm lg:text-lg">
                Renka Nawasena
              </h4>
              <p className="text-sm font-light">Food Blogger</p>
            </div>
          </div>
          {/* rating */}
          <div className="flex items-center gap-1">
            <AiFillStar size={20} color="#fbbf24" />
            <p className="text-slate-500">3.4</p>
          </div>
        </div>
        <hr />
        {/* comment */}
        <div>
          <p className=" text-sm text-slate-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
            earum deserunt magni impedit saepe voluptates esse temporibus, qui
            ut sunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
