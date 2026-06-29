"use client";

import { useState } from "react";
import styles from "./Booking.module.css";
import { motion, AnimatePresence } from "framer-motion";

export default function Booking() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    eventType: "",
    service: "Solo Performance (Sax or Keyboard)",
    date: "",
    time: "",
    location: "",
    name: "",
    email: "",
    phone: "",
    specificSong: "",
    dressCode: "",
    otherRequests: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const eventTypes = ["🎂 Birthday", "💍 Wedding", "🏢 Corporate", "🎉 House Party", "🍽️ Dinner Party", "✨ Other"];

  const handleNext = () => setStep(s => Math.min(s + 1, 3));
  const handleBack = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setIsSuccess(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.bookingSection} id="book">
      <div className={`container ${styles.grid}`}>
        <div className={styles.left}>
          <div className="section-subtitle">Reserve your date</div>
          <h2 className={`section-title ${styles.title}`}>Let's make your event unforgettable.</h2>
          <p className={styles.subtitle}>
            Fill out the form and Edmozart Keys will confirm within 24 hours. A 30% deposit secures the date.
          </p>

          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineNumber}>1</div>
              <div className={styles.timelineText}>Submit your event details</div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineNumber}>2</div>
              <div className={styles.timelineText}>Edmozart Keys reviews and confirms availability</div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineNumber}>3</div>
              <div className={styles.timelineText}>Pay 30% deposit to lock in the date</div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineNumber}>4</div>
              <div className={styles.timelineText}>Sit back — the music is handled</div>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          {isSuccess ? (
            <div className={styles.successMessage}>
              <h3 className={styles.successTitle}>Request Sent!</h3>
              <p className={styles.timelineText}>
                Thanks {formData.name}. We've received your booking inquiry for {formData.date || "your event"}. 
                Edmozart Keys will review the details and reach out to you at {formData.phone} or {formData.email} shortly!
              </p>
            </div>
          ) : (
            <>
              <h3 className={styles.formHeader}>Book Edmozart Keys</h3>
              
              <div className={styles.progressBar}>
                <div className={`${styles.progressSegment} ${step >= 1 ? styles.active : ''}`}></div>
                <div className={`${styles.progressSegment} ${step >= 2 ? styles.active : ''}`}></div>
                <div className={`${styles.progressSegment} ${step >= 3 ? styles.active : ''}`}></div>
              </div>

              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div key="step1" initial={{opacity:0, x:10}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-10}}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>What kind of event?</label>
                      <div className={styles.eventGrid}>
                        {eventTypes.map(type => (
                          <div 
                            key={type} 
                            className={`${styles.eventOption} ${formData.eventType === type ? styles.selected : ''}`}
                            onClick={() => setFormData({...formData, eventType: type})}
                          >
                            {type}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Which service?</label>
                      <select 
                        className={styles.select}
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                      >
                        <option>Solo Performance (Sax or Keyboard)</option>
                        <option>Live Keys + Sax Duo</option>
                        <option>Full Band Experience</option>
                        <option>Not sure — let Edmozart Keys suggest</option>
                      </select>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="step2" initial={{opacity:0, x:10}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-10}}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Date & Time</label>
                      <input 
                        type="date" 
                        className={styles.input} 
                        value={formData.date}
                        onChange={e => setFormData({...formData, date: e.target.value})}
                      />
                      <input 
                        type="time" 
                        className={styles.input}
                        value={formData.time}
                        onChange={e => setFormData({...formData, time: e.target.value})}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Location / Venue</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Kempinski Hotel, Accra"
                        className={styles.input}
                        value={formData.location}
                        onChange={e => setFormData({...formData, location: e.target.value})}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Specific Song Requests (Optional)</label>
                      <input 
                        type="text"
                        className={styles.input}
                        placeholder="e.g. Perfect by Ed Sheeran"
                        value={formData.specificSong}
                        onChange={e => setFormData({...formData, specificSong: e.target.value})}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Dress Code (Optional)</label>
                      <input 
                        type="text"
                        className={styles.input}
                        placeholder="e.g. Black Tie, Smart Casual"
                        value={formData.dressCode}
                        onChange={e => setFormData({...formData, dressCode: e.target.value})}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Any Other Requests (Optional)</label>
                      <textarea 
                        className={styles.textarea}
                        placeholder="Additional details..."
                        value={formData.otherRequests}
                        onChange={e => setFormData({...formData, otherRequests: e.target.value})}
                      ></textarea>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div key="step3" initial={{opacity:0, x:10}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-10}}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Your Details</label>
                      <input 
                        type="text" 
                        placeholder="Full Name"
                        className={styles.input}
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                      />
                      <input 
                        type="email" 
                        placeholder="Email Address"
                        className={styles.input}
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                      <input 
                        type="tel" 
                        placeholder="Phone Number"
                        className={styles.input}
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className={styles.formFooter}>
                {step > 1 ? (
                  <button onClick={handleBack} className={styles.backBtn}>← Back</button>
                ) : <div></div>}
                
                <div className={styles.stepIndicator}>Step {step} of 3</div>
                
                {step < 3 ? (
                  <button onClick={handleNext} className={styles.nextBtn}>Next →</button>
                ) : (
                  <button 
                    onClick={handleSubmit} 
                    className={styles.nextBtn}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Submit Inquiry"}
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
