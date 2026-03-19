import React from 'react';
import Image from 'next/image';

// Data konten
const steps = [
  {
    id: 1,
    title: "Agenda Perjalanan",
    description: "Nikmati petualangan yang tak terlupakan bersama Losala Travel di Karimunjawa. dari snorkeling di terumbu karang yang memukau hingga menjelajahi pulau-pulau yang menawan, setiap detik dalam perjalanan ini akan menjadi kenangan indah bersama Losala Travel."
  },
  {
    id: 2,
    title: "Tour Guide",
    description: "Jelajahi keindahan Karimunjawa bersama tour guide dari Losala Travel yang siap membantu anda menemukan pesona tersembunyi dari setiap sudut pulau Karimunjawa."
  },
  {
    id: 3,
    title: "Akomodasi",
    description: "Rasakan kenyamanan dan kemewahan di tengah keindahan tropis Karimunjawa dengan pilihan akomodasi terbaik dari Losala Travel."
  }
];

const imgKarimunjawaMap011 = "/assets/093c4d21393f0f2504052e344e7206d936c220d7.png";

const PulauKarimunjawa: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen py-16 md:py-24 bg-white overflow-hidden">
      {/* BACKGROUND IMAGE - Map Silhouette with overflow into neighboring sessions */}
      <div className="absolute top-[-100px] md:top-[-250px] bottom-[-100px] md:bottom-[-250px] right-[-100px] md:right-[-150px] w-full md:w-[70%] z-0 pointer-events-none overflow-visible">
        <img
          src={imgKarimunjawaMap011}
          alt=""
          className="w-full h-full object-contain object-right transform scale-[1.2] md:scale-[1.8] opacity-30 md:opacity-50"
        />
      </div>

      {/* KONTEN UTAMA */}
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start">
          {/* Kolom 1: Teks */}
          <div className="flex flex-col">
            {/* JUDUL */}
            <div className="mb-10 md:mb-16 text-left">
              <h2 className="font-['Poppins:ExtraBold',sans-serif] font-bold text-[48px] md:text-[70px] lg:text-[110px] leading-[0.95] md:leading-[0.85] text-[#0d2464]">
                Pulau<br />
                <span className="text-[#ffc229]">Karimunjawa</span>
              </h2>
              <p className="font-['Poppins:SemiBold',sans-serif] text-[16px] md:text-[18px] lg:text-[20px] text-[#0d2464] mt-6 md:mt-10 max-w-[600px] leading-relaxed">
                Karimunjawa, dengan segala pesonanya, adalah destinasi yang menjanjikan pengalaman hidup yang tak terlupakan.
              </p>
            </div>

            {/* LIST ITEM */}
            <div className="space-y-8 md:space-y-10">
              {steps.map((step) => (
                <div key={step.id} className="flex flex-col gap-3 md:gap-4">
                  <div className="flex items-center gap-4 md:gap-6 justify-start">
                    {/* NOMOR */}
                    <div className="relative flex-shrink-0 w-[44px] h-[44px] md:w-[54px] md:h-[54px]">
                      <div className="absolute inset-0 bg-[#0d2464] rounded-full" />
                      <span className="absolute inset-0 flex items-center justify-center text-white text-[20px] md:text-[28px] font-bold">
                        {step.id}
                      </span>
                    </div>
                    {/* TITLE */}
                    <h3 className="text-[#ffc229] text-[22px] md:text-[28px] lg:text-[32px] font-bold leading-none">
                      {step.title}
                    </h3>
                  </div>

                  {/* DESCRIPTION */}
                  <div className="pl-0 lg:pl-[80px] text-left">
                    <p className="font-bold text-[#0d2464] text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed max-w-[550px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kolom 2: Kosong untuk background map */}
          <div className="hidden lg:block min-h-[600px]" />
        </div>
      </div>
    </section>
  );
};

export default PulauKarimunjawa;