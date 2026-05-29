import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP, Zen_Maru_Gothic, Lora } from "next/font/google";
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

const zenMaruGothic = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-zen-maru-gothic",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
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
      className={`${notoSansJP.variable} ${notoSerifJP.variable} ${zenMaruGothic.variable} ${lora.variable}`}
    >
      <body className="font-[var(--font-noto-sans-jp)] antialiased text-[#231F20] min-h-screen flex flex-col">
        {/* ── 水彩固定背景 ── */}
        <div
          className="fixed inset-0 pointer-events-none select-none"
          style={{
            backgroundImage: "url('/watercolor-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -2,
          }}
        />
        {/* ── 白オーバーレイ（背景のみ） ── */}
        <div
          className="fixed inset-0 pointer-events-none select-none"
          style={{ backgroundColor: "rgba(255,255,255,0.55)", zIndex: -1 }}
        />
        <Header />
        <main className="flex-1 pt-[100px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
