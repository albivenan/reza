'use client';

import { useState, useEffect } from "react";
import svgPaths from "@/components/icons/svg-xw860op9ef";

/* ================= ASSETS ================= */
const imgPattern2016 = "/assets/0342cb03285a24cf0a85cbd67a56e12bee53ce6a.png";
const imgLosalaTravelLogoOnly = "/assets/110f0e1e80716f8a995f0c7455b7174a0b709b85.png";
const imgLosalaTravelLogoTypography = "/assets/0e289cbf5e4563cac2cb978c1887a61fd482dc25.png";

/* hero + gallery + cta images */
const imgHero = "/assets/c1ade05911eec2345c8b38d4ec6edb2969a2ce67.png";
const imgGalleryTall = "/assets/f798b9c661c36692a7c6e2e39cd4ab99e5df9c73.png";
const imgGalleryTop = "/assets/99103d03d337dc4bf5e20216e8f067c55827ee2a.png";
const imgGalleryDive = "/assets/ba7b85ce13e5f1a168c264bfd9ee65df500336b4.png";
const imgGalleryWide = "/assets/a8d044b40380516ca3399f08d52be73b4f8368fd.png";
const imgCtaBeach = "/assets/dedb879340e4f56dc0f0aaed3131f819ef5f52e0.png";

/* ================= TYPES ================= */
type OfferItem = {
  title: string;
  icon: React.ReactNode;
};

type GalleryItem = {
  image: string;
  alt: string;
  className?: string;
};

/* ================= DATA ================= */
const offers: OfferItem[] = [
  {
    title: "Tiket\npulang & pergi",
    icon: (
      <svg className="w-10 h-10 md:w-16 md:h-16" fill="none" preserveAspectRatio="none" viewBox="0 0 83.9975 83.9937">
        <g>
          <path d={svgPaths.p2ea29100} fill="currentColor" />
          <path d={svgPaths.p382c7400} fill="currentColor" />
        </g>
      </svg>
    ),
  },
  {
    title: "Akomodasi",
    icon: (
      <svg className="w-10 h-10 md:w-14 md:h-12" fill="none" preserveAspectRatio="none" viewBox="0 0 71.7648 61">
        <g>
          <path d={svgPaths.p2cc70280} fill="currentColor" />
          <path d={svgPaths.p33d85800} fill="currentColor" />
        </g>
      </svg>
    ),
  },
  {
    title: "Penginapan",
    icon: (
      <svg className="w-10 h-10 md:w-12 md:h-14" fill="none" preserveAspectRatio="none" viewBox="0 0 64 72">
        <g>
          <path d={svgPaths.p2652b910} fill="currentColor" />
          <path d={svgPaths.p13d74580} fill="currentColor" />
        </g>
      </svg>
    ),
  },
  {
    title: "Tour guide",
    icon: (
      <svg className="w-10 h-10 md:w-14 md:h-14" fill="none" preserveAspectRatio="none" viewBox="0 0 64.6667 64.6667">
        <g>
          <path d={svgPaths.p8971000} fill="currentColor" />
          <path d={svgPaths.p3328cd80} fill="currentColor" />
        </g>
      </svg>
    ),
  },
  {
    title: "Dokumentasi",
    icon: (
      <svg className="w-10 h-10 md:w-16 md:h-14" fill="none" preserveAspectRatio="none" viewBox="0 0 74.1228 70.4511">
        <g>
          <path d={svgPaths.p8d3c100} fill="currentColor" />
          <path d={svgPaths.p39415800} fill="currentColor" />
          <path d={svgPaths.p2a5d7cc0} fill="currentColor" />
          <path d={svgPaths.p16798ef2} fill="currentColor" />
        </g>
      </svg>
    ),
  },
  {
    title: "BBQ",
    icon: (
      <svg className="w-10 h-10 md:w-12 md:h-16" fill="none" preserveAspectRatio="none" viewBox="0 0 66.326 82.0714">
        <g>
          <path d={svgPaths.p23176200} fill="currentColor" />
        </g>
      </svg>
    ),
  },
  {
    title: "Wisata darat",
    icon: (
      <svg className="w-10 h-10 md:w-16 md:h-14" fill="none" preserveAspectRatio="none" viewBox="0 0 79.9999 67.0967">
        <g>
          <path d={svgPaths.p118065c0} fill="currentColor" />
          <path d={svgPaths.p1b25dd00} fill="currentColor" />
          <path d={svgPaths.p3868f8f0} fill="currentColor" />
        </g>
      </svg>
    ),
  },
  {
    title: "P3K",
    icon: (
      <svg className="w-10 h-10 md:w-16 md:h-10" fill="none" preserveAspectRatio="none" viewBox="0 0 79 50.1725">
        <g>
          <path d={svgPaths.p21c9cd00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d="M57.8449 43.431H77.5V48.6724" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d={svgPaths.p13ae6e80} stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" />
          <path d={svgPaths.p2f60080} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d="M1.5 32.9483H39.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d="M52.6034 32.9483H59.1552" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d={svgPaths.p28fb6b00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d={svgPaths.p34b13100} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d={svgPaths.p13295780} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    ),
  },
];

const galleries: GalleryItem[] = [
  {
    image: imgGalleryTall,
    alt: "Pemandangan laut",
    className: "md:row-span-3 h-full",
  },
  {
    image: imgGalleryTop,
    alt: "Wisata laut",
  },
  {
    image: imgGalleryDive,
    alt: "Menyelam",
  },
  {
    image: imgGalleryWide,
    alt: "Dokumentasi wisata",
    className: "col-span-2 row-span-2",
  },
];

/* ================= SMALL COMPONENTS ================= */
const SectionPattern: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`pointer-events-none absolute inset-x-0 ${className}`}>
    <img
      src={imgPattern2016}
      alt=""
      className="w-full h-full object-cover opacity-20"
    />
  </div>
);

const InteractiveImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
  onClick: (s: string) => void;
  aspectClassName?: string;
}> = ({ src, alt, className = "", onClick, aspectClassName = "" }) => {
  return (
    <div 
      className={`group relative overflow-hidden rounded-[14px] shadow-[0_4px_12px_rgba(0,0,0,0.16)] cursor-pointer ${className} ${aspectClassName}`}
      onClick={() => onClick(src)}
    >
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10" />
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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


const HeroSection: React.FC<{ onImageClick: (s: string) => void }> = ({ onImageClick }) => {
  return (
    <section className="relative">
      <SectionPattern className="bottom-[-40px] h-[170px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-12 pt-10 md:pt-16 pb-14 md:pb-20">
        <div className="max-w-[520px]">
          <h1 className="font-['Poppins:Bold',sans-serif] font-bold leading-[0.95] text-[#0D2464] text-[34px] md:text-[62px]">
            Penawaran Kami
            <br />
            <span className="text-[#FFC229]">di Losala Travel</span>
          </h1>

          <p className="mt-4 max-w-[330px] text-[#3B4C7A] text-[13px] md:text-[20px] leading-[1.15] font-semibold">
            Losala Travel memberikan penawaran dan pengalaman yang belum pernah
            anda rasakan sebelumnya
          </p>
        </div>

        <div className="mt-10 md:mt-12">
          <InteractiveImage 
             src={imgHero} 
             alt="Penawaran Losala Travel" 
             className="w-full h-[210px] md:h-[350px] lg:h-[430px]" 
             onClick={onImageClick}
          />
        </div>
      </div>
    </section>
  );
};

const OfferCard: React.FC<OfferItem> = ({ title, icon }) => {
  return (
    <div className="group flex flex-col items-center text-center cursor-pointer transition-transform hover:-translate-y-2">
      <div className="relative flex h-[140px] w-[90px] md:h-[272px] md:w-[171px] items-center justify-center rounded-[999px] bg-[#0D2464] group-hover:bg-[#FFC229] transition-colors duration-300 shadow-[0_7px_7px_rgba(0,0,0,0.25)] overflow-hidden">
        <img
          src={imgPattern2016}
          alt=""
          className="absolute inset-0 h-[413px] w-[584px] min-w-[584px] max-w-none object-none opacity-10 group-hover:opacity-20 transition-opacity"
        />
        <div className="relative z-10 flex items-center justify-center text-[#FFC229] group-hover:text-[#0D2464] transition-colors duration-300">
          {icon}
        </div>
      </div>

      <p className="mt-4 whitespace-pre-line text-[#0D2464] group-hover:text-[#FFC229] text-[14px] md:text-[18px] font-bold leading-[1.2] md:leading-[25px] transition-colors duration-300">
        {title}
      </p>
    </div>
  );
};

const OffersSection: React.FC = () => {
  return (
    <section className="mx-auto max-w-[1440px] px-6 md:px-12 pt-8 md:pt-12">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="font-['Poppins:Bold',sans-serif] font-bold text-[#0D2464] text-[32px] md:text-[56px] leading-[1.1]">
          Penawaran kami
        </h2>
        <p className="mt-4 text-[#4D5D88] text-[14px] md:text-[18px] leading-relaxed font-semibold max-w-[720px] mx-auto">
          Setiap paket perjalanan kami dilengkapi dengan panduan lengkap dan
          tips perjalanan dari para ahli untuk kenyamanan maksimal Anda.
        </p>
      </div>

      <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-y-10 md:gap-y-16 gap-x-6 md:gap-x-10 place-items-center">
        {offers.map((item, index) => (
          <OfferCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

const GallerySection: React.FC<{ onImageClick: (s: string) => void }> = ({ onImageClick }) => {
  return (
    <section className="mx-auto max-w-[1440px] px-5 md:px-12 pt-14 md:pt-20">
      <div className="text-center mb-10">
        <h2 className="font-['Poppins:Bold',sans-serif] font-bold text-[#0D2464] text-[28px] md:text-[52px] leading-none">
          Dokumentasi & Destinasi terbaik
        </h2>
        <p className="mt-3 text-[#4D5D88] text-[12px] md:text-[18px] font-semibold">
          Liburan tropis sempurna di Karimunjawa
        </p>
      </div>

      <div className="grid grid-cols-3 grid-rows-3 gap-2 md:gap-6 h-[400px] md:h-[650px] w-full">
        <InteractiveImage src={galleries[0].image} alt={galleries[0].alt} className="row-span-3" onClick={onImageClick} />
        <InteractiveImage src={galleries[1].image} alt={galleries[1].alt} onClick={onImageClick} />
        <InteractiveImage src={galleries[2].image} alt={galleries[2].alt} onClick={onImageClick} />
        <InteractiveImage src={galleries[3].image} alt={galleries[3].alt} className="col-span-2 row-span-2" onClick={onImageClick} />
      </div>

      <div className="mt-8 md:mt-10 flex justify-center">
        <a href="/dokumentasi" className="min-w-[86px] md:min-w-[120px] rounded-full bg-[#173A8A] px-6 md:px-8 py-2 md:py-3 text-white font-semibold text-[14px] md:text-[22px] shadow-[0_4px_8px_rgba(0,0,0,0.18)] hover:opacity-90 flex items-center justify-center">
          More
        </a>
      </div>
    </section>
  );
};

const InfoGlassCard: React.FC<{
  title: string;
  text: string;
}> = ({ title, text }) => {
  return (
    <div className="w-[210px] md:w-[320px] rounded-[24px] border border-white/40 bg-white/30 backdrop-blur-[10px] shadow-[0_8px_18px_rgba(0,0,0,0.14)] p-4 md:p-6">
      <div className="flex items-start gap-3">
        <div className="mt-1 flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full border border-[#7B8CB8] bg-white/70 text-[#0D2464] text-sm md:text-base font-bold">
          ✦
        </div>

        <div>
          <h3 className="text-white font-bold text-[14px] md:text-[22px] leading-tight drop-shadow-sm">
            {title}
          </h3>
          <p className="mt-2 text-white/95 text-[10px] md:text-[14px] leading-snug font-medium">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

const CtaSection: React.FC<{ onImageClick: (s: string) => void }> = ({ onImageClick }) => {
  return (
    <section className="mx-auto max-w-[1440px] px-5 md:px-12 pt-16 md:pt-24 pb-12 md:pb-20">
      <div className="relative group overflow-hidden rounded-[22px] shadow-[0_6px_14px_rgba(0,0,0,0.18)] cursor-pointer" onClick={() => onImageClick(imgCtaBeach)}>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10" />
        <img
          src={imgCtaBeach}
          alt="Karimunjawa"
          className="w-full h-[340px] md:h-[620px] object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 flex flex-col justify-end md:justify-center px-5 md:px-8 py-5 md:py-8 z-20">
          <div className="flex flex-col gap-4 md:gap-6 max-w-[360px] md:ml-6">
            <InfoGlassCard
              title="Guide Profesional"
              text="Jelajahi keindahan Karimunjawa bersama tour guide dari Losala Travel yang siap membantu anda menemukan pesona tersembunyi dari setiap sudut Pulau Karimunjawa."
            />
            <div className="md:ml-16">
              <InfoGlassCard
                title="Tempat Terbaik"
                text="Losala travel membawa anda ke destinasi terbaik di karimunjawa, rasakan petualangan seru dan keindahan bawah laut yang mempesona"
              />
            </div>
          </div>
        </div>
        
        {/* Zoom icon for CTA */}
        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity z-30">
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

      <div className="mt-8 md:mt-10 text-center">
        <p className="text-[#273B73] font-semibold text-[16px] md:text-[28px] leading-snug">
          Mari memulai perjalanan seru di Karimunjawa dengan Losala Travel!
        </p>
        <p className="text-[#273B73] font-semibold text-[16px] md:text-[28px] leading-snug">
          Petualangan dan pengalaman indah menunggu mu di Karimunjawa.
        </p>

        <a href="/paket" className="mt-6 md:mt-8 inline-block rounded-full bg-[#173A8A] px-8 md:px-14 py-4 md:py-5 text-white font-semibold text-[18px] md:text-[24px] shadow-[0_6px_12px_rgba(0,0,0,0.2)] hover:opacity-90">
          Mulai Perjalanan anda
        </a>
      </div>
    </section>
  );
};

/* ================= PAGE ================= */
export default function OffersPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedImage]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F4F4F4]">
      <main>
        <HeroSection onImageClick={(s) => setSelectedImage(s)} />
        <OffersSection />
        <GallerySection onImageClick={(s) => setSelectedImage(s)} />
        <CtaSection onImageClick={(s) => setSelectedImage(s)} />
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
              alt="Penawaran" 
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </div>
      )}
    </div>
  );
}