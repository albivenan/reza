'use client';

const imgLosalaTravelLogoTypography = "/assets/0e289cbf5e4563cac2cb978c1887a61fd482dc25.png";

export default function GlobalHeader() {
  return (
    <header className="w-full h-[145px] flex items-center justify-between px-[120px] border-b border-[#0d2464] relative z-50 bg-white">
      {/* Logo */}
      <a href="/" className="relative h-[88px] w-[184px] overflow-hidden">
        <img 
          alt="Losala Travel Logo" 
          className="absolute h-[229.41%] left-[-5.66%] max-w-none top-[-64.71%] w-[110.38%] object-contain" 
          src={imgLosalaTravelLogoTypography} 
        />
      </a>

      {/* Navigation */}
      <nav className="flex gap-[60px] items-center">
        <a href="/hubungi" className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#0d2464] hover:text-[#ffc229] transition-colors no-underline">Hubungi</a>
        <a href="/penawaran" className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#0d2464] hover:text-[#ffc229] transition-colors no-underline">Penawaran</a>
        <a href="/paket" className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#0d2464] hover:text-[#ffc229] transition-colors no-underline">Paket</a>
        <a href="/transportasi" className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#0d2464] hover:text-[#ffc229] transition-colors no-underline">Transportasi</a>
        <a href="/tentang-kami" className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#0d2464] hover:text-[#ffc229] transition-colors no-underline">Tentang kami</a>
        <a href="/dokumentasi" className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#0d2464] hover:text-[#ffc229] transition-colors no-underline">Dokumentasi</a>
      </nav>
    </header>
  );
}
