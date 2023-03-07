import React from "react";
import Header from "@/components/Header";
import Content from "@/components/Content";

const Homepage = () => {
  return (
    <main
      id="home"
      className={`min-h-screen bg-[url('/forest-dark.jpg')] bg-cover bg-no-repeat mb-4`}
    >
      {/* header */}
      <Header />
      {/* content */}
      <Content />
    </main>
  );
};

export default Homepage;
