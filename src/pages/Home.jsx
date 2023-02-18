import React from "react";
import { AuraIntro } from "../components/AuraIntro/AuraIntro";
import { Banner } from "../components/Banner/Banner";
import { EnquiryForm } from "../components/EnquiryForm/EnquiryForm";
import { Footer } from "../components/Footer/Footer";
import { GallerySlider } from "../components/HomeGallerySlider/GallerySlider";
import { Services } from "../components/HomeServices/Services";
import { Navbar } from "../components/Navbar/Navbar";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-6">
        <Banner />
        <AuraIntro />
        <Services />
        <GallerySlider />
        <EnquiryForm />
        <Footer />
      </div>
    </>
  );
};
