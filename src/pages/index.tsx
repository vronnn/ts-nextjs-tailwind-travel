import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Homepage from "./sections/home/Homepage";
import Second from "./sections/about/Second";
import Pic from "./sections/destinations/Pic";
import Testi from "./sections/review/Testi";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {/* Home */}
        <Homepage />
        {/* section 2 */}
        <Second />
        {/* section 3 */}
        <Pic />
        {/* section 4 */}
        <Testi />
        {/* <Reviewpage /> */}
        <Footer />
      </div>
    </>
  );
}
