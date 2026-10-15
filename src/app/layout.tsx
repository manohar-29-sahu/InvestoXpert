import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { FitScale } from "@/components/FitScale";
import "./globals.css";
import "@/styles/header.css";
import "@/styles/hero.css";
import "@/styles/developers.css";
import "@/styles/projects.css";
import "@/styles/markets.css";
import "@/styles/insights.css";
import "@/styles/awards.css";
import "@/styles/consult.css";
import "@/styles/why.css";
import "@/styles/offices.css";
import "@/styles/stats.css";
import "@/styles/stories.css";
import "@/styles/events.css";
import "@/styles/journey.css";
import "@/styles/values.css";
import "@/styles/dream.css";
import "@/styles/faq.css";
import "@/styles/footer.css";
import "@/styles/mobile/header.css";
import "@/styles/mobile/hero.css";
import "@/styles/mobile/developers.css";
import "@/styles/mobile/projects.css";
import "@/styles/mobile/markets.css";
import "@/styles/mobile/insights.css";
import "@/styles/mobile/awards.css";
import "@/styles/mobile/consult.css";
import "@/styles/mobile/why.css";
import "@/styles/mobile/offices.css";
import "@/styles/mobile/stats.css";
import "@/styles/mobile/stories.css";
import "@/styles/mobile/events.css";
import "@/styles/mobile/journey.css";
import "@/styles/mobile/values.css";
import "@/styles/mobile/dream.css";
import "@/styles/mobile/faq.css";
import "@/styles/mobile/footer.css";
import "@/styles/tablet.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "InvestoXpert | India's #1 Real Estate Partner",
  description:
    "Verified properties, expert advice, and seamless support from search to ownership across India.",
  icons: {
    icon: [
      { url: "/design/fav_icno.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/design/fav_icno.png",
    apple: "/design/fav_icno.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <FitScale />
        {children}
      </body>
    </html>
  );
}
