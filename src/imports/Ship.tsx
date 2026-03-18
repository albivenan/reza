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
};

/* ================= DATA ================= */
const ships: ShipItem[] = [
  { title: "Via Ferry Siginjai", image: imgSiginjaiFinal2 },
  { title: "Via Express Bahari", image: imgXpressBahari9FFinal2 },
  { title: "Via KM Pelni", image: imgPelniKalimutuFinal2 },
];

/* ================= CARD ================= */
const ShipCard: React.FC<ShipItem> = ({ title, image }) => {
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
      <div className="relative w-full h-[240px] md:h-[440px] z-10">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-xl shadow-md"
        />
      </div>
    </section>
  );
};

/* ================= PAGE ================= */
const Ship: React.FC = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col overflow-x-hidden">

      {/* HEADER */}
      <header className="border-b border-[#0D2464]">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
          
          <img
            src={imgLosalaTravelLogoTypography}
            alt="Losala Travel"
            className="h-10 md:h-12"
          />

          <nav className="flex gap-6 md:gap-10 text-sm font-medium text-[#0D2464]">
            <button className="hover:opacity-70">Hubungi</button>
            <button className="hover:opacity-70">Informasi</button>
            <button className="hover:opacity-70">Tentang kami</button>
          </nav>
        </div>
      </header>

      {/* CONTENT */}
      <main className="flex-1">
        <div className="max-w-5xl mx-auto px-4 py-16 flex flex-col gap-x-20 gap-y-24">
          
          {ships.map((ship, index) => (
            <ShipCard key={index} {...ship} />
          ))}

        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t mt-16">
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={imgLosalaTravelLogoOnly}
              alt="logo icon"
              className="h-12"
            />
            <img
              src={imgLosalaTravelLogoTypography}
              alt="logo text"
              className="h-8"
            />
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm text-gray-600">
            <button className="hover:text-black">Privacy Policy</button>
            <button className="hover:text-black">Terms of Service</button>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500 text-center md:text-right">
            © 2024 Travel Explore. All rights reserved.
          </div>

        </div>
      </footer>

    </div>
  );
};

export default Ship;