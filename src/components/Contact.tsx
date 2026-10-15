"use client";

import {
  createContext,
  useContext,
  useEffect,
  useId,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";

type ContactContextValue = {
  openContact: (topic?: string) => void;
};

const ContactContext = createContext<ContactContextValue | null>(null);

export function useContact() {
  const value = useContext(ContactContext);
  if (!value) {
    throw new Error("useContact must be used within ContactProvider");
  }
  return value;
}

export function ContactProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useState("General enquiry");
  const [sent, setSent] = useState(false);
  const titleId = useId();

  function openContact(nextTopic = "General enquiry") {
    setTopic(nextTopic);
    setSent(false);
    setOpen(true);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <ContactContext.Provider value={{ openContact }}>
      {children}
      {open ? (
        <div className="modal-root">
          <button
            className="modal-backdrop"
            aria-label="Close dialog"
            onClick={() => setOpen(false)}
          />
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
          >
            <button
              className="modal-close"
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
            <p className="eyebrow">Contact Us</p>
            <h2 id={titleId}>Schedule a Free Consultation</h2>
            <p className="modal-topic">Topic: {topic}</p>
            {sent ? (
              <p className="modal-success" role="status">
                Thank you. An InvestoXpert advisor will reach out on the number
                you shared. You can also call +91 98800 83870.
              </p>
            ) : (
              <form className="contact-form" onSubmit={onSubmit}>
                <label>
                  Full name
                  <input name="name" required autoComplete="name" />
                </label>
                <label>
                  Phone
                  <input
                    name="phone"
                    required
                    type="tel"
                    autoComplete="tel"
                    placeholder="+91"
                  />
                </label>
                <label>
                  City
                  <input name="city" required placeholder="Gurgaon, Noida, Pune…" />
                </label>
                <label>
                  How can we help?
                  <textarea name="message" rows={4} defaultValue={topic} />
                </label>
                <button className="btn btn-pink" type="submit">
                  Request a callback
                </button>
              </form>
            )}
          </div>
        </div>
      ) : null}
    </ContactContext.Provider>
  );
}

type ContactButtonProps = {
  topic?: string;
  className?: string;
  children: ReactNode;
};

export function ContactButton({ topic, className, children }: ContactButtonProps) {
  const { openContact } = useContact();
  return (
    <button
      type="button"
      className={className}
      onClick={() => openContact(topic)}
    >
      {children}
    </button>
  );
}
