'use client';

const imgLosalaTravelLogoOnly = "/assets/110f0e1e80716f8a995f0c7455b7174a0b709b85.png";
const imgLosalaTravelLogoTypography = "/assets/0e289cbf5e4563cac2cb978c1887a61fd482dc25.png";
const imgPattern2015 = "/assets/db502b78bb52f9dc06097996c86e3a73dbfc871e.png";

export default function GlobalFooter() {
  return (
    <footer className="relative w-full bg-white overflow-hidden pt-16 md:pt-20 pb-8 md:pb-12 border-t border-[#0d2464]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img 
          alt="Pattern Background" 
          className="w-full h-full object-cover" 
          src={imgPattern2015} 
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand & About */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative size-[80px] md:size-[100px] mb-2">
              <img 
                alt="Logo Only" 
                className="w-full h-full object-contain" 
                src={imgLosalaTravelLogoOnly} 
              />
            </div>
            <div className="relative w-[150px] md:w-[184px] h-[72px] md:h-[88px] overflow-hidden -mt-4">
              <img 
                alt="Logo Typography" 
                className="absolute h-[229.41%] left-[-5.66%] max-w-none top-[-64.71%] w-[110.38%] object-contain" 
                src={imgLosalaTravelLogoTypography} 
              />
            </div>
            <p className="mt-4 text-[#0d2464] text-[14px] md:text-[15px] font-['Roboto:Regular',sans-serif] leading-relaxed max-w-[240px] text-center md:text-justify">
              Agen perjalanan terpercaya yang berfokus pada penyediaan paket wisata terbaik ke Karimunjawa.
            </p>
          </div>

          {/* Column 2: Layanan */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="font-['Poppins:Bold',sans-serif] font-bold text-[#0d2464] text-[18px] md:text-[20px]">Layanan</h3>
            <div className="flex flex-col items-center md:items-start gap-3">
              <a href="/penawaran" className="font-['Roboto:Regular',sans-serif] text-[16px] md:text-[18px] text-[#0d2464] hover:text-[#ffc229] transition-colors">Penawaran</a>
              <a href="/paket" className="font-['Roboto:Regular',sans-serif] text-[16px] md:text-[18px] text-[#0d2464] hover:text-[#ffc229] transition-colors">Paket</a>
              <a href="/transportasi" className="font-['Roboto:Regular',sans-serif] text-[16px] md:text-[18px] text-[#0d2464] hover:text-[#ffc229] transition-colors">Transportasi</a>
              <a href="/dokumentasi" className="font-['Roboto:Regular',sans-serif] text-[16px] md:text-[18px] text-[#0d2464] hover:text-[#ffc229] transition-colors">Dokumentasi</a>
            </div>
          </div>

          {/* Column 3: Dukungan */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="font-['Poppins:Bold',sans-serif] font-bold text-[#0d2464] text-[18px] md:text-[20px]">Bantuan</h3>
            <div className="flex flex-col items-center md:items-start gap-3">
              <a href="/tentang-kami" className="font-['Roboto:Regular',sans-serif] text-[16px] md:text-[18px] text-[#0d2464] hover:text-[#ffc229] transition-colors">Tentang kami</a>
              <a href="/hubungi" className="font-['Roboto:Regular',sans-serif] text-[16px] md:text-[18px] text-[#0d2464] hover:text-[#ffc229] transition-colors">Hubungi</a>
              <a href="#" className="font-['Roboto:Regular',sans-serif] text-[16px] md:text-[18px] text-[#0d2464] hover:text-[#ffc229] transition-colors">FAQ</a>
            </div>
          </div>

          {/* Column 4: Legal */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="font-['Poppins:Bold',sans-serif] font-bold text-[#0d2464] text-[18px] md:text-[20px]">Legal</h3>
            <div className="flex flex-col items-center md:items-start gap-3">
              <a href="#" className="font-['Roboto:Regular',sans-serif] text-[16px] md:text-[18px] text-[#0d2464] hover:text-[#ffc229] transition-colors">Privacy Policy</a>
              <a href="#" className="font-['Roboto:Regular',sans-serif] text-[16px] md:text-[18px] text-[#0d2464] hover:text-[#ffc229] transition-colors">Terms of Service</a>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-[#0d2464]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-['Roboto:Regular',sans-serif] text-[14px] md:text-[16px] text-[#0d2464]/70 text-center md:text-left">
            © 2024 Losala Travel. All rights reserved.
          </p>
          <p className="font-['Roboto:Regular',sans-serif] text-[14px] font-medium text-[#ffc229] text-center md:text-right">
            organized by albi.digital
          </p>
        </div>
      </div>
    </footer>
  );
}
