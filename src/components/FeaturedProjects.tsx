"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Inter } from "next/font/google";
import { projectCities, projectFilters } from "@/data/homepage";
import { ContactButton } from "./Contact";

/* The design sets the chips, the note, BHK config and possession lines in Inter. */
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

type FilterId = (typeof projectFilters)[number]["id"];
type City = (typeof projectCities)[number];

export type ApiProject = {
  id: string;
  name: string;
  location: string;
  priceLabel: string;
  priceMin?: number;
  configLabel: string;
  possessionLabel: string;
  roiScore?: number;
  tagLabel?: string | null;
  image: string;
  builder?: {
    id?: string;
    name?: string;
    logo?: string;
  };
};

const NOTE = "Curated  opportunities  matching your search.";

/* Chip widths from the design (text is centred inside). */
const CHIP_WIDTHS: Record<FilterId, number> = {
  newest: 61,
  roi: 82.67,
  luxury: 60.33,
  ready: 97.33,
  construction: 115.33,
};

/* In the design the last two cards place their tag and developer badge 8px (not 16px) from the image edge. */
const TIGHT_OVERLAYS = new Set(["m3m-capital", "emaar-urban-oasis"]);

/* Tag images from the design */
const TAG_IMAGES: Record<string, string> = {
  Luxury: "/design/tag-luxury.png",
  "New Launch": "/design/tag-new-launch.png",
  Premium: "/design/tag-premium.png",
  "High ROI": "/design/tag-high-roi.png",
};

/* Bonus: Price formatter from priceMin in rupees */
function formatPrice(priceMin?: number, fallback?: string): string {
  if (!priceMin) return fallback || "";
  if (priceMin >= 10000000) {
    return `₹ ${parseFloat((priceMin / 10000000).toFixed(2))} Cr`;
  }
  if (priceMin >= 100000) {
    return `₹ ${parseFloat((priceMin / 100000).toFixed(2))} Lakh`;
  }
  return `₹ ${priceMin.toLocaleString("en-IN")}`;
}

/* Bonus: Query parameter mapping for filter chips */
function getFilterQuery(filterId: FilterId): string {
  switch (filterId) {
    case "newest":
      return "sort=newest";
    case "roi":
      return "sort=roi";
    case "luxury":
      return "tag=luxury";
    case "ready":
      return "status=ready_to_move";
    case "construction":
      return "status=under_construction";
    default:
      return "";
  }
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 12 10" aria-hidden="true" focusable="false">
      <path d="M0.9 5H10.3M6.43 1.13L10.3 5L6.43 8.87" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProjectCard({
  project,
  index,
  isActive,
  onHover,
}: {
  project: ApiProject;
  index: number;
  isActive: boolean;
  onHover: () => void;
}) {
  const displayPrice = project.priceMin
    ? formatPrice(project.priceMin, project.priceLabel)
    : project.priceLabel;

  return (
    <article
      className={`pcard${TIGHT_OVERLAYS.has(project.id) ? " pcard--tight" : ""}${isActive ? " is-active" : ""}`}
      onMouseEnter={onHover}
      onFocus={onHover}
    >
      <div className="pcard-media">
        <img className="pcard-img" src={project.image} alt={project.name} />
        {project.tagLabel ? (
          TAG_IMAGES[project.tagLabel] ? (
            <img className="pcard-tag" src={TAG_IMAGES[project.tagLabel]} alt={project.tagLabel} />
          ) : (
            <span
              className="pcard-tag"
              style={{
                background: "rgba(0,0,0,0.6)",
                color: "#fff",
                padding: "2px 8px",
                borderRadius: "4px",
                fontSize: "10px",
              }}
            >
              {project.tagLabel}
            </span>
          )
        ) : null}
        {project.builder?.logo ? (
          <span className="pcard-badge pcard-badge--boxed">
            <img src={project.builder.logo} alt={project.builder.name || "Developer"} height={23} />
          </span>
        ) : null}
      </div>
      <h3 className="pcard-name">{project.name}</h3>
      <p className="pcard-loc">{project.location}</p>
      <p className="pcard-price">
        {displayPrice} <span>Onwards</span>
      </p>
      <p className="pcard-config">{project.configLabel}</p>
      <p className="pcard-poss">
        {project.possessionLabel?.toLowerCase().startsWith("possession")
          ? project.possessionLabel
          : `Possession: ${project.possessionLabel}`}
      </p>
      {project.roiScore != null ? (
        <span className={`pcard-score${index === 1 ? " pcard-score--filled" : ""}`}>
          {project.roiScore}/10
        </span>
      ) : null}
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
  const [projectList, setProjectList] = useState<ApiProject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  const checkScroll = () => {
    if (!gridRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = gridRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction: "left" | "right") => {
    if (!gridRef.current) return;
    const scrollAmount = 281; // 256px card + 25px gap
    gridRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const fetchProjects = async () => {
    setLoading(true);
    setError(null);
    try {
      const citySlug = city.toLowerCase();
      const filterParam = getFilterQuery(filter);
      const query = `city=${citySlug}${filterParam ? `&${filterParam}` : ""}`;

      const res = await fetch(`https://investoxpert-mock-api.vercel.app/api/projects?${query}`);
      if (!res.ok) {
        throw new Error(`Failed to load projects (Status ${res.status})`);
      }
      const json = await res.json();
      setProjectList(json.data || []);
      // Reset scroll position on new filter/city
      if (gridRef.current) {
        gridRef.current.scrollTo({ left: 0, behavior: "smooth" });
      }
    } catch (err: any) {
      setError(err.message || "Failed to fetch projects. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [city, filter]);

  useEffect(() => {
    checkScroll();
  }, [projectList]);

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
        <div className="projects-actions">
          <a className="projects-viewall" href="#projects" onClick={() => setFilter("newest")}>
            <span>View All Projects</span>
            <ArrowRight className="projects-viewall-arrow" />
          </a>
          {projectList.length > 4 ? (
            <div className="projects-nav-group" aria-label="Scroll projects">
              <button
                type="button"
                className="projects-nav-btn"
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Previous projects"
              >
                <svg viewBox="0 0 6 10" width="6" height="10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                  <path d="M5 1L1 5L5 9" />
                </svg>
              </button>
              <button
                type="button"
                className="projects-nav-btn"
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                aria-label="Next projects"
              >
                <svg viewBox="0 0 6 10" width="6" height="10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                  <path d="M1 1L5 5L1 9" />
                </svg>
              </button>
            </div>
          ) : null}
        </div>
      </div>

      <div
        className="projects-grid"
        ref={gridRef}
        onScroll={checkScroll}
        onMouseLeave={() => setHoveredId(null)}
      >
        {loading ? (
          <div className="projects-empty" style={{ justifyContent: "center" }}>
            <p>Loading projects for {city}...</p>
          </div>
        ) : error ? (
          <div className="projects-empty" style={{ flexDirection: "column", justifyContent: "center", gap: 12 }}>
            <p style={{ color: "#e51a4b" }}>{error}</p>
            <button type="button" className="projects-empty-btn" onClick={fetchProjects}>
              Retry
            </button>
          </div>
        ) : projectList.length > 0 ? (
          projectList.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isActive={hoveredId ? hoveredId === project.id : index === 0}
              onHover={() => setHoveredId(project.id)}
            />
          ))
        ) : (
          <div className="projects-empty">
            <p>No featured projects match this filter right now in {city}.</p>
            <ContactButton className="projects-empty-btn" topic={`Projects in ${city}`}>
              Ask an expert
            </ContactButton>
          </div>
        )}
      </div>
    </section>
  );
}
