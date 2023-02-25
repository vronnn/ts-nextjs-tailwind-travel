import React from "react";
import Review from "./Review";
import Promo from "./Promo";
import Footer from "@/pages/components/Footer";

const Reviewpage = () => {
  return (
    <section id="review" className="min-h-screen text-slate-700 ">
      <div className="flex flex-col justify-between h-screen ">
        <div className=" lg:container flex flex-col gap-6 px-4">
          <div></div>
          {/* title */}
          <div className="min-h-[4rem] flex justify-center items-center">
            <h1 className="text-3xl font-bold items-center">
              Satisfied Customer
            </h1>
          </div>
          {/* review card gallery */}
          <Review />
          {/* playstore promotion */}
          <Promo />
        </div>
        {/* footer */}
        <Footer />
      </div>
    </section>
  );
};

export default Reviewpage;
