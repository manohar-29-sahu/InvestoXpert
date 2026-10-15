import { dream } from "@/data/homepage";
import { ContactButton } from "./Contact";

type IconPath = { fill: string; d: string };

const ARROWDREAM: IconPath[] = [{"fill":"#ffffff","d":"M 10.84 4.18 L 6.87 0.21 C 6.76 0.1 6.61 0.03 6.45 0.03 C 6.29 0.03 6.13 0.1 6.02 0.21 L 5.66 0.57 C 5.55 0.68 5.48 0.83 5.48 0.99 C 5.48 1.15 5.55 1.31 5.66 1.42 L 7.98 3.74 L 0.62 3.74 C 0.29 3.74 0.03 4.01 0.03 4.34 L 0.03 4.85 C 0.03 5.18 0.29 5.46 0.62 5.46 L 8 5.46 L 5.66 7.8 C 5.55 7.91 5.48 8.06 5.48 8.22 C 5.48 8.38 5.55 8.53 5.66 8.64 L 6.02 9 C 6.13 9.11 6.29 9.17 6.45 9.17 C 6.61 9.17 6.76 9.11 6.87 9 L 10.84 5.03 C 10.95 4.92 11.02 4.77 11.02 4.6 C 11.02 4.44 10.95 4.29 10.84 4.18 Z"}];

export function DreamHome() {
  return (
    <section className="dream" aria-labelledby="dream-title">
      <h2 className="dream-title" id="dream-title">
        {dream.title[0]}
        <br />
        {dream.title[1]}
      </h2>
      <p className="dream-body">{dream.body}</p>
      <ContactButton className="dream-cta" topic={dream.cta}>
        <span className="dream-cta-label">{dream.cta}</span>
        <svg className="dream-cta-arrow" width="12" height="10" viewBox="0 0 12 10" aria-hidden="true" focusable="false">
          {ARROWDREAM.map((p, i) => (
            <path key={i} fill={p.fill} d={p.d} />
          ))}
        </svg>
      </ContactButton>

      <div className="dream-figure">
        <img className="dream-family" src={dream.image} alt="A smiling family sitting together, holding a model house" />
      </div>
      <div className="dream-reflection" aria-hidden="true">
        <img src={dream.image} alt="" />
      </div>
    </section>
  );
}
