'use client';

const imgHero = "/assets/c1ade05911eec2345c8b38d4ec6edb2969a2ce67.png";
const imgCamp = "/assets/ec3a2f5cf6f3e6318410344b302176c2148a0dc2.png";
const imgBoat = "/assets/6ef0e0de699f8a1e55364f3a222adf112f29374c.png";
const img1 = "/assets/18342880d0dd72668f57bb3e55878d006779a3ff.png";
const img2 = "/assets/19bda3dc5b0002996dca9b66c835b50e8820225b.png";
const img3 = "/assets/5457dbedddaac28cf776cd09b8038a4d0cca4e50.png";
const img4 = "/assets/2b0fb2ac595348903de1c810558b0514a5ebf008.png";
const checklist = "/assets/checklist.png";

export default function PrivateTripExpressBahari() {
  return (
    <div className="bg-white w-full font-['Poppins',sans-serif]">

      {/* ================= HERO ================= */}
      <section className="grid grid-cols-2 min-h-screen">

        {/* LEFT IMAGE */}
        <div className="relative">
          <img src={imgHero} className="w-full h-screen object-cover" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0d2464] to-transparent opacity-80" />

          <div className="absolute top-8 left-8 text-white">
            <p className="text-4xl font-bold">Paket</p>
            <h1 className="text-5xl font-bold uppercase transition-all">Private Trip</h1>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-between space-y-6">
          <div className="flex h-full px-8 flex-col justify-center gap-y-6">
            <p className="font-bold text-[#0d2464] text-xl leading-relaxed text-left">
              Nikmati kemewahan liburan eksklusif dengan paket Private Trip bersama Express Bahari, 
              di mana Anda memiliki kendali penuh atas jadwal dan kenyamanan grup Anda sendiri.
            </p>

            <h2 className="text-3xl font-bold text-[#0d2464]">
              3 Hari 2 Malam
            </h2>

            <h3 className="text-5xl font-bold text-[#ffc229]">
              Rp 1.950.000
            </h3>
          </div>

          {/* small images */}
          <div className="grid grid-cols-2">
            <img src={imgCamp} className="h-[200px] object-cover w-full" />
            <img src={imgBoat} className="h-[200px] object-cover w-full" />
          </div>
        </div>

      </section>

      {/* ================= FITUR ================= */}
      <section className="font-bold grid grid-cols-2 gap-10 px-20 py-20">

        <div className="space-y-5 text-[#0d2464] text-xl">
          <p className="flex items-center gap-3"><img src={checklist} className="w-6 h-6 object-contain" /> Tiket penyebrangan pp</p>
          <p className="flex items-center gap-3"><img src={checklist} className="w-6 h-6 object-contain" /> Penginapan</p>
          <p className="flex items-center gap-3"><img src={checklist} className="w-6 h-6 object-contain" /> Transportasi</p>
          <p className="flex items-center gap-3"><img src={checklist} className="w-6 h-6 object-contain" /> Tour guide (Private)</p>
          <p className="flex items-center gap-3"><img src={checklist} className="w-6 h-6 object-contain" /> Dokumentasi</p>
          <p className="flex items-center gap-3"><img src={checklist} className="w-6 h-6 object-contain" /> Retribusi wisata laut & darat</p>
        </div>

        <div className="space-y-5 text-[#0d2464] text-xl">
          <p className="flex items-center gap-3"><img src={checklist} className="w-6 h-6 object-contain" /> Kapal tour laut (Exclusive)</p>
          <p className="flex items-center gap-3"><img src={checklist} className="w-6 h-6 object-contain" /> Perlengkapan kamping</p>
          <p className="flex items-center gap-3"><img src={checklist} className="w-6 h-6 object-contain" /> Perlengkapan snorkling</p>
          <p className="flex items-center gap-3"><img src={checklist} className="w-6 h-6 object-contain" /> Makan Exclusive 6x</p>
          <p className="flex items-center gap-3"><img src={checklist} className="w-6 h-6 object-contain" /> P3K</p>
        </div>

      </section>

      {/* ================= GALLERY ================= */}
      <section className="px-20 pb-24">

        <div className="grid grid-cols-3 grid-rows-2 gap-[8px]">
          {/* div1 */}
          <img src={img1} className="rounded-xl h-[250px] w-full object-cover object-center col-span-2" />

          {/* div2 */}
          <img src={img2} className="rounded-xl h-[250px] w-full object-cover object-center col-start-3" />

          {/* div4 */}
          <img src={img3} className="rounded-xl h-[250px] w-full object-cover object-center row-start-2" />

          {/* div5 */}
          <img src={img4} className="rounded-xl h-[250px] w-full object-cover object-center col-span-2 row-start-2" />
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16">
          <button className="bg-[#112967] text-white text-2xl px-16 py-5 rounded-full shadow-lg">
            Pesan Sekarang
          </button>
        </div>

      </section>

    </div>
  );
}
