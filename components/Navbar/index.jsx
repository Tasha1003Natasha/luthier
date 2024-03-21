"use client";

import React, { useEffect, useState } from "react";
import s from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { getCurrentItemHG, getHeadGallery } from "@/redux/files/filesSelectors";

const Navbar = () => {
  //////////////////dark thema///////////
  // const currentFond = useSelector(getCurrentItemHG);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const imageStyles = {
    objectFit: "contain",
    transition: "opacity 0.15s ease",
    opacity: isHovered ? "0.5" : "1",
  };

  return (
    <nav className={s.nav}>
      {/* <Link href="/repair" className={s.nav_link}>
        Repair
      </Link> */}
      <Link
        href="/work"
        // className={currentFond === "dark" ? s.nav_link : s.nav_link_gold}
        className={s.nav_link_gold}
        passHref
      >
        Work
      </Link>
      <Link href="/" className={s.nav_logo}>
        {/* //////////////////dark thema/////////// */}
        {/* {currentFond === "dark" ? ( */}
        {/* <Image
            src="/icons/logo_light.svg"
            alt="Logo"
            // fill
            // sizes="100vw"
            width={200}
            height={200}
            style={{ objectFit: "contain" }}
            priority
          /> */}
        {/* ) : ( */}
        <Image
          src="/icons/logo_gold.svg"
          alt="Logo"
          // fill
          // sizes="100vw"
          width={200}
          height={200}
          // style={{ objectFit: "contain" }}
          style={imageStyles}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={handleMouseEnter}
          onBlur={handleMouseLeave}
          priority
        />
        {/* )} */}
      </Link>
      <Link
        href="/profile"
        // className={currentFond === "dark" ? s.nav_link : s.nav_link_gold}
        className={s.nav_link_gold}
      >
        Profile
      </Link>
      {/* <Link href="/contact" className={s.nav_link}>
        Contact me
      </Link> */}
    </nav>
  );
};

export default Navbar;
