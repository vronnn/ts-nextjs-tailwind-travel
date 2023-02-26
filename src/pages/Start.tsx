import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { HiMapPin } from "react-icons/hi2";
import { MdPerson } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import Darkheader from "./components/Darkheader";
import { type } from "os";

type FormValues = {
  location: string;
  transport: string;
  classes: string;
  date: string;
  persons: number;
  price: number;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      persons: 1,
    },
  });

  type fieldType = {
    onshow: boolean;
  };

  const [show, setShow] = useState(false);
  const showSide = (value: boolean) => {
    setShow(value);
  };

  return (
    <>
      <main className="min-h-screen p-20 flex justify-center items-center">
        <Darkheader />
        <section className="flex shadow-lg p-20 lg:p-0">
          {/* form */}
          <div className="flex items-center mx-auto mb-4 lg:p-20">
            <form
              onSubmit={handleSubmit((data) => {
                console.log(data);
                setShow(true);
                reset();
              })}
              className="flex flex-col gap-y-1 min-w-[500px]"
            >
              <h1 className="text-4xl font-bold">Where to go</h1>
              <p className="text-slate-600 my-2">
                Tell us where would you wanna go in this form below
              </p>
              <div className="flex items-center gap-x-4 border rounded-lg shadow">
                <div className="flex items-center gap-2 px-6">
                  <HiMapPin />
                  <p>Location</p>
                </div>

                <input
                  type="search"
                  {...register("location", {
                    required: {
                      value: true,
                      message: "Pick a destination",
                    },
                  })}
                  className="px-4 py-2 grow bg-slate-50 rounded-lg border-l focus:outline-none focus:ring-2 focus:ring-emerald-900"
                />
              </div>
              <p className="text-sm ml-40 text-red-600">
                {errors.location?.message}
              </p>
              <div>
                <label htmlFor="Transport">
                  <select
                    {...register("transport")}
                    className="w-1/2 px-4 py-2 rounded-lg shadow"
                  >
                    <option value="Plane">Plane</option>
                    <option value="Train">Train</option>
                    <option value="Ship">Ship</option>
                  </select>
                </label>
                <label htmlFor="Classes">
                  <select
                    {...register("classes")}
                    className="w-1/2 px-4 py-2 rounded-lg shadow"
                  >
                    <option value="Economy">Economy</option>
                    <option value="Bussiness">Bussiness</option>
                    <option value="Executive">Executive</option>
                  </select>
                </label>
              </div>
              <input
                type="date"
                {...register("date", {
                  required: {
                    value: true,
                    message: "Pick a date",
                  },
                })}
                className="px-4 py-2 rounded-lg shadow focus:outline-none focus:ring-1 focus:ring-emerald-900"
              />
              <p className="text-sm px-4 text-red-600">
                {errors.date?.message}
              </p>
              <label htmlFor="persons" className="flex items-center gap-x-2">
                <input
                  type="number"
                  {...register("persons")}
                  placeholder="persons"
                  className="px-4 py-2 rounded-lg shadow grow focus:outline-none focus:ring-1 focus:ring-emerald-900"
                />
                <div className="flex items-center gap-x-2 px-4">
                  <MdPerson />
                  <p className=""> person/s</p>
                </div>
              </label>
              <label
                htmlFor="price"
                className="flex flex-col px-4 py-2 rounded-lg shadow gap-y-2"
              >
                <span className="text-center">Price Range</span>
                <div className="flex justify-between gap-x-4 items-center">
                  <p>$100</p>
                  <input
                    id="prices"
                    type="range"
                    min="100"
                    max="1000"
                    {...register("price")}
                    className="grow"
                  />
                  <p>$1000</p>
                </div>
              </label>
              <input
                type="submit"
                value="Search"
                className="px-4 py-2 rounded-lg shadow my-4 bg-emerald-900 text-slate-100 font-semibold cursor-pointer"
              />
            </form>
          </div>
          {/* image */}
          {show ? (
            <div className="pt-20 pb-28 pr-20 text-slate-700">
              <div className="flex flex-col h-full justify-between">
                <div className="">
                  <h1 className="text-2xl font-semibold my-2">
                    Thank you for choosing us to be your travel companion
                  </h1>
                  <p>
                    We will notify you regarding your schedule as soon as
                    possible
                  </p>
                  <p>Hope you enjoy your experience with us</p>
                </div>
                <div>
                  <p className="">With regard,</p>
                  <div className="flex items-center gap-x-2">
                    <h3 className="text-xl font-bold">Travel</h3>
                    {/* <div>
                      <Image
                        src="/dark-logo.png"
                        alt="img"
                        width={50}
                        height={24}
                      />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </section>
      </main>
    </>
  );
}
