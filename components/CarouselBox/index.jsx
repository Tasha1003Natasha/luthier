"use client";

import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import s from "./CarouselBox.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentItemHG, getHeadGallery } from "@/redux/files/filesSelectors";
import { setCurrentItemHG } from "@/redux/files/filesSlice";

// interface CarouselItem {
//   id: number;
//   imageUrl: StaticImageData;
//   title: string;
//   body: string;
// }

// interface Data {
//   bootstrap: CarouselItem[];
// }

const CarouselBox = () => {
  const dispatch = useDispatch();
  const files = useSelector(getHeadGallery);
  const currentFond = useSelector(getCurrentItemHG);

  const [list, setList] = useState([]);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleSlide = (el) => {
    dispatch(setCurrentItemHG(el.fond));
  };

  useEffect(() => {
    setList(files);
  }, [files]);

  return (
    <Carousel
      // variant="dark"
      activeIndex={index}
      onSelect={handleSelect}
      onSlide={(index) => handleSlide(list[index])}
      className={currentFond === "dark" ? s.dark : s.light}
      fade
    >
      {list?.map((item) => (
        <Carousel.Item key={item?.id} interval={4000}>
          <Image
            src={item?.webContentLink}
            alt={item?.etag}
            priority={true}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100vw",
              height: "100vh",
              objectFit: "cover",
            }}
          />
          <Carousel.Caption>
            {/* <h3>UniSon</h3> */}
            {/* <button className="btn btn-danger">Visit Docs</button> */}
            {/* <button>Visit Docs</button> */}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselBox;
