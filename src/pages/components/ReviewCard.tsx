import { type } from "os";
import React from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

type ProfPic = {
  image: string;
};

const ReviewCard = ({ image }: ProfPic) => {
  return (
    <div className="w-full flex flex-col gap-2 s:w-1/2 py-2 px-4 lmd:w-1/3 lg:w-1/4 mb-4">
      {/* profile & rating */}
      <div className="flex gap-6">
        {/* profile */}
        <div className="flex gap-2">
          <div className="rounded-full overflow-hidden">
            <Image src={image} alt="" width={50} height={50} />
          </div>
          <div>
            <h4 className="text-lg lmd:text-sm lg:text-lg font-semibold">
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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero earum
          deserunt magni impedit saepe voluptates esse temporibus, qui ut sunt.
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
