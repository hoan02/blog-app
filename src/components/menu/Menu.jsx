import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subTitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>More popular</h1>
      <MenuPosts withImage={false}/>

      <h2 className={styles.subTitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />

      <h2 className={styles.subTitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editor pick</h1>

      <MenuPosts withImage={true}/>
    </div>
  );
};

export default Menu;
