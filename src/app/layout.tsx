import type { Metadata } from "next";
import "./globals.css";
import GlobalHeader from "../imports/GlobalHeader";
import GlobalFooter from "../imports/GlobalFooter";

export const metadata: Metadata = {
  title: "Losala Travel",
  description: "Losala - Paket Wisata Karimunjawa Terbaik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <GlobalHeader />
        {children}
        <GlobalFooter />
      </body>
    </html>
  );
}
