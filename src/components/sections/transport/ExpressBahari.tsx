'use client';
import { useState, useEffect } from "react";

const imgHero = "/assets/6d9de98984a25ddbf56d327f94beb29a28fb5d0b.png"; // Express Bahari
const img72 = "/assets/c40f72f4f939825cb0b221f2b26e1b1922aa57d0.png";
const img29 = "/assets/63dd359905963b9f4bf0a4d652e6ca4ef7369cbf.png";
const img13 = "/assets/dfe0d305eff976c6ffd498e1de82e6d4fd9bce57.png";
const imgAddOn = "/assets/6b1e620a6cc0c621c218ef900ca181ffa25816eb.png";
const imgKapal2 = "/assets/136cb924df72a038d4296a6f9252f5d153a217cb.png";
const kapal = "/assets/kapal.png";

export default function ExpressBahari() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedImage]);

  const InteractiveImage = ({ src, alt, className = "", imgClassName = "", children }: { src: string, alt: string, className?: string, imgClassName?: string, children?: React.ReactNode }) => (
    <div 
      className={`group relative overflow-hidden cursor-pointer ${className}`}
      onClick={() => setSelectedImage(src)}
    >
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-30" />
      <img 
        src={src} 
        alt={alt} 
        className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${imgClassName}`} 
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-40">
        <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/40">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="11" y1="8" x2="11" y2="14"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
        </div>
      </div>
      {children}
    </div>
  );

  return (
    <div className="relative bg-white w-full min-h-screen overflow-x-hidden pt-[80px]">
      {/* ================= SECTION 1 : HERO & DECORATION ================= */}
      <div className="section-hero relative min-h-screen md:h-[800px] grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8">
        
        {/* Left Side (Photo + Name) */}
        <InteractiveImage src={imgHero} alt="Express Bahari Hero" className="h-[400px] md:h-full rounded-b-2xl md:rounded-b-none">
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#0d2464]/60 to-transparent z-10 pointer-events-none" />
          <div className="absolute left-6 md:left-8 top-6 md:top-8 text-white z-20 pointer-events-none">
            <p className="text-[24px] md:text-[36px] font-bold leading-none">FAST BOAT.</p>
            <h1 className="text-[48px] md:text-[64px] font-bold leading-none">BAHARI</h1>
          </div>
        </InteractiveImage>

        {/* Right Side (Info + Cards) */}
        <div className="relative p-6 md:p-0 md:pr-12 md:mt-12">
          <img src={kapal} className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] object-cover" alt="Ship Icon" />
          
          <p className="mt-4 font-bold text-[#0d2464] text-[14px] md:text-[16px] leading-relaxed text-justify">
            Express Bahari adalah kapal cepat yang melayani rute Jepara-Karimunjawa dengan waktu tempuh paling singkat. Dilengkapi dengan fasilitas VIP dan Executive Class untuk kenyamanan perjalanan Anda.
          </p>

          <div className="mt-6 md:mt-8">
            <p className="text-[#0d2464] text-[20px] md:text-[28px] font-bold">
              Mulai dari
            </p>
            <p className="text-[#ffc229] text-[32px] md:text-5xl font-bold mb-8 md:mb-12">
              Rp 200.000 — Rp 300.000
            </p>
          </div>

          {/* Responsive Trip Cards Container */}
          <div className="flex flex-col md:flex-row md:absolute md:right-12 gap-4 md:gap-6 pb-12 md:pb-0">
            {[
              { img: img72, title: "Gathering Trip", href: "/express-bahari/gathering-trip" },
              { img: img29, title: "Private Trip", href: "/express-bahari/private-trip" },
              { img: img13, title: "By. Request", href: "/express-bahari/by-request-express-bahari" }
            ].map((item, i) => (
              <a 
                key={i} 
                href={item.href} 
                className="relative w-full md:w-[260px] h-[180px] md:h-[340px] rounded-[20px] overflow-hidden shadow-xl group hover:scale-[1.02] transition-transform flex-shrink-0"
              >
                <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={item.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2464]/80 to-transparent flex items-end p-4">
                  <p className="text-white text-[16px] md:text-[18px] font-bold">{item.title}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ================= SECTION 2 : ADD ON ================= */}
      <div className="mt-4 md:mt-6 px-6 md:px-[80px]">
        <a href="/paket/add-ons-glamping-ground" className="section-addon relative block group overflow-hidden">
          <div className="relative h-[300px] md:h-[80vh] rounded-[20px] overflow-hidden shadow-xl">
            <img src={imgAddOn} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="VIP Class Upgrade" />

            <div className="font-bold absolute inset-0 bg-gradient-to-t from-[#0d2464]/90 to-transparent p-6 flex flex-col justify-end">
              <p className="text-white text-[14px] md:text-[18px]">
                Add On VIP Class
              </p>

              <p className="text-white text-[24px] md:text-[36px] font-bold">
                Upgrade for Luxury Experience
              </p>
            </div>
          </div>
        </a>
      </div>

      {/* ================= SECTION 3 : INFO ================= */}
      <div className="section-info relative mt-20 md:mt-32 px-6 md:px-[80px] pb-24">
        <div className="mb-6 md:mb-8 text-center md:text-left">
          <p className="text-[#0d2464] text-[32px] md:text-[48px] font-bold leading-tight">FAST BOAT.</p>
          <p className="text-[#0d2464] text-[60px] md:text-[96px] font-bold leading-tight">BAHARI</p>
        </div>

        {/* Responsive Container untuk Gambar & Info */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Gambar kiri */}
          <InteractiveImage src={imgHero} alt="Express Bahari Side View" className="md:row-span-2 rounded-[20px] shadow-lg h-[250px] md:h-[400px]" />

          {/* Gambar kanan */}
          <InteractiveImage src={imgKapal2} alt="Express Bahari Deck" className="md:col-span-2 rounded-[20px] shadow-lg h-[200px] md:h-[250px]" />

          {/* Text info */}
          <div className="md:col-span-2 md:col-start-2 pt-2">
            <h3 className="text-[20px] md:text-[28px] font-bold text-[#0d2464] md:text-black">
              Express Bahari Information
            </h3>

            <p className="mt-3 text-[14px] md:text-[16px] text-gray-700 leading-relaxed text-justify">
              Express Bahari merupakan pilihan utama bagi wisatawan yang ingin menyeberang dengan cepat dan nyaman. Waktu tempuh hanya sekitar 2 jam perjalanan saja dari Pelabuhan Kartini Jepara menuju Karimunjawa.
            </p>
          </div>
        </div>
      </div>

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
              alt="Express Bahari Preview" 
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </div>
      )}
    </div>
  );
}
