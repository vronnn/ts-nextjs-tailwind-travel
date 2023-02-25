import React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import Darkheader from "./components/Darkheader";

type FormValues = {
  email: string;
  password: string;
  remainder: boolean;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  return (
    <>
      <main className="min-h-screen p-20 flex justify-center items-center">
        <Darkheader />
        <section className="flex flex-wrap 2lg:border-t-2 2lg:border-b-2">
          {/* form */}
          <div className="flex items-center mx-auto  mb-4 lg:px-16">
            <form
              onSubmit={handleSubmit((data) => {
                console.log(data);
              })}
              className="flex flex-col"
            >
              <h1 className="text-4xl font-bold text-slate-700 ">
                Welcome back, Renka
              </h1>
              <p className="text-slate-500 my-2">
                Good to have you back! Please enter your details
              </p>
              <div className="flex justify-center my-4">
                <Link
                  href=""
                  className="px-4 py-2 rounded-lg shadow-lg flex gap-x-2"
                >
                  <Image
                    src="/google.png"
                    alt="img"
                    width={24}
                    height={24}
                  ></Image>
                  <p>Log in with Google</p>
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <div className="border-t border-slate-300 grow"></div>
                <p className="text-base text-slate-400 self-start">or</p>
                <div className="border-t border-slate-300 grow"></div>
              </div>
              <input
                type="text"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                placeholder="Email"
                className="rounded-lg shadow-lg py-2 px-4 mt-2 mb-1"
              />
              <p>{errors.email?.message}</p>
              <input
                type="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "This is required!",
                  },
                  minLength: {
                    value: 8,
                    message: "minimum 8 characters",
                  },
                })}
                placeholder="Password"
                className="rounded-lg shadow-lg py-2 px-4 my-1"
              />
              <p>{errors.password?.message}</p>
              <label
                htmlFor="reminder"
                className="text-slate-700 px-1 mt-2 mb-6"
              >
                <input
                  type="checkbox"
                  {...register("remainder")}
                  className="mr-2"
                />
                <span className="text-slate-600">Remember me for 30 days</span>
              </label>
              <input
                type="submit"
                value="Log in"
                className="rounded-lg cursor-pointer px-4 py-3 bg-emerald-900 text-slate-100 mb-2"
              />
              <p className="text-sm text-center text-slate-500">
                Dont have an account?{" "}
                <Link
                  href="/Register"
                  className="text-emerald-900 text-opacity-75 font-bold"
                >
                  Register for free
                </Link>
              </p>
            </form>
          </div>
          {/* image */}
          <div className=" max-w-[345px] lg:max-w-[430px] 2lg:flex mx-auto hidden">
            <Image
              src="/1.jpg"
              alt="img"
              width={600}
              height={20}
              className=" "
            />
          </div>
        </section>
      </main>
    </>
  );
}
