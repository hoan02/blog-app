import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";

  return (
    <div className={styles.container}>
      <h1>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            className={styles.input}
            placeholder="write a comment..."
          ></textarea>
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link>Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              className={styles.image}
              src="/logo.png"
              alt=""
              width={50}
              height={50}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>06.09.2023</span>
            </div>
          </div>

          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
            dolor itaque nisi ratione, architecto ducimus dolores saepe quis,
            illum veniam cum eum non pariatur. Doloribus facere aspernatur
            quisquam ipsam accusantium!
          </p>
        </div>
      </div>

      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              className={styles.image}
              src="/logo.png"
              alt=""
              width={50}
              height={50}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>06.09.2023</span>
            </div>
          </div>

          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
            dolor itaque nisi ratione, architecto ducimus dolores saepe quis,
            illum veniam cum eum non pariatur. Doloribus facere aspernatur
            quisquam ipsam accusantium!
          </p>
        </div>
      </div>

      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              className={styles.image}
              src="/logo.png"
              alt=""
              width={50}
              height={50}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>06.09.2023</span>
            </div>
          </div>

          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
            dolor itaque nisi ratione, architecto ducimus dolores saepe quis,
            illum veniam cum eum non pariatur. Doloribus facere aspernatur
            quisquam ipsam accusantium!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
