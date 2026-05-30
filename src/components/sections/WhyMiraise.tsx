"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

/* ─────────────────────────────────────────
   カードデータ
───────────────────────────────────────── */
const worryCards = [
  {
    gradient:    "linear-gradient(135deg, #EC99D0, #B3AEDB)",
    accentColor: "#c96fa0",
    worryTag:    "療育が途切れる",
    worry:       "療育施設がいっぱいで入れない。小学校に上がったらケアが途切れてしまう…",
    solutionTag: "途切れないケア",
    solution:    "乳幼児から成人まで、ライフステージが変わっても関わり続けます。ミライズがずっと一緒に。",
  },
  {
    gradient:    "linear-gradient(135deg, #B3AEDB, #84D3F4)",
    accentColor: "#8a84c4",
    worryTag:    "突発的な衝動・癇癪",
    worry:       "子どもが突発的に暴れてしまう。どう対処すればいいのか分からない…",
    solutionTag: "専門的なアプローチ",
    solution:    "衝動には必ず原因があります。一緒に探り、対処できるようになっていきます。",
  },
  {
    gradient:    "linear-gradient(135deg, #84D3F4, #9EDED0)",
    accentColor: "#4a9ec4",
    worryTag:    "相談できる場所がない",
    worry:       "子育てに限界を感じている。誰かに丸ごと相談できる場所が欲しい…",
    solutionTag: "親御さんも一緒に",
    solution:    "丸投げOK。お子さんのケアはもちろん、親御さんの気持ちにも寄り添います。",
  },
  {
    gradient:    "linear-gradient(135deg, #D468A4 0%, #D468A4 60%, #B3AEDB 100%)",
    accentColor: "#C45898",
    worryTag:    "富山で専門家が見つからない",
    worry:       "富山で精神・療育に特化した専門家が見つからない…",
    solutionTag: "富山でできる",
    solution:    "富山で数少ない、精神・療育専門の訪問看護。自宅への訪問なので通所も不要です。",
  },
];

/* ─────────────────────────────────────────
   強みデータ
───────────────────────────────────────── */
const strengths = [
  {
    bg:          "rgba(236, 153, 208, 0.62)",
    border:      "#EC99D0",
    accentColor: "#b85a90",
    cardBg:      "rgba(236, 153, 208, 0.10)",
    cardBorder:  "rgba(236, 153, 208, 0.45)",
    titleLine1:  "乳幼児から成人まで",
    titleLine2:  "途切れないケア",
    descLines:   [
      "ライフステージが変わっても関わり続けます。",
      "小学校に上がっても、大人になっても、",
      "ミライズがずっと寄り添います。",
    ],
  },
  {
    bg:          "rgba(179, 174, 219, 0.68)",
    border:      "#B3AEDB",
    accentColor: "#7a74b4",
    cardBg:      "rgba(179, 174, 219, 0.10)",
    cardBorder:  "rgba(179, 174, 219, 0.50)",
    titleLine1:  "医療×メンタル、",
    titleLine2:  "両面からアプローチ",
    descLines:   [
      "衝動には必ず原因があります。",
      "服薬・血糖値などの医療的ケアと、",
      "心の状態へのメンタルケアを",
      "両方の視点で専門的に行います。",
    ],
  },
  {
    bg:          "rgba(158, 222, 208, 0.65)",
    border:      "#9EDED0",
    accentColor: "#3d9e8c",
    cardBg:      "rgba(158, 222, 208, 0.12)",
    cardBorder:  "rgba(158, 222, 208, 0.55)",
    titleLine1:  "家族も地域もつながる",
    titleLine2:  "トータルサポート",
    descLines:   [
      "丸投げOK。",
      "親御さんのケアはもちろん、",
      "相談支援員・療育施設など地域の他機関とも",
      "連携しながら、生活全体をサポートします。",
    ],
  },
];

/* ─────────────────────────────────────────
   丸のアニメーション設定
───────────────────────────────────────── */
const circleVariants = [
  /* 上：真上から */
  { initial: { y: -80, opacity: 0 }, animate: { y: 0, opacity: 1 } },
  /* 下左：左下から */
  { initial: { x: -70, y: 70, opacity: 0 }, animate: { x: 0, y: 0, opacity: 1 } },
  /* 下右：右下から */
  { initial: { x: 70, y: 70, opacity: 0 }, animate: { x: 0, y: 0, opacity: 1 } },
];

/* ─────────────────────────────────────────
   メインコンポーネント
───────────────────────────────────────── */
export function WhyMiraise() {
  return (
    <section id="about">

      {/* ════════════════════════════════
          PART 1：よくあるご不安について
          背景：薄いラベンダー
      ════════════════════════════════ */}
      <div className="py-24 px-[5%]" style={{ background: "rgba(238, 234, 252, 0.80)" }}>
        <div className="max-w-[1100px] mx-auto">

          <FadeIn direction="up">
            <p className="text-sm font-bold tracking-widest mb-3" style={{ color: "#EC99D0" }}>
              COMMON CONCERNS
            </p>
            <h2
              className="text-4xl font-bold mb-4 text-[#231F20]"
              style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
            >
              よくあるご不安について
            </h2>
            <p className="text-base text-[#6b6b6b] leading-loose mb-12 max-w-2xl">
              よくいただくお悩みと、ミライズでできることをご紹介します。
            </p>
          </FadeIn>

          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[860px] mx-auto"
            staggerDelay={0.1}
          >
            {worryCards.map((card, i) => (
              <StaggerItem key={i}>
                <div className="rounded-3xl overflow-hidden shadow-md">

                  {/* ── 上半分：よくあるご不安 ── */}
                  <div className="px-7 pt-5 pb-6" style={{ background: "linear-gradient(160deg, #eceaf2, #e8e6ee)" }}>
                    <div className="h-1 w-full rounded-full mb-4" style={{ background: card.gradient }} />
                    <div
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold text-white mb-5"
                      style={{ background: card.gradient }}
                    >
                      よくあるご不安
                    </div>
                    <div className="flex justify-center mb-5">
                      <Image
                        src="/woman-thinking.png"
                        alt="悩んでいる女性のイラスト"
                        width={130}
                        height={160}
                        className="h-36 w-auto object-contain"
                      />
                    </div>
                    <p className="text-xs font-bold mb-1.5" style={{ color: card.accentColor }}>
                      {card.worryTag}
                    </p>
                    <p className="text-base sm:text-lg font-medium text-[#231F20] leading-relaxed">
                      {card.worry}
                    </p>
                  </div>

                  {/* ── 区切りストリップ ── */}
                  <div
                    className="flex items-center justify-center gap-1.5 py-2"
                    style={{ background: card.gradient }}
                  >
                    <span className="text-white/80 text-xs">↓</span>
                    <span className="text-white/80 text-xs font-bold tracking-wider">ミライズの答え</span>
                  </div>

                  {/* ── 下半分：ミライズの答え ── */}
                  <div className="px-7 pt-5 pb-6 relative overflow-hidden" style={{ background: card.gradient }}>
                    <div
                      className="absolute inset-0 opacity-[0.1] pointer-events-none"
                      style={{
                        backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)",
                        backgroundSize: "20px 20px",
                      }}
                    />
                    <div className="relative">
                      <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold text-white border border-white/30 bg-white/15 mb-4">
                        ✓ ミライズの答え
                      </div>
                      <p className="text-xs font-bold text-white/70 mb-1.5 tracking-wider">
                        {card.solutionTag}
                      </p>
                      <p className="text-base sm:text-lg font-bold text-white leading-relaxed">
                        {card.solution}
                      </p>
                    </div>
                  </div>

                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </div>


      {/* ════════════════════════════════
          PART 2：ミライズの強み
          背景：薄いミント
      ════════════════════════════════ */}
      <div className="py-24 px-[5%]" style={{ background: "rgba(225, 248, 242, 0.82)" }}>
        <div className="max-w-[1100px] mx-auto">

          <FadeIn direction="up">
            <p className="text-sm font-bold tracking-widest mb-3 text-center" style={{ color: "#B3AEDB" }}>
              OUR STRENGTH
            </p>
            <h2
              className="text-4xl font-bold mb-4 text-[#231F20] text-center"
              style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
            >
              ミライズの強み
            </h2>
            <p className="text-base text-[#6b6b6b] leading-loose mb-14 text-center max-w-2xl mx-auto">
              富山で数少ない、精神・療育専門の訪問看護だからできること。
            </p>
          </FadeIn>

          {/* ── 三原色ベン図（各方向からアニメーション） ── */}
          <div className="flex flex-col items-center mb-16">

            {/* 上：ピンク（真上から） */}
            <motion.div
              initial={circleVariants[0].initial}
              whileInView={circleVariants[0].animate}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0 }}
              className="w-64 h-64 sm:w-80 sm:h-80 rounded-full shrink-0 flex flex-col items-center justify-center text-center px-10 border-4 border-white relative"
              style={{ background: strengths[0].bg, zIndex: 20 }}
            >
              <span
                className="text-base sm:text-lg font-bold leading-snug"
                style={{ color: strengths[0].accentColor, fontFamily: "var(--font-zen-maru-gothic)" }}
              >
                {strengths[0].titleLine1}<br />{strengths[0].titleLine2}
              </span>
            </motion.div>

            {/* 下段 */}
            <div className="flex -mt-20 sm:-mt-24">

              {/* 下左：ラベンダー（左下から） */}
              <motion.div
                initial={circleVariants[1].initial}
                whileInView={circleVariants[1].animate}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-full shrink-0 flex flex-col items-center justify-center text-center px-10 border-4 border-white relative"
                style={{ background: strengths[1].bg, zIndex: 10 }}
              >
                <span
                  className="text-base sm:text-lg font-bold leading-snug"
                  style={{ color: strengths[1].accentColor, fontFamily: "var(--font-zen-maru-gothic)" }}
                >
                  {strengths[1].titleLine1}<br />{strengths[1].titleLine2}
                </span>
              </motion.div>

              {/* 下右：ミント（右下から） */}
              <motion.div
                initial={circleVariants[2].initial}
                whileInView={circleVariants[2].animate}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                className="-ml-14 sm:-ml-20 w-64 h-64 sm:w-80 sm:h-80 rounded-full shrink-0 flex flex-col items-center justify-center text-center px-10 border-4 border-white relative"
                style={{ background: strengths[2].bg, zIndex: 10 }}
              >
                <span
                  className="text-base sm:text-lg font-bold leading-snug"
                  style={{ color: strengths[2].accentColor, fontFamily: "var(--font-zen-maru-gothic)" }}
                >
                  {strengths[2].titleLine1}<br />{strengths[2].titleLine2}
                </span>
              </motion.div>

            </div>
          </div>

          {/* ── 3強みの説明カード（色付き枠） ── */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[900px] mx-auto">
            {strengths.map((s, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <div
                  className="text-center rounded-2xl px-6 py-8"
                  style={{
                    background: s.cardBg,
                    border: `2px solid ${s.cardBorder}`,
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-full mx-auto mb-4 flex items-center justify-center text-sm font-bold text-white"
                    style={{ backgroundColor: s.border }}
                  >
                    {i + 1}
                  </div>
                  <p
                    className="text-xl font-bold mb-3 text-[#231F20] leading-snug"
                    style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
                  >
                    {s.titleLine1}<br />{s.titleLine2}
                  </p>
                  <p className="text-base text-[#6b6b6b] leading-relaxed">
                    {s.descLines.map((line, li) => (
                      <span key={li}>
                        {line}
                        {li < s.descLines.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
