import React, { useState } from "react";

type linkProps = {
  title?: string;
  reference: string;
};

const Navigation = ({ title, reference }: linkProps) => {
  return (
    <li className="group">
      <a
        href={`#${reference}`}
        className={`px-2 lg:mx-4 xl:mx-5 2xl:mx-6 group-hover:font-semibold text-slate-100`}
      >
        {title}
      </a>
    </li>
  );
};

export default Navigation;
