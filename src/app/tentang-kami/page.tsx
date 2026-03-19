'use client';
import { useState, useEffect } from "react";

const imgPattern2011 = "/assets/0342cb03285a24cf0a85cbd67a56e12bee53ce6a.png";
const imgWhatsAppImage20250103At114010Pm1 = "/assets/c5e084751f71738ed60afee0155fdf0a6525d2db.png";
import { imgRectangle4221, imgRectangle4202 } from "@/components/icons/svg-mhjo3";

export default function TentangKamiPage() {
  const [showModal, setShowModal] = useState(false);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showModal]);

  return (
    <section className="w-full px-6 md:px-8 py-8 md:py-12 min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-145px)] flex items-center bg-white overflow-hidden">
      <div className="mx-auto w-full max-w-[1287px]">
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

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 p-8 md:p-14 min-h-[450px] md:min-h-[503px]">
            {/* Text */}
            <div className="flex-1 text-left">
              <h2 className="font-bold font-['Poppins:ExtraBold',sans-serif] text-[32px] md:text-[48px] leading-tight text-white mb-6">
                Tentang<br />Kami
              </h2>
              <p className="font-bold font-['Poppins:SemiBold',sans-serif] text-[15px] md:text-[24px] leading-relaxed md:leading-[30px] text-white/90 md:text-white max-w-[503px]">
                Losala Travel adalah sebuah agen perjalanan yang berfokus pada penyediaan paket wisata ke Karimunjawa, penawaran berbagai layanan wisata, seperti transportasi, akomodasi, dan rencana perjalanan yang terencana dengan baik untuk para wisatawan.
              </p>
            </div>

            {/* Photo */}
            <div
              className="group relative flex-shrink-0 w-full max-w-[340px] md:w-[380px] aspect-[380/421] rounded-[15px] overflow-hidden cursor-pointer"
              style={{ maskImage: `url('${imgRectangle4202}')`, maskSize: '100% 100%', maskRepeat: 'no-repeat' }}
              onClick={() => setShowModal(true)}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10" />
              <img
                alt="Tentang Kami"
                src={imgWhatsAppImage20250103At114010Pm1}
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
          </div>
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {showModal && (
        <div 
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300"
          onClick={() => setShowModal(false)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-[#FFC229] transition-colors p-2 z-[1010]"
            onClick={() => setShowModal(false)}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <div className="relative max-w-[95vw] max-h-[90vh] overflow-hidden rounded-[20px] shadow-2xl animate-in zoom-in-95 duration-300">
            <img 
              src={imgWhatsAppImage20250103At114010Pm1} 
              alt="Tentang Kami" 
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </div>
      )}
    </section>
  );
}
