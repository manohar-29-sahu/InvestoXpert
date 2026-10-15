"use client";

import { useState } from "react";
import { insights } from "@/data/homepage";

type Insight = (typeof insights)[number];
type Source = Insight["source"];

const HEAD = {
  eyebrow: "Market Intelligence",
  title: "Insights That Move Markets",
  body: [
    "Stay ahead with expert perspectives, industry developments, and market analysis",
    "shaping the future of real estate.",
  ],
};

const SOURCE_LABEL: Record<Source, string> = {
  uni: "United News of India",
  outlook: "Outlook",
  news18: "News18",
  timesproperty: "TimesProperty",
};

function SourceMark({ source }: { source: Source }) {
  const label = SOURCE_LABEL[source];
  switch (source) {
    case "uni":
      return (
        <span className="src src--uni" role="img" aria-label={label}>
          <span className="src-uni__big">UNI</span>
          <span className="src-uni__small">UNITED NEWS OF INDIA</span>
        </span>
      );
    case "outlook":
      return (
        <span className="src src--outlook" role="img" aria-label={label}>
          Outlook
        </span>
      );
    case "news18":
      return (
        <span className="src src--news18" role="img" aria-label={label}>
          <span className="src-n18__news">NEWS</span>
          <span className="src-n18__num">18</span>
          <span className="src-n18__net">NETWORK</span>
        </span>
      );
    case "timesproperty":
      return (
        <span className="src src--times" role="img" aria-label={label}>
          <span className="src-times__a">TIMES</span>
          <span className="src-times__b">PROPERTY</span>
          <span className="src-times__com">.COM</span>
        </span>
      );
  }
}

function Arrow({ dir }: { dir: "left" | "right" }) {
  const d =
    dir === "left"
      ? "M30.5 20H11.5M18.2 13.2 11.5 20l6.7 6.8"
      : "M9.5 20h19M21.8 13.2 28.5 20l-6.7 6.8";
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
      <path d={d} fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Insights() {
  const [offset, setOffset] = useState(0);
  const n = insights.length;
  const ordered = insights.map((_, i) => insights[(i + offset) % n]);

  return (
    <section className="insights" id="insights" aria-labelledby="insights-title">
      <p className="insights__eyebrow">{HEAD.eyebrow}</p>
      <h2 className="insights__title" id="insights-title">
        {HEAD.title}
      </h2>
      <p className="insights__body">
        {HEAD.body[0]}{" "}
        <br />
        {HEAD.body[1]}
      </p>

      <button
        type="button"
        className="insights__arrow insights__arrow--prev"
        aria-label="Previous insights"
        onClick={() => setOffset((o) => (o + n - 1) % n)}
      >
        <Arrow dir="left" />
      </button>
      <button
        type="button"
        className="insights__arrow insights__arrow--next"
        aria-label="Next insights"
        onClick={() => setOffset((o) => (o + 1) % n)}
      >
        <Arrow dir="right" />
      </button>

      <ul className="insights__grid" aria-live="polite">
        {ordered.map((item, i) => (
          <li key={item.title} className={`icard icard--${i}`}>
            <div className="icard__media">
              <img src={item.image} alt={item.title} className={`icard__img icard__img--${item.source}`} />
            </div>
            <div className="icard__body">
              <span className="icard__tag">{item.tag}</span>
              <h3 className="icard__title">{item.title}</h3>
              <p className={`icard__excerpt${item.source === "uni" ? " icard__excerpt--solid" : ""}`}>
                {item.excerpt}
              </p>
              <div className="icard__foot">
                <a className="icard__more" href="#insights" aria-label={`Read more: ${item.title}`}>
                  Read more...
                </a>
                <SourceMark source={item.source} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
