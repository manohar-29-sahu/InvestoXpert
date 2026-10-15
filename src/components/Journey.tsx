import type { CSSProperties, ReactNode } from "react";
import { journey, steps } from "@/data/homepage";

/* Absolute layout of each step, measured from the Figma frame (px relative to the section top).
   text = top-left of the text block (number + copy), circle = icon disc, image = step photo. */
const layout = [
  { text: [762.2, 565.3], copyX: 58.7, width: 285, circle: [1113, 572], image: [202, 571], crop: [556.1, 312.5, -46.3, -19.4] },
  { text: [328.9, 814.3], copyX: 67.1, width: 270, circle: [202, 821], image: [772, 718], crop: [480.5, 270, -14.1, -33] },
  { text: [757.3, 960.7], copyX: 67.9, width: 285, circle: [1117, 967.3], image: [202, 969], crop: [451.4, 257.6, 0, -17.4] },
  { text: [329, 1211.7], copyX: 69, width: 250, circle: [202, 1218.3], image: [772, 1114], crop: [451.6, 257.6, 0, -17.4] },
  { text: [757.1, 1355.6], copyX: 69.1, width: 285, circle: [1118, 1363], image: [202, 1366], crop: [594.1, 333.9, -70.6, -72.9] },
  { text: [346.9, 1608.6], copyX: 69.6, width: 228, circle: [202, 1615.3], image: [772, 1509], crop: [579.9, 325.9, -25.1, -25.5] },
] as const;

/* timeline dot centres (px from the section top) */
const dots = [610, 833.5, 1009.5, 1231.5, 1409.5, 1648.5];

/* Step icons, traced from the Figma frame. Each SVG covers the whole 120px disc (viewBox in 3x units). */
const BG = "#f9d1db";

function SearchHomeIcon() {
  return (
    <svg viewBox="0 0 360 360" aria-hidden="true">
      <path d="M212 210l44 44" stroke="currentColor" strokeWidth="22" strokeLinecap="round" />
      <circle cx="167" cy="165" r="65" />
      <path
        fill={BG}
        stroke={BG}
        strokeWidth="6"
        strokeLinejoin="round"
        d="M168 135l-27 24v28c0 2 1 3 3 3h48c2 0 3-1 3-3v-28z"
      />
      <path d="M161 190v-17c0-3 3-5 7-5s7 2 7 5v17z" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg viewBox="0 0 360 360" aria-hidden="true">
      <g transform="translate(90 81) scale(0.5)">
        <path d="M133 95c0-35 27-53 57-53s57 18 57 53v55c0 35-27 60-57 60s-57-25-57-60z" />
        <rect x="122" y="118" width="20" height="52" rx="10" />
        <rect x="238" y="118" width="20" height="52" rx="10" />
        <path d="M60 362l15-100c1-10 7-16 17-20l53-24 47 100 48-100 53 24c10 4 15 10 16 20l15 100z" />
        <path d="M176 242h28l-7 16 9 42-14 18-14-18 8-42z" />
      </g>
    </svg>
  );
}

function BuildingPinIcon() {
  return (
    <svg viewBox="0 0 360 360" aria-hidden="true">
      <path d="M138 258V146h17v-11h28v11h29v112z" />
      <rect x="123" y="256" width="115" height="5" rx="2" />
      <g fill={BG}>
        <rect x="152" y="162" width="11" height="18" />
        <rect x="175" y="162" width="11" height="18" />
        <rect x="198" y="162" width="11" height="18" />
        <rect x="152" y="193" width="11" height="18" />
        <rect x="175" y="193" width="11" height="18" />
        <rect x="198" y="193" width="11" height="18" />
        <rect x="152" y="225" width="11" height="18" />
        <rect x="175" y="225" width="11" height="18" />
        <rect x="198" y="225" width="11" height="18" />
      </g>
      <path
        stroke={BG}
        strokeWidth="9"
        paintOrder="stroke"
        d="M222 190c-14-15-32-34-32-56a32 32 0 0 1 64 0c0 22-18 41-32 56z"
      />
      <circle cx="222" cy="131" r="11" fill={BG} />
    </svg>
  );
}

function RupeeHandIcon() {
  return (
    <svg viewBox="0 0 360 360" aria-hidden="true">
      <circle cx="215" cy="153" r="43" />
      <path
        d="M199 133h32M199 145h32M206 133c14 0 20 6 20 12s-6 12-20 12h-6l26 21"
        fill="none"
        stroke={BG}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="112" y="186" width="26" height="60" rx="3" />
      <circle cx="124" cy="201" r="2.6" fill={BG} />
      <path d="M144 198l20-5c9-2 19-1 27 3l21 11c8 5 3 16-6 15l-22-2 20 1c7 0 13-2 18-5l26-14c9-5 19 4 13 12-3 4-6 7-10 10l-34 24c-9 6-19 8-29 7l-44-6z" />
      <path d="M184 226l44-3" stroke={BG} strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg viewBox="0 0 360 360" aria-hidden="true">
      <g transform="translate(99 99) scale(0.5)" strokeLinejoin="round">
        <path d="M40 126l48-62 26 18-52 76z" stroke="currentColor" strokeWidth="10" />
        <path d="M284 82l26-22 48 60-30 34z" stroke="currentColor" strokeWidth="10" />
        <path d="M124 92c30-12 70-16 106-14l40 6 40 104c-8 14-24 20-38 15l-6 10c4 16-10 28-24 22l-8 10c2 14-12 22-24 16l-10 10c-2 14-18 18-28 8L76 172z" />
        <g stroke={BG} strokeWidth="6" paintOrder="stroke">
          <circle cx="80" cy="190" r="20" />
          <circle cx="106" cy="222" r="19" />
          <circle cx="133" cy="249" r="17" />
          <circle cx="160" cy="271" r="14" />
          <circle cx="188" cy="286" r="11" />
        </g>
        <path d="M262 172c-16-28-36-44-62-44h-40c-16 0-22-22-4-30l50-10" fill="none" stroke={BG} strokeWidth="9" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg viewBox="0 0 360 360" aria-hidden="true">
      <path d="M108 226v-56a59 63 0 0 1 118 0v56" fill="none" stroke="currentColor" strokeWidth="11" strokeLinecap="round" />
      <path d="M113 163H96a20 20 0 0 0-20 20v25a20 20 0 0 0 20 20h17z" />
      <path d="M221 163h17a20 20 0 0 1 20 20v25a20 20 0 0 1-20 20h-17z" />
      <path d="M102 236c0 18 14 28 48 28" fill="none" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" />
      <rect x="150" y="253" width="36" height="21" rx="10.5" />
    </svg>
  );
}

function StepIcon({ name }: { name: string }) {
  switch (name) {
    case "search-home":
      return <SearchHomeIcon />;
    case "person":
      return <PersonIcon />;
    case "building-pin":
      return <BuildingPinIcon />;
    case "rupee-hand":
      return <RupeeHandIcon />;
    case "handshake":
      return <HandshakeIcon />;
    default:
      return <HeadsetIcon />;
  }
}

function px(x: number, y: number, extra?: CSSProperties): CSSProperties {
  return { left: x, top: y, ...extra };
}

export function Journey() {
  return (
    <section className="journey" aria-labelledby="journey-title">
      <div className="journey-banner">
        <div className="journey-banner-media">
          <img src={journey.image} alt="An InvestoXpert advisor discussing a project model with a couple" className="journey-banner-img" />
        </div>
        <p className="journey-eyebrow">{journey.eyebrow}</p>
        <span className="journey-eyebrow-line" aria-hidden="true" />
        <h2 className="journey-title" id="journey-title">
          {journey.title[0]}
          <br />
          {journey.title[1]}
        </h2>
        <p className="journey-body">{journey.body}</p>
      </div>

      <div className="journey-commit">
        <h3 className="journey-commit-title">{journey.commitmentEyebrow}</h3>
        <span className="journey-commit-line" aria-hidden="true" />
        <p className="journey-commit-body">{journey.commitmentBody}</p>
      </div>

      <div className="journey-line" aria-hidden="true">
        {dots.map((y) => (
          <span key={y} className="journey-dot" style={{ top: y - 571 - 4 }} />
        ))}
      </div>

      <ol className="journey-steps">
        {steps.map((step, i) => {
          const l = layout[i];
          const content: ReactNode = (
            <>
              <span className="journey-step-n" aria-hidden="true">
                {step.n}
              </span>
              <div className="journey-step-copy" style={{ left: l.copyX, width: l.width }}>
                <h3 className="journey-step-title">
                  <span className="sr-only">Step {step.n}: </span>
                  {step.title}
                </h3>
                <span className="journey-step-rule" aria-hidden="true" />
                <p className="journey-step-kicker">{step.kicker}</p>
                <p className="journey-step-body">{step.body}</p>
              </div>
            </>
          );
          return (
            <li key={step.n} className="journey-step">
              <span className="journey-step-img" style={px(l.image[0], l.image[1])}>
                <img
                  src={step.image}
                  alt=""
                  style={{ width: l.crop[0], height: l.crop[1], left: l.crop[2], top: l.crop[3] }}
                />
              </span>
              <div className="journey-step-text" style={px(l.text[0], l.text[1])}>
                {content}
              </div>
              <span className="journey-step-icon" style={px(l.circle[0], l.circle[1])} aria-hidden="true">
                <StepIcon name={step.icon} />
              </span>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
