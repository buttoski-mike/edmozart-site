"use client";

import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>Edmozart</div>
        <div className={styles.links}>
          <button onClick={() => scrollTo("about")} className={styles.link}>About</button>
          <button onClick={() => scrollTo("services")} className={styles.link}>Services</button>
          <button onClick={() => scrollTo("listen")} className={styles.link}>Listen</button>
          <button onClick={() => scrollTo("availability")} className={styles.link}>Availability</button>
          <button onClick={() => scrollTo("book")} className={`${styles.link} ${styles.bookBtn}`}>Book Now</button>
        </div>
      </div>
    </nav>
  );
}
