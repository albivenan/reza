'use client';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import svgPaths from "@/components/icons/svg-9rp6dcu08w";

const imgPattern2011 = "/assets/0342cb03285a24cf0a85cbd67a56e12bee53ce6a.png";
const imgDsc023411 = "/assets/4cc3f0a4e20a0fb3df5054f9e4f9cdbe92f41c87.png";
import { imgRectangle4222, imgEllipse18 } from "@/components/icons/svg-mhjo3";

const reviews = [
  { name: "Sarah W.", text: "Absolutely breathtaking views and impeccable service" },
  { name: "Sarah W.", text: "Absolutely breathtaking views and impeccable service" },
  { name: "Sarah W.", text: "Absolutely breathtaking views and impeccable service" },
];

function StarRating() {
  return (
    <div className="flex gap-1 justify-center">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 17 17" fill="none">
          <path d={svgPaths.p316ff080} fill="#FFC700" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const headerRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Header Animation
    gsap.fromTo(headerRef.current,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, y: 0, duration: 1, 
        scrollTrigger: { trigger: headerRef.current, start: "top 90%", once: true }
      }
    );

    // Cards Stagger Animation
    if (cardsRef.current) {
      const cards = cardsRef.current.children;
      gsap.fromTo(cards,
        { opacity: 0, scale: 0.9, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            once: true,
          }
        }
      );
    }
  }, []);

  return (
    <div className="relative overflow-hidden font-bold">
      {/* Star decoration */}
      <div className="absolute -right-8 -top-14 z-20 opacity-90 hidden md:block">
        <svg width="140" height="140" viewBox="0 0 208 208" fill="none">
          <path d={svgPaths.p27caad80} stroke="#FFC229" strokeWidth="4" />
        </svg>
      </div>

      <section
        className="relative w-full py-10 md:py-14 px-6 md:px-8"
        style={{ maskImage: `url('${imgRectangle4222}')`, maskSize: '100% 100%', maskRepeat: 'no-repeat' }}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-[#0d2464]" />
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img alt="" src={imgPattern2011} className="w-full h-[136%] object-cover -mt-[19%]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1287px]">
          {/* Header */}
          <div ref={headerRef} className="mb-10 text-center md:text-left opacity-0">
            <h2 className="font-bold font-['Poppins:Bold',sans-serif] text-[30px] md:text-[36px] text-white">Traveler Reviews</h2>
            <p className="mt-2 font-['Roboto:Regular',sans-serif] text-[16px] md:text-[20px] text-white max-w-[654px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Lihat apa yang pelanggan kami katakan tentang pengalaman mereka
            </p>
          </div>

          {/* Review cards */}
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="bg-[#ffc229] rounded-[30px] md:rounded-[50px] p-5 md:p-6 flex flex-col gap-4 opacity-0">
                {/* Avatar */}
                <div
                  className="mx-auto w-[80px] h-[80px] md:w-[102px] md:h-[102px] rounded-full overflow-hidden"
                  style={{ maskImage: `url('${imgEllipse18}')`, maskSize: '100% 100%', maskRepeat: 'no-repeat' }}
                >
                  <img alt="Reviewer" src={imgDsc023411} className="w-full h-full object-cover" />
                </div>

                {/* Blue inner card */}
                <div className="bg-[#0d2464] rounded-[24px] md:rounded-[40px] px-5 py-5 flex-1 flex flex-col items-center gap-3">
                  <p className="font-['Poppins:Medium',sans-serif] text-[20px] md:text-[24px] text-white text-center">{r.name}</p>
                  <StarRating />
                  <p className="font-['Poppins:Medium',sans-serif] text-[14px] md:text-[16px] text-white text-center leading-[1.5] line-clamp-3">
                    {r.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {[5, 5, 5, 6, 5].map((r, i) => (
              <div key={i} className={`rounded-full bg-white ${i === 2 ? 'w-3 h-3' : 'w-[10px] h-[10px]'}`} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
