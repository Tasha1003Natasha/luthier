"use client";

import React, { useEffect, useState } from "react";
// import arrIcons from "@/public/icons.js";
import s from "./Main.module.css";
import CarouselBox from "../CarouselBox";
import { getCarouselGallery } from "@/service/carousel";

const Main = () => {
  const [files, setFiles] = useState([]);
  console.log("files:", files);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCarouselGallery();
        setFiles(data.items);

        // Shuffle the items array
        // const shuffledItems = data.items.sort(() => Math.random() - 0.5);
        // const randomItems = shuffledItems.slice(0, 5);
        // console.log("randomItems:", randomItems);
        // setFiles(randomItems);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* // <div className={s.arrow_list}>
    //   <button className={s.arrow_left}>{arrIcons.left}</button>
    //   <button className={s.arrow_right}>{arrIcons.right}</button>
    // </div> */}
      <CarouselBox files={files} />
    </>
  );
};

export default Main;
