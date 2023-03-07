import { ChangeEvent, useState } from "react";
import { NextPage } from "next";
import World from "./World";
import Header from "@/components/Header";
import { IoSearchOutline } from "react-icons/io5";

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
      <div className="flex flex-col items-center justify-center hero-search bg-[url('/pexelapi.jpg')] bg-cover bg-center gap-y-6 relative">
        <h1 className="text-4xl font-bold text-slate-100 uppercase">
          Visit one the best view in the universe
        </h1>
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
              className="rounded-lg shadow-lg px-6 py-2 h-12 w-[30rem]"
            />
            <button type="submit" className="absolute right-4 top-3">
              <IoSearchOutline color="#94a3b8" size={22} />
            </button>
          </label>
        </form>
      </div>

      {query && <World query={query} />}
    </section>
  );
};

export default Home;
