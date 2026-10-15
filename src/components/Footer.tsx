import { footer } from "@/data/homepage";
import { ContactButton } from "./Contact";

/* Where each footer link goes. Items without an on-page target open the contact dialog. */
const LINK_TARGETS: Record<string, string> = {
  Home: "#top",
  "About Us": "#why",
  "Contact Us": "#contact",
  Blog: "#insights",
};

function FooterLink({ label }: { label: string }) {
  const href = LINK_TARGETS[label];
  if (href) {
    return (
      <a className="footer-link" href={href}>
        {label}
      </a>
    );
  }
  return (
    <ContactButton className="footer-link" topic={label}>
      {label}
    </ContactButton>
  );
}

export function Footer() {
  const phone = footer.call.replace(/\D/g, "");
  const email = footer.mail.split(":").slice(1).join(":").trim();

  return (
    <footer className="site-footer" id="contact">
      <div className="footer-brand">
        <a className="footer-logo" href="#top" aria-label="InvestoXpert home">
          <img src={footer.logo} alt="InvestoXpert — Redefining Realty" width={600} height={251} />
        </a>
        <p className="footer-about">{footer.description}</p>
      </div>

      <nav className="footer-col footer-col--contact" aria-labelledby="footer-contact-h">
        <h2 className="footer-heading" id="footer-contact-h">
          {footer.contactHeading}
        </h2>
        <ul className="footer-list">
          <li>
            <address className="footer-address">{footer.address}</address>
          </li>
          <li>
            <a className="footer-link" href={`tel:+91${phone}`}>
              {footer.call}
            </a>
          </li>
          <li>
            <a className="footer-link" href={`mailto:${email}`}>
              {footer.mail}
            </a>
          </li>
        </ul>
      </nav>

      <nav className="footer-col footer-col--links" aria-labelledby="footer-links-h">
        <h2 className="footer-heading" id="footer-links-h">
          {footer.linksHeading}
        </h2>
        <ul className="footer-list">
          {footer.links.map((label) => (
            <li key={label}>
              <FooterLink label={label} />
            </li>
          ))}
        </ul>
      </nav>

      <nav className="footer-col footer-col--resources" aria-labelledby="footer-resources-h">
        <h2 className="footer-heading" id="footer-resources-h">
          {footer.resourcesHeading}
        </h2>
        <ul className="footer-list">
          {footer.resources.map((label) => (
            <li key={label}>
              <FooterLink label={label} />
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
