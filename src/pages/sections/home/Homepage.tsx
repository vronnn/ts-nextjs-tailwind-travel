import React from "react";
import Header from "@/components/Header";
import Hero from "./Hero";
import Desc from "./Desc";

const Homepage = () => {
  return (
    <main
      id="home"
      data-testid="homepage"
      className={`min-h-screen bg-[url('/forest-dark.jpg')] bg-cover bg-no-repeat`}
    >
      {/* header */}
      <Header />
      {/* content */}
      <div className="w-full h-screen relative">
        {/* social, hero, scroll */}
        <Hero />
        {/* desc */}
        <Desc />
      </div>
    </main>
  );
};

export default Homepage;
