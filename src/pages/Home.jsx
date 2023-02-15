import React from "react";
import { AuraIntro } from "../components/AuraIntro/AuraIntro";
import { Banner } from "../components/Banner/Banner";
import { Services } from "../components/HomeServices/Services";
import { Navbar } from "../components/Navbar/Navbar";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <AuraIntro/>
      <Services/>
    </div>
  );
};
