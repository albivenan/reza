'use client';
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import svgPaths from "@/components/icons/svg-9rp6dcu08w";
import { LazyImage } from "@/components/ui/LazyImage";

const imgPattern2015 = "/assets/0342cb03285a24cf0a85cbd67a56e12bee53ce6a.png";
const imgDji07731 = "/assets/7f2ad25c18286501d1c570f7f827f096064429f8.png";
const img71 = "/assets/c40f72f4f939825cb0b221f2b26e1b1922aa57d0.png";
const imgWhatsAppImage20250104At114615Am1 = "/assets/be2d3851fb898e9fe7334c602257a4cbbc66dd2b.png";
const imgWhatsAppImage20250924At72012Am2 = "/assets/6b1e620a6cc0c621c218ef900ca181ffa25816eb.png";
const imgWhatsAppImage20250104At114657Am1 = "/assets/ec3a2f5cf6f3e6318410344b302176c2148a0dc2.png";
import { imgRectangle4190, imgRectangle4191, imgRectangle4192, imgRectangle4193, imgRectangle4194, imgRectangle4220 } from "@/components/icons/svg-mhjo3";

const galleryImages = [
  { src: imgDji07731, mask: imgRectangle4190, alt: "Destinasi Karimunjawa 1" },
  { src: img71, mask: imgRectangle4191, alt: "Destinasi Karimunjawa 2" },
  { src: imgWhatsAppImage20250924At72012Am2, mask: imgRectangle4193, alt: "Destinasi Karimunjawa 3" },
  { src: imgWhatsAppImage20250104At114615Am1, mask: imgRectangle4192, alt: "Destinasi Karimunjawa 4" },
  { src: imgWhatsAppImage20250104At114657Am1, mask: imgRectangle4194, alt: "Destinasi Karimunjawa 5" },
];

export default function OffersSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate Title
    gsap.fromTo(titleRef.current,
      { opacity: 0, x: -30 },
      { 
        opacity: 1, x: 0, duration: 1, 
        scrollTrigger: { trigger: titleRef.current, start: "top 90%", once: true }
      }
    );

    // Animate Description
    gsap.fromTo(descRef.current,
      { opacity: 0, x: 30 },
      { 
        opacity: 1, x: 0, duration: 1, 
        scrollTrigger: { trigger: descRef.current, start: "top 90%", once: true }
      }
    );

    // Stagger Gallery Images
    if (galleryRef.current) {
      const items = galleryRef.current.children;
      gsap.fromTo(items,
        { opacity: 0, scale: 0.8, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "top 85%",
            once: true,
          }
        }
      );
    }

    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedImage]);

  return (
    <section className="w-full py-12 overflow-hidden">
      {/* Title */}
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 mb-10 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-10">
        <div ref={titleRef} className="flex-1 font-bold">
          <h2 className="font-bold font-['Poppins:Bold',sans-serif] text-[36px] md:text-[64px] leading-[1.1] text-[#0d2464]">
            Impianmu dimulai
          </h2>
          <p className="font-['Poppins:Bold',sans-serif] text-[36px] md:text-[64px] leading-[1.1]">
            <span className="text-[#0d2464]">bersama </span>
            <span className="text-[#ffc229]">Losala Travel</span>
          </p>
        </div>
        <div ref={descRef} className="flex flex-col items-start md:items-end text-left md:text-right max-w-[420px]">
          <p className="font-['Poppins:Medium',sans-serif] text-[16px] md:text-[18px] text-black leading-[1.5] mb-6 md:mb-8">
            Setiap paket perjalanan kami dilengkapi dengan panduan lengkap und tips perjalanan dari para ahli.
          </p>
          <a href="/penawaran" className="bg-[#ffc229] h-[60px] md:h-[80px] w-full md:w-[350px] rounded-[40px] shadow-[0_15px_30px_-5px_rgba(0,0,0,0.15)] flex items-center justify-center cursor-pointer hover:bg-[#ffb400] transition-all transform hover:-translate-y-1">
            <span className="font-['Poppins:Bold',sans-serif] text-[#0d2464] text-[18px] md:text-[24px]">Penawaran kami</span>
          </a>
        </div>
      </div>

      {/* Gallery row - Responsive Grid */}
      <div ref={galleryRef} className="grid w-full grid-cols-2 sm:grid-cols-3 md:flex md:h-[306px]">
        {galleryImages.map((img, i) => (
          <div
            key={i}
            className="group relative h-[200px] md:h-full md:flex-1 cursor-pointer overflow-hidden opacity-0"
            style={{ maskImage: `url('${img.mask}')`, maskSize: '100% 100%', maskRepeat: 'no-repeat' }}
            onClick={() => setSelectedImage(img.src)}
          >
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10" />
            <LazyImage
              alt={img.alt}
              src={img.src}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
              <div className="bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/40">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  <line x1="11" y1="8" x2="11" y2="14"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
              </div>
            </div>
          </div>
        ))}

        {/* Blue CTA card */}
        <a
          href="/penawaran"
          className="group/cta relative h-[200px] md:h-full md:flex-[2] bg-[#0d2464] overflow-hidden cursor-pointer no-underline opacity-0"
          style={{ maskImage: `url('${imgRectangle4220}')`, maskSize: '100% 100%', maskRepeat: 'no-repeat' }}
        >
          <img alt="" src={imgPattern2015} className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none" />
          <div className="absolute bottom-[20px] md:bottom-[40px] left-[30px] md:left-[50px] font-['Poppins:Bold',sans-serif] text-[24px] md:text-[32px] leading-tight text-white">
            <p className="mb-0 text-white font-bold">Wujudkan</p>
            <p className="text-white font-bold">Impianmu</p>
          </div>
          <div className="absolute right-[20px] md:right-[40px] top-[20px] md:top-[40px] size-[36px] md:size-[48px] transition-transform duration-300 group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1">
            <svg className="block size-full -rotate-45" fill="none" viewBox="0 0 62 62">
              <circle cx="31" cy="24" fill="#FFC229" r="24" transform="rotate(180 31 24)" />
              <path clipRule="evenodd" d={svgPaths.p3122bc00} fill="#0D2464" fillRule="evenodd" />
            </svg>
          </div>
        </a>
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-[#FFC229] transition-colors p-2 z-[2010]"
            onClick={() => setSelectedImage(null)}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <div className="relative max-w-[95vw] max-h-[90vh] overflow-hidden rounded-[20px] shadow-2xl animate-in zoom-in-95 duration-300">
            <LazyImage 
              src={selectedImage} 
              alt="Penawaran Destinasi" 
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </div>
      )}
    </section>
  );
}
