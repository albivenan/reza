'use client';
const imgLosalaTravelLogoTypography = "/assets/0e289cbf5e4563cac2cb978c1887a61fd482dc25.png";

export default function NavbarSection() {
  return (
    <header className="w-full border-b border-[#0d2464] bg-white sticky top-0 z-50">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-[120px] h-[100px]">
        <a href="/" className="flex-shrink-0">
          <img
            alt="Losala Travel"
            src={imgLosalaTravelLogoTypography}
            className="h-[52px] w-auto object-contain"
          />
        </a>
        <nav className="flex items-center gap-[60px]">
          <a href="/hubungi" className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-black hover:opacity-70 transition-opacity">Hubungi</a>
          <a href="#" className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-black hover:opacity-70 transition-opacity">Informasi</a>
          <a href="#" className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-black hover:opacity-70 transition-opacity">Tentang kami</a>
        </nav>
      </div>
    </header>
  );
}
