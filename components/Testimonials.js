import styles from "./Testimonials.module.css";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "\"Edmozart Keys turned my daughter's birthday into something I'll never forget. Everyone kept asking who the saxophonist was.\"",
      author: "AKOSUA A. — BIRTHDAY, KUMASI"
    },
    {
      quote: "\"The duo set at our wedding reception was absolutely stunning. Guests were in awe the entire evening.\"",
      author: "KWAME & AMA — WEDDING, ACCRA"
    },
    {
      quote: "\"Professional, punctual, and talented. Our corporate dinner felt like a five-star experience because of the live music.\"",
      author: "MENSAH O. — CORPORATE EVENT, EAST LEGON"
    }
  ];

  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        <h2 className={styles.title}>What Clients Say</h2>
        
        <div className={styles.grid}>
          {testimonials.map((testi, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <div className={styles.quote}>{testi.quote}</div>
              <div className={styles.author}>{testi.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
