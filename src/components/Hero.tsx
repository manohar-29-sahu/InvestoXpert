"use client";

import { useId, useState, type FormEvent } from "react";
import { hero, propertyTypes } from "@/data/homepage";

type Tab = (typeof hero.tabs)[number];

/* 4-point "AI" sparkle (one large + two small concave stars), traced from the design. */
function star(cx: number, cy: number, r: number) {
  const k = r * 0.2;
  return `M${cx} ${cy - r}Q${cx + k} ${cy - k} ${cx + r} ${cy}Q${cx + k} ${cy + k} ${cx} ${cy + r}Q${cx - k} ${cy + k} ${cx - r} ${cy}Q${cx - k} ${cy - k} ${cx} ${cy - r}Z`;
}
const SPARKLE_PATH = [star(12.33, 13.33, 7.8), star(3.25, 4.5, 3.85), star(3.25, 21.3, 3.85)].join("");

function Sparkle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 26" fill="currentColor" aria-hidden="true">
      <path d={SPARKLE_PATH} />
    </svg>
  );
}

export function Hero() {
  const [tab, setTab] = useState<Tab>("Buy");
  const [type, setType] = useState(hero.typeValue);
  const [where, setWhere] = useState("");
  const typeId = useId();
  const whereId = useId();

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section className="hero" id="top" aria-label="Hero">
      <div className="hero-media" aria-hidden="true">
        <img className="hero-photo" src="/design/hero.jpg" alt="" />
        <img className="hero-overlay" src="/design/hero-overlay.png" alt="" />
        <div className="hero-fade" />
      </div>

      <p className="hero-kicker">{hero.kicker}</p>
      <h1 className="hero-title">
        <span className="hero-title-main">{hero.title}</span>
        <span className="hero-title-sub">
          <span className="hero-accent">{hero.subtitleAccent}</span>{" "}
          <span className="hero-title-rest">{hero.subtitle}</span>
        </span>
      </h1>
      <p className="hero-body">{hero.body}</p>

      <form className="hero-search" role="search" aria-label="Property search" onSubmit={onSubmit}>
        <div className="hero-tabs" role="tablist" aria-label="Search mode">
          {hero.tabs.map((t) => (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={tab === t}
              className={`hero-tab hero-tab--${t.toLowerCase()}${tab === t ? " is-active" : ""}`}
              onClick={() => setTab(t)}
            >
              {t}
              {t === "AI" ? <Sparkle className="hero-tab-spark" /> : null}
            </button>
          ))}
        </div>

        <div className="hero-card">
          <div className="hero-type">
            <label className="hero-label hero-label--type" htmlFor={typeId}>
              {hero.typeLabel}
            </label>
            <select
              id={typeId}
              className="hero-select"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              {propertyTypes.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
            <svg className="hero-chevron" viewBox="0 0 18 11" aria-hidden="true">
              <path d="M1 1.2 9 9.4l8-8.2" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <span className="hero-divider hero-divider--1" aria-hidden="true" />

          <div className="hero-where">
            <label className="hero-label hero-label--where" htmlFor={whereId}>
              {hero.whereLabel}
            </label>
            <svg className="hero-search-icon" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="10.8" cy="10.7" r="7.1" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M15.8 15.7 21.2 21.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              id={whereId}
              className="hero-input"
              type="search"
              value={where}
              onChange={(e) => setWhere(e.target.value)}
              placeholder={hero.placeholder}
              autoComplete="off"
            />
            <Sparkle className="hero-input-spark" />
          </div>

          <span className="hero-divider hero-divider--2" aria-hidden="true" />

          <button type="submit" className="hero-submit">
            {hero.submit}
          </button>
        </div>
      </form>
    </section>
  );
}
