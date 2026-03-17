'use client';
const imgLosalaTravelLogoTypography = "/assets/0e289cbf5e4563cac2cb978c1887a61fd482dc25.png";
const imgLosalaTravelLogoOnly = "/assets/110f0e1e80716f8a995f0c7455b7174a0b709b85.png";
import { imgRectangle4226, imgRectangle4228, imgRectangle4232, imgRectangle4233, imgRectangle4234, imgRectangle4235, imgRectangle4236, imgRectangle4237 } from "./svg-81g1e";
import { ImageWithFallback } from "../app/components/figma/ImageWithFallback";

interface FeatureIconProps {
  children: React.ReactNode;
  label: string;
}

function FeatureIcon({ children, label }: FeatureIconProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="bg-[#0d2464] rounded-full size-[120px] flex items-center justify-center">
        <div className="text-[#ffc229]">
          {children}
        </div>
      </div>
      <p className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#0d2464] text-center">{label}</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[78px] top-[2619.51px]">
      <div className="absolute left-[78px] size-[127.129px] top-[2619.51px]" data-name="losala travel logo only">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLosalaTravelLogoOnly} />
      </div>
      <div className="absolute left-[83.96px] size-[115.207px] top-[2706.36px]" data-name="losala travel logo typography">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLosalaTravelLogoTypography} />
      </div>
    </div>
  );
}

export default function RareDestination() {
  return (
    <div className="bg-white relative min-h-screen w-full" data-name="RareDestination">
      {/* Header */}
      <div className="relative">
        <div className="absolute left-[-4px] top-[34.49px] w-full">
          <p className="-translate-x-1/2 absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[calc(66.67%+88px)] not-italic text-[16px] text-black text-center top-[66px] whitespace-nowrap">Hubungi</p>
          <p className="-translate-x-1/2 absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[calc(75%+93px)] not-italic text-[16px] text-black text-center top-[66px] whitespace-nowrap">Informasi</p>
          <p className="-translate-x-1/2 absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[calc(83.33%+110px)] not-italic text-[16px] text-black text-center top-[66px] whitespace-nowrap">Tentang kami</p>
          <div className="-translate-x-1/2 absolute h-[88.026px] left-[calc(12.5%-12px)] top-[34.49px] w-[183.935px]" data-name="losala travel logo typography">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[229.41%] left-[-5.66%] max-w-none top-[-64.71%] w-[110.38%]" src={imgLosalaTravelLogoTypography} />
            </div>
          </div>
          <div className="absolute h-0 left-[-4px] top-[145px] w-[1440px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1">
                <line id="Line 27" stroke="var(--stroke-0, #0D2464)" x2="1440" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="pt-[200px] px-[40px]">
        <div className="max-w-[1360px] mx-auto">
          <h1 className="font-['Poppins:Bold',sans-serif] text-[48px] leading-[1.2] mb-2">
            <span className="text-[#0d2464]">Dokumentasi</span>
            <br />
            <span className="text-[#0d2464]">& Destinasi </span>
            <span className="text-[#ffc229]">Terbaik</span>
          </h1>
          <p className="font-['Poppins:Regular',sans-serif] text-[16px] text-[#0d2464] max-w-[500px]">
            Losala Travel membantu anda untuk menentukan berbagai destinasi terbaik di Karimunjawa.
          </p>
        </div>
      </div>

      {/* Penawaran Kami Section */}
      <div className="mt-[80px] px-[40px]">
        <div className="max-w-[1360px] mx-auto">
          <h2 className="font-['Poppins:Bold',sans-serif] text-[32px] text-[#0d2464] mb-4 text-center">
            Penawaran kami
          </h2>
          <p className="font-['Poppins:Regular',sans-serif] text-[16px] text-[#0d2464] text-center mb-[60px]">
            Yang dapat dipenuhi sistem layanan dengan perdalam langsung dari Losala Travel
          </p>
          
          {/* Icons Grid */}
          <div className="grid grid-cols-4 gap-8 mb-[60px]">
            <FeatureIcon label="Harga terjangkau">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </FeatureIcon>
            <FeatureIcon label="Komitmen kami">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
            </FeatureIcon>
            <FeatureIcon label="Handpicked">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="9" y1="9" x2="15" y2="15" />
                <line x1="15" y1="9" x2="9" y2="15" />
              </svg>
            </FeatureIcon>
            <FeatureIcon label="Tour guide">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </FeatureIcon>
          </div>

          <div className="grid grid-cols-4 gap-8">
            <FeatureIcon label="Dokumentasi">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
            </FeatureIcon>
            <FeatureIcon label="Best accomodation">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </FeatureIcon>
            <FeatureIcon label="Visa">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                <line x1="1" y1="10" x2="23" y2="10" />
              </svg>
            </FeatureIcon>
            <FeatureIcon label="Cancellation">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
            </FeatureIcon>
          </div>
        </div>
      </div>

      {/* Dokumentasi & Destinasi terbaik Section */}
      <div className="mt-[100px] px-[40px]">
        <div className="max-w-[1360px] mx-auto">
          <h2 className="font-['Poppins:Bold',sans-serif] text-[32px] text-[#0d2464] mb-2">
            Dokumentasi & Destinasi terbaik
          </h2>
          <p className="font-['Poppins:Regular',sans-serif] text-[16px] text-[#0d2464] mb-[40px]">
            Disajikan dalam foto terbaik di Karimunjawa
          </p>

          {/* Point View Karimunjawa */}
          <div className="mb-[60px]">
            <div className="grid grid-cols-12 gap-4 mb-4">
              <div className="col-span-3 rounded-[15px] overflow-hidden h-[640px]">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1691849793899-ac59a3bdc08d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGlzbGFuZCUyMGJlYWNoJTIwYWVyaWFsfGVufDF8fHx8MTc3MzY2NTI0Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Point View 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-4 flex flex-col gap-4">
                <div className="rounded-[15px] overflow-hidden h-[313px]">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1758983693315-744468a84181?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwc3Vuc2V0JTIwa2F5YWtpbmd8ZW58MXx8fHwxNzczNzQyODIwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Point View 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-[15px] overflow-hidden h-[313px]">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1739532827391-45e14eed59c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHN1bnNldCUyMG9jZWFuJTIwdmlld3xlbnwxfHx8fDE3NzM3NDI4MjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Point View 3"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="col-span-5 rounded-[15px] overflow-hidden h-[640px]">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1758983693315-744468a84181?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwc3Vuc2V0JTIwa2F5YWtpbmd8ZW58MXx8fHwxNzczNzQyODIwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Point View Main"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 inline-flex shadow-md">
              <div className="bg-[#ffc229] rounded-full size-[48px] flex items-center justify-center">
                <span className="font-['Poppins:Bold',sans-serif] text-[24px] text-[#0d2464]">P</span>
              </div>
              <span className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-[#0d2464]">Point View Karimunjawa</span>
              <div className="flex gap-1 ml-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#FFC229">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Under water view Karimunjawa */}
          <div className="mb-[60px]">
            <div className="grid grid-cols-12 gap-4 mb-4">
              <div className="col-span-4 rounded-[15px] overflow-hidden h-[359px]">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1706612203418-e1f0f945e0f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBzbm9ya2VsaW5nJTIwdW5kZXJ3YXRlcnxlbnwxfHx8fDE3NzM3NDI4MTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Underwater 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-5 rounded-[15px] overflow-hidden h-[359px]">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1637264296018-2ec3ea67230b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmRlcndhdGVyJTIwZGl2aW5nJTIwY29yYWwlMjByZWVmfGVufDF8fHx8MTc3MzY1NTQwMHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Underwater Main"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-3 flex flex-col gap-4">
                <div className="rounded-[15px] overflow-hidden flex-1">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1706612203418-e1f0f945e0f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBzbm9ya2VsaW5nJTIwdW5kZXJ3YXRlcnxlbnwxfHx8fDE3NzM3NDI4MTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Underwater 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-[15px] overflow-hidden flex-1">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1637264296018-2ec3ea67230b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmRlcndhdGVyJTIwZGl2aW5nJTIwY29yYWwlMjByZWVmfGVufDF8fHx8MTc3MzY1NTQwMHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Underwater 3"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 inline-flex shadow-md">
              <div className="bg-[#ffc229] rounded-full size-[48px] flex items-center justify-center">
                <span className="font-['Poppins:Bold',sans-serif] text-[24px] text-[#0d2464]">P</span>
              </div>
              <span className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-[#0d2464]">Under water view Karimunjawa</span>
              <div className="flex gap-1 ml-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#FFC229">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Glamping area */}
          <div className="mb-[60px]">
            <div className="grid grid-cols-12 gap-4 mb-4">
              <div className="col-span-3 flex flex-col gap-4">
                <div className="rounded-[15px] overflow-hidden flex-1">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1714326029322-fcc1464df757?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtcGluZyUyMHRlbnQlMjBsdXh1cnklMjBjYW1waW5nfGVufDF8fHx8MTc3MzY5Mjg0Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Glamping 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-[15px] overflow-hidden flex-1">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1714326029322-fcc1464df757?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtcGluZyUyMHRlbnQlMjBsdXh1cnklMjBjYW1waW5nfGVufDF8fHx8MTc3MzY5Mjg0Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Glamping 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="col-span-5 rounded-[15px] overflow-hidden h-[359px]">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1714326029322-fcc1464df757?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtcGluZyUyMHRlbnQlMjBsdXh1cnklMjBjYW1waW5nfGVufDF8fHx8MTc3MzY5Mjg0Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Glamping Main"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-4 rounded-[15px] overflow-hidden h-[359px]">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1714326029322-fcc1464df757?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtcGluZyUyMHRlbnQlMjBsdXh1cnklMjBjYW1waW5nfGVufDF8fHx8MTc3MzY5Mjg0Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Glamping 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 inline-flex shadow-md">
              <div className="bg-[#ffc229] rounded-full size-[48px] flex items-center justify-center">
                <span className="font-['Poppins:Bold',sans-serif] text-[24px] text-[#0d2464]">P</span>
              </div>
              <span className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-[#0d2464]">Glamping area</span>
              <div className="flex gap-1 ml-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#FFC229">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Best Accomodation */}
          <div className="mb-[60px]">
            <div className="grid grid-cols-12 gap-4 mb-4">
              <div className="col-span-5 rounded-[15px] overflow-hidden h-[334px]">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1772266870580-abc5d21b29c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNvcnQlMjBhY2NvbW1vZGF0aW9uJTIwdHJvcGljYWx8ZW58MXx8fHwxNzczNzQyODIyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Accommodation 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-4 rounded-[15px] overflow-hidden h-[334px]">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1772266870580-abc5d21b29c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNvcnQlMjBhY2NvbW1vZGF0aW9uJTIwdHJvcGljYWx8ZW58MXx8fHwxNzczNzQyODIyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Accommodation 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-3 rounded-[15px] overflow-hidden h-[334px]">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1509647924673-bbb53e22eeb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMHJvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzM3NDI4MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Accommodation 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 inline-flex shadow-md">
              <div className="bg-[#ffc229] rounded-full size-[48px] flex items-center justify-center">
                <span className="font-['Poppins:Bold',sans-serif] text-[24px] text-[#0d2464]">P</span>
              </div>
              <span className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-[#0d2464]">Best Accomodation</span>
              <div className="flex gap-1 ml-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#FFC229">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-[60px] mb-[80px]">
            <button className="bg-[#0d2464] text-white font-['Poppins:SemiBold',sans-serif] text-[16px] px-10 py-3 rounded-full hover:bg-[#1a3a8a] transition-colors">
              Lihat Lainnya
            </button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#0d2464] to-[#1a3a8a] px-[40px] py-[80px] relative overflow-hidden">
        <div className="max-w-[1360px] mx-auto relative z-10">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-8 mb-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-white rounded-full size-[48px] flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d2464" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-white mb-2">Sudah tersambung</h3>
                    <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-white/80">
                      Losala travel sudah tersambung dengan berbagai aplikasi seperti whatsapp, facebook dan sosial media lain untuk kemudahan akses nya.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white rounded-full size-[48px] flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d2464" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-white mb-2">Layanan Pekanan</h3>
                    <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-white/80">
                      Apakah anda ingin membuat pengalaman tanpa tanpa yang ada kesegaran dan ketenangan yang ada ke kenyamanan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-[20px] overflow-hidden">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1758983693315-744468a84181?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwc3Vuc2V0JTIwa2F5YWtpbmd8ZW58MXx8fHwxNzczNzQyODIwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Beach sunset"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          <p className="text-center text-white font-['Poppins:SemiBold',sans-serif] text-[18px] mt-12 mb-6">
            Mari memulai perjalanan nya untuk Karimunjawa dengan Losala Travel.<br />
            Pengalaman nya yang tidak takkan memudarkan keindahan dari Karimunjawa.
          </p>

          <div className="text-center">
            <button className="bg-[#ffc229] text-[#0d2464] font-['Poppins:Bold',sans-serif] text-[16px] px-12 py-4 rounded-full hover:bg-[#ffcd4a] transition-colors">
              Mulai Perjalanan anda
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative bg-white pt-[100px] pb-[60px]">
        <Group />
        <div className="absolute right-[120px] top-[80px]">
          <p className="font-['Roboto:Regular',sans-serif] text-[20px] text-black mb-2">Privacy Policy</p>
          <p className="font-['Roboto:Regular',sans-serif] text-[20px] text-black">Terms of Service</p>
        </div>
        <div className="text-center mt-[150px]">
          <p className="font-['Roboto:Regular',sans-serif] text-[20px] text-black">
            © 2024 Travel Explore. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
