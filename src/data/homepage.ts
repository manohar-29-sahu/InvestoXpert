/* Copy is verbatim from the Figma "Homepage" frame (including its typos). Images are the
   Figma-exported assets, resized into public/design (see scratchpad resize script). */

export type Project = {
  id: string;
  name: string;
  location: string;
  price: string;
  priceNote: string;
  config: string;
  possession: string;
  score: string;
  tag: "luxury" | "new-launch" | "premium" | "high-roi";
  tagLabel: string;
  badge: "adani" | "ace" | "m3m";
  image: string;
  city: string;
  filters: Array<"newest" | "roi" | "luxury" | "ready" | "construction">;
  primary: boolean;
};

export type Office = {
  city: string;
  kind: "Head Office" | "Experience Centre";
  address: string;
  hours: string;
  phone: string;
  email: string;
  image: string;
  maps: string;
};

export const hero = {
  kicker: "Trusted by 10,000+ Property Buyers",
  title: "India’s",
  subtitleAccent: "#1",
  subtitle: "Real Estate Partner",
  body:
    "We don't just help you find a property. From identifying high-potential opportunities to supporting you beyond the purchase, InvestoXpert brings the expertise needed to help you invest with confidence all across India.",
  tabs: ["Buy", "Rent", "AI"] as const,
  typeLabel: "Type",
  typeValue: "Resendential",
  whereLabel: "Where",
  placeholder: "Search by location, project, builder, PIN code, or ask AI...",
  submit: "Browse Properties",
};

export const propertyTypes = ["Resendential", "Commercial", "Plot"];

export const developers = [
  { name: "Palm Olympia", image: "/design/dev-palm-olympia.png", width: 88, height: 45 },
  { name: "M3M", image: "/design/dev-m3m.png", width: 67, height: 33 },
  { name: "LODHA", image: "/design/dev-lodha.png", width: 92, height: 15 },
  { name: "DLF", image: "/design/dev-dlf.png", width: 84, height: 30 },
  { name: "SOBHA", image: "/design/dev-sobha.png", width: 91, height: 33 },
  { name: "OMAXE", image: "/design/dev-omaxe.png", width: 106, height: 31 },
  { name: "EMAAR", image: "/design/dev-emaar.png", width: 64, height: 25 },
];

export const projects: Project[] = [
  {
    id: "samsara-vilasa",
    name: "Samsara Vilasa 2.0",
    location: "Sector 63, Gurgaon",
    price: "₹ 4.97 Cr*",
    priceNote: "Onwards",
    config: "3,4 BHK",
    possession: "Procession: Dec 2027",
    score: "Increment Score : 9.2/10",
    tag: "luxury",
    tagLabel: "Luxury",
    badge: "adani",
    image: "/design/project-samsara.jpg",
    city: "Gurgaon",
    filters: ["newest", "luxury", "construction"],
    primary: true,
  },
  {
    id: "ace-the-nest",
    name: "Ace The Nest Noida",
    location: "Sector 22A, Greater Noida",
    price: "₹ 55 Lakhs*",
    priceNote: "Onwards",
    config: "1 BHK residences",
    possession: "Procession: Dec 2026",
    score: "Increment Score : 9.5/10",
    tag: "new-launch",
    tagLabel: "New Launch",
    badge: "ace",
    image: "/design/project-ace.png",
    city: "Noida",
    filters: ["newest", "construction"],
    primary: false,
  },
  {
    id: "m3m-capital",
    name: "M3M Capital Gurgaon",
    location: "Sector 113, Gurugram",
    price: "₹ 2.93 Cr*",
    priceNote: "Onwards",
    config: "2,4 BHK residences",
    possession: "Procession: Dec 2026",
    score: "Increment Score : 9.8/10",
    tag: "premium",
    tagLabel: "Premium",
    badge: "m3m",
    image: "/design/project-m3m.jpg",
    city: "Gurgaon",
    filters: ["newest", "roi", "construction"],
    primary: false,
  },
  {
    id: "emaar-urban-oasis",
    name: "Emaar Urban Oasis",
    location: "Sector 71, Gurgaon",
    price: "₹ 4 Cr*",
    priceNote: "Onwards",
    config: "3,4 BHK residences",
    possession: "Procession: Dec 2027",
    score: "Increment Score : 9.5/10",
    tag: "high-roi",
    tagLabel: "High ROI",
    badge: "m3m",
    image: "/design/project-emaar.jpg",
    city: "Gurgaon",
    filters: ["newest", "roi", "construction"],
    primary: false,
  },
];

export const projectCities = ["Gurgaon", "Noida", "Pune", "Mumbai", "Bangalore"] as const;

export const projectFilters = [
  { id: "newest", label: "Newest" },
  { id: "roi", label: "Highest ROI" },
  { id: "luxury", label: "Luxury" },
  { id: "ready", label: "Ready To Move" },
  { id: "construction", label: "Under construction" },
] as const;

export const markets = [
  { city: "Gurgaon", price: "₹ 16,500/ sq. ft.", image: "/design/city-gurgaon.jpg", href: "#projects" },
  { city: "Noida", price: "₹ 6,250/ sq. ft.", image: "/design/city-noida.jpg", href: "#projects" },
  { city: "Pune", price: "₹ 9,200/ sq. ft.", image: "/design/city-pune.jpg", href: "#offices" },
  { city: "Mumbai", price: "₹ 27,000/ sq. ft.", image: "/design/city-mumbai.jpg", href: "#offices" },
  { city: "Bangalore", price: "₹ 11,000/ sq. ft.", image: "/design/city-bangalore.jpg", href: "#offices" },
];

export const insights = [
  {
    title: "Regional Plan 2041: A New Era for NCR",
    excerpt: "Featured by United News of India...",
    tag: "Market Insights",
    source: "uni" as const,
    image: "/design/insight-uni.jpg",
  },
  {
    title: "What Really Determines Real Estate Returns Today",
    excerpt:
      "Why infrastructure-led growth is becoming the biggest driver of long-term real estate wealth creation.",
    tag: "Market Insights",
    source: "outlook" as const,
    image: "/design/insight-outlook.jpg",
  },
  {
    title: "Jewar Airport Inaugurated | Property Prices Along Yamuna Expressway Surge Up To 500%",
    excerpt:
      "Analyzing how the Jewar Airport corridor has transformed Yamuna Expressway into one of NCR's fastest-growing investment destinations.",
    tag: "Market Insights",
    source: "news18" as const,
    image: "/design/insight-jewar.jpg",
  },
  {
    title: "North Chennai's New Momentum",
    excerpt:
      "Exploring the transformation of North Chennai from an industrial hub to an emerging residential destination.",
    tag: "Market Insights",
    source: "timesproperty" as const,
    image: "/design/insight-chennai.jpg",
  },
];

export const awards = [
  {
    title: "Excellent Iconic Real Estate Consultancy",
    detail: "Awarded at ET Now Business Conclave & Awards",
    source: "Economic Times",
    image: "/design/award-1.jpg",
    tag: "Award",
  },
  {
    title: "Excellence in Real Estate Consultancy (2025)",
    detail: "Awarded in ET Leadership Excellence Awards (North)",
    source: "Media Coverage",
    image: "/design/award-2.jpg",
    tag: "Award",
  },
  {
    title: "Emerging Proptech Brand of the Year",
    detail: "Awarded at ET Young Industry Leaders Awards 2025",
    source: "Economic Times",
    image: "/design/award-3.jpg",
    tag: "Award",
  },
  {
    title: "Excellence in Real Estate Advisory Services (2024)",
    detail: "Awarded in Times Realty & Infrastructure Conclave",
    source: "",
    image: "/design/award-4.jpg",
    tag: "Media Coverage",
  },
];

export const consult = {
  eyebrow: "YOUR JOURNEY START HERE",
  title: "Schedule a Free Consultation",
  body:
    "A home is more than just a place, it’s where your story begins. We’re here to listen, guide, and make your dream home a reality, step by step.",
  cta: "Contact Us",
  image: "/design/consult.png",
};

export const reasons = [
  {
    title: "Verified Network",
    body: "We only partner with trusted, Grade A developers, so you can choose from reliable residential and commercial projects.",
    icon: "shield",
    tone: "pink",
  },
  {
    title: "Strategic Advisory",
    body: "We give personalized guidance for your goals so that you can identify opportunities that align with your investment plans.",
    icon: "rupee",
    tone: "green",
  },
  {
    title: "Research-Led Insights",
    body: "Our recommendations are backed by market research, data analysis, and local expertise to support smarter investment guidance",
    icon: "trend",
    tone: "blue",
  },
  {
    title: "End-to-End Assistance",
    body: "From property selection to post-sales support, we stay with you throughout your investment journey.",
    icon: "handshake",
    tone: "orange",
  },
] as const;

export const offices: Office[] = [
  {
    city: "Noida HQ",
    kind: "Head Office",
    address: "3rd Floor, Riana Aurelia, Plot 93-94, Sector 136, Noida, Uttar Pradesh 201305",
    hours: "Mon - Fri: 9:30 AM - 6:30 PM",
    phone: "+91 98800 83870",
    email: "info@investoxpert.com",
    image: "/design/office-noida.jpg",
    maps: "https://maps.google.com/?q=Riana+Aurelia+Sector+136+Noida",
  },
  {
    city: "Gurgaon",
    kind: "Experience Centre",
    address: "912-915, 9th Floor, JMD Megapolis, Sohna Road, Sector 48, Gurugram, Haryana 122018",
    hours: "Mon - Fri: 9:30 AM - 6:30 PM",
    phone: "+91 98800 83870",
    email: "info@investoxpert.com",
    image: "/design/office-gurgaon.jpg",
    maps: "https://maps.google.com/?q=JMD+Megapolis+Sohna+Road+Gurugram",
  },
  {
    city: "Dubai",
    kind: "Experience Centre",
    address:
      "2107, Conrad Business Towers, Next to World Trade Center Metro Station, Sheikh Zayed Road, Dubai, UAE",
    hours: "Mon - Fri: 9:30 AM - 6:30 PM",
    phone: "+91 98800 83870",
    email: "info@investoxpert.com",
    image: "/design/office-dubai.png",
    maps: "https://maps.google.com/?q=Conrad+Business+Towers+Sheikh+Zayed+Road+Dubai",
  },
  {
    city: "Mumbai (Thane West)",
    kind: "Experience Centre",
    address:
      "B-804, 8th Floor, B-Wing, Lodha Supremus, Kolshet Road, Thane (West), Mumbai, Maharashtra 400607",
    hours: "Mon - Fri: 9:30 AM - 6:30 PM",
    phone: "+91 98800 83870",
    email: "info@investoxpert.com",
    image: "/design/office-mumbai.png",
    maps: "https://maps.google.com/?q=Lodha+Supremus+Kolshet+Road+Thane",
  },
  {
    city: "Pune",
    kind: "Head Office",
    address: "Floor 8, Office 810 & 811, Nyati Emporious, Baner, Pune, Maharashtra 411045",
    hours: "Mon - Fri: 9:30 AM - 6:30 PM",
    phone: "+91 98800 83870",
    email: "info@investoxpert.com",
    image: "/design/office-pune.jpg",
    maps: "https://maps.google.com/?q=Nyati+Emporious+Baner+Pune",
  },
  {
    city: "Bangalore",
    kind: "Head Office",
    address: "307, Joy Life, 1st & 2nd Floor, 3rd Block, HRBR Layout, Bengaluru, Karnataka 560043",
    hours: "Mon - Fri: 9:30 AM - 6:30 PM",
    phone: "+91 98800 83870",
    email: "info@investoxpert.com",
    image: "/design/office-bangalore.png",
    maps: "https://maps.google.com/?q=Joy+Life+HRBR+Layout+Bengaluru",
  },
  {
    city: "Hyderabad",
    kind: "Head Office",
    address:
      "Manjeera Trinity Corporate, #206, JNTU-HITECH City Road, KPHB 3rd Phase, Kukatpally, Telangana 500072",
    hours: "Mon - Fri: 9:30 AM - 6:30 PM",
    phone: "+91 98800 83870",
    email: "info@investoxpert.com",
    image: "/design/office-hyderabad.png",
    maps: "https://maps.google.com/?q=Manjeera+Trinity+Corporate+Kukatpally",
  },
  {
    city: "Kolkata",
    kind: "Head Office",
    address:
      "Mani Casadona, Unit No. 5WS2E, 5th Floor, Plot No. IIF/04, Action Area II-F, Newtown, Kolkata, West Bengal 700156",
    hours: "Mon - Fri: 9:30 AM - 6:30 PM",
    phone: "+91 98800 83870",
    email: "info@investoxpert.com",
    image: "/design/office-kolkata.jpg",
    maps: "https://maps.google.com/?q=Mani+Casadona+Newtown+Kolkata",
  },
];

export const stats = [
  { value: "8", label: "Experience Centres", detail: "Across India's key markets", icon: "building" },
  { value: "200+", label: "Investment Advisors", detail: "Certified real estate experts", icon: "people" },
  { value: "5,000+", label: "Client Meetings", detail: "Successful consultations", icon: "handshake" },
  { value: "", label: "Pan India Presence", detail: "Strong footprint. Local expertise. National reach.", icon: "pin" },
];

export const stories = {
  eyebrow: "Video Testimonials",
  title: ["Their Stories", "Say It Best"],
  body: "Hear from the families and investors who trusted us with one of life's most important decisions.",
  watchAll: "Watch All Stories",
  main: {
    image: "/design/story-main.jpg",
    quote:
      "“Buying a home seemed difficult at first, but the InvestoXpert team made everything easy to understand. They guided us at every step and helped us make the right decision without any pressure..”",
    author: "— Rahul & Nisha Malhotra,",
    role: "Homebuyers, Noida",
  },
  playlist: [
    { name: "Vikram Mehta", city: "Mumbai", image: "/design/story-vikram.jpg" },
    { name: "Rahul Sharma", city: "Gurugram", image: "/design/story-rahul.jpg" },
    { name: "Rajeev Mehta", city: "Pune", image: "/design/story-rajeev.jpg" },
  ],
};

export const events = {
  eyebrow: "Past Events",
  title: ["Meet, Learn & Grow", "Together"],
  body: "We bring homebuyers, investors, and experts together through events that help you learn, connect, and make better property decisions.",
  cta: "View All Events",
  items: [
    { title: "Mappic 2025", city: "Delhi", attendees: "150+ Attendees", image: "/design/event-mappic.jpg", large: true },
    { title: "InvestoXpert property Expo", city: "Noida", attendees: "350+ Attendees", image: "/design/event-expo.jpg", large: false },
    { title: "Maha Property Day 2024", city: "Noida", attendees: "500+ Attendees", image: "/design/event-maha-2024.jpg", large: false },
    { title: "Maha Property Day", city: "Noida", attendees: "500+ Attendees", image: "/design/event-maha-day.jpg", large: false },
  ],
};

export const journey = {
  eyebrow: "Our Investment Journey",
  title: ["Buy Your Dream Home", "with Confidence"],
  body: "Finding the right home doesn't have to be complicated. Our team guides you from property search to home ownership.",
  image: "/design/journey.jpg",
  commitmentEyebrow: "OUR COMMITMENT. YOUR GROWTH.",
  commitmentBody: "Our experts guide you through every stage with clear advice, honest support, and complete transparency.",
};

export const steps = [
  {
    n: "01",
    title: "Select Property",
    kicker: "Find Your Perfect Match",
    body: "Browse verified properties and choose the one that fits your needs and budget.",
    image: "/design/step-1.jpg",
    icon: "search-home",
  },
  {
    n: "02",
    title: "Meet Our Expert",
    kicker: "Guidance Every Step Of The Way",
    body: "Get expert advice to help you make the right decision with confidence.",
    image: "/design/step-2.jpg",
    icon: "person",
  },
  {
    n: "03",
    title: "Visit Property",
    kicker: "See It For Yourself",
    body: "Schedule a visit and experience the property firsthand before making your choice.",
    image: "/design/step-3.jpg",
    icon: "building-pin",
  },
  {
    n: "04",
    title: "Loan Assistance",
    kicker: "Easy Financing Options",
    body: "We help you find the right home loan with guidance throughout the process.",
    image: "/design/step-4.jpg",
    icon: "rupee-hand",
  },
  {
    n: "05",
    title: "Book Your Home",
    kicker: "Make It Yours",
    body: "Complete the paperwork with our support and book your new home.",
    image: "/design/step-5.jpg",
    icon: "handshake",
  },
  {
    n: "06",
    title: "Customer Support",
    kicker: "We’re Here for You",
    body: "Even after your purchase, we're here to help with any questions or assistance you need.",
    image: "/design/step-6.jpg",
    icon: "headset",
  },
];

export const valuesSection = {
  title: "What We Stand For",
  body: "Guiding every interaction, every relationship, every outcome.",
  image: "/design/values-team.jpg",
};

export const values = [
  { title: "Integrity", body: "We believe every relationship begins with trust. That's why transparency guides every recommendation we make.", icon: "shield-check" },
  { title: "Accountability", body: "We take responsibility for outcomes, approaching every challenge with initiative, and a solutions-first mindset.", icon: "clipboard-check" },
  { title: "Client Commitment", body: "Our clients always come first. We listen carefully, understand their needs, and act with their best interests in mind.", icon: "handshake" },
  { title: "Excellence", body: "We continuously raise our standards and strive for exceptional execution in everything we do.", icon: "trophy" },
];

export const dream = {
  title: ["Your Dream Home Is Just", "One Connection Away"],
  body: "A personalized experience, expert guidance, and the right opportunities, all connected to help you invest with confidence.",
  cta: "Connect With Us Now",
  image: "/design/dream-family.png",
};

export const faqSection = {
  eyebrow: "Frequently Asked Questions",
  title: ["Every Great Investment", "Starts With "],
  titleAccent: "A Conversation",
  body: "Whether you're buying your first home or expanding your portfolio, connect with our advisors to discover opportunities aligned with your goals.",
  primaryCta: "Schedule a Free Consultation",
  secondaryCta: "Talk to an Investment Advisor",
  image: "/design/faq.jpg",
  helpTitle: "Still have questions?",
  helpBody: "Explore Answers To Some Of The Most Common Queries From Investors Like You.",
  helpLink: "VIEW ALL FAQs",
};

export const faqs = [
  {
    q: "How does InvestXpert help me choose the right property?",
    a: "Advisors shortlist verified projects against your budget, preferred city, and timeline, then explain developer track record, pricing, and possession so you can compare options clearly.",
  },
  {
    q: "Do you charge any fees for consultation?",
    a: "The introductory consultation is free. You can talk through your goals with an advisor before deciding whether to visit or book a project.",
  },
  {
    q: "Can I get expert guidance for NRI investments?",
    a: "Yes. InvestoXpert advises NRI buyers on project selection, documentation, and remote coordination through offices in India and Dubai.",
  },
  {
    q: "How do I schedule a site visit or consultation?",
    a: "Use Schedule a Free Consultation, call +91 98800 83870, or book an appointment at a city office. An advisor confirms the time and the project.",
  },
  {
    q: "What documents are required to book a property?",
    a: "Most bookings need identity and address proof, PAN, and photographs. Your advisor shares the exact checklist for the project you choose.",
  },
];

export const footer = {
  logo: "/design/logo-white.png",
  description:
    "InvestoXpert is one of the fastest growing companies in real estate arena offering comprehensive real estate solutions to fulfill myriad requirements of customers.",
  contactHeading: "Contact Us",
  address: "C-67,2nd Floor, Sector 63, Noida, Uttar Pradesh 201301(U.P)",
  call: "CALL US: 9880083870",
  mail: "MAIL US: info@investoxpert.com",
  linksHeading: "Contact Us",
  links: ["Home", "Careers", "About Us", "Contact Us"],
  resourcesHeading: "Resources",
  resources: ["Privacy Policy", "Blog"],
};
