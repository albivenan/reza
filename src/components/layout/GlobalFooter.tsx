'use client';

const imgLosalaTravelLogoOnly = "/assets/110f0e1e80716f8a995f0c7455b7174a0b709b85.png";
const imgLosalaTravelLogoTypography = "/assets/0e289cbf5e4563cac2cb978c1887a61fd482dc25.png";
const imgPattern2015 = "/assets/db502b78bb52f9dc06097996c86e3a73dbfc871e.png";

export default function GlobalFooter() {
  return (
    <footer className="relative w-full bg-white overflow-hidden pt-20 pb-12 border-t border-[#0d2464]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img 
          alt="Pattern Background" 
          className="w-full h-full object-cover" 
          src={imgPattern2015} 
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-10">
          
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="relative size-[100px] mb-2">
              <img 
                alt="Logo Only" 
                className="w-full h-full object-contain" 
                src={imgLosalaTravelLogoOnly} 
              />
            </div>
            <div className="relative w-[184px] h-[88px] overflow-hidden -mt-4">
              <img 
                alt="Logo Typography" 
                className="absolute h-[229.41%] left-[-5.66%] max-w-none top-[-64.71%] w-[110.38%] object-contain" 
                src={imgLosalaTravelLogoTypography} 
              />
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-col items-center md:items-end gap-3 text-[#0d2464]">
            <a href="/penawaran" className="font-['Roboto:Regular',sans-serif] text-[18px] hover:text-[#ffc229] transition-colors">Penawaran</a>
            <a href="/paket" className="font-['Roboto:Regular',sans-serif] text-[18px] hover:text-[#ffc229] transition-colors">Paket</a>
            <a href="/transportasi" className="font-['Roboto:Regular',sans-serif] text-[18px] hover:text-[#ffc229] transition-colors">Transportasi</a>
            <a href="/dokumentasi" className="font-['Roboto:Regular',sans-serif] text-[18px] hover:text-[#ffc229] transition-colors">Dokumentasi</a>
            <a href="#" className="font-['Roboto:Regular',sans-serif] text-[18px] hover:text-[#ffc229] transition-colors">Privacy Policy</a>
            <a href="#" className="font-['Roboto:Regular',sans-serif] text-[18px] hover:text-[#ffc229] transition-colors">Terms of Service</a>
            <p className="mt-4 font-['Roboto:Regular',sans-serif] text-[16px] opacity-70">
              © 2024 Travel Explore. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
