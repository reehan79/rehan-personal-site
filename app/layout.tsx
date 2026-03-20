import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Rehan Mahmood | Satellite Communications & Space Systems",
  description:
    "Dr. Rehan Mahmood — Satellite Communications, CubeSat Programs, Space Systems Leadership, NTN/PPDR Simulation, and Academic Leadership.",
  openGraph: {
    title: "Dr. Rehan Mahmood | Satellite Communications & Space Systems",
    description:
      "Satellite Communications, CubeSat Programs, Space Systems Leadership, NTN/PPDR Simulation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
