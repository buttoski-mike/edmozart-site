"use client";

import styles from "./Footer.module.css";

export default function Footer() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>Edmozart Keys</div>
        <div className={styles.links}>
          <button onClick={() => scrollTo("about")} className={styles.link}>About</button>
          <button onClick={() => scrollTo("services")} className={styles.link}>Services</button>
          <button onClick={() => scrollTo("listen")} className={styles.link}>Listen</button>
          <button onClick={() => scrollTo("book")} className={styles.link}>Book</button>
        </div>
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} Edmozart Keys. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
