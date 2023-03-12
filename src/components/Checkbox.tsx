import React from "react";
import { UseFormRegister } from "react-hook-form";
import FormValues from "@/constant/Type";

interface InputProps {
  label: string;
  name: keyof FormValues;
  type: string;
  register: UseFormRegister<FormValues>;
  info: string;
}

const Checkbox = ({ label, name, type, register, info }: InputProps) => {
  return (
    <label htmlFor={label} className="text-slate-700 px-1 mt-2 mb-6">
      <input type={type} {...register(name)} className="mr-2" />
      <span className="text-slate-600 text-sm">{info}</span>
    </label>
  );
};

export default Checkbox;
