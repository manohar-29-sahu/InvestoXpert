import { Inter } from "next/font/google";
import { developers } from "@/data/homepage";

const inter = Inter({ subsets: ["latin"], weight: ["500"], display: "swap" });

/* Absolute logo positions (x, y within the strip) measured from the design. */
const positions: Record<string, [number, number]> = {
  "Palm Olympia": [317, 37],
  M3M: [445, 43],
  LODHA: [552, 52],
  DLF: [684, 45],
  SOBHA: [807, 43],
  OMAXE: [938, 45],
  EMAAR: [1083, 47],
};

export function Developers() {
  return (
    <section className="developers" aria-label="Our trusted developers">
      <h2 className={`developers-title ${inter.className}`}>
        Our Trusted{" "}
        <br />
        Developers
      </h2>
      <span className="developers-rule" aria-hidden="true" />
      <ul className="developers-list">
        {developers.map((d) => {
          const [x, y] = positions[d.name] ?? [0, 0];
          return (
            <li key={d.name} className="developers-item" style={{ left: x, top: y }}>
              <img src={d.image} alt={d.name} width={d.width} height={d.height} />
            </li>
          );
        })}
      </ul>
      <a className="developers-more" href="#projects">
        &amp; 50+ More
      </a>
    </section>
  );
}
