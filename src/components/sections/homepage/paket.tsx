'use client';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import svgPaths from "@/components/icons/svg-9rp6dcu08w";
import { LazyImage } from "@/components/ui/LazyImage";

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
import { imgRectangle4154, imgRectangle4155, imgRectangle4156 } from "@/components/icons/svg-mhjo3";

type PackageCardItem = {
  title: string;
  subtitle?: string;
  image: string;
  imageMask: string;
  imageClassName?: string;
  starPath: string;
  arrowPath: string;
  wide?: boolean;
  overlay?: boolean;
  overlayTitleImage?: string;
};

const packageItems: PackageCardItem[] = [
  {
    title: "Gathering trip",
    subtitle: "Package",
    image: imgPackGatheringTripArtboard61,
    imageMask: imgRectangle4154,
    imageClassName: "object-cover scale-100",
    starPath: svgPaths.p10f9bb00,
    arrowPath: svgPaths.p329c9800,
  },
  {
    title: "Private trip",
    subtitle: "Package",
    image: imgPackOpenTrip2,
    imageMask: imgRectangle4155,
    imageClassName: "object-cover scale-100",
    starPath: svgPaths.pc1a3df0,
    arrowPath: svgPaths.p3963e200,
  },
  {
    title: "By. Request",
    subtitle: "Package",
    image: imgPackByRequestArtboard81,
    imageMask: imgRectangle4155,
    imageClassName: "object-cover scale-100",
    starPath: svgPaths.pb291b80,
    arrowPath: svgPaths.p3963e200,
  },
  {
    title: "Glamping",
    subtitle: "Ground",
    image: imgWhatsAppImage20250924At72012Am11,
    imageMask: imgRectangle4156,
    imageClassName: "object-cover scale-100",
    starPath: svgPaths.pb291b80,
    arrowPath: svgPaths.p3963e200,
    wide: true,
    overlay: true,
    overlayTitleImage: imgPackGlampingGroundArtboard61,
  },
];

function PackageStars({ path }: { path: string }) {
  return (
    <div className="h-[19.13px] w-[110.435px]">
      <div className="h-full w-full flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="16" height="15" viewBox="0 0 17 17" fill="none">
            <path d={svgPaths.p316ff080} fill="#FFC700" />
          </svg>
        ))}
      </div>
    </div>
  );
}

function PackageArrow({ path }: { path: string }) {
  return (
    <div className="flex items-center justify-center">
      <div className="-rotate-30">
        <div className="relative size-[60.87px]">
          <div className="absolute inset-[0_-11.5%_-23%_-11.5%]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 74.8696 74.8696"
            >
              <g filter="url(#package-arrow-shadow)">
                <circle
                  cx="37.4348"
                  cy="30.4348"
                  r="30.4348"
                  transform="rotate(180 37.4348 30.4348)"
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
                  id="package-arrow-shadow"
                  x="0"
                  y="0"
                  width="74.8696"
                  height="74.8696"
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
      </div>
    </div>
  );
}

function PackageImage({
  image,
  mask,
  className = "",
  overlay = false,
  overlayTitleImage,
  wide = false,
}: {
  image: string;
  mask: string;
  className?: string;
  overlay?: boolean;
  overlayTitleImage?: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden ${
        wide ? "h-[250px] md:h-[379px] w-full" : "aspect-square w-full"
      }`}
      style={{
        WebkitMaskImage: `url('${mask}')`,
        maskImage: `url('${mask}')`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
        maskSize: "100% 100%",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    >
      <LazyImage
        alt=""
        src={image}
        className={`absolute inset-0 size-full pointer-events-none ${className}`}
        loading="lazy"
      />

      {overlay && (
        <div className="absolute inset-0 bg-black/30" />
      )}

      {overlay && overlayTitleImage && (
        <LazyImage
          alt=""
          src={overlayTitleImage}
          className="pointer-events-none absolute left-0 top-0 h-full max-w-none object-cover"
          loading="lazy"
        />
      )}
    </div>
  );
}

function PackageCard({
  title,
  subtitle,
  image,
  imageMask,
  imageClassName,
  starPath,
  arrowPath,
  wide = false,
  overlay = false,
  overlayTitleImage,
  innerRef,
}: PackageCardItem & { innerRef?: (el: HTMLDivElement | null) => void }) {
  return (
    <div
      ref={innerRef}
      className={`relative rounded-[15px] border border-[#0d2464] bg-white shadow-[0_4px_10px_rgba(0,0,0,0.08)] p-5 md:p-[22px] min-h-[450px] md:min-h-[540px] opacity-0 ${
        wide ? "md:p-[23px]" : ""
      }`}
    >
      <PackageImage
        image={image}
        mask={imageMask}
        className={imageClassName}
        overlay={overlay}
        overlayTitleImage={overlayTitleImage}
        wide={wide}
      />

      <div className={`${wide ? "pt-[20px] md:pt-[25px]" : "pt-[24px] md:pt-[36px]"}`}>
        <PackageStars path={starPath} />

        <div className="mt-[12px] md:pr-[90px]">
          <p className="font-bold font-['Poppins:SemiBold',sans-serif] text-[18px] md:text-[20px] leading-[1.2] text-black">
            {title}
            {subtitle && (
              <>
                <br />
                {subtitle}
              </>
            )}
          </p>
        </div>
      </div>

      <div className="absolute bottom-[18px] right-[16px]">
        <PackageArrow path={arrowPath} />
      </div>
    </div>
  );
}

export default function TravelPackageSection() {
  const topCards = packageItems.filter((item) => !item.wide);
  const wideCard = packageItems.find((item) => item.wide);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const wideCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const isMobile = window.innerWidth < 768;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      
      const xOffset = isMobile ? (i % 2 === 0 ? -50 : 50) : 0;
      const yOffset = isMobile ? 0 : 50;

      gsap.fromTo(card,
        { opacity: 0, x: xOffset, y: yOffset },
        {
          opacity: 1,
          x: 0,
          y: 0,
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

    if (wideCardRef.current) {
      gsap.fromTo(wideCardRef.current,
        { opacity: 0, y: 50 },
        { 
          opacity: 1, y: 0, 
          duration: 1, 
          scrollTrigger: {
            trigger: wideCardRef.current,
            start: "top 90%",
            once: true,
          }
        }
      );
    }
  }, []);

  return (
    <section className="px-6 md:px-[32px] py-12 md:py-[72px] overflow-x-hidden">
      <div className="mx-auto max-w-[1287px]">
        <div className="mb-10 md:mb-[52px] text-left md:text-center">
          <h2 className="font-['Poppins:ExtraBold',sans-serif] font-bold text-[36px] md:text-[48px] text-black leading-tight">
            Informasi Paket Perjalanan
          </h2>
          <p className="mt-[10px] items-center md:mx-auto font-['Poppins:Medium',sans-serif] text-[18px] md:text-[20px] text-black max-w-[600px]">
            Buatlah pengalaman baru yang tak terlupakan bersama kami
          </p>
        </div>

        <div className="grid grid-cols-1 gap-[24px] md:grid-cols-3">
          {topCards.map((item, index) => (
            <PackageCard 
              key={index} 
              {...item} 
              innerRef={(el) => { cardsRef.current[index] = el; }} 
            />
          ))}
        </div>

        {wideCard && (
          <div className="mt-[24px] md:mt-[32px]">
            <PackageCard 
              {...wideCard} 
              innerRef={(el) => { wideCardRef.current = el; }} 
            />
          </div>
        )}
      </div>
    </section>
  );
}