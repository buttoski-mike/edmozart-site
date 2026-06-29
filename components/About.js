"use client";

import styles from "./About.module.css";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={`container ${styles.grid}`}>
        <motion.div 
          className={styles.imageContainer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src="/about-image.jpg" alt="Edmozart performing" className={styles.aboutImage} />
        </motion.div>
        
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-subtitle">About Edmozart</div>
          <h2 className={styles.title}>Ten years of stages, one instrument, infinite moods.</h2>
          
          <div className={styles.text}>
            <p>
              At just 19 years old, Edmozart is already a Kumasi-based musical powerhouse, commanding the stage with his mastery of the keyboard and saxophone. Don't let his youth fool you—with over 7 years of professional experience under his belt, he's been the driving melodic force behind some of Ghana's most exclusive and high-profile events.
            </p>
            <p>
              Whether setting the ambient tone at a dinner party or leading a full reception, he reads every room and tailors the experience to the feeling you're after.
            </p>
          </div>
          
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>150+</span>
              <span className={styles.statLabel}>Events Performed</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>7</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>98%</span>
              <span className={styles.statLabel}>Client Satisfaction</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
