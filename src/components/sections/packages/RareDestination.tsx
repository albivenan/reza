'use client';

import { useState, useEffect, useRef } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* ================= TYPES ================= */
type DestinationItem = {
  title: string;
  badge: string;
  rating?: number;
  layout: "point-view" | "under-water" | "glamping" | "accommodation";
  images: string[];
};

type GalleryImageProps = {
  src: string;
  alt: string;
  className?: string;
  onClick: (src: string) => void;
};

/* ================= ASSETS ================= */
const imgLosalaTravelLogoTypography = "/assets/0e289cbf5e4563cac2cb978c1887a61fd482dc25.png";
const imgLosalaTravelLogoOnly = "/assets/110f0e1e80716f8a995f0c7455b7174a0b709b85.png";
const imgPattern20111 = "/assets/imgPattern20111.png";

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
  onClick,
}) => {
  return (
    <div 
      className={`gallery-item opacity-0 relative group overflow-hidden rounded-[14px] shadow-[0_4px_12px_rgba(0,0,0,0.16)] cursor-pointer ${className}`}
      onClick={() => onClick(src)}
    >
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10" />
      <ImageWithFallback
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
        <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/40">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="11" y1="8" x2="11" y2="14"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
        </div>
      </div>
    </div>
  );
};

const PatternOverlay: React.FC = () => {
  return (
    <img
      src={imgPattern20111}
      alt="pattern"
      className="absolute top-0 left-0 w-full h-full object-cover object-top pointer-events-none -z-10 opacity-30"
    />
  );
};

const RatingBadge: React.FC<{
  badge: string;
  title: string;
  rating?: number;
}> = ({
  badge,
  title,
  rating = 5,
}) => {
  return (
    <div className="badge-item opacity-0 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <div className="inline-flex items-center gap-3 md:gap-4">
        <div className="flex h-[40px] w-[40px] md:h-[52px] md:w-[52px] items-center justify-center rounded-full bg-[#FFC229] shadow-[0_4px_10px_rgba(0,0,0,0.16)] flex-shrink-0">
          <span className="font-['Poppins:Bold',sans-serif] text-[18px] md:text-[24px] text-[#0D2464]">
            {badge}
          </span>
        </div>
        <p className="font-['Poppins:Bold',sans-serif] font-bold text-[16px] md:text-[22px] text-[#0D2464] leading-tight">
          {title}
        </p>
      </div>
      <div className="flex items-center gap-1 md:justify-end">
        {[...Array(rating)].map((_, i) => (
          <svg key={i} viewBox="0 0 24 24" fill="#FFC229" className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]">
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
    <section className="relative bg-white z-0 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 pt-6 md:pt-10 pb-10 md:pb-20">
        <div className="max-w-[540px]">
          <h1 className="hero-title font-['Poppins:Bold',sans-serif] font-bold text-[34px] md:text-[64px] leading-[1.1] md:leading-[0.95]">
            <span className="text-[#FFC229] inline-block opacity-0">Dokumentasi</span>
            <br />
            <span className="text-[#0D2464] inline-block opacity-0">& Destinasi</span>
            <br />
            <span className="text-[#FFC229] inline-block opacity-0">Terbaik</span>
          </h1>
          <p className="hero-desc opacity-0 font-bold mt-4 max-w-xl font-['Poppins:Regular',sans-serif] text-[13px] md:text-[16px] leading-relaxed text-[#0D2464]">
            Losala Travel membawa anda ke destinasi terbaik di Karimunjawa dengan pengalaman yang tak terlupakan.
          </p>
        </div>
      </div>
    </section>
  );
};

const PointViewLayout: React.FC<{ images: string[]; title: string; onImageClick: (s: string) => void }> = ({
  images,
  title,
  onImageClick,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1.05fr_1.45fr] gap-4 md:gap-5">
      <GalleryImage src={images[0]} alt={`${title} 1`} className="h-[240px] md:h-[560px]" onClick={onImageClick} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 auto-rows-[160px] md:auto-rows-[270px]">
        <GalleryImage src={images[1]} alt={`${title} 2`} className="h-[160px] md:h-full" onClick={onImageClick} />
        <GalleryImage src={images[2]} alt={`${title} 3`} className="h-[160px] md:h-full" onClick={onImageClick} />
        <GalleryImage src={images[3]} alt={`${title} 4`} className="h-[160px] md:col-span-2 md:h-full" onClick={onImageClick} />
      </div>
    </div>
  );
};

const UnderWaterLayout: React.FC<{ images: string[]; title: string; onImageClick: (s: string) => void }> = ({
  images,
  title,
  onImageClick,
}) => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-2 md:gap-6 h-[280px] md:h-[560px] w-full">
      <GalleryImage src={images[0]} alt={`${title} 1`} className="h-full" onClick={onImageClick} />
      <GalleryImage src={images[2]} alt={`${title} 3`} className="h-full" onClick={onImageClick} />
      <GalleryImage src={images[1]} alt={`${title} 2`} className="h-full md:row-span-2 md:col-start-3 md:row-start-1" onClick={onImageClick} />
      <GalleryImage src={images[3]} alt={`${title} 4`} className="h-full md:col-span-2" onClick={onImageClick} />
    </div>
  );
};

const GlampingLayout: React.FC<{ images: string[]; title: string; onImageClick: (s: string) => void }> = ({
  images,
  title,
  onImageClick,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_0.76fr_0.8fr] gap-4 md:gap-5">
      <GalleryImage src={images[0]} alt={`${title} 1`} className="h-[240px] md:h-[560px]" onClick={onImageClick} />
      <div className="grid grid-cols-1 gap-4 md:gap-5 auto-rows-[160px] md:auto-rows-[270px]">
        <GalleryImage src={images[1]} alt={`${title} 2`} className="h-[160px] md:h-full" onClick={onImageClick} />
        <GalleryImage src={images[2]} alt={`${title} 3`} className="h-[160px] md:h-full" onClick={onImageClick} />
      </div>
      <GalleryImage src={images[3]} alt={`${title} 4`} className="h-[240px] md:h-[560px]" onClick={onImageClick} />
    </div>
  );
};

const AccommodationLayout: React.FC<{ images: string[]; title: string; onImageClick: (s: string) => void }> = ({
  images,
  title,
  onImageClick,
}) => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-2 md:gap-6 h-[280px] md:h-[560px] w-full">
      <GalleryImage src={images[0]} alt={`${title} 1`} className="h-full" onClick={onImageClick} />
      <GalleryImage src={images[1]} alt={`${title} 2`} className="h-full md:col-span-2" onClick={onImageClick} />
      <GalleryImage src={images[2]} alt={`${title} 4`} className="h-full md:col-span-2" onClick={onImageClick} />
      <GalleryImage src={images[0]} alt={`${title} 3`} className="h-full" onClick={onImageClick} />
    </div>
  );
};

const DestinationSection: React.FC<{ item: { layout: string; images: string[]; title: string; badge: string; rating?: number }; onImageClick: (s: string) => void }> = ({ item, onImageClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate gallery items
      gsap.fromTo(".gallery-item", 
        { 
          opacity: 0, 
          y: 40,
          scale: 0.95 
        },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 1,
          stagger: 0.15,
          ease: "expo.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            once: true
          }
        }
      );

      // Animate badge
      gsap.fromTo(".badge-item", 
        { opacity: 0, x: -30 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 1,
          delay: 0.4,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            once: true
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const renderLayout = () => {
    switch (item.layout) {
      case "point-view":
        return <PointViewLayout images={item.images} title={item.title} onImageClick={onImageClick} />;
      case "under-water":
        return <UnderWaterLayout images={item.images} title={item.title} onImageClick={onImageClick} />;
      case "glamping":
        return <GlampingLayout images={item.images} title={item.title} onImageClick={onImageClick} />;
      case "accommodation":
        return <AccommodationLayout images={item.images} title={item.title} onImageClick={onImageClick} />;
      default:
        return null;
    }
  };

  return (
    <section ref={containerRef} className="relative py-8 md:py-10 z-0 overflow-hidden">
      <PatternOverlay />
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        {renderLayout()}
        <div className="mt-5 md:mt-6">
          <RatingBadge badge={item.badge} title={item.title} rating={item.rating} />
        </div>
      </div>
    </section>
  );
};

/* ================= PAGE ================= */
export default function RareDestination() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedImage]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Animations
    const heroTl = gsap.timeline();
    heroTl.fromTo(".hero-title span", 
      { opacity: 0, y: 30, rotationX: -15 },
      { opacity: 1, y: 0, rotationX: 0, stagger: 0.2, duration: 1, ease: "power4.out" }
    );
    heroTl.fromTo(".hero-desc", 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.4"
    );
  }, []);

  return (
    <div className="bg-white">
      <main>
        <HeroSection />
        {destinations.map((item, index) => (
          <DestinationSection key={index} item={item} onImageClick={(src) => setSelectedImage(src)} />
        ))}
      </main>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-[#FFC229] transition-colors p-2 z-[1010]"
            onClick={() => setSelectedImage(null)}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <div className="relative max-w-[95vw] max-h-[90vh] overflow-hidden rounded-[20px] shadow-2xl animate-in zoom-in-95 duration-300">
            <img 
              src={selectedImage} 
              alt="Full Resolution" 
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </div>
      )}
    </div>
  );
}
