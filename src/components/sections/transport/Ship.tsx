'use client';

import React from "react";

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
const ShipCard: React.FC<ShipItem> = ({ title, image, href }) => {
  return (
    <section className="relative z-0 flex flex-col gap-4">

      {/* TITLE */}
      <div className="leading-tight">
        <h2 className="text-2xl md:text-4xl font-bold text-[#0D2464]">
          {title}
        </h2>
        <p className="text-xl md:text-3xl font-bold text-[#FFC229] mt-1">
          Pulang–Pergi
        </p>
      </div>

      {/* PATTERN - Single image per card, spanning full screen */}
      <img
        src={imgPattern20111}
        alt="pattern"
        className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-screen min-w-[100vw] max-w-none h-auto pointer-events-none z-0"
      />

      {/* IMAGE CONTAINER */}
      <a href={href} className="relative w-full h-[240px] md:h-[440px] z-10 block overflow-hidden rounded-xl shadow-md group cursor-pointer">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </a>
    </section>
  );
};

/* ================= PAGE ================= */
const Ship: React.FC = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">

      {/* CONTENT */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 flex flex-col gap-y-24">
          
          {ships.map((ship, index) => (
            <ShipCard key={index} {...ship} />
          ))}

        </div>
      </main>

    </div>
  );
};

export default Ship;