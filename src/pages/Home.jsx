import React from "react";
import { AuraIntro } from "../components/AuraIntro/AuraIntro";
import { Banner } from "../components/Banner/Banner";
import { EnquiryForm } from "../components/EnquiryForm/EnquiryForm";

import { GallerySlider } from "../components/HomeGallerySlider/GallerySlider";
import { Services } from "../components/HomeServices/Services";

export const Home = () => {
  return (
    <div className="flex flex-col gap-6">
      <Banner />
      <AuraIntro />
      <Services />
      <GallerySlider />
      <EnquiryForm />
    </div>
  );
};
