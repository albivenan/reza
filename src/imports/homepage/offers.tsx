'use client';
import svgPaths from "../svg-9rp6dcu08w";
const imgPattern2015 = "/assets/db502b78bb52f9dc06097996c86e3a73dbfc871e.png";
const imgDji07731 = "/assets/7f2ad25c18286501d1c570f7f827f096064429f8.png";
const img71 = "/assets/c40f72f4f939825cb0b221f2b26e1b1922aa57d0.png";
const imgWhatsAppImage20250104At114615Am1 = "/assets/be2d3851fb898e9fe7334c602257a4cbbc66dd2b.png";
const imgWhatsAppImage20250924At72012Am2 = "/assets/6b1e620a6cc0c621c218ef900ca181ffa25816eb.png";
const imgWhatsAppImage20250104At114657Am1 = "/assets/ec3a2f5cf6f3e6318410344b302176c2148a0dc2.png";
import { imgRectangle4190, imgRectangle4191, imgRectangle4192, imgRectangle4193, imgRectangle4194, imgRectangle4220 } from "../svg-mhjo3";

const galleryImages = [
  { src: imgDji07731, mask: imgRectangle4190 },
  { src: img71, mask: imgRectangle4191 },
  { src: imgWhatsAppImage20250924At72012Am2, mask: imgRectangle4193, flip: true },
  { src: imgWhatsAppImage20250104At114615Am1, mask: imgRectangle4192 },
  { src: imgWhatsAppImage20250104At114657Am1, mask: imgRectangle4194 },
];

export default function OffersSection() {
  return (
    <section className="w-full py-12">
      {/* Title */}
      {/* Header section as per attachment */}
      <div className="mx-auto max-w-[1440px] px-12 mb-16 flex flex-col md:flex-row justify-between items-end gap-10">
        <div className="flex-1">
          <h2 className="font-['Poppins:Bold',sans-serif] text-[48px] md:text-[64px] leading-[1.1] text-[#0d2464]">
            Impianmu dimulai
          </h2>
          <p className="font-['Poppins:Bold',sans-serif] text-[48px] md:text-[64px] leading-[1.1]">
            <span className="text-[#0d2464]">bersama </span>
            <span className="text-[#ffc229]">Losala Travel</span>
          </p>
        </div>
        <div className="flex flex-col items-end text-right max-w-[420px]">
          <p className="font-['Poppins:Medium',sans-serif] text-[16px] md:text-[18px] text-black leading-[1.5] mb-8">
            Setiap paket perjalanan kami dilengkapi dengan panduan lengkap dan tips perjalanan dari para ahli.
          </p>
          <button className="bg-[#ffc229] h-[80px] w-[350px] rounded-[40px] shadow-[0_15px_30px_-5px_rgba(0,0,0,0.15)] flex items-center justify-center cursor-pointer hover:bg-[#ffb400] transition-all transform hover:-translate-y-1">
            <span className="font-['Poppins:Bold',sans-serif] text-[#0d2464] text-[24px]">Penawaran kami</span>
          </button>
        </div>
      </div>

      {/* Gallery row */}
      <div className="grid w-full h-[280px] md:h-[306px]" style={{ gridTemplateColumns: 'repeat(5, 1fr) 2fr' }}>
        {galleryImages.map((img, i) => (
          <div
            key={i}
            className="relative h-full"
            style={{ maskImage: `url('${img.mask}')`, maskSize: '100% 100%', maskRepeat: 'no-repeat' }}
          >
            <img
              alt=""
              src={img.src}
              className={`absolute inset-0 w-full h-full object-cover ${img.flip ? 'scale-y-[-1] rotate-180' : ''}`}
            />
          </div>
        ))}

        {/* Blue CTA card */}
        <div
          className="relative h-full bg-[#0d2464] overflow-hidden"
          style={{ maskImage: `url('${imgRectangle4220}')`, maskSize: '100% 100%', maskRepeat: 'no-repeat' }}
        >
          <img alt="" src={imgPattern2015} className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none" />
          <div className="absolute bottom-[40px] left-[50px] font-['Poppins:Bold',sans-serif] text-[28px] md:text-[32px] leading-[38px] text-white">
            <p className="mb-0">Wujudkan</p>
            <p>Impianmu</p>
          </div>
          <div className="absolute right-[40px] bottom-[40px] size-[48px] -rotate-45">
            <svg className="block size-full" fill="none" viewBox="0 0 62 62">
              <circle cx="31" cy="24" fill="#FFC229" r="24" transform="rotate(180 31 24)" />
              <path clipRule="evenodd" d={svgPaths.p3122bc00} fill="#0D2464" fillRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>


    </section>
  );
}
