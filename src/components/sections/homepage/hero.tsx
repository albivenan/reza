'use client';
import svgPaths from "@/components/icons/svg-9rp6dcu08w";
const imgUnsplashXsTqMVvStMa1 = "/assets/f083bd1931b07dc8db4f16b67b65dc73e3669262.png";
const imgWhatsAppImage20250104At114622Am1 = "/assets/e1c2ac1049b0ae1686c4b8446ef299b778439d6d.png";
import { imgUnsplashXsTqMVvStMa, imgRectangle4311 } from "@/components/icons/svg-mhjo3";

export default function HeroSection() {
  return (
    <section className="w-full px-4 sm:px-8 py-8 md:py-12">
      <div className="relative mx-auto max-w-[1374px] min-h-[500px] md:h-[581px] rounded-[32px] md:rounded-[46px] overflow-hidden bg-[#0d2464]">
        {/* Background image */}
        <div
          className="absolute inset-0 z-0"
          style={{ maskImage: `url('${imgUnsplashXsTqMVvStMa}')`, maskSize: 'cover', maskRepeat: 'no-repeat' }}
        >
          <img
            alt="Karimunjawa"
            src={imgUnsplashXsTqMVvStMa1}
            className="absolute inset-0 w-full h-full object-cover opacity-95"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Content Container */}
        <div className="relative z-20 h-full w-full flex flex-col md:block p-8 md:p-16">
          {/* Text */}
          <div className="max-w-[600px] mb-8 md:mb-0">
            <h1 className="font-['Poppins:ExtraBold',sans-serif] text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-white">
              Karimunjawa menunggumu! <br className="hidden md:block"/>
              Dengan Losala Travel
            </h1>
          </div>

          {/* Review Card Component - Positioned relatively on mobile, absolute on desktop */}
          <div className="md:absolute md:right-[46px] md:top-[120px]">
            <ReviewCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard() {
  return (
    <div 
      className="w-full max-w-[254px] h-[311px] rounded-[39px] border-2 border-white backdrop-blur-sm shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col pt-[29px] mx-auto md:mx-0"
      style={{ backgroundImage: "linear-gradient(115.612deg, rgba(255,255,255,0.5) 11.416%, rgba(202,202,202,0.1) 85.388%)" }}
    >
      {/* Stars */}
      <div className="px-5 mb-3 flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="16" height="15" viewBox="0 0 17 17" fill="none">
            <path d={svgPaths.p316ff080} fill="#FFC700" />
          </svg>
        ))}
      </div>

      {/* Review Text */}
      <p className="px-5 font-['Poppins:Medium',sans-serif] text-[13px] leading-[1.2] text-white mb-4">
        Pemandangan yang benar-benar menakjubkan dan pelayanan yang sempurna.
      </p>

      {/* Traveler Photo - Contained (No overflow) */}
      <div className="mt-auto w-full h-[183px] relative overflow-hidden">
        <div
          className="w-full h-full"
          style={{ maskImage: `url('${imgRectangle4311}')`, maskSize: '100% 100%', maskRepeat: 'no-repeat' }}
        >
          <img
            alt="Traveler"
            src={imgWhatsAppImage20250104At114622Am1}
            className="w-full h-full object-cover object-center p-4 rounded-[39px]"
          />
        </div>
      </div>
    </div>
  );
}

