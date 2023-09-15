import React from "react";
import styles from "./singlePage.module.css";
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image className={styles.avatar} src="/logo.png" alt="" fill />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>06.09.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image className={styles.image} src="/p1.jpeg" alt="" fill />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.desc}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati dolorum possimus assumenda fuga est tenetur nostrum
              magnam animi aperiam molestias consectetur, facilis nemo nihil,
              quas exercitationem? Doloribus dolores veniam fugiat.
            </p>
            <h2>Lorem, ipsum dolor sit amet</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati dolorum possimus assumenda fuga est tenetur nostrum
              magnam animi aperiam molestias consectetur, facilis nemo nihil,
              quas exercitationem? Doloribus dolores veniam fugiat.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati dolorum possimus assumenda fuga est tenetur nostrum
              magnam animi aperiam molestias consectetur, facilis nemo nihil,
              quas exercitationem? Doloribus dolores veniam fugiat.
            </p>
          </div>

          <div className={styles.comments}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
