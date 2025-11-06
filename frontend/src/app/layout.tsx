import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";
import { fetchGlobalData } from "@/lib/strapi";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shanti Travel",
  description: "Travel with Shanti Travel",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalData = await fetchGlobalData();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {globalData?.header && <Header data={globalData.header} />}
        <main className="min-h-screen">{children}</main>
        {globalData?.footer && <Footer data={globalData.footer} />}
      </body>
    </html>
  );
}
