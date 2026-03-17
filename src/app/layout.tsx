import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
