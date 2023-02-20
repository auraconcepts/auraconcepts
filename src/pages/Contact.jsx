import React from "react";
import { ContactInfo } from "../components/ContactInfo/ContactInfo";
import { ContactsBanner } from "../components/ContactsBanner/ContactsBanner";
import { ContactForm } from "../components/Form/ContactForm";

export const Contact = () => {
  return (
    <div>
      <ContactsBanner />
      <ContactInfo />
      <hr className="h-5"></hr>
      <ContactForm />
      <hr></hr>
      <div className="flex justify-center align-center p-5 max-[700px]:text-sm">
        Copyright 2023 © <span className="text-[#936a76]">AuraConcepts</span>.
        All Rights Reserved.
      </div>
    </div>
  );
};
