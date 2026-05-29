"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/92 backdrop-blur-md border-b border-[#EC99D0]/20 h-[70px] flex items-center px-[5%]">
      {/* グラデーションライン（下部） */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{
          background:
            "linear-gradient(90deg, #84D3F4, #B3AEDB, #EC99D0, #F1F0CA, #9EDDC9)",
        }}
      />

      <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto">
        {/* ロゴ */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo.png"
            alt="MIRISEロゴ"
            width={44}
            height={44}
            className="h-11 w-auto object-contain"
          />
          <div className="leading-snug">
            <p className="text-sm font-bold text-[#231F20] tracking-wide">
              訪問看護ステーションミライズ
            </p>
            <p className="text-[10px] text-[#6b6b6b] font-normal tracking-wider">
              MIRISE Visiting Nursing Station
            </p>
          </div>
        </Link>

        {/* デスクトップナビ */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] text-[#6b6b6b] hover:text-[#231F20] font-normal tracking-wide transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] rounded-full bg-gradient-to-r from-[#EC99D0] to-[#B3AEDB] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
          {/* CTA — Link に直接スタイルを適用 */}
          <Link
            href="/contact"
            className="ml-2 inline-flex items-center justify-center px-4 h-8 rounded-full text-white text-sm font-bold shadow-md transition-opacity hover:opacity-90"
            style={{
              background: "linear-gradient(120deg, #EC99D0, #B3AEDB)",
              boxShadow: "0 4px 16px rgba(236,153,208,0.35)",
            }}
          >
            お問い合わせ
          </Link>
        </nav>

        {/* モバイルメニュー */}
        <Sheet open={open} onOpenChange={setOpen}>
          {/* render プロップで button 要素を上書き */}
          <SheetTrigger
            className="lg:hidden"
            render={
              <button
                className="inline-flex items-center justify-center h-9 w-9 rounded-lg hover:bg-[#f7f7f7] transition-colors"
                aria-label="メニューを開く"
              />
            }
          >
            <Menu className="h-5 w-5 text-[#231F20]" />
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
