import React from "react";
import Header from "@/pages/components/Header";
import Content from "@/pages/components/Content";

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
