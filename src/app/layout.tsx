import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import VisualBackground from "@/app/components/VisualBackGround";
import Footer from "./components/Footer";
import HeaderPage from "./components/HeaderPage";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ABTech by Adilson Biondo",
  description: "By Adilson Biondo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <VisualBackground />
        <HeaderPage />
        {children}
        <Footer />
      </body>
    </html>
  );
}
