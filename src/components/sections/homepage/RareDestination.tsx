'use client';

import React from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

/* ================= ASSETS ================= */
const imgLosalaTravelLogoTypography = "/assets/0e289cbf5e4563cac2cb978c1887a61fd482dc25.png";
const imgLosalaTravelLogoOnly = "/assets/110f0e1e80716f8a995f0c7455b7174a0b709b85.png";
const imgPattern20111 = "/assets/imgPattern20111.png";

/* ================= TYPES ================= */
type DestinationItem = {
  title: string;
  badge: string;
  rating?: number;
  layout: "point-view" | "under-water" | "glamping" | "accommodation";
  images: string[];
};

type HeaderLink = {
  label: string;
};

type GalleryImageProps = {
  src: string;
  alt: string;
  className?: string;
};

type RatingBadgeProps = {
  badge: string;
  title: string;
  rating?: number;
};

/* ================= DATA ================= */
const navLinks: HeaderLink[] = [
  { label: "Hubungi" },
  { label: "Informasi" },
  { label: "Tentang kami" },
];

const destinations: DestinationItem[] = [
  {
    title: "Point View Karimunjawa",
    badge: "P",
    rating: 5,
    layout: "point-view",
    images: [
      "https://images.unsplash.com/photo-1691849793899-ac59a3bdc08d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGlzbGFuZCUyMGJlYWNoJTIwYWVyaWFsfGVufDF8fHx8MTc3MzY2NTI0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1758983693315-744468a84181?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwc3Vuc2V0JTIwa2F5YWtpbmd8ZW58MXx8fHwxNzczNzQyODIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1739532827391-45e14eed59c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHN1bnNldCUyMG9jZWFuJTIwdmlld3xlbnwxfHx8fDE3NzM3NDI4MjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1758983693315-744468a84181?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwc3Vuc2V0JTIwa2F5YWtpbmd8ZW58MXx8fHwxNzczNzQyODIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
  {
    title: "Under water view Karimunjawa",
    badge: "P",
    rating: 5,
    layout: "under-water",
    images: [
      "https://images.unsplash.com/photo-1706612203418-e1f0f945e0f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBzbm9ya2VsaW5nJTIwdW5kZXJ3YXRlcnxlbnwxfHx8fDE3NzM3NDI4MTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1637264296018-2ec3ea67230b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmRlcndhdGVyJTIwZGl2aW5nJTIwY29yYWwlMjByZWVmfGVufDF8fHx8MTc3MzY1NTQwMHww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1706612203418-e1f0f945e0f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBzbm9ya2VsaW5nJTIwdW5kZXJ3YXRlcnxlbnwxfHx8fDE3NzM3NDI4MTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1637264296018-2ec3ea67230b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmRlcndhdGVyJTIwZGl2aW5nJTIwY29yYWwlMjByZWVmfGVufDF8fHx8MTc3MzY1NTQwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
  {
    title: "Glamping area",
    badge: "P",
    rating: 5,
    layout: "glamping",
    images: [
      "https://images.unsplash.com/photo-1714326029322-fcc1464df757?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtcGluZyUyMHRlbnQlMjBsdXh1cnklMjBjYW1waW5nfGVufDF8fHx8MTc3MzY5Mjg0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1714326029322-fcc1464df757?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtcGluZyUyMHRlbnQlMjBsdXh1cnklMjBjYW1waW5nfGVufDF8fHx8MTc3MzY5Mjg0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1714326029322-fcc1464df757?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtcGluZyUyMHRlbnQlMjBsdXh1cnklMjBjYW1waW5nfGVufDF8fHx8MTc3MzY5Mjg0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1714326029322-fcc1464df757?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtcGluZyUyMHRlbnQlMjBsdXh1cnklMjBjYW1waW5nfGVufDF8fHx8MTc3MzY5Mjg0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
  {
    title: "Best Accomodation",
    badge: "P",
    rating: 5,
    layout: "accommodation",
    images: [
      "https://images.unsplash.com/photo-1772266870580-abc5d21b29c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNvcnQlMjBhY2NvbW1vZGF0aW9uJTIwdHJvcGljYWx8ZW58MXx8fHwxNzczNzQyODIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1772266870580-abc5d21b29c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNvcnQlMjBhY2NvbW1vZGF0aW9uJTIwdHJvcGljYWx8ZW58MXx8fHwxNzczNzQyODIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1509647924673-bbb53e22eeb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHN1bnNldCUyMG9jZWFuJTIwdmlld3xlbnwxfHx8fDE3NzM3NDI4MjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
];

/* ================= SMALL COMPONENTS ================= */
const GalleryImage: React.FC<GalleryImageProps> = ({
  src,
  alt,
  className = "",
}) => {
  return (
    <div className={`overflow-hidden rounded-[14px] shadow-[0_4px_12px_rgba(0,0,0,0.16)] ${className}`}>
      <ImageWithFallback
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
      />
    </div>
  );
};

const PatternOverlay: React.FC = () => {
  return (
    <img
      src={imgPattern20111}
      alt="pattern"
      className="absolute -top-1 left-1/2 -translate-x-1/2 w-screen min-w-[100vw] max-w-none h-auto pointer-events-none -z-10"
    />
  );
};

const RatingBadge: React.FC<RatingBadgeProps> = ({
  badge,
  title,
  rating = 5,
}) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="inline-flex items-center gap-4">
        <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#FFC229] shadow-[0_4px_10px_rgba(0,0,0,0.16)]">
          <span className="font-['Poppins:Bold',sans-serif] text-[24px] text-[#0D2464]">
            {badge}
          </span>
        </div>

        <span className="font-['Poppins:SemiBold',sans-serif] text-[20px] md:text-[22px] text-[#0D2464]">
          {title}
        </span>
      </div>

      <div className="flex items-center gap-1 md:justify-end">
        {[...Array(rating)].map((_, i) => (
          <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#FFC229">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

/* ================= SECTIONS ================= */
const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white z-0">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 pt-10 md:pt-16 pb-14 md:pb-20">
        <div className="max-w-[540px]">
          <h1 className="font-['Poppins:Bold',sans-serif] font-bold text-[42px] md:text-[64px] leading-[0.95]">
            <span className="text-[#FFC229]">Dokumentasi</span>
            <br />
            <span className="text-[#0D2464]">& Destinasi</span>
            <br />
            <span className="text-[#FFC229]">Terbaik</span>
          </h1>

          <p className="mt-4 max-w-[360px] font-['Poppins:Regular',sans-serif] text-[14px] md:text-[16px] leading-[1.2] text-[#0D2464]">
            Losala Travel membawa anda ke destinasi terbaik di Karimunjawa.
          </p>
        </div>
      </div>
    </section>
  );
};

const PointViewLayout: React.FC<{ images: string[]; title: string }> = ({
  images,
  title,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1.05fr_1.45fr] gap-5">
      <GalleryImage
        src={images[0]}
        alt={`${title} 1`}
        className="h-[280px] md:h-[560px]"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 auto-rows-[170px] md:auto-rows-[270px]">
        <GalleryImage
          src={images[1]}
          alt={`${title} 2`}
          className="h-[220px] md:h-full"
        />
        <GalleryImage
          src={images[2]}
          alt={`${title} 3`}
          className="h-[220px] md:h-full"
        />
        <GalleryImage
          src={images[3]}
          alt={`${title} 4`}
          className="h-[220px] md:col-span-2 md:h-full"
        />
      </div>
    </div>
  );
};

const UnderWaterLayout: React.FC<{ images: string[]; title: string }> = ({
  images,
  title,
}) => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-2 md:gap-6 h-[400px] md:h-[560px] w-full">
      {/* div1 */}
      <div className="overflow-hidden rounded-[14px] shadow-[0_4px_12px_rgba(0,0,0,0.16)]">
        <GalleryImage src={images[0]} alt={`${title} 1`} className="h-full" />
      </div>

      {/* div3 */}
      <div className="col-start-2 row-start-1 overflow-hidden rounded-[14px] shadow-[0_4px_12px_rgba(0,0,0,0.16)]">
        <GalleryImage src={images[2]} alt={`${title} 3`} className="h-full" />
      </div>

      {/* div2 */}
      <div className="row-span-2 col-start-3 row-start-1 overflow-hidden rounded-[14px] shadow-[0_4px_12px_rgba(0,0,0,0.16)]">
        <GalleryImage src={images[1]} alt={`${title} 2`} className="h-full" />
      </div>

      {/* div4 */}
      <div className="col-span-2 overflow-hidden rounded-[14px] shadow-[0_4px_12px_rgba(0,0,0,0.16)]">
        <GalleryImage src={images[3]} alt={`${title} 4`} className="h-full" />
      </div>
    </div>
  );
};

const GlampingLayout: React.FC<{ images: string[]; title: string }> = ({
  images,
  title,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_0.76fr_0.8fr] gap-5">
      <GalleryImage
        src={images[0]}
        alt={`${title} 1`}
        className="h-[280px] md:h-[560px]"
      />

      <div className="grid grid-cols-1 gap-5 auto-rows-[170px] md:auto-rows-[270px]">
        <GalleryImage
          src={images[1]}
          alt={`${title} 2`}
          className="h-[220px] md:h-full"
        />
        <GalleryImage
          src={images[2]}
          alt={`${title} 3`}
          className="h-[220px] md:h-full"
        />
      </div>

      <GalleryImage
        src={images[3]}
        alt={`${title} 4`}
        className="h-[280px] md:h-[560px]"
      />
    </div>
  );
};

const AccommodationLayout: React.FC<{ images: string[]; title: string }> = ({
  images,
  title,
}) => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-2 md:gap-6 h-[400px] md:h-[560px] w-full">
      {/* div1 */}
      <div className="overflow-hidden rounded-[14px] shadow-[0_4px_12px_rgba(0,0,0,0.16)]">
        <GalleryImage src={images[0]} alt={`${title} 1`} className="h-full" />
      </div>

      {/* div2 */}
      <div className="col-span-2 overflow-hidden rounded-[14px] shadow-[0_4px_12px_rgba(0,0,0,0.16)]">
        <GalleryImage src={images[1]} alt={`${title} 2`} className="h-full" />
      </div>

      {/* div4 */}
      <div className="col-span-2 col-start-1 row-start-2 overflow-hidden rounded-[14px] shadow-[0_4px_12px_rgba(0,0,0,0.16)]">
        <GalleryImage src={images[2]} alt={`${title} 4`} className="h-full" />
      </div>

      {/* div3 */}
      <div className="col-start-3 row-start-2 overflow-hidden rounded-[14px] shadow-[0_4px_12px_rgba(0,0,0,0.16)]">
        <GalleryImage src={images[0]} alt={`${title} 3`} className="h-full" />
      </div>
    </div>
  );
};

const DestinationSection: React.FC<{ item: DestinationItem }> = ({ item }) => {
  const renderLayout = () => {
    switch (item.layout) {
      case "point-view":
        return <PointViewLayout images={item.images} title={item.title} />;
      case "under-water":
        return <UnderWaterLayout images={item.images} title={item.title} />;
      case "glamping":
        return <GlampingLayout images={item.images} title={item.title} />;
      case "accommodation":
        return <AccommodationLayout images={item.images} title={item.title} />;
      default:
        return null;
    }
  };

  return (
    <section className="relative py-8 md:py-10 z-0">
      <PatternOverlay />
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        {renderLayout()}
        <div className="mt-5 md:mt-6">
          <RatingBadge
            badge={item.badge}
            title={item.title}
            rating={item.rating}
          />
        </div>
      </div>
    </section>
  );
};


/* ================= PAGE ================= */
export default function RareDestination() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white" data-name="RareDestination">
      
      <main>
        <HeroSection />

        {destinations.map((item, index) => (
          <DestinationSection key={index} item={item} />
        ))}
      </main>

    </div>
  );
}