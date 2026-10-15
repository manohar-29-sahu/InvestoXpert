"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Inter } from "next/font/google";
import { projectCities, projectFilters, projects, type Project } from "@/data/homepage";
import { ContactButton } from "./Contact";

/* The design sets the chips, the note, BHK config and possession lines in Inter. */
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

type FilterId = (typeof projectFilters)[number]["id"];
type City = (typeof projectCities)[number];

const NOTE = "Curated  opportunities  matching your search.";

/* Chip widths from the design (text is centred inside). */
const CHIP_WIDTHS: Record<FilterId, number> = { newest: 61, roi: 82.67, luxury: 60.33, ready: 97.33, construction: 115.33 };

/* In the design the last two cards place their tag and developer badge 8px (not 16px) from the image edge. */
const TIGHT_OVERLAYS = new Set(["m3m-capital", "emaar-urban-oasis"]);


function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 12 10" aria-hidden="true" focusable="false">
      <path d="M0.9 5H10.3M6.43 1.13L10.3 5L6.43 8.87" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Badge({ badge }: { badge: Project["badge"] }) {
  if (badge === "ace") {
    return (
      <span className="pcard-badge pcard-badge--boxed">
        <img src="/design/badge-ace.png" alt="ACE Group" width={32} height={13} />
      </span>
    );
  }
  return (
    <span className="pcard-badge">
      <img src={`/design/badge-${badge}.png`} alt={badge === "adani" ? "Adani Realty" : "M3M"} width={47} height={23} />
    </span>
  );
}

function ProjectCard({
  project,
  index,
  isActive,
  onHover,
}: {
  project: Project;
  index: number;
  isActive: boolean;
  onHover: () => void;
}) {
  return (
    <article
      className={`pcard${TIGHT_OVERLAYS.has(project.id) ? " pcard--tight" : ""}${isActive ? " is-active" : ""}`}
      onMouseEnter={onHover}
      onFocus={onHover}
    >
      <div className="pcard-media">
        <img className="pcard-img" src={project.image} alt={project.name} />
        <img className="pcard-tag" src={`/design/tag-${project.tag}.png`} alt={project.tagLabel} />
        <Badge badge={project.badge} />
      </div>
      <h3 className="pcard-name">{project.name}</h3>
      <p className="pcard-loc">{project.location}</p>
      <p className="pcard-price">
        {project.price} <span>{project.priceNote}</span>
      </p>
      <p className="pcard-config">{project.config}</p>
      <p className="pcard-poss">{project.possession}</p>
      <span className={`pcard-score${index === 1 ? " pcard-score--filled" : ""}`}>{project.score}</span>
      <ContactButton
        className={`pcard-btn${isActive ? " pcard-btn--primary" : ""}`}
        topic={`Project enquiry: ${project.name}`}
      >
        <span>View Details</span>
        <ArrowRight className="pcard-btn-arrow" />
      </ContactButton>
    </article>
  );
}

export function FeaturedProjects() {
  const [filter, setFilter] = useState<FilterId>("newest");
  const [city, setCity] = useState<City>("Gurgaon");
  const [open, setOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;
    const onDown = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const visible = projects.filter((project) => project.filters.includes(filter));

  return (
    <section className={`projects ${inter.variable}`} id="projects" aria-labelledby="projects-title">
      <p className="projects-eyebrow">Feature Projects</p>
      <div className="projects-title-wrap" ref={menuRef}>
        <h2 className="projects-title" id="projects-title">
          Featured Project in {city}
        </h2>
        <button
          type="button"
          className="projects-city-toggle"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listId}
          aria-label={`Choose city (current: ${city})`}
          onClick={() => setOpen((value) => !value)}
        >
          <svg viewBox="0 0 19 12.33" preserveAspectRatio="none" aria-hidden="true" focusable="false">
            <path d="M1.6 0H17.4A1.2 1.2 0 0 1 18.3 2L10.4 11.6A1.2 1.2 0 0 1 8.6 11.6L0.7 2A1.2 1.2 0 0 1 1.6 0Z" fill="currentColor" />
          </svg>
        </button>
        {open ? (
          <ul className="projects-city-menu" id={listId} role="listbox" aria-label="Cities">
            {projectCities.map((name) => (
              <li key={name} role="option" aria-selected={name === city}>
                <button
                  type="button"
                  onClick={() => {
                    setCity(name);
                    setOpen(false);
                  }}
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <p className="projects-note">{NOTE}</p>

      <div className="projects-toolbar">
        <div className="projects-chips" role="group" aria-label="Filter projects">
          {projectFilters.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`projects-chip${filter === item.id ? " is-active" : ""}`}
              style={{ width: CHIP_WIDTHS[item.id] }}
              aria-pressed={filter === item.id}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <a className="projects-viewall" href="#projects" onClick={() => setFilter("newest")}>
          <span>View All Projects</span>
          <ArrowRight className="projects-viewall-arrow" />
        </a>
      </div>

      <div className="projects-grid" onMouseLeave={() => setHoveredId(null)}>
        {visible.length ? (
          visible.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={projects.indexOf(project)}
              isActive={hoveredId ? hoveredId === project.id : project.primary}
              onHover={() => setHoveredId(project.id)}
            />
          ))
        ) : (
          <div className="projects-empty">
            <p>No featured projects match this filter right now.</p>
            <ContactButton className="projects-empty-btn" topic={`Projects in ${city}`}>
              Ask an expert
            </ContactButton>
          </div>
        )}
      </div>
    </section>
  );
}
