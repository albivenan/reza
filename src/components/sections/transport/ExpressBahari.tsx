'use client';

import React from 'react';

const imgHero = "/assets/6d9de98984a25ddbf56d327f94beb29a28fb5d0b.png"; // Express Bahari
const img72 = "/assets/c40f72f4f939825cb0b221f2b26e1b1922aa57d0.png";
const img29 = "/assets/63dd359905963b9f4bf0a4d652e6ca4ef7369cbf.png";
const img13 = "/assets/dfe0d305eff976c6ffd498e1de82e6d4fd9bce57.png";
const imgAddOn = "/assets/6b1e620a6cc0c621c218ef900ca181ffa25816eb.png";
const imgKapal = "/assets/1077e042cf49cdffe1baf8b56d95994dc5289404.png";
const imgKapal2 = "/assets/136cb924df72a038d4296a6f9252f5d153a217cb.png";
const kapal = "/assets/kapal.png";

export default function ExpressBahari() {
  return (
    <div className="relative bg-white w-full min-h-screen">
      {/* ================= SECTION 1 : HERO & DECORATION ================= */}
      <div className="section-hero relative h-[800px] grid grid-cols-2 gap-8">
        <div className="">
          {/* Background kiri */}
          <img src={imgHero} className="w-full h-full object-cover rounded-b-2xl" />

          {/* Text kiri */}
          <div className="absolute left-8 top-8 text-white">
            <p className="text-[36px] font-bold">FAST BOAT.</p>
            <p className="text-[64px] font-bold">BAHARI</p>
          </div>
        </div>

        {/* Konten kanan */}
        <div className="">
          <img src={kapal} className="mt-12 w-[80px] h-[80px] object-cover" />
          <p className="mt-4 font-bold text-[#0d2464] text-[16px] leading-relaxed text-justify pr-12">
            Express Bahari adalah kapal cepat yang melayani rute Jepara-Karimunjawa dengan waktu tempuh paling singkat. Dilengkapi dengan fasilitas VIP dan Executive Class untuk kenyamanan perjalanan Anda.
          </p>

          <p className="mt-2 text-[#0d2464] text-[28px] font-bold">
            Mulai dari
          </p>

          <p className="text-[#ffc229] text-5xl font-bold mb-12">
            Rp 200.000 — Rp 300.000
          </p>
          <div className="absolute right-12 flex gap-6">
            {[
              { img: img72, title: "Gathering Trip", href: "/express-bahari/gathering-trip" },
              { img: img29, title: "Private Trip", href: "/express-bahari/private-trip" },
              { img: img13, title: "By. Request", href: "/express-bahari/by-request-express-bahari" }
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
              Add On VIP Class
            </p>

            <p className="text-white text-[36px] font-bold">
              Upgrade for Luxury Experience
            </p>
          </div>
        </div>
      </div>

      {/* ================= SECTION 3 : INFO ================= */}
      <div className="section-info relative mt-32 px-[80px] pb-24">
        <div className="mb-8">
          <p className="text-[#0d2464] text-[48px] font-bold leading-tight">FAST BOAT.</p>
          <p className="text-[#0d2464] text-[96px] font-bold leading-tight">BAHARI</p>
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
              Express Bahari Information
            </p>

            <p className="mt-3 text-[16px] text-gray-700 leading-relaxed text-justify">
              Express Bahari merupakan pilihan utama bagi wisatawan yang ingin menyeberang dengan cepat dan nyaman. Waktu tempuh hanya sekitar 2 jam perjalanan saja dari Pelabuhan Kartini Jepara menuju Karimunjawa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
