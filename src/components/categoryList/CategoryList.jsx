import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link
          className={`${styles.category} ${styles.style}`}
          href="/blog?cat=style"
        >
          <Image
            className={styles.image}
            src="/style.png"
            alt="style"
            width={32}
            height={32}
          />
          Style
        </Link>
        <Link
          className={`${styles.category} ${styles.fashion}`}
          href="/blog?cat=fashion"
        >
          <Image
            className={styles.image}
            src="/fashion.png"
            alt="fashion"
            width={32}
            height={32}
          />
          Fashion
        </Link>
        <Link
          className={`${styles.category} ${styles.food}`}
          href="/blog?cat=food"
        >
          <Image
            className={styles.image}
            src="/food.png"
            alt="food"
            width={32}
            height={32}
          />
          Food
        </Link>
        <Link
          className={`${styles.category} ${styles.travel}`}
          href="/blog?cat=travel"
        >
          <Image
            className={styles.image}
            src="/travel.png"
            alt="travel"
            width={32}
            height={32}
          />
          Travel
        </Link>
        <Link
          className={`${styles.category} ${styles.culture}`}
          href="/blog?cat=culture"
        >
          <Image
            className={styles.image}
            src="/culture.png"
            alt="culture"
            width={32}
            height={32}
          />
          Culture
        </Link>
        <Link
          className={`${styles.category} ${styles.coding}`}
          href="/blog?cat=coding"
        >
          <Image
            className={styles.image}
            src="/coding.png"
            alt="coding"
            width={32}
            height={32}
          />
          Coding
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
