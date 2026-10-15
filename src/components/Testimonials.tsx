"use client";

import { useState } from "react";
import { stories } from "@/data/homepage";

type Slide = {
  name: string;
  city: string;
  image: string;
};

/* Crop of each photo as placed in the Figma frame: rendered size + offset inside its box. */
type Crop = { width: number; height: number; left: number; top: number };
const mainCrop: Crop = { width: 571.9, height: 381.3, left: -21.7, top: -63.8 };
const thumbCrops: Crop[] = [
  { width: 209.5, height: 117.8, left: -53.5, top: -0.6 },
  { width: 175.7, height: 98.8, left: -37.2, top: -0.3 },
  { width: 206.2, height: 137.3, left: -52.2, top: -14.5 },
];

const slides: Slide[] = [
  { name: "Rahul & Nisha Malhotra", city: "Noida", image: stories.main.image },
  ...stories.playlist,
];

function PlayGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="4.5 1.2 18 23.6" preserveAspectRatio="none" aria-hidden="true">
      <path d="M4.5 3.2c0-1.6 1.7-2.5 3-1.7l14 8.9c1.3.8 1.3 2.6 0 3.4l-14 8.9c-1.3.8-3-.1-3-1.7V3.2z" />
    </svg>
  );
}

function PauseGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 26" aria-hidden="true">
      <rect x="4" y="2" width="5.5" height="22" rx="1.5" />
      <rect x="14.5" y="2" width="5.5" height="22" rx="1.5" />
    </svg>
  );
}

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const current = slides[active];

  const select = (i: number) => {
    setActive(i);
    setPlaying(false);
  };

  return (
    <section className="stories" aria-labelledby="stories-title">
      <div className="stories-intro">
        <p className="stories-eyebrow">{stories.eyebrow}</p>
        <h2 className="stories-title" id="stories-title">
          {stories.title[0]}
          <br />
          {stories.title[1]}
        </h2>
        <p className="stories-body">{stories.body}</p>
        <button
          type="button"
          className="stories-watch"
          onClick={() => {
            select(0);
            setPlaying(true);
          }}
        >
          <span className="stories-watch-icon" aria-hidden="true">
            <PlayGlyph />
          </span>
          <span className="stories-watch-label">{stories.watchAll}</span>
        </button>
      </div>

      <div className="stories-card">
        <div className={`stories-media${playing ? " is-playing" : ""}`}>
          <img
            src={current.image}
            alt={`${current.name} video testimonial`}
            className="stories-media-img"
            style={active === 0 ? mainCrop : undefined}
          />
          <button
            type="button"
            className="stories-play"
            aria-pressed={playing}
            aria-label={playing ? `Pause ${current.name}'s story` : `Play ${current.name}'s story`}
            onClick={() => setPlaying((p) => !p)}
          >
            {playing ? <PauseGlyph /> : <PlayGlyph />}
          </button>
        </div>
        <blockquote className="stories-quote">
          {active === 0 ? (
            <>
              <p className="stories-quote-text">{stories.main.quote}</p>
              <footer className="stories-quote-author">
                <strong>{stories.main.author}</strong>
                <br />
                <em>{stories.main.role}</em>
              </footer>
            </>
          ) : (
            <>
              <p className="stories-quote-text">Hear {current.name} share their InvestoXpert journey.</p>
              <footer className="stories-quote-author">
                <strong>— {current.name},</strong>
                <br />
                <em>InvestoXpert in {current.city}</em>
              </footer>
            </>
          )}
        </blockquote>
      </div>

      <div className="stories-dots" role="tablist" aria-label="Choose a story">
        {slides.map((s, i) => (
          <button
            key={s.name}
            type="button"
            role="tab"
            aria-selected={active === i}
            aria-label={`Show ${s.name}'s story`}
            className={`stories-dot${active === i ? " is-active" : ""}`}
            onClick={() => select(i)}
          />
        ))}
      </div>

      <ul className="stories-list">
        {stories.playlist.map((item, i) => (
          <li key={item.name} className="stories-row-wrap" style={{ top: 155 + i * 113 }}>
            <button
              type="button"
              className={`stories-row${active === i + 1 ? " is-active" : ""}`}
              aria-pressed={active === i + 1}
              onClick={() => select(i + 1)}
            >
              <span className="stories-thumb">
                <img src={item.image} alt="" style={thumbCrops[i]} />
                <img src="/design/play-small.png" alt="" className="stories-thumb-play" />
              </span>
              <span className="stories-row-name">{item.name}</span>
              <span className="stories-row-city">
                InvestoXpert in <span>{item.city}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
