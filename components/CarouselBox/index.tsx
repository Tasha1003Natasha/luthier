"use client";

import React, { useEffect, useState } from "react";
import dataList from "@/data/list";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import s from "./CarouselBox.module.css";
import Image from "next/image";
import { StaticImageData } from "next/image";
import test from "@/public/images/test.png";
import { Storage } from "@google-cloud/storage";

// interface CarouselItem {
//   id: number;
//   imageUrl: StaticImageData;
//   title: string;
//   body: string;
// }

// interface Data {
//   bootstrap: CarouselItem[];
// }

const CarouselBox: React.FC = () => {
  //   const { bootstrap }: Data = data;
  //   const test = data.map((item) => item.imageUrl);
  //   console.log("test:", test);

  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  //////////////
  const [files, setFiles] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("/api/google-drive");
  //       const data = await response.json();
  //       console.log("data :", data);
  //       setFiles(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/google-drive");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Response is not in JSON format");
        }
        const data = await response.json();
        console.log("data :", data);
        setFiles(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {dataList.map((item) => (
        <Carousel.Item key={item.id} interval={4000}>
          {/* <img src={item?.imageUrl} alt={item.title} />  */}
          <Image
            src={test}
            // src={item?.imageUrl}
            // style={{ objectFit: "contain" }}
            sizes="100vw"
            alt={item.title}
          />
          <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            {/* <button className="btn btn-danger">Visit Docs</button> */}
            <button>Visit Docs</button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselBox;
