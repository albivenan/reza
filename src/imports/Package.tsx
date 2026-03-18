'use client';

import React from "react";
import { imgRectangle4237 } from "./svg-0s4k8";

/* ================= ASSETS ================= */
const imgTicket = "/assets/5aeb5814785d05b69a5b08368d9a861a3285e7a0.png";
const imgWhatsAppImage20250103At113843Pm1 = "/assets/a0d9ef80efafab54ae8ca2e92de9704eed586c57.png";
const img62 = "/assets/70d17b77c3bffd3d5c8435c3a4a39f421e892ecb.png";
const imgImg202508221000261211 = "/assets/0444c14a844ad141800bf1bd92b3610b39c6d8de.png";
const imgWhatsAppImage20250924At72012Am4 = "/assets/6b1e620a6cc0c621c218ef900ca181ffa25816eb.png";
const imgPattern2016 = "/assets/db502b78bb52f9dc06097996c86e3a73dbfc871e.png";
const imgLosalaTravelLogoOnly = "/assets/110f0e1e80716f8a995f0c7455b7174a0b709b85.png";
const imgLosalaTravelLogoTypography = "/assets/0e289cbf5e4563cac2cb978c1887a61fd482dc25.png";

/* ================= TYPES ================= */
type PackageItem = {
  title: string;
  image: string;
  imageClassName?: string;
  overlay?: boolean;
  overlayHeight?: string;
  titleClassName?: string;
};

/* ================= DATA ================= */
const packages: PackageItem[] = [
  {
    title: "Gathering package",
    image: img62,
    overlay: true,
    overlayHeight: "h-[432px]",
    imageClassName: "object-cover",
    titleClassName: "text-[40px] md:text-[64px] lg:text-[96px]",
  },
  {
    title: "Private trip package",
    image: imgWhatsAppImage20250103At113843Pm1,
    overlay: true,
    overlayHeight: "h-[559px]",
    imageClassName: "object-cover",
    titleClassName: "text-[40px] md:text-[64px] lg:text-[96px]",
  },
  {
    title: "Glamping Ground",
    image: imgWhatsAppImage20250924At72012Am4,
    overlay: true,
    overlayHeight: "h-[535px]",
    imageClassName: "object-cover",
    titleClassName: "text-[40px] md:text-[64px] lg:text-[96px]",
  },
  {
    title: "By. Request",
    image: imgImg202508221000261211,
    overlay: true,
    overlayHeight: "h-[432px]",
    imageClassName: "object-cover",
    titleClassName: "text-[40px] md:text-[64px] lg:text-[96px]",
  },
];

/* ================= HELPERS ================= */
const MaskedImageSection: React.FC<{
  title: string;
  image: string;
  overlay?: boolean;
  overlayHeight?: string;
  titleClassName?: string;
  imageClassName?: string;
}> = ({
  title,
  image,
  overlay = true,
  overlayHeight = "h-[559px]",
  titleClassName = "",
  imageClassName = "object-cover",
}) => {
  return (
    <section className="relative w-full">
      <div className="relative w-full overflow-hidden">
        <div
          className="relative w-full h-[420px] md:h-[520px] lg:h-[559px] bg-[#d9d9d9] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-center mask-size-cover"
          style={{ maskImage: `url('${imgRectangle4237}')` }}
        >
          <img
            src={image}
            alt={title}
            className={`absolute inset-0 w-full h-full ${imageClassName}`}
          />

          {overlay && (
            <div
              className={`absolute inset-x-0 bottom-0 ${overlayHeight} bg-gradient-to-b from-[rgba(217,217,217,0.05)] to-[rgba(13,36,100,0.8)]`}
            />
          )}

          <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
            <h2
              className={`font-['Poppins:Bold',sans-serif] not-italic leading-none text-white font-bold ${titleClassName}`}
            >
              {title}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};



/* ================= PAGE ================= */
export default function Package() {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">

      <main className="relative">
        <div className="pointer-events-none absolute right-[-120px] top-[900px] hidden lg:block">
          <img
            src={imgTicket}
            alt=""
            className="w-[100px] h-[100px] object-contain"
          />
        </div>

        <div className="mx-auto flex max-w-[1440px] flex-col  px-0 py-0">
          {packages.map((item, index) => (
            <MaskedImageSection key={index} {...item} />
          ))}
        </div>
      </main>

    </div>
  );
}