"use client";

import { motion } from "framer-motion";

/**
 * ヒーローセクション — 2コンテナ方式
 *
 * Container 1: タイトル（h-[200vh]）
 *   sticky で約1画面分止まる → スクロールで上に流れ去る
 *
 * Container 2: 説明文 + 3つの丸（h-[200vh]）
 *   同じく sticky で約1画面分止まる → スクロールで上に流れ去る
 *
 * 2つのコンテナを縦に並べることで、
 * 「止まる → 流れる → 止まる → 流れる」を実現する。
 */

const EASE = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  return (
    <section>

      {/* ══════════════════════════════════════════
          Container 1 — タイトル
          h-[200vh] のコンテナ内で sticky が約100vh分止まる
      ══════════════════════════════════════════ */}
      <div className="relative h-[150vh]">
        <div className="sticky top-[100px] h-[calc(100vh-100px)] overflow-hidden relative">

          {/* 富山バッジ — 上端と中央の中間（top: 25%）*/}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.6, delay: 1.6, ease: EASE }}
            >
              <div
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-md"
                style={{ background: "linear-gradient(135deg, #EC99D0, #B3AEDB)" }}
              >
                <span
                  className="text-white font-bold text-base sm:text-lg leading-none"
                  style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
                >
                  富山
                </span>
              </div>
            </motion.div>
          </div>

          {/* メインタイトル + サブタイトル — 画面中央（top: 50%）*/}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-[5%] flex flex-col items-center gap-8 text-center">
            <motion.h1
              className="flex flex-wrap sm:flex-nowrap items-baseline justify-center gap-x-2"
              style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, delay: 0.3, ease: EASE }}
            >
              <span className="text-3xl sm:text-5xl font-medium text-[#231F20]">
                訪問看護ステーション
              </span>
              <span className="text-5xl sm:text-5xl font-medium text-[#231F20]">
                ミライズ
              </span>
            </motion.h1>

            <motion.p
              className="text-sm text-[#7a7a7a] tracking-widest font-medium"
              style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6, delay: 2.0, ease: EASE }}
            >
              精神・療育に特化した訪問看護ステーション
            </motion.p>
          </div>

          {/* スクロール促進の矢印 */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 3.0 }}
            style={{ color: "#B3AEDB" }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg
                width="36" height="22" viewBox="0 0 36 22"
                fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              >
                <polyline points="2 4 18 18 34 4" />
              </svg>
            </motion.div>
          </motion.div>

        </div>
      </div>


      {/* ══════════════════════════════════════════
          Container 2 — 説明文 + 3つの丸
          同じ仕組みで約100vh分止まる
      ══════════════════════════════════════════ */}
      <div className="relative h-[200vh]">
        <div className="sticky top-[100px] h-[calc(100vh-100px)] flex flex-col items-center justify-center overflow-hidden">

          {/* 説明文 */}
          <motion.div
            className="px-[5%] w-full max-w-2xl mx-auto mb-8 sm:mb-10 flex flex-col items-center gap-3 text-center"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1.2, delay: 0.1, ease: EASE }}
          >
            <p
              className="text-base font-bold tracking-[0.25em] text-[#B3AEDB]"
              style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
            >
              未就学児から成人まで
            </p>
            <p
              className="text-sm text-[#7a7a7a] leading-loose tracking-wide"
              style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
            >
              発達障害・精神・知的障害のある方とそのご家族に寄り添い、
              <br />
              自宅で受けられる専門的なケアを富山でお届けします。
            </p>
          </motion.div>

          {/* PC：横3丸（時間差で下から登場） */}
          <div className="hidden sm:flex w-full justify-evenly items-center px-[4%]">
            {(
              [
                { href: "#worries",         label: ["こんなお悩み", "ありませんか？"], color: "#EC99D0", delay: 0.25 },
                { href: "#what-we-can-do",  label: ["訪問看護でできること"],          color: "#B3AEDB", delay: 0.5  },
                { href: "/about",           label: ["ミライズについて"],              color: "#84D3F4", delay: 0.75 },
              ] as const
            ).map(({ href, label, color, delay }) => (
              <motion.a
                key={href}
                href={href}
                initial={{ opacity: 0, y: 56 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 1.4, delay, ease: EASE }}
                className="w-[min(30vw,280px)] h-[min(30vw,280px)] rounded-full flex items-center justify-center text-center font-bold border-2 bg-white/80 hover:text-white transition-colors duration-300 text-sm lg:text-lg"
                style={{ borderColor: color, color }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = color;
                  el.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = "rgba(255,255,255,0.8)";
                  el.style.color = color;
                }}
              >
                <span className="px-4 leading-relaxed">
                  {label.map((line, i) => (
                    <span key={i}>{line}{i < label.length - 1 && <br />}</span>
                  ))}
                </span>
              </motion.a>
            ))}
          </div>

          {/* モバイル：帯状3列 */}
          <div className="flex sm:hidden flex-col gap-3 w-full px-[5%]">
            {(
              [
                { href: "#worries",        label: ["こんなお悩みありませんか？"], color: "#EC99D0", delay: 0.25 },
                { href: "#what-we-can-do", label: ["訪問看護でできること"],          color: "#B3AEDB", delay: 0.5  },
                { href: "/about",          label: ["ミライズについて"],              color: "#84D3F4", delay: 0.75 },
              ] as const
            ).map(({ href, label, color, delay }) => (
              <motion.a
                key={href}
                href={href}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 1.3, delay, ease: EASE }}
                className="w-full flex items-center justify-center py-5 rounded-2xl font-bold text-white text-base text-center"
                style={{ backgroundColor: color }}
              >
                <span className="leading-relaxed">
                  {label.map((line, i) => (
                    <span key={i}>{line}{i < label.length - 1 && <br />}</span>
                  ))}
                </span>
              </motion.a>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
