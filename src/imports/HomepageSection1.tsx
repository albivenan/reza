'use client';
import svgPaths from "./svg-9rp6dcu08w";
const imgPattern2015 = "/assets/db502b78bb52f9dc06097996c86e3a73dbfc871e.png";
const imgDji07731 = "/assets/7f2ad25c18286501d1c570f7f827f096064429f8.png";
const img71 = "/assets/c40f72f4f939825cb0b221f2b26e1b1922aa57d0.png";
const imgWhatsAppImage20250104At114615Am1 = "/assets/be2d3851fb898e9fe7334c602257a4cbbc66dd2b.png";
const imgWhatsAppImage20250924At72012Am2 = "/assets/6b1e620a6cc0c621c218ef900ca181ffa25816eb.png";
const imgWhatsAppImage20250104At114657Am1 = "/assets/ec3a2f5cf6f3e6318410344b302176c2148a0dc2.png";
const imgWhatsAppImage20250104At114622Am1 = "/assets/e1c2ac1049b0ae1686c4b8446ef299b778439d6d.png";
const imgLosalaTravelLogoTypography = "/assets/0e289cbf5e4563cac2cb978c1887a61fd482dc25.png";
const imgUnsplashXsTqMVvStMa1 = "/assets/f083bd1931b07dc8db4f16b67b65dc73e3669262.png";
import { imgRectangle4190, imgRectangle4191, imgRectangle4192, imgRectangle4193, imgRectangle4194, imgRectangle4220, imgRectangle4311, imgUnsplashXsTqMVvStMa } from "./svg-mhjo3";

function NavbarSection() {
  return (
    <div className="w-full h-[145px] flex items-center justify-between px-[120px] border-b border-[#0d2464] relative z-50 bg-white">
      {/* Navbar Content */}
      <a href="/" className="relative h-[88px] w-[184px] overflow-hidden">
        <img alt="Losala Travel Logo" className="absolute h-[229.41%] left-[-5.66%] max-w-none top-[-64.71%] w-[110.38%]" src={imgLosalaTravelLogoTypography} />
      </a>
      <div className="flex gap-[60px] items-center">
        <a href="#" className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-black no-underline">Hubungi</a>
        <a href="#" className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-black no-underline">Informasi</a>
        <a href="#" className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-black no-underline">Tentang kami</a>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="w-full flex justify-center mt-[54px] mb-[150px] relative px-[33px]">
      <div className="relative w-full max-w-[1374px] h-[581px] rounded-[46px] overflow-visible">
        <div className="absolute inset-0 rounded-[46px]" style={{ maskImage: 'url("' + imgUnsplashXsTqMVvStMa + '")' }}>
          <img alt="Karimunjawa Landscape" className="absolute w-[1420px] h-[1068px] object-cover opacity-95 top-[-274px] left-[-33px]" src={imgUnsplashXsTqMVvStMa1} />
        </div>
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] rounded-[46px]" />
        
        <div className="absolute left-[8%]" style={{ top: '50%', transform: 'translateY(-50%)' }}>
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] text-[40px] text-white whitespace-pre-wrap">
            <span className="leading-[56px] text-white">Karimunjawa menunggumu! </span>
            <span>
              <span className="leading-[56px]">Dengan </span>
              <span className="leading-[56px] text-white">Losala Travel</span>
            </span>
          </div>
        </div>

        <div className="absolute right-[46px] top-[140px] w-[254px] h-[311px] rounded-[39px] border-2 border-solid border-white backdrop-blur-[1px] shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.2)]" style={{ backgroundImage: "linear-gradient(115.612deg, rgba(255, 255, 255, 0.5) 11.416%, rgba(202, 202, 202, 0.1) 85.388%)", zIndex: 10 }}>
          <div className="absolute top-[29px] left-[21px] w-[81px] h-[13px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 81 13">
              <g>
                <path d={svgPaths.p316ff080} fill="#FFC700" />
                <path d={svgPaths.p316ff080} fill="#FFC700" />
                <path d={svgPaths.p316ff080} fill="#FFC700" />
                <path d={svgPaths.p316ff080} fill="#FFC700" />
                <path d={svgPaths.p316ff080} fill="#FFC700" />
              </g>
            </svg>
          </div>
          
          <p className="absolute top-[50px] left-[14px] w-[226px] h-[48px] font-['Poppins:Medium',sans-serif] text-[13px] leading-[15px] text-white">
            Pemandangan yang benar-benar menakjubkan dan pelayanan yang sempurna.
          </p>

          <div className="absolute bottom-[-16px] left-[7px] w-[226px] h-[183px]" style={{ maskImage: 'url("' + imgRectangle4311 + '")' }}>
             <img alt="Traveler" className="absolute top-[-108px] left-[-6px] w-[239px] h-[318px] object-cover pointer-events-none" src={imgWhatsAppImage20250104At114622Am1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function OffersSection() {
  return (
    <div className="w-full relative flex flex-col items-center mb-[150px]">
      <p className="font-['Poppins:Bold',sans-serif] text-[64px] leading-[64px] text-center mb-0">
        <span className="text-[#0d2464]">Impianmu dimulai</span>
      </p>
      <p className="font-['Poppins:Bold',sans-serif] text-[64px] leading-[64px] text-center mb-8">
        <span className="text-[#0d2464] text-[32px]">bersama </span>
        <span className="text-[#ffc229] text-[32px]">Losala Travel</span>
      </p>
      
      <p className="font-['Poppins:Medium',sans-serif] text-[20px] leading-[25px] text-black text-center max-w-[800px] mb-[100px]">
        Setiap paket perjalanan kami dilengkapi dengan panduan lengkap dan tips perjalanan dari para ahli.
      </p>

      {/* Gallery */}
      <div className="relative w-[1440px] h-[306px] flex px-[50px] justify-between items-end">
        
        <div className="relative w-[185px] h-[306px]" style={{ maskImage: 'url("' + imgRectangle4190 + '")' }}>
            <img alt="" className="absolute left-[-15px] top-[-56px] w-[240px] h-[417px] object-cover" src={imgDji07731} />
        </div>
        
        <div className="relative w-[184px] h-[306px]" style={{ maskImage: 'url("' + imgRectangle4191 + '")' }}>
            <img alt="" className="absolute left-[-14px] top-[-7px] w-[212px] h-[373px] object-cover" src={img71} />
        </div>
        
        <div className="relative w-[180px] h-[306px]" style={{ maskImage: 'url("' + imgRectangle4193 + '")' }}>
            <img alt="" className="absolute left-[-14px] top-[-6px] w-[238px] h-[318px] object-cover scale-y-[-1] rotate-180" src={imgWhatsAppImage20250924At72012Am2} />
        </div>
        
        <div className="relative w-[180px] h-[306px]" style={{ maskImage: 'url("' + imgRectangle4192 + '")' }}>
            <img alt="" className="absolute left-[-8px] top-[-25px] w-[197px] h-[356px] object-cover" src={imgWhatsAppImage20250104At114615Am1} />
        </div>
        
        <div className="relative w-[181px] h-[306px]" style={{ maskImage: 'url("' + imgRectangle4194 + '")' }}>
            <img alt="" className="absolute left-[-41px] top-[-37px] w-[285px] h-[380px] object-cover" src={imgWhatsAppImage20250104At114657Am1} />
        </div>
        
        <div className="relative bg-[#0d2464] w-[530px] h-[306px]" style={{ maskImage: 'url("' + imgRectangle4220 + '")' }}>
            <img alt="" className="absolute left-[-56px] top-[-84px] w-[671px] h-[474px] opacity-10 object-cover" src={imgPattern2015} />
            <div className="absolute bottom-[40px] left-[50px] font-['Poppins:Bold',sans-serif] text-[32px] leading-[38px] text-white">
              <p className="mb-0">Wujudkan</p>
              <p>Impianmu</p>
            </div>
            <div className="absolute right-[50px] bottom-[40px] size-[48px] -rotate-45">
              <svg className="block size-full" fill="none" viewBox="0 0 62 62">
                <circle cx="31" cy="24" fill="#FFC229" r="24" transform="rotate(180 31 24)" />
                <path clipRule="evenodd" d={svgPaths.p3122bc00} fill="#0D2464" fillRule="evenodd" />
              </svg>
            </div>
        </div>

      </div>

      <div className="mt-12 bg-[#ffc229] h-[58px] w-[370px] rounded-[29px] shadow-lg flex items-center px-8 justify-between cursor-pointer mr-[120px] self-end relative z-20">
        <span className="font-['Poppins:SemiBold',sans-serif] text-[#0d2464] text-[24px]">Penawaran kami</span>
        <span className="font-['Poppins:Light',sans-serif] text-white text-[16px]">Penawaran kami</span>
      </div>
    </div>
  );
}

function StatistikSection() {
  return (
    <div className="w-full relative overflow-hidden flex justify-center py-[20px] mt-[50px] h-[301px]">
      {/* Absolute patterned background aligned with the viewport width */}
      <div className="absolute inset-x-[-100px] h-full opacity-20 pointer-events-none">
         <img alt="" className="w-full h-[379%] object-cover object-top -mt-[8%]" src={imgPattern2015} />
      </div>

      <div className="relative z-10 flex w-full max-w-[1440px] px-[60px]">
         <div className="flex w-full divide-x divide-[#0d2464] border border-[#0d2464] border-x-0 h-full">
           <div className="flex-1 px-8 py-4 flex flex-col justify-center">
             <span className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-black">Pulau di Karimunjawa</span>
             <span className="font-['Poppins:ExtraBold',sans-serif] text-[200px] text-black leading-none my-[-20px]">27</span>
             <span className="font-['Poppins:Regular',sans-serif] text-[16px] text-black">Ada cerita di setiap sudutnya</span>
           </div>
           <div className="flex-1 px-8 py-4 flex flex-col justify-center pl-16">
             <span className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-black">Akomodasi</span>
             <span className="font-['Poppins:ExtraBold',sans-serif] text-[200px] text-black leading-none my-[-20px]">3</span>
             <span className="font-['Poppins:Regular',sans-serif] text-[16px] text-black">berbagai cerita keseruan</span>
           </div>
           <div className="flex-1 px-8 py-4 flex flex-col justify-center relative pl-16">
             <span className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-black">Wisata alam</span>
             <div className="flex items-center">
               <span className="font-['Poppins:ExtraBold',sans-serif] text-[200px] text-black leading-none my-[-20px]">10</span>
               <span className="font-['Poppins:Bold',sans-serif] text-[80px] text-black leading-none">+</span>
             </div>
             <span className="font-['Poppins:Regular',sans-serif] text-[16px] text-black">Lestari akan keindahan alamnya</span>
             <span className="font-['Poppins:Regular',sans-serif] text-[16px] text-black mt-[16px]">&nbsp;</span>
           </div>
         </div>
      </div>
    </div>
  );
}

export default function HomepageSection1() {
  return (
    <>
      <NavbarSection />
      <HeroSection />
      <OffersSection />
      <StatistikSection />
    </>
  );
}
