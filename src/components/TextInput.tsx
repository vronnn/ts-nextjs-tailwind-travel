import FormValues from "@/constant/Type";
import React from "react";
import { UseFormRegister } from "react-hook-form";

interface InputProps {
  label: string;
  name: keyof FormValues;
  type: string;
  register: UseFormRegister<FormValues>;
  error: string | undefined;
}

const TextInput = ({ label, name, type, register, error }: InputProps) => {
  return (
    <>
      <input
        type={type}
        {...register(name)}
        placeholder={label}
        className="rounded-lg shadow-lg py-2 px-4 mt-2 mb-1 focus:outline-none focus:ring-1 focus:ring-emerald-900"
      />
      <p className="pl-4 text-sm text-red-600">{error}</p>
    </>
  );
};

export default TextInput;
