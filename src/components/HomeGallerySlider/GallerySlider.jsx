import React from "react";
import SliderImages from "../../utils/HomeGallery";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./styles.module.scss";
export const GallerySlider = () => {
  const divstyle = {
    height: "600px",
    backgroundSize: "70% 90% ",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div className={styles.sliderContainer}>
      <h2 className={styles.heading}>Gallery</h2>
      <Slide autoplay={true} slideDuration={0.5}>
        {SliderImages.map((element, index) => {
          return (
            <div
              style={{ ...divstyle, backgroundImage: `url(${element.image})` }}
            ></div>
          );
        })}
      </Slide>
    </div>
  );
};
