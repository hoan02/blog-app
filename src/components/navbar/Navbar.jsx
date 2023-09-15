import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <a href="https://www.facebook.com/hoanit02/" target="blank">
          <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        </a>
        <a href="https://www.instagram.com/hoanit02/" target="blank">
          <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        </a>
        {/* <a href="https://www.tiktok.com/@hoanit02" target="blank">
          <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        </a> */}
        <a href="https://www.youtube.com/@hoancute" target="blank">
          <Image src="/youtube.png" alt="youtube" width={24} height={24} />
        </a>
        <a href="https://github.com/hoan02" target="blank">
          <Image src="/github.png" alt="github" width={24} height={24} />
        </a>
      </div>
      <div className={styles.logo}>hoan.blog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link className={styles.link} href="/">
          Homepage
        </Link>
        <Link className={styles.link} href="/">
          Contact
        </Link>
        <Link className={styles.link} href="/">
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
