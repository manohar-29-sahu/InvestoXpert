"use client";

import { useRef, type CSSProperties } from "react";
import { events } from "@/data/homepage";
import { ContactButton } from "./Contact";

function AttendeesIcon() {
  return (
    <svg className="events-card-icon" viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="8" cy="4.6" r="4.1" />
      <path d="M1 18.2c0-4.6 2.9-7.6 7-7.6 1.3 0 2.5.3 3.4.8a5.6 5.6 0 0 0-1.3 6.8z" />
      <circle cx="15.1" cy="15.1" r="4.4" />
      <path d="M13 15.2l1.5 1.5 2.8-2.9" fill="none" stroke="#000" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12h16M13.5 5.5 20 12l-6.5 6.5" />
    </svg>
  );
}

const loop = [...events.items, ...events.items];

/* Crop of each photo as placed in the Figma frame: rendered size + offset inside its card. */
const crops: Record<string, CSSProperties> = {
  "/design/event-mappic.jpg": { width: 317.2, height: 211.3, left: -0.5, top: -8.8 },
  "/design/event-expo.jpg": { width: 170.1, height: 226.8, left: -0.5, top: -16 },
  "/design/event-maha-2024.jpg": { width: 290.2, height: 193.2, left: -60.7, top: -0.2 },
  "/design/event-maha-day.jpg": { width: 291.3, height: 193.9, left: -61, top: -0.5 },
};

export function Events() {
  const track = useRef<HTMLDivElement>(null);

  const next = () => {
    const el = track.current;
    if (!el) return;
    const first = el.querySelector<HTMLElement>(".events-card");
    const step = (first?.offsetWidth ?? 316) + 5.6;
    const max = el.scrollWidth - el.clientWidth;
    if (el.scrollLeft + step > max + 1) el.scrollTo({ left: 0, behavior: "smooth" });
    else el.scrollBy({ left: step, behavior: "smooth" });
  };

  return (
    <section className="events" id="events" aria-labelledby="events-title">
      <div className="events-intro">
        <p className="events-eyebrow">{events.eyebrow}</p>
        <h2 className="events-title" id="events-title">
          {events.title[0]}
          <br />
          {events.title[1]}
        </h2>
        <p className="events-body">{events.body}</p>
        <ContactButton className="events-cta" topic="Upcoming events">
          <span>{events.cta}</span>
          <ArrowRight className="events-cta-arrow" />
        </ContactButton>
      </div>

      <div className="events-track" ref={track}>
        {loop.map((item, i) => (
          <article
            key={`${item.title}-${i}`}
            className={`events-card${item.large ? " is-large" : ""}`}
            aria-hidden={i >= events.items.length ? true : undefined}
          >
            <img src={item.image} alt={item.title} className="events-card-img" style={crops[item.image]} />
            <div className="events-card-info">
              <h3 className="events-card-title">{item.title}</h3>
              <p className="events-card-city">{item.city}</p>
              <p className="events-card-count">
                <AttendeesIcon />
                {item.attendees}
              </p>
            </div>
          </article>
        ))}
      </div>

      <button type="button" className="events-next" aria-label="Show more events" onClick={next}>
        <svg viewBox="0 0 40 40" aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8.9 19.9h19.4M21 12.5l7.3 7.4-7.3 7.4" />
        </svg>
      </button>
    </section>
  );
}
