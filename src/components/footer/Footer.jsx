import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image
            className={styles.imageLogo}
            src="/logo.png"
            atl="logo"
            width={50}
            height={50}
          />
          <h1 className={styles.logoText}>hoan.blog</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio rerum
          maxime, voluptatibus obcaecati ipsa ducimus porro quaerat quo sapiente
          vel accusantium deleniti tempora facere eum! At numquam in voluptate
          asperiores?
        </p>
        <div className={styles.icons}>
          <a href="https://www.facebook.com/hoanit02/" target="blank">
            <Image src="/facebook.png" alt="facebook" width={18} height={18} />
          </a>
          <a href="https://www.instagram.com/hoanit02/" target="blank">
            <Image src="/instagram.png" alt="instagram" width={18} height={18} />
          </a>
          {/* <a href="https://www.tiktok.com/@hoanit02" target="blank">
                <Image src="/tiktok.png" alt="tiktok" width={18} height={18} />
              </a> */}
          <a href="https://www.youtube.com/@hoancute" target="blank">
            <Image src="/youtube.png" alt="youtube" width={18} height={18} />
          </a>
          <a href="https://github.com/hoan02" target="blank">
            <Image src="/github.png" alt="github" width={18} height={18} />
          </a>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="">Homepage</Link>
          <Link href="">Blog</Link>
          <Link href="">Contact</Link>
          <Link href="">About</Link>
        </div>

        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="">Style</Link>
          <Link href="">Fashion</Link>
          <Link href="">Travel</Link>
          <Link href="">Food</Link>
          <Link href="">Coding</Link>
        </div>

        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="">Facebook</Link>
          <Link href="">Instagram</Link>
          {/* <Link href="">TikTok</Link> */}
          <Link href="">YouTube</Link>
          <Link href="">Github</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
