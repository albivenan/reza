'use client';
import svgPaths from "@/components/icons/svg-9rp6dcu08w";
const imgPattern2015 = "/assets/db502b78bb52f9dc06097996c86e3a73dbfc871e.png";
const imgPattern2011 = "/assets/0342cb03285a24cf0a85cbd67a56e12bee53ce6a.png";
const imgKarimunjawaMap011 = "/assets/093c4d21393f0f2504052e344e7206d936c220d7.png";
const imgWhatsAppImage20250924At72012Am11 = "/assets/95abf6d928e1b8243c40026efdbd45ff97cfe867.png";
const imgPackGatheringTripArtboard61 = "/assets/cfb288b2c68729779025bf5f7aac768929440c04.png";
const imgPackOpenTrip2 = "/assets/2006429202f9b8be608391001b03ca672a936f55.png";
const imgPackByRequestArtboard81 = "/assets/f9f54806b7fac831ad7d1c0d7c24fda9fd5022ee.png";
const imgPackGlampingGroundArtboard61 = "/assets/87560b8617827e754820ebafd260b8c60d0a4cb9.png";
const imgPelniKalimutuFinal1 = "/assets/c702909d2bf5b51b9e0818ae4188ef76f6291368.png";
const imgSiginjaiFinal1 = "/assets/06216d95e4d1bb8d0df55dcf3b76e16e11fe0ded.png";
const imgXpressBahari9FFinal1 = "/assets/6d9de98984a25ddbf56d327f94beb29a28fb5d0b.png";
import React from "react";
import { imgRectangle4220, imgRectangle4221, imgRectangle4154, imgRectangle4155, imgRectangle4156, imgVector14 } from "@/components/icons/svg-mhjo3";

type TransportItem = {
  title: string;
  image: string;
  arrowPath: string;
  imageClassName?: string;
  href?: string;
};

const transportItems: TransportItem[] = [
  {
    title: "KM Pelni",
    image: imgPelniKalimutuFinal1,
    arrowPath: svgPaths.p2f15bd80,
    imageClassName: "scale-[1.18] object-cover object-center",
    href: "/kelimutu",
  },
  {
    title: "KMP Siginjai",
    image: imgSiginjaiFinal1,
    arrowPath: svgPaths.p22b2d580,
    imageClassName: "scale-[1.2] object-cover object-center",
    href: "/siginjai",
  },
  {
    title: "Express Bahari",
    image: imgXpressBahari9FFinal1,
    arrowPath: svgPaths.p22b2d580,
    imageClassName: "scale-[1.22] object-cover object-center",
    href: "/express-bahari",
  },
];

function TransportArrow({ path }: { path: string }) {
  return (
    <div className="size-[66.263px]">
      <div className="absolute inset-[0_-10.56%_-21.13%_-10.56%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 80.2627 80.2627"
        >
          <g filter="url(#transport-arrow-shadow)">
            <circle
              cx="40.1314"
              cy="33.1314"
              r="33.1314"
              transform="rotate(180 40.1314 33.1314)"
              fill="var(--fill-0, #FFC229)"
            />
            <path
              clipRule="evenodd"
              d={path}
              fill="var(--fill-0, #0D2464)"
              fillRule="evenodd"
            />
          </g>
          <defs>
            <filter
              id="transport-arrow-shadow"
              x="0"
              y="0"
              width="80.2627"
              height="80.2627"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="7" />
              <feGaussianBlur stdDeviation="3.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow"
                mode="normal"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function TransportCard({
  title,
  image,
  arrowPath,
  imageClassName = "",
  href,
}: TransportItem) {
  const content = (
    <>
      <div
        className="relative h-[597.942px] w-full overflow-hidden"
        style={{
          WebkitMaskImage: `url('${imgVector14}')`,
          maskImage: `url('${imgVector14}')`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      >
        <img
          alt={title}
          src={image}
          className={`pointer-events-none absolute inset-0 size-full ${imageClassName}`}
        />
      </div>

      <p className="font-bold absolute bottom-[22px] left-[20px] font-['Poppins:SemiBold',sans-serif] text-xl not-italic leading-[normal] text-white">
        {title}
      </p>

      <div className="absolute bottom-[0px] right-[10px]">
        <TransportArrow path={arrowPath} />
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} className="group relative block cursor-pointer transition-transform hover:scale-[1.02]">
        {content}
      </a>
    );
  }

  return (
    <div className="group relative">
      {content}
    </div>
  );
}

export default function TransportSection() {
  return (
    <section className="px-[32px] pt-[70px] pb-[40px]">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-[42px] text-center">
          <h2 className="font-['Poppins:ExtraBold',sans-serif] font-bold text-[48px] leading-[56px] not-italic text-black">
            Transportasi
          </h2>
          <p className="font-bold mx-auto mt-[10px] max-w-[790px] font-['Poppins:Medium',sans-serif] text-[18px] leading-[25px] not-italic text-black">
            Temukan petualangan sejati degan Losala Travel, nikmati akomodasi nyaman di atas kapal dan jelajahi destinasi eksotis dengan gaya.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-3 md:gap-[20px]">
          {transportItems.map((item, index) => (
            <TransportCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}