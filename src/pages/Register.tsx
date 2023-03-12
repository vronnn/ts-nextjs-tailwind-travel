import React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import Darkheader from "@/components/Darkheader";
import FormValues from "@/constant/Type";
import TextInput from "@/components/TextInput";
import Checkbox from "@/components/Checkbox";
import PickAuth from "@/components/PickAuth";

export default function Register() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      remainder: false,
    },
  });

  register("firstName", { required: "This is required" });

  register("lastName", { required: "This is required" });

  register("email", {
    required: "Enter your email",
    pattern: {
      value: /^\S+@\S+$/i,
      message: "Invalid email",
    },
  });

  register("password", {
    required: "Enter your password",
    minLength: {
      value: 8,
      message: "minimum 8 characters",
    },
  });

  console.log("errors", errors);

  return (
    <>
      <main className="min-h-screen p-20 flex justify-center items-center">
        <Darkheader />
        <section className="flex flex-wrap shadow-lg px-20 py-14 lg:p-0">
          {/* form */}
          <div className="flex items-center mx-auto mb-4 lg:px-20 lg:py-14">
            <form
              onSubmit={handleSubmit((data: FormValues) => {
                console.log(data);
                reset();
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
                  <TextInput
                    label="First name"
                    name="firstName"
                    type="text"
                    error={errors.firstName?.message}
                    register={register}
                  />
                </div>
                <div>
                  <TextInput
                    label="Last name"
                    name="lastName"
                    type="text"
                    error={errors.lastName?.message}
                    register={register}
                  />
                </div>
              </div>
              <TextInput
                label="Email"
                name="email"
                type="email"
                error={errors.email?.message}
                register={register}
              />
              <TextInput
                label="Password"
                name="password"
                type="password"
                error={errors.password?.message}
                register={register}
              />
              <div className="mb-6 mt-1">
                <Checkbox
                  label="remainder"
                  type="checkbox"
                  name="remainder"
                  register={register}
                  info="Yes, I understand and agree to the given"
                />
                <Link
                  href=""
                  className="text-emerald-900 text-opacity-75 text-sm underline"
                >
                  Terms of Service
                </Link>
              </div>
              <input
                type="submit"
                value="Create account"
                className="rounded-lg cursor-pointer px-4 py-3 bg-emerald-900 text-slate-100 mb-2"
              />
              <PickAuth
                question="Already have an account?&nbsp;"
                pick="Log in"
                link="/Login"
              />
            </form>
          </div>
          {/* image */}
          <div className=" max-w-[345px] lg:max-w-[480px] xl:flex mx-auto hidden">
            <Image
              src="/55.jpg"
              alt="img"
              width={600}
              height={20}
              className=""
            />
          </div>
        </section>
      </main>
    </>
  );
}
