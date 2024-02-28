"use client";

import React, { useEffect, useState } from "react";
import dataList from "@/data/list";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import s from "./CarouselBox.module.css";
import Image from "next/image";
// import { StaticImageData } from "next/image";
import test from "@/public/images/test.png";

// interface CarouselItem {
//   id: number;
//   imageUrl: StaticImageData;
//   title: string;
//   body: string;
// }

// interface Data {
//   bootstrap: CarouselItem[];
// }

const CarouselBox = ({ files }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const [list, setList] = useState([]);

  useEffect(() => {
    setList(files);
  }, [files]);

  //////////////////////
  //   const { bootstrap }: Data = data;
  //   const test = data.map((item) => item.imageUrl);
  //   console.log("test:", test);

  // const [index, setIndex] = useState<number>(0);

  // const handleSelect = (selectedIndex: number) => {
  //   setIndex(selectedIndex);
  // };
  //////////////

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("/api/google-drive");
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const data = await response.json();
  //       console.log("data:", data);
  //       setFiles(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {list?.map((item) => (
        <Carousel.Item key={item.id}>
          {/* <img src={item?.imageUrl} alt={item.title} />  */}
          {/* <img src={item?.downloadUrl} alt={item?.etag} /> */}
          <Image
            src={item?.webContentLink}
            style={{ objectFit: "contain", height: "100%", width: "100%" }}
            // sizes="100vw"
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            // fill={true}
            alt={item?.etag}
            width={800}
            height={800}
            priority={true}
          />
          <Carousel.Caption>
            {/* <h3>{item.title}</h3>
            <p>{item.body}</p> */}
            {/* <button className="btn btn-danger">Visit Docs</button> */}
            {/* <button>Visit Docs</button> */}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselBox;