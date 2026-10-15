import { ContactButton } from "./Contact";

export function Header() {
  return (
    <header className="site-header">
      <a className="site-logo" href="#top" aria-label="InvestoXpert – back to top">
        <img src="/design/logo-black.svg" alt="InvestoXpert – Redefining Realty" width={143} height={60} />
      </a>
      <nav className="site-nav" aria-label="Primary">
        <ContactButton className="header-contact" topic="General enquiry">
          Contact Us
        </ContactButton>
      </nav>
    </header>
  );
}
