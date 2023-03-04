import React from "react";
import Review from "./Review";
import Promo from "./Promo";
import Footer from "@/pages/components/Footer";

const Reviewpage = () => {
  return (
    <section
      id="review"
      className="min-h-screen text-slate-700 flex flex-col justify-between"
    >
      <div className="flex justify-center items-center review-container">
        <div className=" lg:container flex justify-center items-center">
          {/* review card gallery */}
          <Review />
          {/* playstore promotion */}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Reviewpage;
