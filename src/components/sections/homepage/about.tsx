'use client';
const imgPattern2011 = "/assets/0342cb03285a24cf0a85cbd67a56e12bee53ce6a.png";
const imgWhatsAppImage20250103At114010Pm1 = "/assets/c5e084751f71738ed60afee0155fdf0a6525d2db.png";
import { imgRectangle4221, imgRectangle4202 } from "@/components/icons/svg-mhjo3";

export default function AboutSection() {
  return (
    <section className="w-full px-8 py-12">
      <div className="mx-auto max-w-[1287px]">
        <div
          className="relative rounded-[15px] overflow-hidden shadow-[0px_7px_7px_0px_rgba(0,0,0,0.25)]"
          style={{ maskImage: `url('${imgRectangle4221}')`, maskSize: '100% 100%', maskRepeat: 'no-repeat' }}
        >
          {/* Blue background */}
          <div className="absolute inset-0 bg-[#0d2464]" />

          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
            <img alt="" src={imgPattern2011} className="w-full h-[138%] object-cover -mt-[20%]" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 p-10 md:p-14 min-h-[503px]">
            {/* Text */}
            <div className="flex-1">
              <h2 className="font-bold font-['Poppins:ExtraBold',sans-serif] text-[48px] leading-tight text-white mb-6">
                Tentang<br />Kami
              </h2>
              <p className="font-bold font-['Poppins:SemiBold',sans-serif] text-[20px] md:text-[24px] leading-[30px] text-white max-w-[503px]">
                Losala Travel adalah sebuah agen perjalanan yang berfokus pada penyediaan paket wisata ke Karimunjawa, penawaran berbagai layanan wisata, seperti transportasi, akomodasi, dan rencana perjalanan yang terencana dengan baik untuk para wisatawan.
              </p>
            </div>

            {/* Photo */}
            <div
              className="flex-shrink-0 w-[380px] h-[421px] rounded-[15px] overflow-hidden"
              style={{ maskImage: `url('${imgRectangle4202}')`, maskSize: '100% 100%', maskRepeat: 'no-repeat' }}
            >
              <img
                alt="Tentang Kami"
                src={imgWhatsAppImage20250103At114010Pm1}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
