'use client';

const imgHero = "/assets/06216d95e4d1bb8d0df55dcf3b76e16e11fe0ded.png";
const img72 = "/assets/c40f72f4f939825cb0b221f2b26e1b1922aa57d0.png";
const img29 = "/assets/63dd359905963b9f4bf0a4d652e6ca4ef7369cbf.png";
const img13 = "/assets/dfe0d305eff976c6ffd498e1de82e6d4fd9bce57.png";
const imgAddOn = "/assets/6b1e620a6cc0c621c218ef900ca181ffa25816eb.png";
const imgKapal = "/assets/1077e042cf49cdffe1baf8b56d95994dc5289404.png";
const imgKapal2 = "/assets/136cb924df72a038d4296a6f9252f5d153a217cb.png";
const kapal = "/assets/kapal.png"

export default function Siginjai() {
  return (
    <div className="relative bg-white w-full min-h-screen">
      {/* ================= SECTION 1 : HERO & DECORATION ================= */}
      <div className="section-hero relative h-[800px] grid grid-cols-2 gap-8">

        <div className="">
          {/* Background kiri */}
            <img src={imgHero} className="w-full h-full object-cover rounded-b-2xl" />

          {/* Text kiri */}
          <div className="absolute left-8 top-8 text-white">
            <p className="text-[36px] font-bold">KMP.</p>
            <p className="text-[64px] font-bold">SIGINJAI</p>
          </div>
          
        </div>

        {/* Konten kanan */}
        <div className="">
          <img src={kapal} className="mt-12 w-[80px] h-[80px] object-cover" />
          <p className="mt-4 font-bold text-[#0d2464] text-[16px] leading-relaxed text-justify pr-12">
            KMP Siginjai adalah kapal ferry milik ASDP Indonesia yang melayani rute penyeberangan Jepara - Karimunjawa dan sebaliknya. Kapal ini menjadi salah satu transportasi utama bagi wisatawan maupun warga lokal.
          </p>

          <p className="mt-2 text-[#0d2464] text-[28px] font-bold">
            Mulai dari
          </p>

          <p className="text-[#ffc229] text-5xl font-bold mb-12">
            Rp 900.000
          </p>
          <div className="absolute right-12 flex gap-6">

          {[
            { img: img72, title: "Gathering Trip", href: "/siginjai/gathering-trip" },
            { img: img29, title: "Private Trip", href: "/siginjai/private-trip" },
            { img: img13, title: "By. Request", href: "/siginjai/by-request-siginjai" }
          ].map((item, i) => (
            <a key={i} href={item.href} className="relative w-[260px] h-[340px] rounded-[20px] overflow-hidden shadow-xl group hover:scale-[1.02] transition-transform">
              <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d2464]/80 to-transparent flex items-end p-4">
                <p className="text-white text-[18px] font-bold">{item.title}</p>
              </div>
            </a>
          ))}

        </div>
        </div>

        {/* Card Trip */}

      </div>

      {/* ================= SECTION 2 : ADD ON ================= */}
      <a href="/paket/add-ons-glamping-ground" className="section-addon relative block mt-24 px-[80px] group overflow-hidden">
        <div className="relative h-[80vh] rounded-[20px] overflow-hidden shadow-xl">
          <img src={imgAddOn} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

          <div className="font-bold absolute inset-0 bg-gradient-to-t from-[#0d2464]/90 to-transparent p-6 flex flex-col justify-end">
            <p className="text-white text-[18px]">
              Add On Glamping Ground
            </p>

            <p className="text-white text-[36px] font-bold">
              Rp 175.000 — Rp 250.000
            </p>
          </div>
        </div>
      </a>

      {/* ================= SECTION 3 : INFO ================= */}
      <div className="section-info relative mt-32 px-[80px] pb-24">
        <div className="mb-8">
          <p className="text-[#0d2464] text-[48px] font-bold leading-tight">KMP.</p>
          <p className="text-[#0d2464] text-[96px] font-bold leading-tight">SIGINJAI</p>
        </div>

        {/* Grid Container untuk Gambar & Info */}
        <div className="relative grid grid-cols-3 grid-rows-2 gap-x-6">
          {/* Gambar kiri (div1) */}
          <div className="row-span-2 rounded-[20px] overflow-hidden shadow-lg h-[400px]">
            <img src={imgKapal} className="w-full h-full object-cover" />
          </div>

          {/* Gambar kanan (div2) */}
          <div className="col-span-2 rounded-[20px] overflow-hidden shadow-lg h-[250px]">
            <img src={imgKapal2} className="w-full h-full object-cover" />
          </div>

          {/* Text info (div3) */}
          <div className="col-span-2 col-start-2 row-start-2 pt-2">
            <p className="text-[28px] font-bold text-black">
              KMP Siginjai Information
            </p>

            <p className="mt-3 text-[16px] text-gray-700 leading-relaxed text-justify">
              Kapal Ferry KM Siginjai merupakan transportasi laut jenis roll on - roll off yang menghubungkan Jepara dengan Karimunjawa, berfungsi mengangkut penumpang, kendaraan, serta barang dengan waktu tempuh sekitar 4 sampai 5 jam perjalanan.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}