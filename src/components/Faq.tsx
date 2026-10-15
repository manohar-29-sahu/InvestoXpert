"use client";

import { useId, useState } from "react";
import { faqSection, faqs } from "@/data/homepage";
import { ContactButton } from "./Contact";

type IconPath = { fill: string; d: string };

/* Glyphs traced from the Figma export (local px coordinates). */
const PLUS: IconPath[] = [{"fill":"#e51a4b","d":"M 7.15 3.15 L 4.92 3.15 C 4.89 3.14 4.86 3.13 4.84 3.11 C 4.82 3.09 4.81 3.06 4.8 3.03 L 4.8 0.86 C 4.81 0.75 4.8 0.64 4.76 0.54 C 4.73 0.43 4.67 0.34 4.59 0.25 C 4.52 0.17 4.42 0.11 4.33 0.07 C 4.23 0.02 4.12 0 4 0 C 3.89 0 3.78 0.02 3.67 0.06 C 3.57 0.11 3.48 0.17 3.39 0.25 C 3.32 0.33 3.25 0.42 3.21 0.53 C 3.17 0.63 3.15 0.75 3.15 0.86 L 3.15 3.09 C 3.15 3.12 3.13 3.15 3.11 3.17 C 3.09 3.19 3.06 3.2 3.03 3.2 L 0.86 3.2 C 0.75 3.19 0.64 3.2 0.53 3.24 C 0.42 3.27 0.33 3.33 0.25 3.4 C 0.17 3.48 0.1 3.57 0.06 3.68 C 0.02 3.78 0 3.89 0.01 4 C 0.01 4.23 0.1 4.44 0.26 4.6 C 0.42 4.76 0.64 4.85 0.86 4.86 L 3.09 4.86 C 3.12 4.86 3.15 4.87 3.17 4.9 C 3.19 4.92 3.2 4.94 3.21 4.97 L 3.21 7.2 C 3.2 7.31 3.22 7.41 3.26 7.51 C 3.3 7.61 3.36 7.7 3.43 7.77 C 3.51 7.85 3.6 7.91 3.69 7.95 C 3.79 7.99 3.9 8 4 8 C 4.23 8 4.44 7.9 4.6 7.74 C 4.76 7.58 4.85 7.37 4.86 7.15 L 4.86 4.92 C 4.86 4.89 4.88 4.86 4.9 4.84 C 4.92 4.82 4.95 4.8 4.98 4.8 L 7.21 4.8 C 7.42 4.8 7.62 4.71 7.76 4.56 C 7.91 4.42 8 4.21 8 4 C 8.01 3.89 8 3.77 7.96 3.66 C 7.92 3.56 7.85 3.46 7.77 3.38 C 7.69 3.29 7.59 3.23 7.49 3.19 C 7.38 3.15 7.26 3.13 7.15 3.15 Z"}];
const Q: IconPath[] = [{"fill":"#ffdde5","d":"M 50.74 101.45 C 78.77 101.45 101.49 78.73 101.49 50.71 C 101.49 22.68 78.77 -0.04 50.74 -0.04 C 22.72 -0.04 0 22.68 0 50.71 C 0 78.73 22.72 101.45 50.74 101.45 Z"},{"fill":"#e51a4b","d":"M 99.68 50.71 L 97.86 50.71 C 97.86 76.73 76.77 97.83 50.74 97.83 L 50.74 101.45 C 78.77 101.45 101.49 78.73 101.49 50.71 Z M 50.74 99.64 L 50.74 97.83 C 24.72 97.83 3.62 76.73 3.62 50.71 L 0 50.71 C 0 78.73 22.72 101.45 50.74 101.45 Z M 1.81 50.71 L 3.62 50.71 C 3.62 24.68 24.72 3.59 50.74 3.59 L 50.74 -0.04 C 22.72 -0.04 0 22.68 0 50.71 Z M 50.74 1.77 L 50.74 3.59 C 76.77 3.59 97.86 24.68 97.86 50.71 L 101.49 50.71 C 101.49 22.68 78.77 -0.04 50.74 -0.04 Z"},{"fill":"#e51a4b","d":"M 33.52 36.21 C 33.52 37.71 34.74 38.93 36.24 38.93 C 37.75 38.93 38.96 37.71 38.96 36.21 Z M 57.63 47.26 L 56.23 44.93 C 56.23 44.93 56.22 44.94 56.22 44.94 Z M 48.02 57.95 C 48.02 59.46 49.24 60.67 50.74 60.67 C 52.24 60.67 53.46 59.46 53.46 57.95 Z M 36.24 36.21 L 38.96 36.21 C 38.96 29.73 44.27 24.43 50.74 24.43 L 50.74 18.99 C 41.27 18.99 33.52 26.73 33.52 36.21 Z M 50.74 21.71 L 50.74 24.43 C 57.4 24.43 62.52 29.37 62.52 35.3 L 67.96 35.3 C 67.96 26.01 60.03 18.99 50.74 18.99 Z M 65.24 35.3 L 62.52 35.3 C 62.52 37.68 61.91 39.44 60.9 40.89 C 59.86 42.38 58.31 43.68 56.23 44.93 L 59.03 49.59 C 61.48 48.13 63.73 46.34 65.37 43.99 C 67.04 41.58 67.96 38.72 67.96 35.3 Z M 57.63 47.26 L 56.22 44.94 C 54.09 46.23 51.97 47.69 50.43 49.77 C 48.83 51.95 48.02 54.59 48.02 57.95 L 53.46 57.95 C 53.46 55.52 54.02 54.08 54.81 53 C 55.68 51.82 57 50.83 59.04 49.59 Z"},{"fill":"#e51a4b","d":"M 50.74 78.43 C 53.04 78.43 54.91 76.57 54.91 74.27 C 54.91 71.96 53.04 70.1 50.74 70.1 C 48.44 70.1 46.57 71.96 46.57 74.27 C 46.57 76.57 48.44 78.43 50.74 78.43 Z"}];
const ARROWVIEW: IconPath[] = [{"fill":"#e51a4b","d":"M 10.84 4.17 L 6.87 0.2 C 6.76 0.09 6.61 0.03 6.45 0.03 C 6.29 0.03 6.13 0.09 6.02 0.2 L 5.66 0.57 C 5.55 0.68 5.48 0.83 5.48 0.99 C 5.48 1.15 5.55 1.31 5.66 1.42 L 7.98 3.74 L 0.62 3.74 C 0.29 3.74 0.03 4 0.03 4.33 L 0.03 4.84 C 0.03 5.17 0.29 5.46 0.62 5.46 L 8 5.46 L 5.66 7.79 C 5.55 7.91 5.48 8.05 5.48 8.22 C 5.48 8.38 5.55 8.52 5.66 8.64 L 6.02 9 C 6.13 9.11 6.29 9.17 6.45 9.17 C 6.61 9.17 6.76 9.11 6.87 9 L 10.84 5.03 C 10.95 4.92 11.02 4.76 11.02 4.6 C 11.02 4.44 10.95 4.29 10.84 4.17 Z"}];
const CAL: IconPath[] = [{"fill":"#ffffff","d":"M 10.61 1.91 L 9.99 1.91 L 9.99 0.67 C 9.99 0.5 9.93 0.35 9.81 0.23 C 9.69 0.11 9.54 0.05 9.37 0.05 C 9.2 0.05 9.05 0.11 8.93 0.23 C 8.81 0.35 8.75 0.5 8.75 0.67 L 8.75 1.91 L 3.78 1.91 L 3.78 0.67 C 3.78 0.5 3.71 0.35 3.59 0.23 C 3.48 0.11 3.32 0.05 3.15 0.05 C 2.99 0.05 2.83 0.11 2.71 0.23 C 2.6 0.35 2.53 0.5 2.53 0.67 L 2.53 1.91 L 1.91 1.91 C 1.42 1.91 0.94 2.11 0.59 2.46 C 0.24 2.81 0.05 3.28 0.05 3.78 L 0.05 4.4 L 12.48 4.4 L 12.48 3.78 C 12.48 3.28 12.28 2.81 11.93 2.46 C 11.58 2.11 11.11 1.91 10.61 1.91 Z"},{"fill":"#ffffff","d":"M 0.05 10.61 C 0.05 11.1 0.24 11.58 0.59 11.93 C 0.94 12.28 1.42 12.48 1.91 12.48 L 10.61 12.48 C 11.11 12.48 11.58 12.28 11.93 11.93 C 12.28 11.58 12.48 11.1 12.48 10.61 L 12.48 5.64 L 0.05 5.64 Z"}];
const ARROWSCHED: IconPath[] = [{"fill":"#ffffff","d":"M 10.77 4.13 L 6.8 0.17 C 6.69 0.05 6.54 -0.01 6.38 -0.01 C 6.22 -0.01 6.07 0.05 5.95 0.17 L 5.59 0.52 C 5.48 0.64 5.42 0.79 5.42 0.95 C 5.42 1.11 5.48 1.27 5.59 1.38 L 7.91 3.7 L 0.55 3.7 C 0.22 3.7 -0.04 3.96 -0.04 4.29 L -0.04 4.8 C -0.04 5.13 0.22 5.42 0.55 5.42 L 7.93 5.42 L 5.59 7.75 C 5.48 7.86 5.42 8.01 5.42 8.17 C 5.42 8.33 5.48 8.49 5.59 8.6 L 5.95 8.96 C 6.07 9.07 6.22 9.13 6.38 9.13 C 6.54 9.13 6.69 9.07 6.8 8.95 L 10.77 4.99 C 10.89 4.87 10.95 4.72 10.95 4.56 C 10.95 4.4 10.89 4.25 10.77 4.13 Z"}];
const PHONE: IconPath[] = [{"fill":"#ffffff","d":"M 14.57 9.85 L 11.64 8.55 C 10.93 8.23 10.09 8.44 9.6 9.05 L 8.24 10.75 C 6.93 9.89 5.81 8.77 4.96 7.46 L 6.67 6.11 C 7.27 5.62 7.48 4.78 7.16 4.07 L 5.86 1.14 C 5.52 0.37 4.68 -0.04 3.86 0.17 L 1.38 0.82 C 0.54 1.03 -0.01 1.85 0.11 2.72 C 1.04 9.37 6.34 14.67 12.99 15.6 C 13.07 15.61 13.15 15.62 13.22 15.62 C 14 15.62 14.69 15.1 14.89 14.33 L 15.54 11.85 C 15.75 11.03 15.34 10.19 14.57 9.85 Z"}];

function Glyph({ paths, w, h, className }: { paths: IconPath[]; w: number; h: number; className: string }) {
  return (
    <svg className={className} width={w} height={h} viewBox={`0 0 ${w} ${h}`} aria-hidden="true" focusable="false">
      {paths.map((p, i) => (
        <path key={i} fill={p.fill} d={p.d} />
      ))}
    </svg>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  const baseId = useId();

  return (
    <section className="faq" id="faq" aria-labelledby="faq-title">
      <div className="faq-photo" aria-hidden="true">
        <img src={faqSection.image} alt="" />
        <span className="faq-photo-shade" />
      </div>

      <p className="faq-eyebrow">
        <span className="faq-eyebrow-line" aria-hidden="true" />
        {faqSection.eyebrow}
      </p>
      <h2 className="faq-title" id="faq-title">
        {faqSection.title[0]}
        <br />
        {faqSection.title[1]}
        <span className="faq-accent">{faqSection.titleAccent}</span>
      </h2>
      <p className="faq-lead">{faqSection.body}</p>

      <div className="faq-actions">
        <ContactButton className="faq-btn faq-btn--primary" topic={faqSection.primaryCta}>
          <Glyph className="faq-btn-icon faq-btn-icon--cal" paths={CAL} w={13} h={13} />
          <span className="faq-btn-label">{faqSection.primaryCta}</span>
          <Glyph className="faq-btn-arrow" paths={ARROWSCHED} w={11} h={10} />
        </ContactButton>
        <a className="faq-btn faq-btn--secondary" href="tel:+919880083870">
          <Glyph className="faq-btn-icon faq-btn-icon--phone" paths={PHONE} w={16} h={16} />
          <span className="faq-btn-label">{faqSection.secondaryCta}</span>
        </a>
      </div>

      <div className="faq-panel">
        <div className="faq-help">
          <Glyph className="faq-help-icon" paths={Q} w={102} h={102} />
          <h3 className="faq-help-title">{faqSection.helpTitle}</h3>
          <p className="faq-help-body">{faqSection.helpBody}</p>
          <ContactButton className="faq-help-link" topic="Frequently asked questions">
            {faqSection.helpLink}
            <Glyph className="faq-help-arrow" paths={ARROWVIEW} w={12} h={10} />
          </ContactButton>
        </div>

        <ul className="faq-list">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            const qId = `${baseId}-q${i}`;
            const aId = `${baseId}-a${i}`;
            return (
              <li className={`faq-item${isOpen ? " is-open" : ""}`} key={item.q}>
                <h3 className="faq-q">
                  <button
                    type="button"
                    id={qId}
                    aria-expanded={isOpen}
                    aria-controls={aId}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="faq-q-text">{item.q}</span>
                    <Glyph className="faq-plus" paths={PLUS} w={9} h={8} />
                  </button>
                </h3>
                <div className="faq-a" id={aId} role="region" aria-labelledby={qId} hidden={!isOpen}>
                  <p>{item.a}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
