import React from "react";
import arrIcons from "@/public/icons.js";
import s from "./Main.module.css";

const Main = () => {
  return (
    <div className={s.arrow_list}>
      <button className={s.arrow_left}>{arrIcons.left}</button>
      <button className={s.arrow_right}>{arrIcons.right}</button>
    </div>
  );
};

export default Main;
