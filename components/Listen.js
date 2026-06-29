"use client";

import styles from "./Listen.module.css";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

export default function Listen() {
  const videos = [
    { title: "Birthday - Kumasi 2024", color: "#1E1A11" },
    { title: "Wedding - Accra 2024", color: "#0F1A1F" },
    { title: "Corporate - East Legon 2024", color: "#140F1E" }
  ];

  return (
    <section className={styles.listenSection} id="listen">
      <div className="container">
        <div className="section-subtitle">Listen & Watch</div>
        <h2 className={`section-title ${styles.title}`}>See what an Edmozart Keys event feels like.</h2>
        
        <div className={styles.grid}>
          {videos.map((video, index) => (
            <motion.div 
              key={index} 
              className={styles.videoCard}
              style={{ backgroundColor: video.color }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.playButton}>
                <Play size={40} fill="currentColor" strokeWidth={1} />
              </div>
              <div className={styles.caption}>{video.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
