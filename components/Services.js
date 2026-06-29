import styles from "./Services.module.css";
import { Guitar, Music, Keyboard } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Solo Performance",
      icon: <Music size={32} strokeWidth={1.5} />,
      description: "Saxophone or keyboard — perfect for dinner parties, lounges, and intimate celebrations.",
      price: "FROM GH₵ 1,000 · 1.5 HRS"
    },
    {
      title: "Live Keys + Sax Duo",
      icon: <Keyboard size={32} strokeWidth={1.5} />,
      description: "Two instruments, one seamless set. Great for birthdays, engagement parties, and receptions.",
      price: "FROM GH₵ 1,500 · 2 HRS",
      mostBooked: true
    },
    {
      title: "Full Band Experience",
      icon: <Guitar size={32} strokeWidth={1.5} />,
      description: "Edmozart Keys leads a 4-piece group through your favourite genres — afrobeats, jazz, RnB, and more.",
      price: "FROM GH₵ 3,000 · 3 HRS"
    }
  ];

  return (
    <section className={styles.servicesSection} id="services">
      <div className="container">
        <div className="section-subtitle">What's on offer</div>
        <h2 className={`section-title ${styles.title}`}>
          Pick your vibe, <br />
          Edmozart Keys handles the rest.
        </h2>
        <p className={styles.subtitle}>
          Every package can be tailored — just tell him what you need during the booking flow.
        </p>
        
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={`${styles.card} ${service.mostBooked ? styles.cardActive : ''}`}>
              {service.mostBooked && <div className={styles.badge}>MOST BOOKED</div>}
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardText}>{service.description}</p>
              <div className={styles.cardPrice}>{service.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
