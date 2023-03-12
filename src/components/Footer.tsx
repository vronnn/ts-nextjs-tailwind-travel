import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="flex flex-col">
      <div className="min-h-[5.2rem]"></div>
      <footer
        id="contact"
        className="w-full h-[48rem] lg:h-[33rem] flex flex-col gap-y-6 md:gap-y-2 bg-[#f4f4f4] pt-8 pb-2"
      >
        {/* upper */}
        <div className="flex flex-wrap gap-x-8 justify-center items-center px-4 lg:px-0 gap-y-6 lg:gap-y-10">
          {/* main */}
          <div className="flex items-center px-4 md:px-0 xl:w-2/5 md:gap-x-10">
            <Image
              src="/travel_mockup.png"
              alt="img"
              width={180}
              height={100}
              className="hover:scale-105 transition-all duration-300"
            />
            <div className="flex flex-col justify-center gap-y-4">
              <div className="flex flex-col gap-y-2 text-slate-700">
                <h4 className="text-lg md:text-xl font-bold">
                  Travel Application
                </h4>
                <p className="text-sm lg:text-base max-w-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  libero, eveniet officia minima numquam at deleniti obcaecati
                  illo dolores architecto ratione quod nisi
                </p>
              </div>
              <div className="flex flex-col gap-y-2">
                <Link
                  href=""
                  className="md:px-4 py-2 px-3 text-sm border border-slate-700 rounded-3xl flex items-center justify-center gap-x-2 max-w-sm font-semibold hover:bg-emerald-900 hover:text-slate-100"
                >
                  <FaApple size={20} /> Download on IOS
                </Link>
                <Link
                  href=""
                  className="md:px-4 py-2 px-3 text-sm border border-slate-700 rounded-3xl flex items-center justify-center gap-x-2 max-w-sm font-semibold hover:bg-emerald-900 hover:text-slate-100"
                >
                  <FaGooglePlay size={18} /> Download on Android
                </Link>
              </div>
            </div>
          </div>
          {/* Link */}
          <div className="flex flex-col xl:w-2/5 gap-y-4 text-slate-700">
            <h4 className="text-lg md:text-xl font-bold">Important Link</h4>
            <div className="flex items-center gap-x-24 text-sm lg:text-base">
              <ul>
                <li>
                  <a href="">Travel Brosure</a>
                </li>
                <li>
                  <a href="">Customer Service</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
                <li>
                  <a href="">About Travel</a>
                </li>
                <li>
                  <a href="">FAQ</a>
                </li>
                <li>
                  <a href="">Travel Services</a>
                </li>
                <li>
                  <a href="">Flight Schedule</a>
                </li>
                <li>
                  <a href="">Book Resort</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="">Travel Brosure</a>
                </li>
                <li>
                  <a href="">Customer Service</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
                <li>
                  <a href="">About Travel</a>
                </li>
                <li>
                  <a href="">FAQ</a>
                </li>
                <li>
                  <a href="">Travel Services</a>
                </li>
                <li>
                  <a href="">Flight Schedule</a>
                </li>
                <li>
                  <a href="">Book Resort</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* mid */}
        <div className="flex flex-wrap justify-evenly lg:flex-col lg:justify-center items-center gap-y-4">
          <div className="flex items-center gap-x-2">
            <div>
              <FaFacebook size={20} color="#334155" />
            </div>
            <div>
              <FaInstagram size={20} color="#334155" />
            </div>
            <div>
              <FaPinterest size={20} color="#334155" />
            </div>
            <div>
              <FaTwitter size={20} color="#334155" />
            </div>
            <div>
              <FaYoutube size={20} color="#334155" />
            </div>
            <div>
              <FaTiktok size={20} color="#334155" />
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <Link href="" className="uppercase font-semibold">
              en
            </Link>
            <div className="border-r-[1px] border-slate-500 w-1 h-3/5"></div>
            <Link href="" className="uppercase">
              id
            </Link>
          </div>
        </div>
        {/* lower */}
        <div className="w-full">
          <div className="flex justify-center w-full">
            <div className="w-11/12 border-t-[1px] border-slate-300"></div>
          </div>
          <div className="flex flex-wrap justify-between items-center min-h-[5rem] px-4 lg:px-16">
            <div className="">
              <Link href="" className="text-xs">
                &#169; Inter Travel Systems B.V.2014 - 2023
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-x-2">
              <Link href="" className="text-xs">
                Privacy Policy
              </Link>
              <Link href="" className="text-xs">
                Price Disclaimer
              </Link>
              <Link href="" className="text-xs">
                Responsible Disclosure
              </Link>
              <Link href="" className="text-xs">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
