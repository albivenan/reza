'use client';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const imgPattern2015 = "/assets/db502b78bb52f9dc06097996c86e3a73dbfc871e.png";

const stats = [
  { label: "Pulau di Karimunjawa", value: 27, sub: "Ada cerita di setiap sudutnya" },
  { label: "Akomodasi", value: 3, sub: "berbagai cerita keseruan" },
  { label: "Wisata alam", value: 10, suffix: "+", sub: "Lestari akan keindahan alamnya" },
];

export default function StatistikSection() {
  const sectionRef = useRef(null);
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    stats.forEach((s, i) => {
      const target = numbersRef.current[i];
      if (!target) return;

      gsap.fromTo(target, 
        { innerText: 0 },
        { 
          innerText: s.value,
          duration: 2,
          ease: "power2.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
          onUpdate: function() {
            // Optional: formatting if needed
          }
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden py-12 md:py-8">
      {/* Pattern background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img alt="" src={imgPattern2015} className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-[60px]">
        <div className="flex flex-col md:flex-row w-full divide-y md:divide-y-0 md:divide-x divide-[#0d2464] border-y border-[#0d2464]">
          {stats.map((s, i) => (
            <div key={i} className="flex-1 px-4 md:px-8 py-8 md:py-4 flex flex-col justify-center items-center md:items-start font-bold">
              <span className="font-['Poppins:SemiBold',sans-serif] text-[18px] md:text-[20px] text-black">{s.label}</span>
              <div className="flex items-baseline">
                <span 
                  ref={el => { numbersRef.current[i] = el; }}
                  className="font-['Poppins:ExtraBold',sans-serif] text-[100px] md:text-[140px] lg:text-[180px] text-black leading-none my-[-5px] md:my-[-10px]"
                >
                  0
                </span>
                {s.suffix && (
                  <span className="font-['Poppins:ExtraBold',sans-serif] text-[60px] md:text-[80px] lg:text-[100px] text-black leading-none ml-2">
                    {s.suffix}
                  </span>
                )}
              </div>
              <span className="font-['Poppins:Regular',sans-serif] text-[14px] md:text-[16px] text-black text-center md:text-left">{s.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
