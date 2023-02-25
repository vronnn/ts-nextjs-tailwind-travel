import React from "react";
import { useForm } from "react-hook-form";
import { HiMapPin } from "react-icons/hi2";
import { MdPerson } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import Darkheader from "./components/Darkheader";

type FormValues = {
  place: string;
  transport: string;
  classes: string;
  date: string;
  persons: number;
  price: number;
  email: string;
  password: string;
  remainder: boolean;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      persons: 1,
    },
  });

  return (
    <>
      <main className="min-h-screen p-20 flex justify-center items-center">
        <Darkheader />
        <section className="flex">
          {/* form */}
          <div className="flex items-center mx-auto mb-4 lg:px-16">
            <form
              onSubmit={handleSubmit((data) => {
                console.log(data);
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
                  {...register("place", {
                    required: {
                      value: true,
                      message: "Pick a destination",
                    },
                  })}
                  className="px-4 py-2 grow bg-slate-50 rounded-lg border-l focus:outline-none focus:ring-2 focus:ring-emerald-900"
                />
              </div>
              <p className=" ml-40 text-red-600">{errors.place?.message}</p>
              <div>
                <label htmlFor="Transport"></label>
                <select
                  {...register("transport")}
                  className="w-1/2 px-4 py-2 rounded-lg shadow"
                >
                  <option value="Plane">Plane</option>
                  <option value="Train">Train</option>
                  <option value="Ship">Ship</option>
                </select>
                <label htmlFor="Classes"></label>
                <select
                  {...register("classes")}
                  className="w-1/2 px-4 py-2 rounded-lg shadow"
                >
                  <option value="Economy">Economy</option>
                  <option value="Bussiness">Bussiness</option>
                  <option value="Executive">Executive</option>
                </select>
              </div>
              <input
                type="date"
                {...register("date", {
                  required: {
                    value: true,
                    message: "Pick a date",
                  },
                })}
                className="px-4 py-2 rounded-lg shadow"
              />
              <p className=" px-4 text-red-600">{errors.date?.message}</p>
              <label htmlFor="persons" className="flex items-center gap-x-2">
                <input
                  type="number"
                  {...register("persons")}
                  placeholder="persons"
                  className="px-4 py-2 rounded-lg shadow grow"
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
          <div className="">
            <div>
              <div></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
