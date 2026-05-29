"use client";

import { useState } from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

/* ─────────────────────────────────────────
   SVG：不安そうな女性
───────────────────────────────────────── */
function WorriedFigure({ figureColor }: { figureColor: string }) {
  return (
    <svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 後ろ髪 */}
      <ellipse cx="40" cy="27" rx="26" ry="27" fill="#7B5B3A" />
      {/* 顔 */}
      <circle cx="40" cy="33" r="22" fill="#FFE0C2" />
      {/* サイド髪 */}
      <rect x="14" y="25" width="8" height="24" rx="4" fill="#7B5B3A" />
      <rect x="58" y="25" width="8" height="24" rx="4" fill="#7B5B3A" />
      {/* 困り眉（内側が上がる） */}
      <path d="M24 24 Q28 21 32 24" stroke="#5C3D2E" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M48 24 Q52 21 56 24" stroke="#5C3D2E" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* 目 */}
      <ellipse cx="32" cy="31" rx="3.5" ry="4" fill="#3D2B1F" />
      <ellipse cx="48" cy="31" rx="3.5" ry="4" fill="#3D2B1F" />
      {/* への字口 */}
      <path d="M33 43 Q40 39 47 43" stroke="#C4705A" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* 汗 */}
      <path d="M63 14 L65 10 L67 14 C67 17 63 17 63 14Z" fill="#84D3F4" opacity="0.85" />
      {/* 体 */}
      <path d="M20 61 Q40 56 60 61 L62 80 Q40 85 18 80 Z" fill={figureColor} opacity="0.75" />
      {/* 頬に手を当てるポーズ */}
      <ellipse cx="16" cy="39" rx="8" ry="6" fill="#FFE0C2" transform="rotate(-15 16 39)" />
      <ellipse cx="64" cy="39" rx="8" ry="6" fill="#FFE0C2" transform="rotate(15 64 39)" />
    </svg>
  );
}

/* ─────────────────────────────────────────
   SVG：笑顔の女性
───────────────────────────────────────── */
function HappyFigure() {
  return (
    <svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 後ろ髪 */}
      <ellipse cx="40" cy="27" rx="26" ry="27" fill="#7B5B3A" />
      {/* 顔 */}
      <circle cx="40" cy="33" r="22" fill="#FFE0C2" />
      {/* サイド髪 */}
      <rect x="14" y="25" width="8" height="24" rx="4" fill="#7B5B3A" />
      <rect x="58" y="25" width="8" height="24" rx="4" fill="#7B5B3A" />
      {/* 柔らかな眉 */}
      <path d="M24 25 Q28 22 32 24" stroke="#5C3D2E" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M48 24 Q52 22 56 25" stroke="#5C3D2E" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* 細め目（笑顔） */}
      <path d="M28 31 Q32 27 36 31" stroke="#3D2B1F" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M44 31 Q48 27 52 31" stroke="#3D2B1F" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      {/* 頬紅 */}
      <ellipse cx="27" cy="38" rx="7" ry="5" fill="#EC99D0" opacity="0.45" />
      <ellipse cx="53" cy="38" rx="7" ry="5" fill="#EC99D0" opacity="0.45" />
      {/* 大きなスマイル */}
      <path d="M31 42 Q40 51 49 42" stroke="#C4705A" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* きらきら */}
      <text x="60" y="20" fontSize="11" fill="#FFD700">✦</text>
      <text x="9"  y="19" fontSize="8"  fill="#FFD700">✦</text>
      {/* 体 */}
      <path d="M20 61 Q40 56 60 61 L62 80 Q40 85 18 80 Z" fill="white" opacity="0.9" />
      {/* 両手を広げるポーズ */}
      <ellipse cx="11" cy="62" rx="8" ry="5" fill="#FFE0C2" transform="rotate(-38 11 62)" />
      <ellipse cx="69" cy="62" rx="8" ry="5" fill="#FFE0C2" transform="rotate(38 69 62)" />
    </svg>
  );
}

/* ─────────────────────────────────────────
   カードデータ
───────────────────────────────────────── */
const cards = [
  {
    gradient:    "linear-gradient(135deg, #EC99D0, #B3AEDB)",
    lightBg:     "linear-gradient(160deg, #fff8fc, #f5f3ff)",
    accentColor: "#c96fa0",
    figureColor: "#EC99D0",
    worryTag:    "療育が途切れる",
    worry:       "療育施設がいっぱいで入れない。小学校に上がったらケアが途切れてしまう…",
    solutionTag: "途切れないケア",
    solution:    "乳幼児から成人まで、ライフステージが変わっても関わり続けます。ミライズがずっと一緒に。",
  },
  {
    gradient:    "linear-gradient(135deg, #B3AEDB, #84D3F4)",
    lightBg:     "linear-gradient(160deg, #f8f7ff, #f0f8ff)",
    accentColor: "#8a84c4",
    figureColor: "#B3AEDB",
    worryTag:    "突発的な衝動・癇癪",
    worry:       "子どもが突発的に暴れてしまう。どう対処すればいいのか分からない…",
    solutionTag: "専門的なアプローチ",
    solution:    "衝動には必ず原因があります。一緒に探り、対処できるようになっていきます。",
  },
  {
    gradient:    "linear-gradient(135deg, #84D3F4, #9EDED0)",
    lightBg:     "linear-gradient(160deg, #f0f8ff, #f0fffe)",
    accentColor: "#4a9ec4",
    figureColor: "#84D3F4",
    worryTag:    "相談できる場所がない",
    worry:       "子育てに限界を感じている。誰かに丸ごと相談できる場所が欲しい…",
    solutionTag: "親御さんも一緒に",
    solution:    "丸投げOK。お子さんのケアはもちろん、親御さんの気持ちにも寄り添います。",
  },
  {
    gradient:    "linear-gradient(135deg, #D468A4 0%, #D468A4 60%, #B3AEDB 100%)",
    lightBg:     "linear-gradient(160deg, #fdf0f8, #f5f2fc)",
    accentColor: "#C45898",
    figureColor: "#D468A4",
    worryTag:    "富山で専門家が見つからない",
    worry:       "富山で精神・療育に特化した専門家が見つからない…",
    solutionTag: "富山でできる",
    solution:    "富山で数少ない、精神・療育専門の訪問看護。自宅への訪問なので通所も不要です。",
  },
];

/* ─────────────────────────────────────────
   メインコンポーネント
───────────────────────────────────────── */
export function WhyMiraise() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section id="about" className="py-24 px-[5%] bg-white/60">
      <div className="max-w-[1100px] mx-auto">

        {/* タイトル */}
        <FadeIn direction="up">
          <p className="text-sm font-bold tracking-widest mb-3" style={{ color: "#EC99D0" }}>
            WHY MIRAISE
          </p>
          <h2
            className="text-4xl font-bold mb-4 text-[#231F20]"
            style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
          >
            よくあるご不安と<br className="sm:hidden" />ミライズの答え
          </h2>
          <p className="text-base text-[#6b6b6b] leading-loose mb-12 max-w-2xl">
            気になるカードを<strong>ホバー・タップ</strong>すると、ミライズからの答えが見られます。
          </p>
        </FadeIn>

        {/* フリップカード 2×2 グリッド */}
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[860px] mx-auto"
          staggerDelay={0.1}
        >
          {cards.map((card, i) => (
            <StaggerItem key={i}>
              {/* パースペクティブ外枠 */}
              <div
                className="cursor-pointer"
                style={{ perspective: "1200px" }}
                onMouseEnter={() => setActiveCard(i)}
                onMouseLeave={() => setActiveCard(null)}
                onClick={() => setActiveCard(prev => prev === i ? null : i)}
              >
                {/* フリッパー本体 */}
                <div
                  className="relative w-full"
                  style={{
                    aspectRatio: "5 / 6",
                    transformStyle: "preserve-3d",
                    transform: activeCard === i ? "rotateY(180deg)" : "rotateY(0deg)",
                    transition: "transform 0.65s cubic-bezier(0.4, 0.2, 0.2, 1)",
                  }}
                >

                  {/* ── 表面 ── */}
                  <div
                    className="absolute inset-0 rounded-3xl overflow-hidden shadow-md"
                    style={{
                      backfaceVisibility: "hidden",
                      background: card.lightBg,
                    }}
                  >
                    {/* 上部グラデーションライン */}
                    <div className="h-2 w-full" style={{ background: card.gradient }} />

                    <div className="flex flex-col h-[calc(100%-8px)] px-8 py-5 sm:px-10 sm:py-7 gap-3">
                      {/* バッジ */}
                      <div
                        className="self-start inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white"
                        style={{ background: card.gradient }}
                      >
                        よくあるご不安
                      </div>

                      {/* 1:1 エリア */}
                      <div className="flex-1 flex flex-col gap-3">
                        {/* イラスト（小さめ） */}
                        <div className="flex-1 flex items-center justify-center">
                          <div className="w-[28%]">
                            <WorriedFigure figureColor={card.figureColor} />
                          </div>
                        </div>

                        {/* テキスト（大きめ） */}
                        <div className="flex-1 flex flex-col justify-center">
                          <p
                            className="text-sm font-bold mb-2"
                            style={{ color: card.accentColor }}
                          >
                            {card.worryTag}
                          </p>
                          <p className="text-lg sm:text-xl font-medium text-[#231F20] leading-relaxed">
                            {card.worry}
                          </p>
                        </div>
                      </div>

                      {/* ヒント */}
                      <p className="text-xs text-[#c0c0c0] tracking-wider text-right">
                        ↩ 答えを見る
                      </p>
                    </div>
                  </div>

                  {/* ── 裏面 ── */}
                  <div
                    className="absolute inset-0 rounded-3xl overflow-hidden shadow-lg"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                      background: card.gradient,
                    }}
                  >
                    {/* ドット装飾 */}
                    <div
                      className="absolute inset-0 opacity-[0.12]"
                      style={{
                        backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)",
                        backgroundSize: "22px 22px",
                      }}
                    />

                    <div className="relative flex flex-col h-full px-8 py-5 sm:px-10 sm:py-7 gap-3">
                      {/* バッジ */}
                      <div className="self-start inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold text-white border border-white/40 bg-white/15">
                        ✓ ミライズの答え
                      </div>

                      {/* 1:1 エリア */}
                      <div className="flex-1 flex flex-col gap-3">
                        {/* イラスト（小さめ） */}
                        <div className="flex-1 flex items-center justify-center">
                          <div className="w-[28%]">
                            <HappyFigure />
                          </div>
                        </div>

                        {/* テキスト（大きめ） */}
                        <div className="flex-1 flex flex-col justify-center">
                          <p className="text-sm font-bold text-white/70 mb-2 tracking-wider">
                            {card.solutionTag}
                          </p>
                          <p className="text-lg sm:text-xl font-bold text-white leading-relaxed">
                            {card.solution}
                          </p>
                        </div>
                      </div>

                      {/* 下部スペーサー */}
                      <div className="mt-5 h-[1.125rem]" />
                    </div>
                  </div>

                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
