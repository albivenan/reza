'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const imgLosalaTravelLogoTypography = "/assets/0e289cbf5e4563cac2cb978c1887a61fd482dc25.png";

export default function GlobalHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Penawaran', href: '/penawaran' },
    { name: 'Paket', href: '/paket' },
    { name: 'Transportasi', href: '/transportasi' },
    { name: 'Dokumentasi', href: '/dokumentasi' },
    { name: 'Tentang kami', href: '/tentang-kami' },
    { name: 'Hubungi', href: '/hubungi' },
  ];

  return (
    <>
      <header className="w-full h-[80px] md:h-[120px] lg:h-[145px] flex items-center justify-between px-6 md:px-10 lg:px-[120px] border-b border-[#0d2464] fixed top-0 left-0 z-[100] bg-white shadow-sm">
        {/* Logo */}
        <a href="/" className="relative h-[55px] md:h-[75px] lg:h-[88px] w-[110px] md:w-[150px] lg:w-[184px] overflow-hidden transition-transform hover:scale-105">
          <img 
            alt="Losala Travel Logo" 
            className="absolute h-[229.41%] left-[-5.66%] max-w-none top-[-64.71%] w-[110.38%] object-contain" 
            src={imgLosalaTravelLogoTypography} 
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-[35px] xl:gap-[50px] items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-['Poppins:SemiBold',sans-serif] text-[15px] lg:text-[16px] transition-all no-underline relative group py-2 
                ${pathname === link.href ? 'text-[#ffc229]' : 'text-[#0d2464] hover:text-[#ffc229]'}`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#ffc229] transform transition-transform duration-300
                ${pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} 
              />
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden flex flex-col items-end gap-1.5 z-[110] transition-opacity hover:opacity-80"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className={`w-8 h-[3px] rounded-full bg-[#0d2464] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
          <div className={`w-6 h-[3px] rounded-full bg-[#0d2464] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-8 h-[3px] rounded-full bg-[#0d2464] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
        </button>
      </header>

      {/* Spacer to push content down since header is fixed */}
      <div className="h-[80px] md:h-[120px] lg:h-[145px]" />

      {/* Mobile Navigation Overlay - Sibling to header, starts from under it */}
      <div className={`fixed inset-0 top-[80px] md:top-[120px] lg:top-[145px] bg-white z-[90] flex flex-col items-center justify-center gap-6 transition-transform duration-500 ease-in-out lg:hidden ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              onClick={() => setIsMenuOpen(false)} 
              className={`font-['Poppins:Bold',sans-serif] text-[26px] transition-colors duration-300 
                ${pathname === link.href ? 'text-[#ffc229]' : 'text-[#0d2464]'}`}
            >
              {link.name}
            </a>
          ))}
        </div>
        
        {/* Aditional Mobile-only info or social */}
        <div className={`mt-10 pt-10 border-t border-gray-100 flex flex-col items-center gap-2 transition-all duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-gray-400 font-['Poppins',sans-serif] text-sm text-center">
            Losala Travel © 2024
          </p>
          <p className="text-[#ffc229] font-['Poppins:SemiBold',sans-serif] text-[12px] uppercase tracking-wider text-center">
            organized by albi.digital
          </p>
        </div>
      </div>
    </>
  );
}
