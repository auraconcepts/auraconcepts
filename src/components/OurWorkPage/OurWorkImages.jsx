import React from "react";
import styles from "./styles.module.scss";
import OurWork from "../../utils/OurWork";
import { ImageCard } from "../OurWorkImageCard/ImageCard";
export const OurWorkImages = () => {
  return (
    <div  className="flex flex-col gap-4">
      <div className={styles.OurWorkBanner}>
        <h1>Our Work</h1>
        {/* <img src="/Asset/image23.jpeg"></img> */}
      </div>
      <div className={styles.WorkImagesContainer}>{OurWork.map((image,index)=>{
        return <ImageCard image={image.image} key={index}/>
      })}</div>
    </div>
  );
};
