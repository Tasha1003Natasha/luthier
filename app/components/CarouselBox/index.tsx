"use client";

import React, { useState } from "react";
import data from "@/data/list";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import s from "./CarouselBox.module.css";
import Image from "next/image";
import { StaticImageData } from "next/image";
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

const CarouselBox: React.FC = () => {
  //   const { bootstrap }: Data = data;
  //   const test = data.map((item) => item.imageUrl);
  //   console.log("test:", test);

  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {data.map((item) => (
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
