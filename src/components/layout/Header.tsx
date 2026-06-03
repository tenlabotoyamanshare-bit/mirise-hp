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

const menuSections = [
  {
    label: null,
    links: [
      { label: "訪問看護について", href: "/#what-we-can-do" },
      { label: "ご利用の流れ", href: "/flow" },
      { label: "ご利用料金", href: "/price" },
      { label: "よくあるご質問", href: "/faq" },
    ],
  },
  {
    label: "ミライズについて",
    links: [
      { label: "ミライズについて", href: "/about" },
      { label: "代表からのご挨拶", href: "/about#message" },
      { label: "会社概要", href: "/company" },
    ],
  },
  {
    label: null,
    links: [
      { label: "お問い合わせ", href: "/contact" },
      { label: "採用情報", href: "/recruit" },
    ],
  },
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
            className="hidden sm:block text-base font-bold text-[#231F20] tracking-wide"
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
                className="relative inline-flex items-center justify-center h-14 w-14 rounded-xl overflow-hidden"
                style={{
                  background: "linear-gradient(#fff, #fff) padding-box, linear-gradient(135deg, #EC99D0, #B3AEDB, #84D3F4) border-box",
                  border: "2.5px solid transparent",
                }}
                onMouseEnter={() => setMenuHovered(true)}
                onMouseLeave={() => setMenuHovered(false)}
                aria-label="メニューを開く"
              />
            }
          >
            {/* グラデーション塗りオーバーレイ — ゆっくりフェードイン（700ms） */}
            <span
              className="absolute inset-0 pointer-events-none transition-opacity duration-700"
              style={{
                background: "linear-gradient(135deg, #EC99D0, #B3AEDB, #84D3F4)",
                opacity: menuHovered ? 1 : 0,
              }}
            />

            {/* 3本線：グラデーション（通常）↔ 白（ホバー）をゆっくり切り替え */}
            <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
              <defs>
                <linearGradient id="menuGrad" x1="0" y1="0" x2="28" y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#EC99D0" />
                  <stop offset="50%" stopColor="#B3AEDB" />
                  <stop offset="100%" stopColor="#84D3F4" />
                </linearGradient>
              </defs>
              {/* グラデーション線（ホバー時にゆっくり消える） */}
              <g style={{ opacity: menuHovered ? 0 : 1, transition: "opacity 0.7s ease" }}>
                <rect y="0"    width="28" height="2.5" rx="1.25" fill="url(#menuGrad)" />
                <rect y="8.75" width="28" height="2.5" rx="1.25" fill="url(#menuGrad)" />
                <rect y="17.5" width="28" height="2.5" rx="1.25" fill="url(#menuGrad)" />
              </g>
              {/* 白線（ホバー時にゆっくり現れる） */}
              <g style={{ opacity: menuHovered ? 1 : 0, transition: "opacity 0.7s ease" }}>
                <rect y="0"    width="28" height="2.5" rx="1.25" fill="white" />
                <rect y="8.75" width="28" height="2.5" rx="1.25" fill="white" />
                <rect y="17.5" width="28" height="2.5" rx="1.25" fill="white" />
              </g>
            </svg>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-full sm:w-[75vw] p-0 overflow-y-auto"
            style={{ background: "linear-gradient(160deg, #fdf2fa 0%, #edf6ff 100%)" }}
          >

            {/* ── ヘッダー（ロゴ） ── */}
            <SheetHeader className="px-8 sm:px-12 py-8 border-b border-[#efefef]">
              <SheetTitle className="text-left">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo.png"
                    alt="MIRISEロゴ"
                    width={48}
                    height={48}
                    className="h-12 w-auto"
                  />
                  {/* PCのみテキスト表示 */}
                  <span
                    className="hidden sm:block text-base font-bold text-[#231F20]"
                    style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
                  >
                    ミライズ訪問看護ステーション
                  </span>
                </div>
              </SheetTitle>
            </SheetHeader>

            {/* ── ナビゲーション ── */}
            <nav className="px-8 sm:px-12 py-10" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>
              {/* PC：3列グリッド / スマホ：1列 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10">
                {menuSections.map((section, si) => (
                  <div
                    key={si}
                    className={
                      si > 0
                        ? /* スマホのみ：上に濃い区切り線 */
                          "mt-2 pt-6 border-t-2 border-[#c8c8c8] sm:border-0 sm:mt-0 sm:pt-0"
                        : ""
                    }
                  >
                    {section.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block text-base text-[#231F20] hover:text-[#EC99D0] py-4 border-b border-[#efefef] transition-colors font-medium leading-snug"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </nav>

          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
