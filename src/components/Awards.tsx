import { awards } from "@/data/homepage";

const HEAD = {
  eyebrow: "AWARD &\u00a0 RECOGNITION",
  title: "A Decade of Trust. A Legacy of Excellence.",
  body: [
    "Our achievements are a reflection of the trust of our clients, the strength of our",
    "partnerships, and our commitment to raising industry standards.",
  ],
  cta: "Click heer  To View All",
};


function TimesGroupMark() {
  return (
    <span className="acard__logo" role="img" aria-label="The Times Group">
      <svg width="13" height="9" viewBox="0 0 13 9" aria-hidden="true">
        <path
          d="M1.2 3.6c0-1 .8-1.6 1.7-1.6.6 0 1 .3 1.3.6.3-.6.9-1.1 1.6-1.2L6.5.6l.7.8c.7.1 1.3.6 1.6 1.2.3-.3.7-.6 1.3-.6.9 0 1.7.6 1.7 1.6 0 .6-.3 1-.7 1.2H1.9c-.4-.2-.7-.6-.7-1.2Z"
          fill="#222"
        />
        <rect x="1.4" y="5.6" width="10.2" height="0.9" fill="#444" />
        <rect x="2.6" y="7.3" width="7.8" height="0.8" fill="#666" />
      </svg>
    </span>
  );
}

export function Awards() {
  return (
    <section className="awards" id="awards" aria-labelledby="awards-title">
      <p className="awards__eyebrow">{HEAD.eyebrow}</p>
      <h2 className="awards__title" id="awards-title">
        {HEAD.title}
      </h2>
      <p className="awards__body">
        {HEAD.body[0]}{" "}
        <br />
        {HEAD.body[1]}
      </p>

      <ul className="awards__grid">
        {awards.map((item, i) => (
          <li key={item.title} className={`acard acard--${i}`}>
            <div className="acard__media">
              <img src={item.image} alt={item.title} className={`acard__img acard__img--${i}`} />
            </div>
            <div className="acard__body">
              <span className="acard__tag">{item.tag}</span>
              <h3 className="acard__title">{item.title}</h3>
              <p className={`acard__detail${item.source ? "" : " acard__detail--tall"}`}>{item.detail}</p>
              <div className="acard__foot">
                <a className="acard__more" href="#awards" aria-label={`Read more: ${item.title}`}>
                  Read more...
                </a>
                {item.source ? <span className="acard__source">{item.source}</span> : <TimesGroupMark />}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <a className="awards__all" href="#awards">
        {HEAD.cta}
      </a>
    </section>
  );
}
