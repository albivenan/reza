'use client';

import React from 'react';

const imgHero = "/assets/c702909d2bf5b51b9e0818ae4188ef76f6291368.png"; // KM Kelimutu
const img72 = "/assets/c40f72f4f939825cb0b221f2b26e1b1922aa57d0.png";
const img29 = "/assets/63dd359905963b9f4bf0a4d652e6ca4ef7369cbf.png";
const img13 = "/assets/dfe0d305eff976c6ffd498e1de82e6d4fd9bce57.png";
const imgAddOn = "/assets/6b1e620a6cc0c621c218ef900ca181ffa25816eb.png";
const imgKapal = "/assets/1077e042cf49cdffe1baf8b56d95994dc5289404.png";
const imgKapal2 = "/assets/136cb924df72a038d4296a6f9252f5d153a217cb.png";
const kapal = "/assets/kapal.png";

export default function Kelimutu() {
  return (
    <div className="relative bg-white w-full min-h-screen">
      {/* ================= SECTION 1 : HERO & DECORATION ================= */}
      <div className="section-hero relative h-[800px] grid grid-cols-2 gap-8">
        <div className="">
          {/* Background kiri */}
          <img src={imgHero} className="w-full h-full object-cover rounded-b-2xl" />

          {/* Text kiri */}
          <div className="absolute left-8 top-8 text-white">
            <p className="text-[36px] font-bold">KM.</p>
            <p className="text-[64px] font-bold">KELIMUTU</p>
          </div>
        </div>

        {/* Konten kanan */}
        <div className="">
          <img src={kapal} className="mt-12 w-[80px] h-[80px] object-cover" />
          <p className="mt-4 font-bold text-[#0d2464] text-[16px] leading-relaxed text-justify pr-12">
            KM Kelimutu adalah kapal milik PT PELNI (Persero) yang melayani rute pelayaran antar pulau, termasuk rute menuju Karimunjawa. Kapal ini dikenal dengan kenyamanan dan fasilitasnya yang lengkap untuk pelayaran jarak jauh.
          </p>

          <p className="mt-2 text-[#0d2464] text-[28px] font-bold">
            Mulai dari
          </p>

          <p className="text-[#ffc229] text-5xl font-bold mb-12">
            Rp 1.200.000
          </p>
          <div className="absolute right-12 flex gap-6">
            {[
              { img: img72, title: "Gathering Trip", href: "/kelimutu/gathering-trip" },
              { img: img29, title: "Private Trip", href: "/kelimutu/private-trip" },
              { img: img13, title: "By. Request", href: "/kelimutu/by-request-kelimutu" }
            ].map((item, i) => (
              <a key={i} href={item.href} className="relative w-[260px] h-[340px] rounded-[20px] overflow-hidden shadow-xl group hover:scale-[1.02] transition-all duration-300">
                <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2464]/80 to-transparent flex items-end p-4">
                  <p className="text-white text-[18px] font-bold">{item.title}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ================= SECTION 2 : ADD ON ================= */}
      <div className="section-addon relative mt-24 px-[80px]">
        <div className="relative h-[80vh] rounded-[20px] overflow-hidden shadow-xl">
          <img src={imgAddOn} className="w-full h-full object-cover" />

          <div className="font-bold absolute inset-0 bg-gradient-to-t from-[#0d2464]/90 to-transparent p-6 flex flex-col justify-end">
            <p className="text-white text-[18px]">
              Add On Luxury Suite
            </p>

            <p className="text-white text-[36px] font-bold">
              Rp 350.000 — Rp 500.000
            </p>
          </div>
        </div>
      </div>

      {/* ================= SECTION 3 : INFO ================= */}
      <div className="section-info relative mt-32 px-[80px] pb-24">
        <div className="mb-8">
          <p className="text-[#0d2464] text-[48px] font-bold leading-tight">KM.</p>
          <p className="text-[#0d2464] text-[96px] font-bold leading-tight">KELIMUTU</p>
        </div>

        <div className="relative grid grid-cols-3 grid-rows-2 gap-x-6">
          <div className="row-span-2 rounded-[20px] overflow-hidden shadow-lg h-[400px]">
            <img src={imgHero} className="w-full h-full object-cover" />
          </div>

          <div className="col-span-2 rounded-[20px] overflow-hidden shadow-lg h-[250px]">
            <img src={imgKapal2} className="w-full h-full object-cover" />
          </div>

          <div className="col-span-2 col-start-2 row-start-2 pt-2">
            <p className="text-[28px] font-bold text-black">
              KM Kelimutu Information
            </p>

            <p className="mt-3 text-[16px] text-gray-700 leading-relaxed text-justify">
              Kapal Motor (KM) Kelimutu merupakan salah satu armada andalan PELNI yang melayani rute Semarang - Karimunjawa. Menggunakan kapal ini memberikan pengalaman berlayar dengan standar keamanan internasional dan fasilitas yang memadai bagi seluruh penumpang.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
