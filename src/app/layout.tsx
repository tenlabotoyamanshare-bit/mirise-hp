import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-noto-serif-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "訪問看護ステーションミライズ",
    template: "%s | 訪問看護ステーションミライズ",
  },
  description:
    "訪問看護ステーションミライズは、住み慣れたご自宅で安心して過ごせるよう、専門スタッフが心を込めてサポートします。24時間365日対応。",
  keywords: ["訪問看護", "訪問看護ステーション", "在宅医療", "ミライズ"],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "訪問看護ステーションミライズ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${notoSerifJP.variable}`}
    >
      <body className="font-[var(--font-noto-sans-jp)] antialiased bg-white text-[#231F20] min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-[70px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
