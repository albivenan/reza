'use client';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HeroSection from "@/components/sections/homepage/hero";
import OffersSection from "@/components/sections/homepage/offers";
import StatistikSection from "@/components/sections/homepage/statistik";
import TravelPackageSection from "@/components/sections/homepage/paket";
import TransportSection from "@/components/sections/homepage/trans";
import PulauKarimunjawa from "@/components/sections/homepage/karimun";
import AboutSection from "@/components/sections/homepage/about";
import ReviewsSection from "@/components/sections/homepage/reviews";

export default function LosalaTravelWebsite() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <div ref={containerRef} className="bg-white min-h-screen overflow-x-hidden text-black" data-name="Losala Travel Website">
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