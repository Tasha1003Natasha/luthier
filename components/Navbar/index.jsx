"use client";

import React, { useEffect } from "react";
import s from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { getCurrentItemHG, getHeadGallery } from "@/redux/files/filesSelectors";

const Navbar = () => {
  const currentFond = useSelector(getCurrentItemHG);

  return (
    <nav className={s.nav}>
      {/* <Link href="/repair" className={s.nav_link}>
        Repair
      </Link> */}
      <Link
        href="/work"
        className={currentFond === "dark" ? s.nav_link : s.nav_link_gold}
        passHref
      >
        Work
      </Link>
      <Link href="/" className={s.nav_logo}>
        {currentFond === "dark" ? (
          <Image
            src="/icons/logo_light.svg"
            alt="Logo"
            // fill
            // sizes="100vw"
            width={200}
            height={200}
            style={{ objectFit: "contain" }}
            priority
          />
        ) : (
          <Image
            src="/icons/logo_gold.svg"
            alt="Logo"
            // fill
            // sizes="100vw"
            width={200}
            height={200}
            style={{ objectFit: "contain" }}
            priority
          />
        )}
      </Link>
      <Link
        href="/profile"
        className={currentFond === "dark" ? s.nav_link : s.nav_link_gold}
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
