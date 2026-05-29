"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "訪問看護について", href: "/services" },
  { label: "ご利用の流れ", href: "/flow" },
  { label: "ご利用料金", href: "/price" },
  { label: "よくある質問", href: "/faq" },
  { label: "事業所について", href: "/about" },
  { label: "採用情報", href: "/recruit" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [menuHovered, setMenuHovered] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[100px] flex items-center px-[5%]">

      <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto">
        {/* ロゴ */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo.png"
            alt="MIRISEロゴ"
            width={80}
            height={80}
            className="h-16 w-auto object-contain"
          />
          <p
            className="text-base font-bold text-[#231F20] tracking-wide"
            style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
          >
            訪問看護ステーション ミライズ
          </p>
        </Link>

        {/* ハンバーガーメニュー（全画面サイズで表示） */}
        <Sheet open={open} onOpenChange={setOpen}>
          {/* render プロップで button 要素を上書き */}
          <SheetTrigger
            render={
              <button
                className="inline-flex items-center justify-center h-14 w-14 rounded-xl transition-all duration-200"
                style={menuHovered ? {
                  background: "linear-gradient(135deg, #EC99D0, #B3AEDB, #84D3F4)",
                  border: "2.5px solid transparent",
                } : {
                  background: "linear-gradient(#fff, #fff) padding-box, linear-gradient(135deg, #EC99D0, #B3AEDB, #84D3F4) border-box",
                  border: "2.5px solid transparent",
                }}
                onMouseEnter={() => setMenuHovered(true)}
                onMouseLeave={() => setMenuHovered(false)}
                aria-label="メニューを開く"
              />
            }
          >
            {/* 3本線：通常=グラデーション、ホバー=白 */}
            <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              {!menuHovered && (
                <defs>
                  <linearGradient id="menuGrad" x1="0" y1="0" x2="28" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#EC99D0" />
                    <stop offset="50%" stopColor="#B3AEDB" />
                    <stop offset="100%" stopColor="#84D3F4" />
                  </linearGradient>
                </defs>
              )}
              <rect y="0"    width="28" height="2.5" rx="1.25" fill={menuHovered ? "#fff" : "url(#menuGrad)"} />
              <rect y="8.75" width="28" height="2.5" rx="1.25" fill={menuHovered ? "#fff" : "url(#menuGrad)"} />
              <rect y="17.5" width="28" height="2.5" rx="1.25" fill={menuHovered ? "#fff" : "url(#menuGrad)"} />
            </svg>
          </SheetTrigger>

          <SheetContent side="right" className="w-[280px] px-6 pt-8">
            <SheetHeader className="mb-8">
              <SheetTitle className="text-left">
                <div className="flex items-center gap-2">
                  <Image
                    src="/logo.png"
                    alt="MIRISEロゴ"
                    width={36}
                    height={36}
                    className="h-9 w-auto"
                  />
                  <span className="text-sm font-bold text-[#231F20]">
                    ミライズ訪問看護
                  </span>
                </div>
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-[#231F20] hover:text-[#EC99D0] py-3 px-2 border-b border-[#f0f0f0] transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-6">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="w-full flex items-center justify-center h-10 rounded-full text-white text-sm font-bold transition-opacity hover:opacity-90"
                  style={{
                    background: "linear-gradient(120deg, #EC99D0, #B3AEDB)",
                  }}
                >
                  お問い合わせ
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
