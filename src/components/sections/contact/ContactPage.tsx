'use client';

import React from 'react';
import svgPaths from '@/components/icons/svg-9rp6dcu08w';

const imgPattern2011 = "/assets/0342cb03285a24cf0a85cbd67a56e12bee53ce6a.png";
const imgSnorkelingHero = "/assets/a0d9ef80efafab54ae8ca2e92de9704eed586c57.png"; // Snorkeling photo

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black font-['Poppins',sans-serif]">

      {/* MAIN CONTENT */}
      <main className="max-w-[1200px] mx-auto px-8 md:px-16 py-16">
        <h1 className="text-[40px] font-bold text-center mb-16">Hubungi Kami</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Contact Pills */}
          <div className="flex flex-col gap-8">
            {/* Instagram */}
            <div className="flex items-center gap-6 bg-[#C4D0F8] rounded-full p-4 pl-6 shadow-lg min-w-[350px]">
              <div className="w-[82px] h-[82px] bg-[#0D2464] rounded-full flex items-center justify-center p-5">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                  <path d="M7 2C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H7ZM12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM18 5C18.5523 5 19 5.44772 19 6C19 6.55228 18.5523 7 18 7C17.4477 7 17 6.55228 17 6C17 5.44772 17.4477 5 18 5Z" />
                </svg>
              </div>
              <span className="text-[32px] font-bold text-[#0D2464]">@losala_travel</span>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-6 bg-[#C4D0F8] rounded-full p-4 pl-6 shadow-lg min-w-[350px]">
              <div className="w-[82px] h-[82px] bg-[#0D2464] rounded-full flex items-center justify-center p-5">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                  <path d="M12.031 2C6.511 2 2.025 6.486 2.025 12.006c0 2.115.656 4.075 1.775 5.694l-1.129 4.128 4.235-1.112c1.488.813 3.195 1.282 5.013 1.282 5.52 0 10.006-4.486 10.006-10.006C22.031 6.486 17.545 2 12.031 2zm6.262 14.375c-.246.689-1.21 1.262-1.638 1.346-.368.072-.848.132-2.352-.468-1.92-.768-4.14-3.792-4.14-3.792-.372-.516-.648-1.008-.648-1.572 0-.576.312-1.044.516-1.26.246-.246.546-.312.726-.312.18 0 .36 0 .516.012.162.006.378-.06.594.45.246.588.84 2.04.912 2.19.072.15.12.324.024.516-.096.192-.144.312-.288.486-.144.174-.312.384-.444.516-.162.162-.33.336-.144.66.186.324.84 1.386 1.812 2.25 1.254 1.116 2.298 1.458 2.628 1.62.33.162.522.138.72-.096.192-.228.828-1 .104-1.356-.12-.06-.396-.138-.66-.27-.264-.132-1.548-.762-1.788-.846-.24-.084-.414-.132-.588.132-.174.264-.672.846-.822 1.014-.15.168-.3.192-.564.06z" />
                </svg>
              </div>
              <span className="text-[28px] md:text-[32px] font-bold text-[#0D2464] whitespace-nowrap">+62 857-8628-3718</span>
            </div>

            {/* TikTok */}
            <div className="flex items-center gap-6 bg-[#C4D0F8] rounded-full p-4 pl-6 shadow-lg min-w-[350px]">
              <div className="w-[82px] h-[82px] bg-[#0D2464] rounded-full flex items-center justify-center p-5">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-2.904-1.248 4.774 4.774 0 0 1-1.441-2.513c-.033-.173-.049-.349-.049-.525h-3.219v12.5a3.1 3.1 0 0 1-3.1 3.1 3.1 3.1 0 0 1-3.1-3.1 3.1 3.1 0 0 1 3.1-3.1c.362 0 .7.062 1.013.175V8.69a6.31 6.31 0 0 0-1.013-.081 6.326 6.326 0 0 0-6.326 6.326 6.326 6.326 0 0 0 6.326 6.326 6.326 6.326 0 0 0 6.326-6.326V7.12a8.035 8.035 0 0 0 3.887 1.139v-1.573z" />
                </svg>
              </div>
              <span className="text-[32px] font-bold text-[#0D2464]">@losala_travel</span>
            </div>
          </div>

          {/* Right: Snorkeling Image */}
          <div className="relative">
            <div className="rounded-[60px] overflow-hidden shadow-2xl border-4 border-white">
              <img src={imgSnorkelingHero} alt="Snorkeling" className="w-full aspect-square object-cover" />
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default ContactPage;
