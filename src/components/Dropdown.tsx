import React from "react";
import { UseFormRegister } from "react-hook-form";
import FormValues from "@/constant/Type";

interface DropdownProps {
  label: string;
  name: keyof FormValues;
  register: UseFormRegister<FormValues>;
  opt1: string;
  opt2: string;
  opt3: string;
}

const Dropdown = ({
  label,
  name,
  register,
  opt1,
  opt2,
  opt3,
}: DropdownProps) => {
  return (
    <label htmlFor={label}>
      <select {...register(name)} className="w-1/2 px-4 py-2 rounded-lg shadow">
        <option value={opt1}>{opt1}</option>
        <option value={opt2}>{opt2}</option>
        <option value={opt3}>{opt3}</option>
      </select>
    </label>
  );
};

export default Dropdown;
