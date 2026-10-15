"use client";

import { useState } from "react";
import { Inter, Poppins } from "next/font/google";
import { markets } from "@/data/homepage";

/* The intro paragraph and the "Avg Price … sq. ft." labels use Poppins Light, which the root layout does not load. */
const poppinsLight = Poppins({ subsets: ["latin"], weight: ["300"], variable: "--font-poppins-light", display: "swap" });
/* The rupee sign in the price line is drawn with Inter's glyph in the design. */
const inter = Inter({ subsets: ["latin"], weight: ["300"], variable: "--font-inter-mk", display: "swap" });

/* Crop used by the design where it differs from a centred cover crop. */
const IMAGE_POSITION: Partial<Record<string, string>> = { Noida: "50% -110px" };

const INTRO = "Explore high potential cities driving India’s real estate growth and investment returns.";

/* "₹ 16,500/ sq. ft." -> ["₹ ", "16,500/", " sq. ft."] (the design sets each part in a different weight). */
function splitPrice(price: string) {
  const match = /^(\D*?)([\d.,]+\/?)(.*)$/.exec(price);
  return match ? [match[1], match[2], match[3]] : ["", price, ""];
}

export function Markets() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  return (
    <section className={`markets ${poppinsLight.variable} ${inter.variable}`} id="markets" aria-labelledby="markets-title">
      <p className="markets-eyebrow">Explore Market</p>
      <h2 className="markets-title" id="markets-title">
        Fastest Growing Real Estate Markets in India
      </h2>
      <p className="markets-intro">{INTRO}</p>
      <ul className="markets-grid" onMouseLeave={() => setHoveredCity(null)}>
        {markets.map((market, index) => {
          const [currency, amount, unit] = splitPrice(market.price);
          const isActive = hoveredCity ? hoveredCity === market.city : index === 0;

          return (
            <li
              className={`mcard${isActive ? " is-active" : ""}`}
              key={market.city}
              onMouseEnter={() => setHoveredCity(market.city)}
              onFocus={() => setHoveredCity(market.city)}
            >
              <div className="mcard-media">
                <img
                  className="mcard-img"
                  src={market.image}
                  alt={`${market.city} skyline`}
                  style={IMAGE_POSITION[market.city] ? { objectPosition: IMAGE_POSITION[market.city] } : undefined}
                />
              </div>
              <h3 className="mcard-city">{market.city}</h3>
              <p className="mcard-price">
                <span className="mcard-price-label">Avg Price</span>
                <span className="mcard-price-currency">{currency}</span>
                <span className="mcard-price-value">{amount}</span>
                <span className="mcard-price-unit">{unit}</span>
              </p>
              <a
                className={`mcard-btn${isActive ? " mcard-btn--primary" : ""}`}
                href={market.href}
              >
                <span>Explore {market.city}</span>
                <svg className="mcard-btn-arrow" viewBox="0 0 10 8" aria-hidden="true" focusable="false">
                  <path d="M0.7 4H9.3M5.9 0.7L9.3 4L5.9 7.3" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
