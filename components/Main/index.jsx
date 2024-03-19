"use client";

import React, { useEffect, useState } from "react";
// import arrIcons from "@/public/icons.js";
import s from "./Main.module.css";
import CarouselBox from "../CarouselBox";
import {
  getCarouselGallery,
  getCarouselGalleryLight,
  getCarouselGalleryDark,
} from "@/service/carousel";
import { useDispatch } from "react-redux";
import { addHeadGallery } from "@/redux/files/filesSlice";

const Main = () => {
  const dispatch = useDispatch();

  // const [files, setFiles] = useState([]);
  // console.log("files:", files);

  // const [filesDark, setFilesDark] = useState([]);
  // const [filesLight, setFilesLight] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const data = await getCarouselGallery();
        // setFiles(data.items);
        // Shuffle the items array
        // const shuffledItems = data.items.sort(() => Math.random() - 0.5);
        // const randomItems = shuffledItems.slice(0, 5);
        // console.log("randomItems:", randomItems);
        // setFiles(randomItems);
        ////////////////////////
        const dataLight = await getCarouselGalleryLight();
        // setFilesLight(dataLight.items);
        const dataDark = await getCarouselGalleryDark();
        console.log("dataDark:", dataDark);
        // setFilesDark(dataDark.items);

        const combinedData = [];
        const maxLength = Math.max(
          dataLight.items.length,
          dataDark.items.length
        );

        for (let i = 0; i < maxLength; i++) {
          if (dataLight.items[i]) {
            combinedData.push({ ...dataLight.items[i], fond: "light" });
          }
          if (dataDark.items[i]) {
            combinedData.push({ ...dataDark.items[i], fond: "dark" });
          }
        }
        // setFiles(combinedData);
        dispatch(addHeadGallery(combinedData));
        // setFiles(dataLight.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      <CarouselBox />
    </>
  );
};

export default Main;
