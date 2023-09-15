import React from "react";
import styles from "./menuPosts.module.css";
import Image from "next/image";
import Link from "next/link";

const MenuPost = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link className={styles.item} href="/">
        {withImage && (
          <div className={styles.imageContainer}>
            <Image className={styles.image} src="/p1.jpeg" alt="" fill />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 06.09.2023</span>
          </div>
        </div>
      </Link>

      <Link className={styles.item} href="/">
        {withImage && (
          <div className={styles.imageContainer}>
            <Image className={styles.image} src="/p1.jpeg" alt="" fill />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Culture
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 06.09.2023</span>
          </div>
        </div>
      </Link>

      <Link className={styles.item} href="/">
        {withImage && (
          <div className={styles.imageContainer}>
            <Image className={styles.image} src="/p1.jpeg" alt="" fill />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 06.09.2023</span>
          </div>
        </div>
      </Link>

      <Link className={styles.item} href="/">
        {withImage && (
          <div className={styles.imageContainer}>
            <Image className={styles.image} src="/p1.jpeg" alt="" fill />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 06.09.2023</span>
          </div>
        </div>
      </Link>

      <Link className={styles.item} href="/">
        {withImage && (
          <div className={styles.imageContainer}>
            <Image className={styles.image} src="/p1.jpeg" alt="" fill />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.coding}`}>Coding</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 06.09.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPost;
