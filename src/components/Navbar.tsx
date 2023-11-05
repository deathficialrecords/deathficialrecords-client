import Link from "next/link";
import styles from "./Navbar.module.css";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/posts">Posts</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/artists">Artists</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/zines">Zine</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
