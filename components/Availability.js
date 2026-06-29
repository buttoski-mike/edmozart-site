"use client";

import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import styles from "./Availability.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Availability() {
  const [value, onChange] = useState(new Date());
  const [bookedDates, setBookedDates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchAvailability() {
      try {
        const response = await fetch('/api/availability');
        const data = await response.json();
        if (data.bookedDates) {
          setBookedDates(data.bookedDates);
        }
      } catch (error) {
        console.error("Failed to fetch availability", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchAvailability();
  }, []);

  const getAvailability = (date) => {
    // Format calendar date to YYYY-MM-DD local time string to match the API
    const dateStr = date.toLocaleDateString('en-CA'); // 'en-CA' outputs YYYY-MM-DD
    
    // If the date is in the past, consider it booked (can't book the past)
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (date < today) {
      return 0; // Booked/Unavailable
    }

    if (bookedDates.includes(dateStr)) {
      return 0; // Booked
    }
    return 1; // Available
  };

  const tileContent = ({ date, view }) => {
    if (view === "month" && !isLoading) {
      const status = getAvailability(date);
      if (status === 1) {
        return <div className={`${styles.dot} ${styles.dotAvailable}`}></div>;
      } else if (status === 0) {
        return <div className={`${styles.dot} ${styles.dotBooked}`}></div>;
      }
    }
    return null;
  };

  return (
    <section className={styles.availabilitySection} id="availability">
      <div className="container">
        <div className="section-subtitle">Availability</div>
        <h2 className={`section-title ${styles.title}`}>Check open dates before you book.</h2>
        
        <div className={styles.calendarWrapper}>
          <Calendar 
            onChange={onChange} 
            value={value}
            prevLabel={<ChevronLeft size={16} />}
            nextLabel={<ChevronRight size={16} />}
            prev2Label={null}
            next2Label={null}
            formatShortWeekday={(locale, date) => date.toLocaleDateString(locale, { weekday: 'short' })}
            tileContent={tileContent}
          />
          
          <div className={styles.legend}>
            <div className={styles.legendItem}>
              <div className={`${styles.legendDot} ${styles.dotAvailable}`}></div>
              <span>Available</span>
            </div>
            <div className={styles.legendItem}>
              <div className={`${styles.legendDot} ${styles.dotBooked}`}></div>
              <span>Booked</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
