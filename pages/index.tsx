import type { NextPage } from "next";
import Head from "next/head";
import HeroEqupiment from "../App/views/Profile/components/HeroEquipment";
import HeroInventory from "../App/views/Profile/components/HeroInventory";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>WebBrowserGame</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex flex-col justify-center items-center w-full h-full ">
        <HeroEqupiment />
        <HeroInventory />
      </section>
    </>
  );
};

export default Home;
