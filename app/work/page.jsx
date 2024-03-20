"use client";

import { getCustomCards, getRestorationCards } from "@/service/cards";
import CardsGallery from "@/components/CardsGallery/index";
import s from "./work.module.css";
import { useEffect, useState } from "react";

const Work = () => {
  const [custom, setCustom] = useState([]);
  console.log("custom:", custom);
  const [rest, setRest] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataCustomCards = await getCustomCards();
        const dataRestCards = await getRestorationCards();

        setCustom(dataCustomCards.items);
        setRest(dataRestCards.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={s.section}>
      <h2>Custom</h2>
      <CardsGallery list={custom} />
      <h2>Restoration</h2>
      <CardsGallery list={rest} />
    </div>
  );
};

export default Work;
