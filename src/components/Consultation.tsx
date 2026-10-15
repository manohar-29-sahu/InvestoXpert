import { consult } from "@/data/homepage";
import { ContactButton } from "./Contact";

/*
 * consult.png is the Figma export of this banner: in the design the whole banner (photo, copy and
 * button) is one pasted image. On desktop the image is shown as-is so the banner is pixel-identical,
 * and the real copy + button sit exactly on top of the baked ones with transparent ink, so the text
 * stays selectable, readable by screen readers, and the button stays clickable.
 * On phones (mobile/consult.css) the photo is cropped to its text-free part and the copy is visible.
 */
export function Consultation() {
  return (
    <section className="consult" aria-labelledby="consult-title">
      <div className="consult__bg" style={{ backgroundImage: `url(${consult.image})` }} aria-hidden="true" />
      <div className="consult__inner">
        <p className="consult__eyebrow">{consult.eyebrow}</p>
        <h2 className="consult__title" id="consult-title">
          {consult.title}
        </h2>
        <p className="consult__body">{consult.body}</p>
        <ContactButton className="consult__cta" topic="Free consultation">
          {consult.cta}
        </ContactButton>
      </div>
    </section>
  );
}
