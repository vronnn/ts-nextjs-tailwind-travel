import React from "react";
import Link from "next/link";

interface PickProps {
  question: string;
  pick: string;
  link: string;
}

const PickAuth = ({ question, pick, link }: PickProps) => {
  return (
    <p className="text-sm text-center text-slate-500">
      {question}{" "}
      <Link href={link} className="text-emerald-900 text-opacity-75 font-bold">
        {pick}
      </Link>
    </p>
  );
};

export default PickAuth;
