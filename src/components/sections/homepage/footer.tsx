'use client';
const imgPattern2015 = "/assets/db502b78bb52f9dc06097996c86e3a73dbfc871e.png";
const imgLosalaTravelLogoOnly = "/assets/110f0e1e80716f8a995f0c7455b7174a0b709b85.png";
const imgLosalaTravelLogoTypography = "/assets/0e289cbf5e4563cac2cb978c1887a61fd482dc25.png";

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden py-10 px-8">
      {/* Pattern background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img alt="" src={imgPattern2015} className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1287px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          {/* Logo */}
          <div className="flex flex-col items-start -space-y-2">
            <img src={imgLosalaTravelLogoOnly} alt="Losala" className="w-[92px] object-contain" />
            <img src={imgLosalaTravelLogoTypography} alt="Losala Travel" className="w-[96px] object-contain" />
          </div>

          {/* Links */}
          <div className="flex flex-col items-start md:items-end gap-2 text-[18px] md:text-[20px] text-black">
            <button className="hover:opacity-70 transition-opacity">Privacy Policy</button>
            <button className="hover:opacity-70 transition-opacity">Terms of Service</button>
          </div>
        </div>

        <div className="mt-6 text-center md:text-right text-[16px] md:text-[20px] text-black">
          © 2024 Travel Explore. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
