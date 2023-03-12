import React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import Darkheader from "@/components/Darkheader";
import TextInput from "@/components/TextInput";
import FormValues from "@/constant/Type";
import Checkbox from "@/components/Checkbox";
import PickAuth from "@/components/PickAuth";
import ThirdPart from "@/components/ThirdPart";

export default function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  register("email", {
    required: "Email is required",
    pattern: {
      value: /^\S+@\S+$/i,
      message: "Invalid email",
    },
  });

  register("password", {
    required: "This is required",
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
        <section className="flex flex-wrap shadow-lg px-16 py-14 lg:p-0">
          {/* form */}
          <div className="flex items-center mx-auto  mb-4 lg:px-16 lg:py-14">
            <form
              onSubmit={handleSubmit((data) => {
                console.log(data);
                reset();
              })}
              className="flex flex-col"
            >
              <h1 className="text-4xl font-bold text-slate-700 ">
                Welcome back, Renka
              </h1>
              <p className="text-slate-500 my-2">
                Good to have you back! Please enter your details
              </p>
              <ThirdPart
                link="https://accounts.google.com/ServiceLogin?hl=en&;continue="
                image="/google.png"
                desc="Log in with Google"
              />
              <div className="flex items-center gap-4">
                <div className="border-t border-slate-300 grow"></div>
                <p className="text-base text-slate-400 self-start">or</p>
                <div className="border-t border-slate-300 grow"></div>
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
              <Checkbox
                label="remainder"
                type="checkbox"
                name="remainder"
                register={register}
                info="Remember me for 30 days"
              />
              <input
                type="submit"
                value="Log in"
                className="rounded-lg cursor-pointer px-4 py-3 bg-emerald-900 text-slate-100 mb-2"
              />
              <PickAuth
                question="Dont have an account?&nbsp;"
                pick="Register for free"
                link="/Register"
              />
            </form>
          </div>
          {/* image */}
          <div className=" max-w-[345px] lg:max-w-[430px] 2lg:flex mx-auto hidden">
            <Image
              src="/50.jpg"
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
