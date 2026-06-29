"use client";

import styles from "./Hero.module.css";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={`${styles.hero} theme-dark`} id="home">
      <div className="container">
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.subtitle}>LIVE MUSIC · KUMASI & BEYOND</div>
          <h1 className={styles.title}>
            Music that <br />
            <span>moves</span> every <br />
            room.
          </h1>
          <p className={styles.description}>
            Professional instrumentalist available for birthdays, weddings, corporate events, and private celebrations. Every note, curated for your moment.
          </p>
          <div className={styles.actions}>
            <button onClick={() => scrollTo("book")} className="btn btn-primary">
              Book for your event
            </button>
            <button onClick={() => scrollTo("listen")} className="btn btn-outline">
              Hear the music
            </button>
          </div>
        </motion.div>
      </div>
      
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine}></div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
