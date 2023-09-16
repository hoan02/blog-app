import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = ({ item, key }) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src="/p1.jpeg" alt="" fill />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>14.09.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>{item.title}</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est amet
          architecto consectetur fugiat iste nobis adipisci assumenda.
          Blanditiis velit illum, dicta, eius quos nihil harum praesentium quam
          eveniet cupiditate excepturi!
        </p>
        <Link className={styles.link} href="/">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default Card;
