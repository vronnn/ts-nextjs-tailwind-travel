import React from "react";
import { RiCloseLine } from "react-icons/ri";

const SideButton = () => {
  return (
    <button className="flex justify-between space-x-2 items-center mb-4">
      <RiCloseLine size={30} />
      <h4 className="font-bold text-xl">Travel</h4>
    </button>
  );
};

export default SideButton;
