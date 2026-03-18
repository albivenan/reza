'use client';
import HeroSection from "./homepage/hero";
import OffersSection from "./homepage/offers";
import StatistikSection from "./homepage/statistik";
import TravelPackageSection from "./homepage/paket";
import TransportSection from "./homepage/trans";
import PulauKarimunjawa from "./homepage/karimun";
import AboutSection from "./homepage/about";
import ReviewsSection from "./homepage/reviews";

export default function LosalaTravelWebsite() {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden text-black" data-name="Losala Travel Website">

      <main>
        <HeroSection />
        <OffersSection />
        <StatistikSection />
        <TravelPackageSection />
        <TransportSection />
        <PulauKarimunjawa />
        <AboutSection />
        <ReviewsSection />
      </main>

    </div>
  );
}