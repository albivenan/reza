'use client';

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* ================= ASSETS ================= */
const imgPattern20111 = "/assets/imgPattern20111.png";
const imgSiginjaiFinal2 = "/assets/06216d95e4d1bb8d0df55dcf3b76e16e11fe0ded.png";
const imgXpressBahari9FFinal2 = "/assets/6d9de98984a25ddbf56d327f94beb29a28fb5d0b.png";
const imgPelniKalimutuFinal2 = "/assets/c702909d2bf5b51b9e0818ae4188ef76f6291368.png";
const imgLosalaTravelLogoOnly = "/assets/110f0e1e80716f8a995f0c7455b7174a0b709b85.png";
const imgLosalaTravelLogoTypography = "/assets/0e289cbf5e4563cac2cb978c1887a61fd482dc25.png";

/* ================= TYPES ================= */
type ShipItem = {
  title: string;
  image: string;
  href: string;
};

/* ================= DATA ================= */
const ships: ShipItem[] = [
  { title: "Via Ferry Siginjai", image: imgSiginjaiFinal2, href: "/siginjai" },
  { title: "Via Express Bahari", image: imgXpressBahari9FFinal2, href: "/express-bahari" },
  { title: "Via KM Pelni", image: imgPelniKalimutuFinal2, href: "/kelimutu" },
];

/* ================= CARD ================= */
const ShipCard = React.forwardRef<HTMLDivElement, ShipItem>(({ title, image, href }, ref) => {
  return (
    <section ref={ref} className="relative z-0 flex flex-col gap-4 opacity-0 overflow-hidden">

      {/* TITLE */}
      <div className="leading-tight px-1">
        <h2 className="font-['Poppins:Bold',sans-serif] text-[32px] md:text-[54px] font-bold text-[#0D2464]">
          {title}
        </h2>
        <p className="font-['Poppins:Bold',sans-serif] text-[22px] md:text-[32px] font-bold text-[#FFC229] mt-1">
          Pulang–Pergi
        </p>
      </div>

      {/* PATTERN - Single image per card, contained */}
      <img
        src={imgPattern20111}
        alt="pattern"
        className="absolute bottom-0 left-0 w-full h-full object-cover object-bottom pointer-events-none z-0 opacity-20"
      />

      {/* IMAGE CONTAINER */}
      <a href={href} className="relative w-full h-[240px] md:h-[440px] z-10 block overflow-hidden rounded-xl shadow-md group cursor-pointer mx-1">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </a>
    </section>
  );
});

ShipCard.displayName = "ShipCard";

/* ================= PAGE ================= */
const Ship: React.FC = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(card,
          { 
            opacity: 0, 
            y: 50,
            scale: 0.98
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              once: true,
            }
          }
        );
      });
    });

    // Refresh scrolltrigger after small delay to handle lazy images
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="bg-white">

      {/* CONTENT */}
      <main className="flex-1">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 pb-20 flex flex-col gap-y-16 md:gap-y-24">
          
          {ships.map((ship, index) => (
            <ShipCard 
              key={index} 
              {...ship} 
              ref={(el) => { cardsRef.current[index] = el; }}
            />
          ))}

        </div>
      </main>

    </div>
  );
};

export default Ship;