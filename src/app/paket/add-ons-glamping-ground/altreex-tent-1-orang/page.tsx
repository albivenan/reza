'use client';
import { useState, useEffect } from "react";

const imgHero = "/assets/c1ade05911eec2345c8b38d4ec6edb2969a2ce67.png";
const imgCamp = "/assets/ec3a2f5cf6f3e6318410344b302176c2148a0dc2.png";
const imgBoat = "/assets/6ef0e0de699f8a1e55364f3a222adf112f29374c.png";
const img1 = "/assets/18342880d0dd72668f57bb3e55878d006779a3ff.png";
const img2 = "/assets/19bda3dc5b0002996dca9b66c835b50e8820225b.png";
const img3 = "/assets/5457dbedddaac28cf776cd09b8038a4d0cca4e50.png";
const img4 = "/assets/2b0fb2ac595348903de1c810558b0514a5ebf008.png";
const checklist = "/assets/checklist.png";

export default function AltreexTent1Orang() {
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
    <div className="bg-white w-full font-['Poppins',sans-serif] overflow-x-hidden pt-[80px]">

      {/* ================= HERO ================= */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen">

        {/* LEFT IMAGE / TOP IMAGE MOBILE */}
        <InteractiveImage src={imgHero} alt="Glamping Hero" className="h-[400px] md:h-screen">
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#0d2464]/80 to-transparent z-10" />
          <div className="absolute top-6 md:top-8 left-6 md:left-8 text-white z-20 pointer-events-none">
            <p className="text-2xl md:text-4xl font-bold">Paket</p>
            <h1 className="text-4xl md:text-5xl font-bold uppercase">Glamping Ground</h1>
          </div>
        </InteractiveImage>

        {/* RIGHT CONTENT / BOTTOM CONTENT MOBILE */}
        <div className="flex flex-col justify-between space-y-6">
          <div className="flex h-full px-6 md:px-8 py-10 md:py-0 flex-col justify-center gap-y-4 md:gap-y-6">
            <p className="font-bold text-[#0d2464] text-[16px] md:text-xl leading-relaxed text-left">
              Bangun pagi dengan pemandangan langit biru, udara segar, dan hamparan alam tropis yang masih asri. Tenda Glamping kami dirancang nyaman dan estetik, cocok untuk kamu yang ingin menikmati alam Karimunjawa dengan cara yang lebih santai dan berkesan.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-[#0d2464]">
              Altreex Tent / 1 Orang permalam
            </h2>

            <div className="flex items-baseline gap-2">
              <h3 className="text-4xl md:text-5xl font-bold text-[#ffc229]">
                Rp 250.000
              </h3>
              <span className="text-[#0d2464] font-bold text-[16px] md:text-xl">(max 3 orang)</span>
            </div>
          </div>

          {/* small images highlight */}
          <div className="grid grid-cols-2">
            <InteractiveImage src={imgCamp} alt="Glamping Tent" className="h-[150px] md:h-[200px]" />
            <InteractiveImage src={imgBoat} alt="Marine View" className="h-[150px] md:h-[200px]" />
          </div>
        </div>

      </section>

      {/* ================= FITUR & FASILITAS ================= */}
      <section className="font-bold grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 px-6 md:px-20 py-12 md:py-20">

        {/* Include Column */}
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-[#0d2464] text-2xl md:text-3xl font-bold mb-2 md:mb-4 border-b-2 border-[#ffc229] w-max">Include</h2>
          <div className="space-y-3 md:space-y-4 text-[#0d2464] text-[16px] md:text-xl">
            <p className="flex items-center gap-3"><img src={checklist} className="w-5 h-5 md:w-6 md:h-6 object-contain" alt="check" /> Sarapan</p>
            <p className="flex items-center gap-3"><img src={checklist} className="w-5 h-5 md:w-6 md:h-6 object-contain" alt="check" /> Air Mineral</p>
            <p className="flex items-center gap-3"><img src={checklist} className="w-5 h-5 md:w-6 md:h-6 object-contain" alt="check" /> P3K</p>
          </div>
        </div>

        {/* Fasilitas Column */}
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-[#0d2464] text-2xl md:text-3xl font-bold mb-2 md:mb-4 border-b-2 border-[#ffc229] w-max">Fasilitas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#0d2464] text-[16px] md:text-xl font-bold">
            <div className="space-y-3 md:space-y-4">
              <p className="flex items-center gap-3"><img src={checklist} className="w-5 h-5 md:w-6 md:h-6 object-contain" alt="check" /> Kasur & selimut</p>
              <p className="flex items-center gap-3"><img src={checklist} className="w-5 h-5 md:w-6 md:h-6 object-contain" alt="check" /> Meja & kursi</p>
              <p className="flex items-center gap-3"><img src={checklist} className="w-5 h-5 md:w-6 md:h-6 object-contain" alt="check" /> Lampu</p>
              <p className="flex items-center gap-3"><img src={checklist} className="w-5 h-5 md:w-6 md:h-6 object-contain" alt="check" /> Kipas angin</p>
              <p className="flex items-center gap-3"><img src={checklist} className="w-5 h-5 md:w-6 md:h-6 object-contain" alt="check" /> Stop kontak</p>
            </div>
            <div className="space-y-3 md:space-y-4">
              <p className="flex items-center gap-3"><img src={checklist} className="w-5 h-5 md:w-6 md:h-6 object-contain" alt="check" /> Matras</p>
              <p className="flex items-center gap-3"><img src={checklist} className="w-5 h-5 md:w-6 md:h-6 object-contain" alt="check" /> Tong api unggun</p>
              <p className="flex items-center gap-3"><img src={checklist} className="w-5 h-5 md:w-6 md:h-6 object-contain" alt="check" /> Private beach sunset view</p>
            </div>
          </div>
        </div>

      </section>

      {/* ================= GALLERY ================= */}
      <section className="px-6 md:px-20 pb-16 md:pb-24">

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-2 md:gap-[8px]">
          <InteractiveImage src={img1} alt="Gallery 1" className="rounded-xl h-[200px] md:h-[250px] md:col-span-2" />
          <InteractiveImage src={img2} alt="Gallery 2" className="rounded-xl h-[200px] md:h-[250px] md:col-start-3" />
          <InteractiveImage src={img3} alt="Gallery 3" className="rounded-xl h-[200px] md:h-[250px] md:row-start-2" />
          <InteractiveImage src={img4} alt="Gallery 4" className="rounded-xl h-[200px] md:h-[250px] md:col-span-2 md:row-start-2" />
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10 md:mt-16">
          <button className="bg-[#112967] text-white text-xl md:text-2xl px-10 md:px-16 py-4 md:py-5 rounded-full shadow-lg hover:scale-105 transition-transform">
            Pesan Sekarang
          </button>
        </div>

      </section>

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
              alt="Gallery Preview" 
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </div>
      )}

    </div>
  );
}
