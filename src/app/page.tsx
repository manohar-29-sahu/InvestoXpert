import { ContactProvider } from "@/components/Contact";
import { Awards } from "@/components/Awards";
import { Consultation } from "@/components/Consultation";
import { Developers } from "@/components/Developers";
import { DreamHome } from "@/components/DreamHome";
import { Events } from "@/components/Events";
import { Faq } from "@/components/Faq";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Insights } from "@/components/Insights";
import { Journey } from "@/components/Journey";
import { Markets } from "@/components/Markets";
import { Offices } from "@/components/Offices";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { Values } from "@/components/Values";
import { WhyUs } from "@/components/WhyUs";

export default function HomePage() {
  return (
    <ContactProvider>
      <div className="page">
        <Header />
        <main>
          <Hero />
          <Developers />
          <FeaturedProjects />
          <Markets />
          <Insights />
          <Awards />
          <Consultation />
          <WhyUs />
          <Offices />
          <Stats />
          <Testimonials />
          <Events />
          <Journey />
          <Values />
          <DreamHome />
          <Faq />
        </main>
        <Footer />
      </div>
    </ContactProvider>
  );
}
