import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { HomeHero } from "@/components/sections/HomeHero";
import { LINE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "訪問看護ステーションミライズ | 富山の精神・療育専門訪問看護",
  description:
    "富山市・射水市・砺波市対応。ご本人・ご家族・お子様の「自分らしい未来」を支える訪問看護ステーション。就労支援・精神的ケア・服薬管理・レスパイト対応。24時間365日サポート。",
};

/* ─── 共通：セクションラベル ─── */
function SectionLabel({ children, color = "#EC99D0" }: { children: React.ReactNode; color?: string }) {
  return (
    <p className="text-sm font-bold tracking-widest mb-3" style={{ color }}>
      {children}
    </p>
  );
}

/* ─── 共感セクション用イラスト（やすらぐ夜のモチーフ・線画／画像は使わない） ─── */
function WorryIllustration() {
  return (
    <div className="relative w-[min(62vw,280px)] aspect-square">
      {/* やわらかい色面 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full blur-2xl" style={{ width: "60%", height: "60%", top: "8%", left: "14%", background: "rgba(179,174,219,0.45)" }} />
        <div className="absolute rounded-full blur-2xl" style={{ width: "52%", height: "52%", bottom: "8%", right: "10%", background: "rgba(132,211,244,0.40)" }} />
      </div>
      <svg viewBox="0 0 240 240" fill="none" className="relative w-full h-full">
        {/* 月 */}
        <circle cx="150" cy="88" r="38" fill="rgba(179,174,219,0.18)" stroke="#B3AEDB" strokeWidth="3" />
        <circle cx="140" cy="80" r="6" fill="none" stroke="#B3AEDB" strokeWidth="2" opacity="0.5" />
        <circle cx="160" cy="98" r="4" fill="none" stroke="#B3AEDB" strokeWidth="2" opacity="0.5" />
        {/* 星 */}
        <g stroke="#84D3F4" strokeWidth="2.5" strokeLinecap="round">
          <path d="M70 70 v12 M64 76 h12" />
          <path d="M98 108 v10 M93 113 h10" />
          <path d="M58 128 v8 M54 132 h8" />
        </g>
        {/* zzz */}
        <g stroke="#B3AEDB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M186 120 h10 l-10 12 h10" />
          <path d="M200 104 h8 l-8 10 h8" />
        </g>
        {/* やすらぎの雲＋ハート */}
        <path
          d="M78 184 q-22 0 -22 -18 q0 -15 17 -15 q4 -17 23 -13 q15 -8 25 7 q19 -2 19 17 q0 21 -23 21 Z"
          fill="white"
          stroke="#EC99D0"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="M104 162 c-2 -5 -11 -4 -11 2 c0 5 7 9 11 12 c4 -3 11 -7 11 -12 c0 -6 -9 -7 -11 -2 Z"
          fill="rgba(236,153,208,0.30)"
          stroke="#EC99D0"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/* ─── データ：5つの特徴（アイコンは画像。後で public/ に保存して差し替え） ─── */
const features = [
  { icon: "/icon-clock.png", title: "24時間365日の\n安心サポート", desc: "夜間・休日の急な体調変化も電話一本で看護師につながり、必要時は緊急訪問します。" },
  { icon: "/icon-stethoscope.png", title: "精神科で培った\n専門性", desc: "観察力・コミュニケーション力・多職種連携を活かし、小児から高齢者まで幅広く対応します。" },
  { icon: "/icon-sparkle.png", title: "「したい」を\n叶えるケア", desc: "外出・外食など“したい”を目標に、生活に合わせた最適なプログラムを専門職が提案します。" },
  { icon: "/icon-hands-heart.png", title: "ご家族の休息も\n大切に", desc: "介護を担うご家族をケアのパートナーと考え、休息と笑顔も一緒に守ります。" },
  { icon: "/icon-location.png", title: "地域密着の\n連携力", desc: "富山市上袋を拠点に、主治医やケアマネジャー・相談員と密に連携します。" },
];

/* ─── データ：利用シーン・事例 ─── */
const cases = [
  {
    tag: "難病・一般看護",
    color: "#EC99D0",
    title: "退院後の生活を安定させたい",
    desc: "医療機器の管理や体調管理を行い、住み慣れた環境で安心して過ごせるよう調整します。",
  },
  {
    tag: "精神・就労",
    color: "#B3AEDB",
    title: "就労やデイの送り出しを支えてほしい",
    desc: "精神状態や体調の管理を行い、就労やデイサービスを安心して続けられるよう支援します。",
  },
  {
    tag: "精神・在宅安定",
    color: "#84D3F4",
    title: "再入院を繰り返している",
    desc: "病気の再発や精神状態の不安定さで入退院を繰り返している方の、在宅での安定を図ります。",
  },
  {
    tag: "社会参加",
    color: "#9EDED0",
    title: "引きこもりがちで社会とのつながりが薄い",
    desc: "定期的にお伺いしてお話を伺い、社会とのつながりを保ちながら、少しずつ活動範囲を広げていきます。",
  },
  {
    tag: "ご家族・レスパイト",
    color: "#C9914A",
    title: "家族だけでの対応に限界を感じている",
    desc: "ご家族の負担を分かち合い、休息と笑顔を取り戻すお手伝いをします。お悩みをじっくり伺います。",
  },
  {
    tag: "小児・放デイ連携",
    color: "#E058A8",
    title: "お子様の成長を支えてほしい",
    desc: "ご自宅はもちろん、放課後等デイサービス等への訪問を通じて、お子様の個性を伸ばし、集団生活を支えるお手伝いをします。",
  },
];

/* ─── 写真スライド（MIRISE→お問い合わせの間で自動で流れる帯）の画像 ───
   public/ に以下の名前で保存してください（推奨6枚）。横長写真（3:2）が◎ */
const slidePhotos = [
  "/slide-1.jpg",
  "/slide-2.jpg",
  "/slide-3.jpg",
  "/slide-4.jpg",
  "/slide-5.jpg",
  "/slide-6.jpg",
];

/* 写真スライド用CSS（globals.css ではなくページ内インラインで確実に適用） */
const MARQUEE_CSS = `
@keyframes mirise-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.photo-marquee { width: 100%; overflow: hidden; -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 6%, #000 94%, transparent 100%); mask-image: linear-gradient(90deg, transparent 0, #000 6%, #000 94%, transparent 100%); }
.photo-marquee-track { display: flex; width: max-content; gap: 20px; animation: mirise-marquee 55s linear infinite; }
.photo-marquee-item { flex: none; width: clamp(240px, 26vw, 360px); aspect-ratio: 3 / 2; border-radius: 20px; overflow: hidden; background: #eef4fc; box-shadow: 0 16px 36px -18px rgba(120,140,180,0.4); }
@media (prefers-reduced-motion: reduce) { .photo-marquee-track { animation: none; } }
`;

/* ─── 見出し横の××飾り罫 ─── */
function CrossBand() {
  return (
    <span
      aria-hidden
      className="flex-1 h-[42px] opacity-60"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='14'%20height='28'%3E%3Cpath%20d='M0%203.5L7%2010.5M7%203.5L0%2010.5M7%2017.5L14%2024.5M14%2017.5L7%2024.5'%20stroke='%23B3AEDB'%20stroke-width='1.2'/%3E%3C/svg%3E\")",
        backgroundRepeat: "repeat",
        backgroundSize: "14px 28px",
      }}
    />
  );
}

/* ─── 特徴1つ分（画像アイコン＋2行見出し＋説明） ─── */
function FeatureCard({
  f,
}: {
  f: { icon: string; title: string; desc: string };
}) {
  return (
    <div className="px-6 sm:px-8 py-8 flex flex-col items-center text-center gap-4 h-full">
      <Image src={f.icon} alt="" width={56} height={56} className="w-20 h-20 object-contain" />
      <p
        className="text-xl font-bold text-[#231F20] leading-snug whitespace-pre-line"
        style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
      >
        {f.title}
      </p>
      <p className="text-sm text-[#6b6b6b] leading-relaxed">{f.desc}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="pt-[100px]" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F8F3FD 14%, #F1EBFB 60%, #D8C7F1 82%, #CBB8EA 100%)" }}>
      {/* ════════ HERO（FV） ════════ */}
      <HomeHero />

      {/* セクション群：背景は外側の通しグラデーション（ヒーロー→最下部） */}
      <div className="pb-8">

        {/* ════════ CASE〜LOCATION：上は今のまま→下へ向かって #E4DAF2 に深まるオーバーレイ ════════ */}
        <div
          className="relative"
          style={{ background: "linear-gradient(180deg, rgba(216,203,238,0) 0%, rgba(216,203,238,1) 100%)" }}
        >

        {/* ════════ CASES（利用シーン・NEWS風カード）：四角で囲う ════════ */}
        <section id="cases" className="relative overflow-hidden pt-16 sm:pt-20 pb-16 sm:pb-20 px-[5%]">
          {/* 装飾：やわらかい色面＋丸（カードの外にはみ出す） */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <span className="absolute rounded-full blur-2xl" style={{ width: 200, height: 200, top: "-60px", left: "-70px", background: "rgba(236,153,208,0.20)" }} />
            <span className="absolute rounded-full blur-2xl" style={{ width: 170, height: 170, bottom: "-55px", right: "-45px", background: "rgba(132,211,244,0.20)" }} />
            <span className="absolute rounded-full" style={{ width: 14, height: 14, top: "11%", right: "7%", background: "rgba(158,222,208,0.55)" }} />
            <span className="absolute rounded-full" style={{ width: 9, height: 9, top: "16%", right: "11%", background: "rgba(236,153,208,0.55)" }} />
            <span className="absolute rounded-full" style={{ width: 11, height: 11, bottom: "13%", left: "5%", background: "rgba(132,211,244,0.55)" }} />
            <span className="absolute rounded-full" style={{ width: 7, height: 7, bottom: "19%", left: "9%", background: "rgba(179,174,219,0.6)" }} />
          </div>
          <div className="relative z-10 max-w-[1180px] mx-auto rounded-[40px] border-2 border-[#EBBEDA] shadow-[0_24px_60px_-24px_rgba(150,120,180,0.32)] px-6 sm:px-12 py-12 sm:py-14" style={{ background: "#EECBE0" }}>
            {/* 点線のインナー枠（参考NEWS風） */}
            <div aria-hidden className="absolute inset-3 sm:inset-5 rounded-[30px] border-2 border-dashed border-[#DD9DC6] pointer-events-none" />
            {/* 見出し（大きな CASE ＋ サブ） */}
            <FadeIn direction="up" duration={2.0}>
              <div className="flex flex-wrap items-end justify-between gap-x-5 gap-y-3 mb-10 sm:mb-14">
                <div className="flex flex-wrap items-end gap-x-5 gap-y-1">
                  <p
                    className="leading-none font-bold tracking-[0.06em] text-5xl sm:text-8xl select-none"
                    style={{
                      fontFamily: "var(--font-lora)",
                      background: "linear-gradient(90deg, #EC99D0, #B3AEDB, #84D3F4)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    CASE
                  </p>
                  <p
                    className="text-base sm:text-xl font-bold text-[#9a9a9a] mb-1 sm:mb-2"
                    style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
                  >
                    このような時、ぜひご相談ください
                  </p>
                </div>

                {/* 右上：他のケースを見る（コンパクト・丸い矢印） */}
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 text-[#5a5a5a] hover:text-[#EC99D0] transition-colors mb-1 sm:mb-2 shrink-0"
                >
                  <span className="text-sm sm:text-base font-bold" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>他のケースを見る</span>
                  <span className="w-9 h-9 rounded-full border-2 border-[#DD9DC6] flex items-center justify-center group-hover:border-[#EC99D0] group-hover:bg-[#EC99D0]/10 transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  </span>
                </Link>
              </div>
            </FadeIn>

            <StaggerContainer
              className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6"
              staggerDelay={0.4}
            >
              {cases.slice(0, 3).map((c, i) => (
                <StaggerItem key={c.title}>
                  <div className="h-full rounded-3xl bg-white border border-[#efe7f7] shadow-sm overflow-hidden flex flex-col">
                    {/* 上部：色面（画像の代わり） */}
                    <div
                      className="h-24 sm:h-28 flex items-center justify-center"
                      style={{ background: `linear-gradient(135deg, ${c.color}, ${c.color}55)` }}
                    >
                      <span
                        className="text-white font-bold text-2xl sm:text-3xl tracking-[0.15em]"
                        style={{ fontFamily: "var(--font-lora)", textShadow: "1px 1px 0 rgba(0,0,0,0.12)" }}
                      >
                        CASE {i + 1}
                      </span>
                    </div>
                    {/* 本体 */}
                    <div className="px-6 py-6 flex flex-col gap-3 flex-1">
                      <span
                        className="self-start rounded-full px-3 py-1 text-xs font-bold text-white"
                        style={{ background: c.color }}
                      >
                        {c.tag}
                      </span>
                      <p
                        className="text-lg sm:text-xl font-bold text-[#231F20] leading-snug"
                        style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
                      >
                        {c.title}
                      </p>
                      <p className="text-base text-[#6b6b6b] leading-relaxed">{c.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ════════ ABOUT＋5つの特徴：通しグラデの上に白パネル ════════ */}
        <div className="relative">
          {/* 共有の白パネル：左フルブリード／右が少し切れる（角丸） */}
          <div aria-hidden className="absolute inset-y-0 left-0 right-[5%] sm:right-[7%] bg-white rounded-r-[44px]" />

          {/* ── ABOUT ── */}
          <section id="about" className="relative overflow-hidden px-[5%] pt-10 sm:pt-16 pb-12 sm:pb-16">
            {/* 虹の道＋家族（背面・左端まではみ出す・Z軸下げ。文章は前面） */}
            <div aria-hidden className="absolute z-0 right-[-10%] top-[44%] -translate-y-1/2 w-[min(88vw,1100px)] pointer-events-none">
              <Image src="/rainbow-road.png" alt="" width={1536} height={1024} className="w-full h-auto" />
            </div>
            <div className="relative z-10 max-w-[1100px] mx-auto">
              <div className="max-w-[640px]">
                <FadeIn direction="up" duration={2.0}>
                  <div className="flex flex-wrap items-end gap-x-5 gap-y-1 mb-3">
                    <p
                      className="leading-none font-bold tracking-[0.06em] text-5xl sm:text-8xl select-none"
                      style={{
                        fontFamily: "var(--font-lora)",
                        background: "linear-gradient(90deg, #EC99D0, #B3AEDB, #84D3F4)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      ABOUT
                    </p>
                    <p
                      className="text-lg sm:text-2xl font-bold text-[#9a9a9a] mb-1 sm:mb-2"
                      style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
                    >
                      ミライズとは
                    </p>
                  </div>
                  <h2
                    className="text-[1.7rem] sm:text-[3.1rem] font-bold text-[#231F20] leading-[1.7] mb-8"
                    style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
                  >
                    その<span style={{ color: "#9B93D6" }}>不安</span>を、
                    <br className="hidden sm:block" />
                    私たちと一緒に<span style={{ color: "#EC99D0" }}>安心</span>へ。
                  </h2>
                </FadeIn>

                <FadeIn direction="up" delay={0.15} duration={2.0}>
                  <div className="space-y-5 text-base sm:text-lg text-[#4a4a4a] leading-loose">
                    <p>
                      就労での悩みや、普段の生活で不安が多くなかなか眠れないなど、精神的に不安定になることがあるかと思います。ご本人も、そして支えるご家族も、時には疲れを感じてしまうことがあるかもしれません。
                    </p>
                    <p>
                      私たち「ミライズ」は、そんな不安な夜や、迷いのある日々に寄り添うために生まれました。富山の地で、誰もが「自分らしく、満足のいく暮らし」を続けられるよう、私たちがあなたの街の
                      <span className="font-bold text-[#B3AEDB]">「家族のような専門家」</span>
                      になります。
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* ── 5つの特徴 ── */}
          <section id="strength" className="relative pt-4 pb-20 sm:pb-24 mr-[5%] sm:mr-[7%]">
            {/* ── 見出し：両脇に××飾り（画面いっぱい）＋虹色タイトル＋サブ ── */}
            <FadeIn direction="up" duration={2.0}>
              <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
                <div className="flex items-center gap-4 sm:gap-8 w-full">
                  <CrossBand />
                  <h2
                    className="text-4xl sm:text-5xl font-bold leading-none whitespace-nowrap px-1"
                    style={{
                      fontFamily: "var(--font-zen-maru-gothic)",
                      background: "linear-gradient(90deg, #EC99D0, #B3AEDB, #84D3F4)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    5つの特徴
                  </h2>
                  <CrossBand />
                </div>
                <p className="text-base font-bold text-[#8a8a96] mt-4" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>
                  ミライズだからできること
                </p>
              </div>
            </FadeIn>

            <div className="relative max-w-[1040px] mx-auto px-[5%]">
            {/* ── 上段3つ ── */}
            <div className="grid grid-cols-1 sm:grid-cols-3">
              {features.slice(0, 3).map((f, i) => (
                <FadeIn
                  key={f.title}
                  direction="up"
                  delay={i * 0.25}
                  duration={1.8}
                  className={i < 2 ? "sm:border-r sm:border-dotted sm:border-[#ada2cc]" : ""}
                >
                  <FeatureCard f={f} />
                </FadeIn>
              ))}
            </div>

            {/* 横の点線区切り */}
            <div className="hidden sm:block border-t border-dotted border-[#ada2cc] my-4" />

            {/* ── 下段2つ（中央寄せ） ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:max-w-[640px] mx-auto">
              {features.slice(3, 5).map((f, i) => (
                <FadeIn
                  key={f.title}
                  direction="up"
                  delay={i * 0.25}
                  duration={1.8}
                  className={i < 1 ? "sm:border-r sm:border-dotted sm:border-[#ada2cc]" : ""}
                >
                  <FeatureCard f={f} />
                </FadeIn>
              ))}
            </div>
            </div>
          </section>
        </div>

        {/* ════════ LOCATION（事業所情報） ════════ */}
        <section
          id="location"
          className="relative overflow-hidden py-20 sm:py-24 px-[5%]"
        >
          {/* ── 背景装飾：虹のかけら・星・雲・光の粒 ── */}
          <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
            <span className="absolute rounded-full blur-2xl" style={{ width: 220, height: 220, top: "-4%", right: "6%", background: "rgba(255,216,241,0.45)" }} />
            <span className="absolute rounded-full blur-2xl" style={{ width: 180, height: 180, bottom: "-6%", left: "2%", background: "rgba(205,232,255,0.40)" }} />
            {/* 星 */}
            <svg className="absolute" style={{ top: "20%", right: "10%", color: "#DCCEF8" }} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2 l1.3 8.7 L22 12 l-8.7 1.3 L12 22 l-1.3-8.7 L2 12 l8.7-1.3 Z" />
            </svg>
            <svg className="absolute" style={{ bottom: "14%", right: "18%", color: "#FFD8F1" }} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2 l1.3 8.7 L22 12 l-8.7 1.3 L12 22 l-1.3-8.7 L2 12 l8.7-1.3 Z" />
            </svg>
            {/* 光の粒 */}
            <span className="absolute rounded-full" style={{ width: 7, height: 7, top: "40%", left: "9%", background: "rgba(223,248,238,1)" }} />
            <span className="absolute rounded-full" style={{ width: 6, height: 6, bottom: "24%", left: "14%", background: "rgba(255,216,241,0.9)" }} />
          </div>

          <div className="relative max-w-[1130px] mx-auto">
            {/* ── 見出し：大きな LOCATION ＋ 事業所紹介 ── */}
            <FadeIn direction="up" duration={2.0}>
              <div className="flex flex-wrap items-end gap-x-5 gap-y-1 mb-10 sm:mb-14">
                <p
                  className="leading-none font-bold tracking-[0.06em] text-5xl sm:text-8xl select-none"
                  style={{
                    fontFamily: "var(--font-lora)",
                    background: "linear-gradient(90deg, #EC99D0, #B3AEDB, #84D3F4)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  LOCATION
                </p>
                <p className="text-base sm:text-xl font-bold text-[#9a9a9a] mb-1 sm:mb-2" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>
                  事業所紹介
                </p>
              </div>
            </FadeIn>

            {/* ── 重ねカード ── */}
            <FadeIn direction="up" delay={0.15} duration={2.0}>
              <div className="relative">
                {/* 背面に少しずらしたカード（重なり演出・1枚／斜め下に） */}
                <div aria-hidden className="absolute inset-0 translate-x-0 translate-y-10 rotate-[3.2deg] origin-bottom-right rounded-[10px] bg-[#C6ABE8]" />

                {/* メインカード（点線インナー枠・控えめな角丸／影は斜め） */}
                <div className="relative rounded-[10px] bg-white border-2 border-[#EBD3E8] p-4 sm:p-6">
                  <div className="rounded-[14px] border-2 border-dashed border-[#C9A9DF] px-6 py-8 sm:px-10 sm:py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-8 lg:gap-12 items-stretch">

                      {/* 左：見出し → 対象エリア → 本文 → 区切り線 → 住所 */}
                      <div className="flex flex-col py-4 justify-between">
                          {/* 見出し（左ブロック内・以下5要素を等間隔に） */}
                          <h3
                            className="text-3xl sm:text-[2.15rem] font-bold text-[#1d1a1b] tracking-[0.01em] leading-tight whitespace-nowrap"
                            style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
                          >
                            訪問看護ステーション ミライズ
                          </h3>
                          {/* 対象エリア（ラベル大きめ・市名は小さめで1行に） */}
                          <div className="rounded-[10px] px-5 py-4" style={{ background: "#F0E7FB" }}>
                            <p className="inline-flex items-center gap-2 text-lg font-bold text-[#C56BB0] mb-2 pb-1 border-b-2 border-[#E7B7DA]" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>
                              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                                <circle cx="12" cy="10" r="3" />
                              </svg>
                              対象エリア
                            </p>
                            <p className="text-sm sm:text-base font-bold text-[#3a3a3a] leading-relaxed">
                              {["富山市", "射水市", "砺波市", "滑川市", "魚津市", "黒部市"].flatMap((c, i) =>
                                i > 0
                                  ? ["・", <span key={c} className="whitespace-nowrap">{c}</span>]
                                  : [<span key={c} className="whitespace-nowrap">{c}</span>]
                              )}
                            </p>
                          </div>

                          <p className="text-base text-[#4a4a4a] leading-relaxed">
                            発達・精神・知的障害のある方とご家族に寄り添い、
                            <br className="hidden sm:block" />
                            ご自宅で専門的なケアをお届けします。
                          </p>

                          {/* 区切り線（両端に丸） */}
                          <div aria-hidden className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#C9A9DF]" />
                            <span className="flex-1 h-px bg-[#dcc9ef]" />
                            <span className="w-2 h-2 rounded-full bg-[#C9A9DF]" />
                          </div>

                          {/* 住所 */}
                          <div className="space-y-1 text-sm text-[#5a5a5a] leading-relaxed">
                            <p>〒939-8071</p>
                            <p className="text-base sm:text-lg font-bold text-[#231F20] leading-relaxed" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>
                              富山県富山市上袋650<br />
                              サンコレクトG.SECONDビル2階204号室
                            </p>
                          </div>
                      </div>

                      {/* 右：マップ → ロゴ＋Googleマップ（右下／下端を左と揃える） */}
                      <div className="flex flex-col">
                        {/* マップフレーム（正方形に近い・白枠は細め） */}
                        <div className="bg-white p-1.5 sm:p-4 rounded-[10px] shadow-[0_16px_34px_-10px_rgba(120,100,150,0.45)] ring-1 ring-black/5">
                          <div className="aspect-[4/3] rounded-md overflow-hidden">
                            <iframe
                              title="訪問看護ステーション ミライズ 所在地（富山市上袋650）"
                              src="https://maps.google.com/maps?q=%E5%AF%8C%E5%B1%B1%E7%9C%8C%E5%AF%8C%E5%B1%B1%E5%B8%82%E4%B8%8A%E8%A2%8B650&z=16&output=embed"
                              className="w-full h-full border-0"
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                            />
                          </div>
                        </div>

                        {/* ロゴ＋Googleマップで開く（右下） */}
                        <div className="flex items-center justify-end gap-3 mt-auto pt-6">
                          <Image
                            src="/logo.png"
                            alt="訪問看護ステーション ミライズ"
                            width={240}
                            height={120}
                            className="h-12 sm:h-14 w-auto object-contain"
                          />
                          <a
                            href="https://www.google.com/maps/search/?api=1&query=%E5%AF%8C%E5%B1%B1%E7%9C%8C%E5%AF%8C%E5%B1%B1%E5%B8%82%E4%B8%8A%E8%A2%8B650"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2.5 text-[#4a4a4a] hover:text-[#84D3F4] transition-colors"
                          >
                            <span className="text-base font-bold" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>Googleマップ</span>
                            <span className="w-10 h-10 rounded-full border-2 border-[#C9A9DF] flex items-center justify-center group-hover:border-[#84D3F4] group-hover:bg-[#84D3F4]/10 transition-colors">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 3h6v6" />
                                <path d="M10 14 21 3" />
                                <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
        {/* ════════ CASE〜LOCATION オーバーレイ 終わり ════════ */}
        </div>

        {/* ════════ MIRISE＋採用：1枚の連続グラデーション背景（境目で切れないよう共通化） ════════ */}
        <div
          className="relative overflow-hidden"
          style={{
            backgroundColor: "#D9EEFF",
            backgroundImage:
              "radial-gradient(circle at 13% 4%, rgba(255,255,255,0.96), rgba(255,255,255,0) 42%), radial-gradient(ellipse 55% 38% at 88% 92%, rgba(160,210,255,0.10), rgba(150,205,250,0) 70%), linear-gradient(165deg, #E3F2FF 0%, #D2EBFF 15%, #B8E1FF 40%, #B8E1FF 100%)",
            backgroundSize: "100% 100%",
          }}
        >
          {/* ── 「未来へ向かう空」の空気感レイヤー：やわらかい光・薄い雲・繊細な光の粒（MIRISE＋採用 共通） ── */}
          <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* 奥行き：非常に薄い光のレイヤー（複数） */}
            <span className="absolute rounded-full blur-3xl" style={{ width: "55%", height: "48%", top: "-10%", left: "-12%", background: "radial-gradient(circle, rgba(255,255,255,0.85), transparent 70%)" }} />
            <span className="absolute rounded-full blur-3xl" style={{ width: "52%", height: "52%", bottom: "-14%", right: "-10%", background: "radial-gradient(circle, rgba(190,221,255,0.4), transparent 70%)" }} />
            <span className="absolute rounded-full blur-3xl" style={{ width: "42%", height: "38%", top: "34%", left: "30%", background: "radial-gradient(circle, rgba(231,245,255,0.45), transparent 72%)" }} />
            {/* 右上：虹のまわりのほんのり発光 */}
            <span className="absolute rounded-full blur-2xl" style={{ width: "32%", height: "24%", top: "3%", right: "8%", background: "radial-gradient(circle, rgba(255,255,255,0.6), transparent 70%)" }} />
            {/* 雲：白くやわらかく少量（ヒーローより控えめ） */}
            <span className="absolute rounded-full blur-2xl" style={{ width: 240, height: 88, top: "9%", left: "12%", background: "rgba(255,255,255,0.7)" }} />
            <span className="absolute rounded-full blur-2xl" style={{ width: 170, height: 64, top: "26%", right: "26%", background: "rgba(255,255,255,0.55)" }} />
            <span className="absolute rounded-full blur-2xl" style={{ width: 210, height: 80, bottom: "14%", left: "26%", background: "rgba(255,255,255,0.5)" }} />
            {/* 繊細な光の粒（朝露のような・4〜12px・低透明度） */}
            <span className="absolute rounded-full" style={{ width: 10, height: 10, top: "13%", left: "44%", background: "rgba(255,255,255,0.85)", boxShadow: "0 0 7px rgba(255,255,255,0.7)" }} />
            <span className="absolute rounded-full" style={{ width: 6, height: 6, top: "20%", left: "58%", background: "rgba(255,255,255,0.7)" }} />
            <span className="absolute rounded-full" style={{ width: 7, height: 7, top: "9%", right: "20%", background: "rgba(255,255,255,0.75)", boxShadow: "0 0 6px rgba(255,255,255,0.6)" }} />
            <span className="absolute rounded-full" style={{ width: 5, height: 5, top: "40%", left: "52%", background: "rgba(255,255,255,0.6)" }} />
            <span className="absolute rounded-full" style={{ width: 8, height: 8, bottom: "26%", right: "16%", background: "rgba(255,255,255,0.7)" }} />
            <span className="absolute rounded-full" style={{ width: 4, height: 4, top: "30%", right: "12%", background: "rgba(255,255,255,0.6)" }} />
            <span className="absolute rounded-full" style={{ width: 6, height: 6, bottom: "20%", left: "44%", background: "rgba(255,255,255,0.55)" }} />
          </div>

        {/* ════════ VISION（ミライズの想い／左：文章・右：イラスト） ════════ */}
        <section id="vision" className="relative overflow-hidden py-20 sm:py-28 px-[5%]">
          {/* 背景画像（今の空グラデ＋空気感レイヤーの上・文章やイラストの後ろ）※ public/mirise-bg.png を用意 */}
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <Image
              src="/mirise-bg.png"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-80"
            />
          </div>
          {/* 背景は親の「未来へ向かう空」レイヤーを共有（このセクション固有の装飾は無し） */}

          <div className="relative max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[2.2fr_1fr] gap-10 lg:gap-16 items-start">
            {/* 左：頼れる訪問看護のメッセージ（最後の一歩を後押し）／前面 */}
            <FadeIn direction="up" duration={2.0} className="relative z-10">
              {/* 上部ラベル：MIRISE ｜ 訪問看護の、その先へ。 */}
              <div className="flex flex-wrap items-end gap-x-5 gap-y-1 mb-8">
                <p
                  className="leading-none font-bold tracking-[0.06em] text-5xl sm:text-8xl select-none"
                  style={{
                    fontFamily: "var(--font-lora)",
                    background: "linear-gradient(90deg, #EC99D0, #B3AEDB, #84D3F4)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  MIRISE
                </p>
                <p className="text-base sm:text-xl font-bold text-[#9a9a9a] mb-1 sm:mb-2" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>
                  訪問看護の、その先へ。
                </p>
              </div>

              {/* メイン見出し（このセクションの主役） */}
              <h2
                className="text-[2rem] sm:text-[3.25rem] font-bold text-[#231F20] leading-[1.3] tracking-[0.02em] mb-12"
                style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
              >
                「こんなに頼ってよかった」
                <br />
                を知ってほしい。
              </h2>

              {/* 導入文 */}
              <div className="max-w-[720px] text-base sm:text-lg text-[#5a5a5a] leading-[1.9] mb-12">
                <p>
                  訪問看護は、看護を受けるだけのサービスではありません。
                  <br />
                  ご本人やご家族の悩み、学校や仕事、将来のこと。
                  <br />
                  ひとりで抱えていた不安を、私たちは一緒にほどいていきます。
                </p>
              </div>

              {/* メッセージ①②③：アイコン・色分け・区切り線なし。余白で呼吸感を作る */}
              <div className="space-y-10 max-w-[720px]">
                <div>
                  <p className="text-[1.4rem] sm:text-[1.9rem] font-bold text-[#B99AE8] leading-[1.4] mb-3" style={{ fontFamily: "var(--font-zen-maru-gothic)", textShadow: "0 0 3px rgba(255,255,255,1), 0 0 7px rgba(255,255,255,1), 0 0 14px rgba(255,255,255,0.95), 0 2px 20px rgba(255,255,255,0.9)" }}>
                    「こんなこと聞いていいのかな」も大丈夫です
                  </p>
                  <p className="text-base sm:text-lg text-[#5a5a5a] leading-[1.9]">
                    生活のこと、学校のこと、人間関係のこと。
                    <br />
                    些細なことでも、安心してご相談ください。
                  </p>
                </div>
                <div>
                  <p className="text-[1.4rem] sm:text-[1.9rem] font-bold text-[#F3A7C8] leading-[1.4] mb-3" style={{ fontFamily: "var(--font-zen-maru-gothic)", textShadow: "0 0 3px rgba(255,255,255,1), 0 0 7px rgba(255,255,255,1), 0 0 14px rgba(255,255,255,0.95), 0 2px 20px rgba(255,255,255,0.9)" }}>
                    ご家族のお悩みも、聞かせてください
                  </p>
                  <p className="text-base sm:text-lg text-[#5a5a5a] leading-[1.9]">
                    ご家族自身の不安や負担にも、
                    <br />
                    私たちは寄り添います。
                  </p>
                </div>
                <div>
                  <p className="text-[1.4rem] sm:text-[1.9rem] font-bold text-[#9FD8C4] leading-[1.4] mb-3" style={{ fontFamily: "var(--font-zen-maru-gothic)", textShadow: "0 0 3px rgba(255,255,255,1), 0 0 7px rgba(255,255,255,1), 0 0 14px rgba(255,255,255,0.95), 0 2px 20px rgba(255,255,255,0.9)" }}>
                    地域の支援につながる入口になります
                  </p>
                  <p className="text-base sm:text-lg text-[#5a5a5a] leading-[1.9]">
                    医療や福祉、学校や相談支援など、
                    <br />
                    必要な支援とつながり、安心して暮らせる環境を整えます。
                  </p>
                </div>
              </div>

              {/* 締めのメッセージ（最も感情が伝わる位置・控えめな虹色グラデ） */}
              <p
                className="text-[1.6rem] sm:text-[2.75rem] font-bold leading-[1.35] tracking-[0.02em] mt-14"
                style={{
                  fontFamily: "var(--font-zen-maru-gothic)",
                  background: "linear-gradient(90deg, #EE9ACB 0%, #F3A78F 20%, #F2D573 40%, #A6DEA6 58%, #84D3F4 78%, #A9A6DD 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  filter: "drop-shadow(0 0 2px rgba(255,255,255,1)) drop-shadow(0 0 6px rgba(255,255,255,1)) drop-shadow(0 0 12px rgba(255,255,255,0.95)) drop-shadow(0 2px 18px rgba(255,255,255,0.85))",
                }}
              >
                その一歩を、
                <br />
                私たちがそっと支えます。
              </p>
            </FadeIn>

            {/* 右カラムは削除（背景の mirise-bg がそのまま見える） */}
          </div>
        </section>

        {/* ════════ 写真スライド（自動で横に流れる帯）：MIRISE→お問い合わせの間 ════════ */}
        <div aria-label="ミライズの活動の様子" className="relative py-6 sm:py-10">
          <style dangerouslySetInnerHTML={{ __html: MARQUEE_CSS }} />
          <div className="photo-marquee">
            <div className="photo-marquee-track">
              {[...slidePhotos, ...slidePhotos].map((src, i) => (
                <div key={i} className="photo-marquee-item">
                  <Image src={src} alt="" width={420} height={280} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ════════ CONTACT（お問い合わせ）※MIRISEの直後・空ラッパー内 ════════ */}
        <section id="contact-cta" className="relative overflow-hidden py-20 sm:py-28 px-[5%]">
          {/* 装飾 */}
          <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
            <span className="absolute rounded-full blur-2xl" style={{ width: 200, height: 200, top: "-4%", right: "4%", background: "rgba(220,206,248,0.4)" }} />
            <svg className="absolute" style={{ bottom: "12%", left: "6%", color: "#FFD8F1" }} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2 l1.3 8.7 L22 12 l-8.7 1.3 L12 22 l-1.3-8.7 L2 12 l8.7-1.3 Z" />
            </svg>
          </div>

          <div className="relative max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* 左：見出し */}
            <FadeIn direction="up" duration={2.0}>
              <div className="flex flex-wrap items-end gap-x-5 gap-y-1 mb-5">
                <p className="leading-none font-bold tracking-[0.04em] text-5xl sm:text-8xl select-none" style={{ fontFamily: "var(--font-lora)", background: "linear-gradient(90deg, #EC99D0, #B3AEDB, #84D3F4)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                  CONTACT
                </p>
                <p className="text-base sm:text-xl font-bold text-[#9a9a9a] mb-1 sm:mb-2" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>お問い合わせ</p>
              </div>
              <h2 className="text-[1.8rem] sm:text-[2.9rem] font-bold text-[#231F20] leading-[1.5] mb-5" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>
                利用に関する
                <br />
                ご相談・お問い合わせ
              </h2>
              <span aria-hidden className="block w-14 h-[5px] rounded-full mb-7" style={{ background: "linear-gradient(90deg, #EC99D0, #84D3F4)" }} />
              <p className="text-base sm:text-lg text-[#5a5a5a] leading-loose">
                発達や不登校、こころの健康のことでお悩みの方は、まずはLINEまたはお電話でお気軽にご相談ください。ご利用者様の紹介や連携をご希望の医療機関・関連機関の方も、どうぞお問い合わせください。
              </p>
            </FadeIn>

            {/* 右：2枚のお問い合わせカード（大きめ・アイコン左・矢印右） */}
            <FadeIn direction="up" delay={0.15} duration={2.0}>
              <div className="space-y-5">
                {/* LINE */}
                <a
                  href={LINE_URL}
                  target={LINE_URL === "#" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 sm:gap-6 rounded-[26px] bg-white shadow-[0_20px_50px_rgba(180,160,230,0.16)] px-7 sm:px-8 py-7 sm:py-8 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <span className="w-16 h-16 rounded-2xl bg-[#06C755] flex items-center justify-center text-white shrink-0" style={{ boxShadow: "0 10px 24px rgba(6,199,85,0.32)" }}>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3C6.5 3 2 6.6 2 11c0 2.5 1.4 4.7 3.7 6.2-.2.6-.6 2.1-.8 2.6-.1.3.1.4.3.3.3-.1 2.6-1.7 3.6-2.4.9.2 1.9.3 3.2.3 5.5 0 10-3.6 10-8s-4.5-8-10-8Z" />
                    </svg>
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xl sm:text-2xl font-bold text-[#231F20]" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>LINEで相談する</p>
                    <p className="text-sm text-[#9a9a9a] mt-1">お気軽にご相談ください</p>
                  </div>
                  <span className="w-10 h-10 rounded-full border border-[#C9A9DF] flex items-center justify-center text-[#B3AEDB] text-lg shrink-0 group-hover:bg-[#B3AEDB]/10 transition-colors">›</span>
                </a>

                {/* 電話 */}
                <a
                  href="tel:070-3178-6258"
                  className="group flex items-center gap-5 sm:gap-6 rounded-[26px] bg-white shadow-[0_20px_50px_rgba(180,160,230,0.16)] px-7 sm:px-8 py-7 sm:py-8 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <span className="w-16 h-16 rounded-2xl bg-[#EFEAFB] flex items-center justify-center text-[#8a7fb5] shrink-0" style={{ boxShadow: "0 10px 24px rgba(150,130,210,0.25)" }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1l-2.2 2.2Z" />
                    </svg>
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xl sm:text-2xl font-bold text-[#231F20]" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>お電話で相談する</p>
                    <p className="text-lg sm:text-xl font-bold text-[#8a7fb5] mt-1" style={{ fontFamily: "var(--font-lora)" }}>070-3178-6258</p>
                    <p className="text-xs text-[#9a9a9a] mt-1">受付時間：24時間受付</p>
                  </div>
                  <span className="w-10 h-10 rounded-full border border-[#C9A9DF] flex items-center justify-center text-[#B3AEDB] text-lg shrink-0 group-hover:bg-[#B3AEDB]/10 transition-colors">›</span>
                </a>

                <p className="text-xs text-[#9a9a9a] pt-1">※ いただいたご相談内容は、個人情報に十分配慮して対応いたします。</p>
              </div>
            </FadeIn>
          </div>
        </section>
        {/* ════════ MIRISE＋お問い合わせ 空の連続背景 終わり ════════ */}
        </div>

        {/* ════════ RECRUIT（採用情報）※お問い合わせの後 ════════ */}
        <section id="recruit" className="relative overflow-hidden py-20 sm:py-28 px-[5%]">
          {/* 装飾：ラベンダー・ぼかし円・キラキラ */}
          <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
            <span className="absolute rounded-full blur-3xl" style={{ width: 230, height: 230, top: "18%", right: "-40px", background: "rgba(158,222,208,0.16)" }} />
            <span className="absolute rounded-full blur-2xl" style={{ width: 190, height: 190, bottom: "4%", left: "6%", background: "rgba(179,174,219,0.16)" }} />
            {/* キラキラ */}
            <svg className="absolute" style={{ top: "10%", left: "30%", color: "#DCCEF8" }} width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 l1.3 8.7 L22 12 l-8.7 1.3 L12 22 l-1.3-8.7 L2 12 l8.7-1.3 Z" /></svg>
            <svg className="absolute" style={{ top: "15%", right: "9%", color: "#FFD8F1" }} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 l1.3 8.7 L22 12 l-8.7 1.3 L12 22 l-1.3-8.7 L2 12 l8.7-1.3 Z" /></svg>
            <svg className="absolute" style={{ bottom: "18%", right: "22%", color: "#CDE8FF" }} width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 l1.3 8.7 L22 12 l-8.7 1.3 L12 22 l-1.3-8.7 L2 12 l8.7-1.3 Z" /></svg>
            <svg className="absolute" style={{ bottom: "26%", left: "16%", color: "#DFF8EE" }} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 l1.3 8.7 L22 12 l-8.7 1.3 L12 22 l-1.3-8.7 L2 12 l8.7-1.3 Z" /></svg>
          </div>

          {/* カード上のタグライン＋波線 */}
          <FadeIn direction="up" duration={1.8}>
            <div className="text-center mb-9">
              <p className="text-lg sm:text-2xl font-bold text-[#8a7fb5]" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>
                今度は、あなたが誰かを支える番です。
              </p>
              <svg aria-hidden className="mx-auto mt-2" width="230" height="10" viewBox="0 0 230 10" fill="none">
                <path d="M3 6 Q 32 1, 60 6 T 117 6 T 174 6 T 227 6" stroke="#C9A9DF" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
          </FadeIn>

          {/* カード（中央寄せ＋右にスタッフイラスト） */}
          <FadeIn direction="up" delay={0.1} duration={2.0}>
            <div className="relative overflow-hidden max-w-[1040px] mx-auto rounded-[32px] bg-white border border-[rgba(180,190,220,0.5)] shadow-[0_22px_60px_rgba(130,110,180,0.1)] px-6 py-12 sm:px-14 sm:py-16">
              {/* 上部アクセント：虹色グラデーションライン */}
              <span aria-hidden className="absolute top-0 left-0 right-0" style={{ height: 7, background: "linear-gradient(90deg, #F8BBD0, #DCC6F6, #BDEBFF, #C8EFD9)" }} />

              {/* 右：スタッフイラスト＋虹の波（PCのみ・コンテンツの右に重ねる） */}
              <div aria-hidden className="hidden lg:block absolute top-[15%] right-[1.5%] w-[28%] max-w-[280px] pointer-events-none">
                <svg className="absolute -right-[8%] top-[28%] w-[135%]" viewBox="0 0 320 120" fill="none">
                  <defs>
                    <linearGradient id="recruit-rainbow" x1="0" y1="0" x2="320" y2="0">
                      <stop offset="0" stopColor="#F8BBD0" /><stop offset="0.33" stopColor="#F2D573" /><stop offset="0.66" stopColor="#A6DEA6" /><stop offset="1" stopColor="#84D3F4" />
                    </linearGradient>
                  </defs>
                  <path d="M0 82 C 90 28, 220 28, 330 66" stroke="url(#recruit-rainbow)" strokeWidth="13" strokeLinecap="round" opacity="0.45" />
                </svg>
                <Image src="/recruit-staff.png" alt="" width={640} height={520} className="relative w-full h-auto" />
              </div>

              {/* 中央寄せコンテンツ */}
              <div className="relative text-center max-w-[600px] mx-auto">
                {/* ロゴマーク＋RECRUIT＋採用情報 */}
                <div className="flex items-center justify-center gap-3 mb-6">
                  <p className="leading-none font-bold tracking-[0.04em] text-4xl sm:text-6xl select-none" style={{ fontFamily: "var(--font-lora)", background: "linear-gradient(90deg, #EC99D0, #B3AEDB, #84D3F4)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                    RECRUIT
                  </p>
                  <p className="hidden sm:block self-end mb-1 text-sm sm:text-base font-bold text-[#9a9a9a]" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>採用情報</p>
                </div>

                <h2 className="text-[1.7rem] sm:text-[2.7rem] font-bold text-[#231F20] leading-[1.5] mb-6" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>
                  あなたの経験で、
                  <br />
                  ともに未来を描きませんか？
                </h2>

                <p className="text-base sm:text-lg text-[#5a5a5a] leading-loose mb-8 max-w-[560px] mx-auto">
                  ミライズは、利用者やご家族に寄り添い、地域で暮らす方の安心を支える訪問看護ステーションです。あなたの経験や想いを、私たちと一緒に活かしてみませんか。
                </p>

                {/* 募集職種 */}
                <div className="flex flex-wrap justify-center gap-2.5 mb-9">
                  {["看護師", "准看護師", "理学療法士", "作業療法士", "言語聴覚士"].map((j) => (
                    <span key={j} className="rounded-lg bg-[#F4EEFB] text-[#6a5e90] text-sm font-bold px-4 py-2" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>
                      {j}
                    </span>
                  ))}
                </div>

                <Link
                  href="/recruit"
                  className="inline-flex items-center justify-center gap-3 rounded-full px-12 py-4 text-base sm:text-lg font-bold text-white shadow-[0_12px_30px_rgba(150,130,210,0.3)] transition-transform duration-300 hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(90deg, #F3A7C8, #B3AEDB, #84D3F4)", fontFamily: "var(--font-zen-maru-gothic)" }}
                >
                  採用情報を見る
                  <span className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center text-sm">›</span>
                </Link>
              </div>
            </div>
          </FadeIn>
        </section>

      </div>
    </div>
  );
}
