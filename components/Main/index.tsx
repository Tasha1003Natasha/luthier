import React from "react";
// import arrIcons from "@/public/icons.js";
import s from "./Main.module.css";
import CarouselBox from "../CarouselBox";

const Main = () => {
  return (
    <>
      {/* // <div className={s.arrow_list}>
    //   <button className={s.arrow_left}>{arrIcons.left}</button>
    //   <button className={s.arrow_right}>{arrIcons.right}</button>
    // </div> */}
      <CarouselBox />
    </>
  );
};

export default Main;
