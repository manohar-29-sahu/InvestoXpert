import type { CSSProperties } from "react";
import { offices } from "@/data/homepage";
import { ContactButton } from "./Contact";

const heading = {
  eyebrow: "OUR PRESENCE",
  title: "Across Cities. United by Expertise.",
  body: [
    "Our growing presence across India allows us to deliver local market insights and personalized support",
    "wherever your real estate journey takes you.",
  ],
};

/* Line breaks exactly as set in the design (each card's text box wraps differently). */
const addressLines: Record<string, string[]> = {
  "Noida HQ": ["3rd Floor, Riana Aurelia, Plot 93-94, Sector 136,", "Noida, Uttar Pradesh 201305"],
  Gurgaon: ["912-915, 9th Floor, JMD Megapolis, Sohna Road,", "Sector 48, Gurugram, Haryana 122018"],
  Dubai: ["2107, Conrad Business Towers, Next to World", "Trade Center Metro Station, Sheikh Zayed Road,", "Dubai, UAE"],
  "Mumbai (Thane West)": ["B-804, 8th Floor, B-Wing, Lodha Supremus,", "Kolshet Road, Thane (West), Mumbai,", "Maharashtra 400607"],
  Pune: ["Floor 8, Office 810 & 811, Nyati Emporious,", "Baner, Pune, Maharashtra 411045"],
  Bangalore: ["307, Joy Life, 1st & 2nd Floor, 3rd Block, HRBR", "Layout, Bengaluru, Karnataka 560043"],
  Hyderabad: ["Manjeera Trinity Corporate, #206, JNTU-", "HITECH City Road, KPHB 3rd Phase,", "Kukatpally, Telangana 500072"],
  Kolkata: [
    "Mani Casadona, Unit No. 5WS2E, 5th Floor, Plot No.",
    "IIF/04, Action Area II-F, Newtown, Kolkata, West",
    "Bengal 700156",
  ],
};

/* Photos are "cover"-cropped in the design, except Pune which is zoomed in further. */
const imageCrop: Record<string, CSSProperties> = {
  Pune: { width: "294.7px", height: "408.4px", left: "-11.49px", top: "-172.76px", objectFit: "fill" },
};

/* Icon outlines traced from the design (18x16 boxes). */
const ICON = {
  pin: "M 8.8 2.04C6.63 2.04 4.87 3.8 4.87 5.97C4.87 6.62 5.03 7.27 5.34 7.84L8.59 13.71C8.63 13.79 8.71 13.84 8.8 13.84C8.89 13.84 8.97 13.79 9.02 13.71L12.27 7.84C12.57 7.27 12.73 6.62 12.73 5.97C12.73 3.8 10.97 2.04 8.8 2.04ZM 8.8 7.94C7.71 7.94 6.83 7.06 6.83 5.97C6.83 4.89 7.71 4 8.8 4C9.89 4 10.77 4.89 10.77 5.97C10.77 7.06 9.89 7.94 8.8 7.94 Z",
  clock: "M 8.8 3.34C7.73 3.34 6.68 3.66 5.79 4.25C4.9 4.85 4.21 5.7 3.8 6.68C3.39 7.67 3.29 8.76 3.49 9.81C3.7 10.86 4.21 11.82 4.97 12.58C5.73 13.34 6.7 13.85 7.74 14.06C8.79 14.27 9.88 14.16 10.87 13.75C11.86 13.34 12.7 12.65 13.3 11.76C13.89 10.87 14.21 9.82 14.21 8.75C14.21 7.32 13.64 5.95 12.62 4.93C11.61 3.92 10.23 3.35 8.8 3.34ZM 10.62 10.58C10.53 10.67 10.41 10.72 10.27 10.72C10.14 10.72 10.02 10.67 9.93 10.58L8.45 9.1C8.36 9.01 8.31 8.88 8.31 8.75L8.31 5.8C8.31 5.67 8.36 5.55 8.45 5.46C8.54 5.36 8.67 5.31 8.8 5.31C8.93 5.31 9.05 5.36 9.15 5.46C9.24 5.55 9.29 5.67 9.29 5.8L9.29 8.55L10.62 9.88C10.71 9.97 10.77 10.1 10.77 10.23C10.77 10.36 10.71 10.48 10.62 10.58 Z",
  phone: "M 13.75 9.64C13.03 9.64 12.32 9.52 11.65 9.3C11.32 9.19 10.92 9.29 10.71 9.5L9.39 10.5C7.85 9.68 6.9 8.73 6.09 7.2L7.06 5.91C7.32 5.66 7.41 5.29 7.3 4.94C7.07 4.27 6.96 3.56 6.96 2.84C6.96 2.31 6.54 1.89 6.01 1.89L3.85 1.89C3.32 1.89 2.9 2.31 2.9 2.84C2.9 8.82 7.77 13.69 13.75 13.69C14.28 13.69 14.7 13.27 14.7 12.74L14.7 10.58C14.7 10.06 14.28 9.64 13.75 9.64 Z",
  mail: "M 9.79 9.15C9.49 9.35 9.15 9.45 8.8 9.45C8.45 9.45 8.11 9.35 7.81 9.15L2.98 5.93C2.95 5.91 2.93 5.89 2.9 5.87L2.9 11.16C2.9 11.76 3.39 12.24 3.98 12.24L13.62 12.24C14.22 12.24 14.7 11.75 14.7 11.16L14.7 5.87C14.68 5.89 14.65 5.91 14.62 5.93 Z M 3.36 5.36L8.2 8.58C8.38 8.7 8.59 8.76 8.8 8.76C9.01 8.76 9.22 8.7 9.4 8.58L14.24 5.36C14.53 5.16 14.7 4.84 14.7 4.49C14.7 3.89 14.21 3.4 13.62 3.4L3.98 3.4C3.39 3.4 2.9 3.89 2.9 4.49C2.9 4.84 3.07 5.16 3.36 5.36 Z",
};
const MAP_PIN = "M 5.45 1.69C3.28 1.69 1.52 3.45 1.52 5.62C1.52 6.27 1.68 6.92 1.99 7.49L5.24 13.36C5.28 13.44 5.36 13.49 5.45 13.49C5.54 13.49 5.62 13.44 5.67 13.36L8.91 7.49C9.22 6.92 9.39 6.27 9.39 5.62C9.39 3.45 7.62 1.69 5.45 1.69ZM 5.45 7.59C4.37 7.59 3.48 6.71 3.48 5.62C3.48 4.54 4.37 3.66 5.45 3.66C6.54 3.66 7.42 4.54 7.42 5.62C7.42 6.71 6.54 7.59 5.45 7.59 Z";

function Icon({ d, className }: { d: string; className: string }) {
  return (
    <svg className={className} viewBox="0 0 18 16" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

export function Offices() {
  return (
    <section className="offices" id="offices" aria-labelledby="offices-title">
      <p className="offices__eyebrow">{heading.eyebrow}</p>
      <h2 className="offices__title" id="offices-title">
        {heading.title}
      </h2>
      <p className="offices__body">
        {heading.body[0]}{" "}
        <br />
        {heading.body[1]}
      </p>
      <ul className="offices__grid">
        {offices.map((office) => {
          const lines = addressLines[office.city] ?? [office.address];
          const tel = office.phone.replace(/[^+\d]/g, "");
          return (
            <li className="office-card" key={office.city} data-lines={lines.length}>
              <div className="office-card__media">
                <img
                  className="office-card__img"
                  src={office.image}
                  alt={`${office.city} office`}
                  style={imageCrop[office.city]}
                />
              </div>
              <span className="office-card__kind">{office.kind}</span>
              <h3 className="office-card__city">{office.city}</h3>
              <Icon className="office-card__icon office-card__icon--pin" d={ICON.pin} />
              <address className="office-card__address">
                {lines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </address>
              <Icon className="office-card__icon office-card__icon--clock" d={ICON.clock} />
              <p className="office-card__row office-card__row--hours">{office.hours}</p>
              <Icon className="office-card__icon office-card__icon--phone" d={ICON.phone} />
              <a className="office-card__row office-card__row--phone" href={`tel:${tel}`}>
                {office.phone}
              </a>
              <Icon className="office-card__icon office-card__icon--mail" d={ICON.mail} />
              <a className="office-card__row office-card__row--mail" href={`mailto:${office.email}`}>
                {office.email}
              </a>
              <a
                className="office-card__maps"
                href={office.maps}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${office.city} office on Google Maps (opens in a new tab)`}
              >
                <span>View On Maps</span>
                <svg viewBox="0 0 11 15" aria-hidden="true">
                  <path d={MAP_PIN} />
                </svg>
              </a>
              <ContactButton className="office-card__book" topic={`Book an appointment – ${office.city}`}>
                Book Appointment
              </ContactButton>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
