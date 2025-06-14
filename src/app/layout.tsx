import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WechatBanner from "@/components/wechat-banner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Baby Calendar",
  description: "A calendar application for managing your baby's milestones.",
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
        <WechatBanner />
        {children}
        <div className="py-6 text-center text-xs font-mono">
          <a href="https://github.com/ioslh/baby-calendar" target="_blank" rel="noopener noreferrer">https://github.com/ioslh/baby-calendar</a>
        </div>
      </body>
    </html>
  );
}
