'use client';
const imgPattern2015 = "/assets/db502b78bb52f9dc06097996c86e3a73dbfc871e.png";

const stats = [
  { label: "Pulau di Karimunjawa", value: "27", sub: "Ada cerita di setiap sudutnya" },
  { label: "Akomodasi", value: "3", sub: "berbagai cerita keseruan" },
  { label: "Wisata alam", value: "10+", sub: "Lestari akan keindahan alamnya" },
];

export default function StatistikSection() {
  return (
    <section className="relative w-full overflow-hidden py-8">
      {/* Pattern background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img alt="" src={imgPattern2015} className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-[60px]">
        <div className="flex w-full divide-x divide-[#0d2464] border-y border-[#0d2464]">
          {stats.map((s, i) => (
            <div key={i} className="flex-1 px-8 py-4 flex flex-col justify-center">
              <span className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-black">{s.label}</span>
              <span className="font-['Poppins:ExtraBold',sans-serif] text-[140px] md:text-[180px] text-black leading-none my-[-10px]">{s.value}</span>
              <span className="font-['Poppins:Regular',sans-serif] text-[16px] text-black">{s.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
