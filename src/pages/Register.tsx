import React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import Darkheader from "./components/Darkheader";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  remainder: string;
};

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  return (
    <>
      <main className="min-h-screen p-20 flex justify-center items-center">
        <Darkheader />
        <section className="flex flex-wrap xl:border-t-2 xl:border-b-2">
          {/* form */}
          <div className="flex items-center mx-auto  mb-4 lg:px-16">
            <form
              onSubmit={handleSubmit((data) => {
                console.log(data);
              })}
              className="flex flex-col"
            >
              <h1 className="text-4xl font-bold text-slate-700 ">
                Create an account
              </h1>
              <p className="text-slate-500 my-2">
                Hello there! Please enter your details below to register
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
                  <p>Continue with Google</p>
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <div className="border-t border-slate-300 grow"></div>
                <p className="text-base text-slate-400 self-start">or</p>
                <div className="border-t border-slate-300 grow"></div>
              </div>
              <div className="flex gap-x-2">
                <div>
                  <input
                    type="text"
                    {...register("firstName", {
                      required: {
                        value: true,
                        message: "This is required!",
                      },
                    })}
                    placeholder="first name"
                    className="rounded-lg shadow-lg py-2 px-4 mt-2 mb-1 focus:ring-1 focus:ring-emerald-900"
                  />
                  <p className="text-sm text-red-600 pl-2">
                    {errors.firstName?.message}
                  </p>
                </div>

                <div>
                  <input
                    type="text"
                    {...register("lastName", {
                      required: {
                        value: true,
                        message: "This is required!",
                      },
                    })}
                    placeholder="last name"
                    className="rounded-lg shadow-lg py-2 px-4 mt-2 mb-1 focus:ring-1 focus:ring-emerald-900"
                  />
                  <p className="text-sm text-red-600 pl-2">
                    {errors.lastName?.message}
                  </p>
                </div>
              </div>
              <input
                type="text"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email",
                  },
                })}
                placeholder="Email"
                className="rounded-lg shadow-lg py-2 px-4 my-2 focus:ring-1 focus:ring-emerald-900"
              />
              <p className="text-sm text-red-600 pl-2">
                {errors.email?.message}
              </p>
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
                className="rounded-lg shadow-lg py-2 px-4 mt-1 mb-4"
              />
              <p className="text-sm text-red-600 pl-2">
                {errors.password?.message}
              </p>
              <label
                htmlFor="reminder"
                className="text-slate-700 px-1 mt-2 mb-6"
              >
                <input
                  type="checkbox"
                  {...register("remainder")}
                  className="mr-2"
                />
                <span className="text-slate-600 text-sm">
                  Yes, I understand and agree to the given{" "}
                </span>
                <a
                  href=""
                  className="text-emerald-900 text-opacity-75 text-sm underline"
                >
                  Terms of Service
                </a>
              </label>
              <input
                type="submit"
                value="Create account"
                className="rounded-lg cursor-pointer px-4 py-3 bg-emerald-900 text-slate-100 mb-2"
              />
              <p className="text-sm text-center text-slate-500">
                Already have an account?{" "}
                <a
                  href="/Register"
                  className="text-emerald-900 text-opacity-75 font-bold"
                >
                  Log in
                </a>
              </p>
            </form>
          </div>
          {/* image */}
          <div className=" max-w-[345px] lg:max-w-[480px] xl:flex mx-auto hidden">
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
