'use client';

import React from "react";
import { imgRectangle4237 } from "@/components/icons/svg-0s4k8";

/* ================= ASSETS ================= */
const imgTicket = "/assets/5aeb5814785d05b69a5b08368d9a861a3285e7a0.png";
const imgWhatsAppImage20250103At113843Pm1 = "/assets/a0d9ef80efafab54ae8ca2e92de9704eed586c57.png";
const img62 = "/assets/70d17b77c3bffd3d5c8435c3a4a39f421e892ecb.png";
const imgImg202508221000261211 = "/assets/0444c14a844ad141800bf1bd92b3610b39c6d8de.png";
const imgWhatsAppImage20250924At72012Am4 = "/assets/6b1e620a6cc0c621c218ef900ca181ffa25816eb.png";

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
const packages: (PackageItem & { price?: string; href: string })[] = [
  {
    title: "2 Hari 1 Malam",
    price: "Rp 1.100.000",
    href: "/express-bahari/gathering-trip/2-hari-1-malam",
    image: img62,
    overlay: true,
    overlayHeight: "h-[432px]",
    imageClassName: "object-cover",
    titleClassName: "text-[40px] md:text-[64px] lg:text-[96px]",
  },
  {
    title: "3 Hari 2 Malam",
    price: "Rp 1.550.000",
    href: "/express-bahari/gathering-trip/3-hari-2-malam",
    image: imgWhatsAppImage20250103At113843Pm1,
    overlay: true,
    overlayHeight: "h-[559px]",
    imageClassName: "object-cover",
    titleClassName: "text-[40px] md:text-[64px] lg:text-[96px]",
  },
  {
    title: "4 Hari 3 Malam",
    price: "Rp 1.950.000",
    href: "/express-bahari/gathering-trip/4-hari-3-malam",
    image: imgWhatsAppImage20250924At72012Am4,
    overlay: true,
    overlayHeight: "h-[535px]",
    imageClassName: "object-cover",
    titleClassName: "text-[40px] md:text-[64px] lg:text-[96px]",
  },
  {
    title: "By. Request",
    href: "/express-bahari/by-request-express-bahari",
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
  price?: string;
  href: string;
  image: string;
  overlay?: boolean;
  overlayHeight?: string;
  titleClassName?: string;
  imageClassName?: string;
}> = ({
  title,
  price,
  href,
  image,
  overlay = true,
  overlayHeight = "h-[559px]",
  titleClassName = "",
  imageClassName = "object-cover",
}) => {
  return (
    <a href={href} className="relative w-full block overflow-hidden group">
      <div className="relative w-full overflow-hidden">
        <div
          className="relative w-full h-[420px] md:h-[520px] lg:h-[559px] bg-[#d9d9d9] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-center mask-size-cover"
          style={{ maskImage: `url('${imgRectangle4237}')` }}
        >
          <img
            src={image}
            alt={title}
            className={`absolute inset-0 w-full h-full ${imageClassName} transition-transform duration-700 group-hover:scale-110`}
          />

          {overlay && (
            <div
              className={`absolute inset-x-0 bottom-0 ${overlayHeight} bg-gradient-to-b from-[rgba(217,217,217,0.05)] to-[rgba(13,36,100,0.8)]`}
            />
          )}

          <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
            <div className="flex flex-col items-center">
              <h2
                className={`font-['Poppins:Bold',sans-serif] not-italic leading-none text-white font-bold ${titleClassName}`}
              >
                {title}
              </h2>
              {price && (
                <p className="font-['Poppins:Bold',sans-serif] text-white font-bold text-[32px] md:text-[48px] lg:text-[64px] mt-4 opacity-90">
                  {price}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};



/* ================= PAGE ================= */
export default function ExpressBahariGatheringTripPage() {
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

        <div className="mx-auto flex max-w-[1440px] flex-col px-0 py-0 font-['Poppins',sans-serif]">
          {packages.map((item, index) => (
            <MaskedImageSection key={index} {...item} />
          ))}
        </div>
      </main>

    </div>
  );
}