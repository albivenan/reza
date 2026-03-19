import type { Metadata } from "next";
import "./globals.css";
import GlobalHeader from "@/components/layout/GlobalHeader";
import GlobalFooter from "@/components/layout/GlobalFooter";

export const metadata: Metadata = {
  title: "Losala Travel",
  description: "Losala - Paket Wisata Karimunjawa Terbaik",
  icons: {
    icon: "/assets/0e289cbf5e4563cac2cb978c1887a61fd482dc25.png",
  },
  openGraph: {
    title: "Losala Travel",
    description: "Losala - Paket Wisata Karimunjawa Terbaik",
    images: [{ url: "/assets/0e289cbf5e4563cac2cb978c1887a61fd482dc25.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Losala Travel",
    description: "Losala - Paket Wisata Karimunjawa Terbaik",
    images: ["/assets/0e289cbf5e4563cac2cb978c1887a61fd482dc25.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="overflow-x-hidden">
        <GlobalHeader />
        {children}
        <GlobalFooter />
      </body>
    </html>
  );
}
