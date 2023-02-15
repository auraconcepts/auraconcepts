import React from "react";
import styles from "./styles.module.scss";
export const AuraIntro = () => {
  return (
    <div className={styles.AuraIntroContainer}>
      <div>
        <div className={styles.Card1}>
          <div>Image</div>
          <div>
            <h4 className="text-[1.5rem] text-center p-2 text-[#141414]">
              About Us
            </h4>
            <p className="leading-5 text-justify p-5 text-[#575757] ">
              We are a team of experts who handle all kinds of events with a
              promise to give a breathtaking decor and presenting An exciting
              and exceptional event. We are based in Chandigarh and work for
              areas around us covering himachal pradesh, Punjab, Haryana, Jammu
              & Kashmir and of course Chandigarh. We believe in giving a new
              concept to each party/event that we do. We provide with tents,air
              conditioned tents,props,flower do ups,gazebos,furniture,stage set
              ups and backdrops, Vedic,dolis,cake cutting areas,dj''s, gen
              sets,sound and light systems,performers,musicians,Caterers,bar set
              ups etc.
            </p>
          </div>
        </div>
        <div className={styles.Card2}>
          <div>
            <h4 className="text-[1.5rem] text-center p-2 text-[#141414]">
              Hello & Welcome
            </h4>
            <p className="leading-5 text-justify p-5 text-[#575757] ">
              Everything you need to make organising your next event simpler and
              more informed is right here. We are passionate about our business
              and deliver extremely high service levels. We are accomplished
              negotiators and concentrate on maximising your event budget,
              whilst reducing costs and adding value. As established corporate
              event organisers we have been delivering exceptional events for
              over 15 years! We understand it is a huge leap of faith to entrust
              an events coordinator with your event. After all you only have one
              chance to get it right!
            </p>
          </div>
          <div>Image</div>
        </div>
      </div>
    </div>
  );
};
