import { type } from "os";
import React from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

type ProfPic = {
  image: string;
  name: string;
  job: string;
  rate: number;
  comment: string;
};

const ReviewCard = ({ image, name, job, rate, comment }: ProfPic) => {
  return (
    <div className="flex flex-col gap-2">
      {/* profile & rating */}
      <div className="flex gap-6">
        {/* profile */}
        <div className="flex gap-2">
          <div className="rounded-full overflow-hidden">
            <Image src={image} alt="" width={50} height={50} />
          </div>
          <div>
            <h4 className="text-lg lmd:text-sm lg:text-lg font-semibold">
              {name}
            </h4>
            <p className="text-sm font-light">{job}</p>
          </div>
        </div>
        {/* rating */}
        <div className="flex items-center gap-1">
          <AiFillStar size={20} color="#134e4a" />
          <p className="text-slate-500 font-semibold">{rate}</p>
        </div>
      </div>
      <hr />
      {/* comment */}
      <div>
        <p className=" text-sm text-slate-500">{comment}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
