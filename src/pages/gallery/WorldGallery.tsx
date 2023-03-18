import { ChangeEvent, useState } from "react";
import { NextPage } from "next";
import World from "./World";
import Header from "@/components/Header";
import { IoSearchOutline } from "react-icons/io5";
import { CgPushChevronLeftR } from "react-icons/cg";
import Link from "next/link";

const Home: NextPage = () => {
  const [query, setQuery] = useState("Sri lanka");

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section className="min-h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center hero-search bg-[url('/bg-api.webp')] bg-cover bg-center backdrop-brightness-50 gap-y-6 relative">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-4xl font-bold text-gray-200">Travel</h1>
          <p className="text-gray-200 max-w-sm">
            The world&apos;s biggest travel community in 2022 Powered by vron
            company
          </p>
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="query"
              className="relative flex items-center max-w-fit justify-center"
            >
              <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search your destination"
                className="rounded-sm shadow-lg px-6 py-2 h-12 w-[37rem] bg-gray-200"
              />
              <button type="submit" className="absolute right-4 top-3">
                <IoSearchOutline color="#94a3b8" size={22} />
              </button>
            </label>
          </form>
        </div>
        <div className="absolute bottom-0 w-full flex justify-between items-center min-h-[3.5rem] box-border px-6 lmd:px-14 lg:px-24 2xl:px-16">
          <p className="text-gray-200 text-xs">
            Photo <span className="text-gray-400">by</span> Tino Rischawy
          </p>
          <p className="text-gray-400 text-xs">
            Read more about the{" "}
            <Link href="" className="text-gray-200">
              Travel License
            </Link>
          </p>
          <div className="text-gray-200 flex flex-col justify-center items-center text-xs">
            <div className="flex items-center gap-x-2">
              <CgPushChevronLeftR />
              <p className="text-sm">vron</p>
            </div>
            <p>build your company now</p>
          </div>
        </div>
      </div>

      {query && <World query={query} />}
    </section>
  );
};

export default Home;
