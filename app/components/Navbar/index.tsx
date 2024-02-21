import React from "react";
import s from "./Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <a href="/work" className={s.nav_link}>
        Work
      </a>
      <a href="/">
        <div className={s.nav_logo}>
          <Image src="/logo.svg" layout="fill" objectFit="contain" alt="Logo" />
        </div>
      </a>
      <a href="/profile" className={s.nav_link}>
        Profile
      </a>
    </nav>
  );
};

export default Navbar;
