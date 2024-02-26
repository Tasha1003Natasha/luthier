import React from "react";
import s from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className={s.nav}>
      <Link href="/work" className={s.nav_link}>
        Work
      </Link>
      <Link href="/" className={s.nav_logo}>
        <Image
          src="/icons/logo3.svg"
          style={{ objectFit: "contain" }}
          alt="Logo"
          // fill
          // sizes="100vw"
          width={300}
          height={300}
          priority
        />
      </Link>
      <Link href="/profile" className={s.nav_link}>
        Profile
      </Link>
    </nav>
  );
};

export default Navbar;
