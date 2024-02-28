"use client";

import React, { useEffect, useState } from "react";
// import arrIcons from "@/public/icons.js";
import s from "./Main.module.css";
import CarouselBox from "../CarouselBox";

const Main = () => {
  const [files, setFiles] = useState([]);
  console.log("files:", files);

  const folderId = "1Grga9XknheIWAXv6uAMYckHmPG9Fn4Eq";
  const apiKey = "AIzaSyAS1SoLtSTK8x-kMttUz9PR9Jt8iGu6KYg";

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/drive/v2/files?q='${folderId}'+in+parents&key=${apiKey}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch photos");
          // const errorData = await response.json();
          // throw new Error(
          //   `Failed to fetch photos: ${JSON.stringify(errorData)}`
          // );
        }

        const data = await response.json();
        // console.log("data:", data);
        // setFiles(data.items);
        ///////////////
        console.log("1:", 1);
        // Shuffle the items array
        const shuffledItems = data.items.sort(() => Math.random() - 0.5);
        // Select the first 5 items from the shuffled array
        const randomItems = shuffledItems.slice(0, 5);
        console.log("randomItems:", randomItems);
        setFiles(randomItems);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
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
