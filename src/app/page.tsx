import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { WhyMiraise } from "@/components/sections/WhyMiraise";

export const metadata: Metadata = {
  title: "訪問看護ステーションミライズ | 富山の精神・療育専門訪問看護",
  description:
    "富山で精神・知的障害に特化した訪問看護ステーション。乳幼児から成人まで、自宅で受けられる専門的なケアをお届けします。",
};

function SectionLabel({ children, color = "#EC99D0" }: { children: React.ReactNode; color?: string }) {
  return (
    <p className="text-sm font-bold tracking-widest mb-3" style={{ color }}>
      {children}
    </p>
  );
}

function SectionTitle({
  light = false,
  children,
}: {
  light?: boolean;
  children: React.ReactNode;
}) {
  return (
    <h2
      className="text-4xl font-bold mb-5"
      style={{ color: light ? "#fff" : "#231F20" }}
    >
      {children}
    </h2>
  );
}

export default function HomePage() {
  return (
    <div>

      {/* ══════════════════════════════════════════
          HERO
          PC  : タイトル中央 + 全幅3円
          SP  : タイトル中央 + 縦3帯
      ══════════════════════════════════════════ */}
      <section className="flex flex-col items-center text-center">

        {/* ① 中央ブロック：絶対配置でタイトルを50%・富山を25%に固定 */}
        <div className="relative w-full h-[calc(100vh-100px)]">

          {/* 富山バッジ — 上端と中央の中間（top: 25%）*/}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <FadeIn delay={0} onScroll={false}>
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
            </FadeIn>
          </div>

          {/* タイトル + サブタイトル — 画面中央（top: 50%）*/}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-[5%] flex flex-col items-center gap-8">
            <FadeIn delay={0.12} onScroll={false}>
              <h1
                className="flex flex-wrap sm:flex-nowrap items-baseline justify-center gap-x-2"
                style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
              >
                <span className="text-3xl sm:text-5xl font-medium text-[#231F20]">
                  訪問看護ステーション
                </span>
                <span className="text-5xl sm:text-6xl font-medium text-[#231F20]">
                  ミライズ
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.22} onScroll={false}>
              <p
                className="text-sm text-[#7a7a7a] tracking-widest font-medium"
                style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
              >
                精神・療育に特化した訪問看護ステーション
              </p>
            </FadeIn>
          </div>

        </div>

        {/* ② 説明文 */}
        <div className="px-[5%] w-full max-w-2xl mx-auto pb-10 flex flex-col items-center gap-2">
          <FadeIn delay={0.35} onScroll={false}>
            <p
              className="text-base font-bold tracking-[0.25em] text-[#B3AEDB]"
              style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
            >
              乳幼児・小児・成人まで
            </p>
          </FadeIn>
          <FadeIn delay={0.42} onScroll={false}>
            <p
              className="text-sm text-[#7a7a7a] leading-loose tracking-wide"
              style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
            >
              精神・知的障害のある方とそのご家族に寄り添い、
              <br />
              自宅で受けられる専門的なケアを富山でお届けします。
            </p>
          </FadeIn>
        </div>

        {/* ③ CTAボタン */}
        <FadeIn delay={0.45} onScroll={false} className="w-full">

          {/* PC：3つの丸が均等配置・最大サイズ制限あり
               w-[min(28vw,240px)] → 28vw か 240px の小さい方
               justify-evenly で全幅に均等に散らす            */}
          <div className="hidden sm:flex w-full justify-evenly items-center py-4">
            <a
              href="#worries"
              className="w-[min(30vw,280px)] h-[min(30vw,280px)] rounded-full flex items-center justify-center text-center font-bold border-2 border-[#EC99D0] text-[#EC99D0] bg-white/80 hover:bg-[#EC99D0] hover:text-white transition-all text-sm lg:text-lg"
            >
              <span className="px-4 leading-relaxed">こんなお悩み<br />ありませんか？</span>
            </a>
            <a
              href="#what-we-can-do"
              className="w-[min(30vw,280px)] h-[min(30vw,280px)] rounded-full flex items-center justify-center text-center font-bold border-2 border-[#B3AEDB] text-[#B3AEDB] bg-white/80 hover:bg-[#B3AEDB] hover:text-white transition-all text-sm lg:text-lg"
            >
              <span className="px-4 leading-relaxed">訪問看護でできること</span>
            </a>
            <a
              href="#about"
              className="w-[min(30vw,280px)] h-[min(30vw,280px)] rounded-full flex items-center justify-center text-center font-bold border-2 border-[#84D3F4] text-[#84D3F4] bg-white/80 hover:bg-[#84D3F4] hover:text-white transition-all text-sm lg:text-lg"
            >
              <span className="px-4 leading-relaxed">ミライズについて</span>
            </a>
          </div>

          {/* モバイル：3つの帯を縦に重ねる */}
          <div className="flex sm:hidden flex-col w-full">
            <a
              href="#worries"
              className="w-full py-5 flex items-center justify-center text-sm font-bold bg-white/70 text-[#EC99D0] hover:bg-[#EC99D0] hover:text-white transition-all border-t border-[#EC99D0]/30"
            >
              こんなお悩みありませんか？
            </a>
            <a
              href="#what-we-can-do"
              className="w-full py-5 flex items-center justify-center text-sm font-bold bg-white/70 text-[#B3AEDB] hover:bg-[#B3AEDB] hover:text-white transition-all border-t border-[#B3AEDB]/30"
            >
              訪問看護でできること
            </a>
            <a
              href="#about"
              className="w-full py-5 flex items-center justify-center text-sm font-bold bg-white/70 text-[#84D3F4] hover:bg-[#84D3F4] hover:text-white transition-all border-t border-[#84D3F4]/30 border-b border-[#84D3F4]/20"
            >
              ミライズについて
            </a>
          </div>

        </FadeIn>

      </section>


      {/* ══════════════════════════════════════════
          各セクション — space-y-3 でギャップを作り、
          その隙間から固定背景（水彩）が透けて見える
      ══════════════════════════════════════════ */}
      <div className="space-y-3 pb-3">

        {/* ── WHAT WE CAN DO ── */}
        <section id="what-we-can-do" className="py-24 px-[5%] bg-white/60">
          <div className="max-w-[1100px] mx-auto">
            <FadeIn direction="up">
              <SectionLabel>WHAT WE CAN DO</SectionLabel>
              <h2
                className="text-4xl font-bold mb-5 text-[#231F20]"
                style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
              >
                訪問看護でできること
              </h2>
              <p className="text-base text-[#6b6b6b] leading-loose mb-14 max-w-2xl">
                通所不要。自宅で受けられる、精神・知的に特化した専門的なケア。
                <br />
                困りごとを解決するだけでなく、その人らしい強みを一緒に伸ばします。
              </p>
            </FadeIn>

            <StaggerContainer
              className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5"
              staggerDelay={0.08}
            >
              {[
                {
                  title: "在宅でケアが受けられる",
                  desc: "通所不要。自宅に看護師が訪問し、週最大3回まで対応。慣れた環境で専門的なケアを受けられます。",
                  bg: "#fce8f4",
                },
                {
                  title: "医療的ケア・服薬管理",
                  desc: "薬の管理・血糖値のコントロールなど医療的にサポート。精神科の処方薬の服薬管理も対応します。",
                  bg: "#fce8f4",
                },
                {
                  title: "気持ちの安定をサポート",
                  desc: "イライラや衝動には必ず原因があります。食事・睡眠・ストレスなどの観点から看護師が一緒に考えて対処します。",
                  bg: "#ebe9f7",
                },
                {
                  title: "親御さん・ご家族のサポート",
                  desc: "子どものケアをしながら疲れを抱える親御さんの話をじっくり聞きます。話すだけで楽になる場所を目指しています。",
                  bg: "#ebe9f7",
                },
                {
                  title: "就労・社会参加への支援",
                  desc: "職場での悩みや苦手なことへの対処法を一緒に考え、就労継続をサポートします（成人の方向け）。",
                  bg: "#e0f3fd",
                },
                {
                  title: "「できた！」を一緒に積み重ねる",
                  desc: "好きなこと・得意なことを見つけ、小さな成功体験を積み重ねます。「できた」の実感が自信となり次のステップへとつながります。",
                  bg: "#e2f6ef",
                },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  {/* 正方形・ベタ塗り。通常:タイトル中央、ホバー:タイトル同サイズ+説明 */}
                  <div
                    className="group relative rounded-3xl overflow-hidden aspect-square shadow-sm hover:shadow-md transition-shadow duration-300 cursor-default"
                    style={{ backgroundColor: item.bg }}
                    tabIndex={0}
                  >
                    {/* 通常状態：タイトルのみ中央 */}
                    <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8 transition-opacity duration-300 group-hover:opacity-0 group-focus-within:opacity-0">
                      <p
                        className="text-sm sm:text-2xl font-bold text-center text-[#231F20] leading-relaxed"
                        style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
                      >
                        {item.title}
                      </p>
                    </div>

                    {/* ホバー状態：タイトル同サイズ＋説明文 */}
                    <div className="absolute inset-0 flex flex-col justify-center gap-2 sm:gap-5 p-4 sm:p-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                      <p
                        className="text-sm sm:text-2xl font-bold text-[#231F20] leading-snug"
                        style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
                      >
                        {item.title}
                      </p>
                      <p className="text-[11px] sm:text-lg text-[#555] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>


        {/* ── YOUR WORRIES ── */}
        <section
          id="worries"
          className="py-24 px-[5%] relative overflow-hidden"
          style={{
            background: "linear-gradient(to bottom, rgba(255,252,210,0.62) 0%, rgba(255,252,210,0.62) 70%, rgba(255,252,210,0) 100%)",
          }}
        >

          <div className="max-w-[1100px] mx-auto">
            <FadeIn direction="up">
              {/* タイトルエリア：ダイヤモンド装飾はここの中だけ */}
              <div className="relative overflow-hidden text-center py-10 mb-4">
                {/* ── ダイヤモンド背景装飾（文字と同程度のサイズ） ── */}
                {[
                  { size: 54,  x: -187, color: "rgba(236,153,208,0.32)" },
                  { size: 84,  x: -120, color: "rgba(236,153,208,0.24)" },
                  { size: 114, x:  -60, color: "rgba(179,174,219,0.22)" },
                  { size: 135, x:    0, color: "rgba(179,174,219,0.18)" },
                  { size: 114, x:   60, color: "rgba(132,211,244,0.22)" },
                  { size: 84,  x:  120, color: "rgba(132,211,244,0.24)" },
                  { size: 54,  x:  187, color: "rgba(158,221,201,0.32)" },
                ].map((d, i) => (
                  <div
                    key={i}
                    className="pointer-events-none select-none"
                    style={{
                      position: "absolute",
                      width: d.size,
                      height: d.size,
                      left: `calc(50% + ${d.x - d.size / 2}px)`,
                      top: "50%",
                      transform: "translateY(-50%) rotate(45deg)",
                      backgroundColor: d.color,
                      borderRadius: "4px",
                    }}
                  />
                ))}
                {/* タイトル（ダイヤモンドの前面） */}
                <div className="relative z-10">
                  <h2
                    className="text-4xl font-bold mb-5 text-[#231F20]"
                    style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
                  >
                    こんなお悩みありませんか？
                  </h2>
                </div>
              </div>

              {/* スクロール促進アニメーション ↓ */}
              <div className="flex justify-center mb-10">
                <div className="animate-bounce opacity-50" style={{ color: "#B3AEDB" }}>
                  <svg width="80" height="44" viewBox="0 0 80 44" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="4 6 40 24 76 6" />
                    <polyline points="4 22 40 40 76 22" />
                  </svg>
                </div>
              </div>
            </FadeIn>

            {/*
              グリッドを8アイテムに分割：同じ行は自動で同じ高さになるため
              「訪問看護でできること」の区切りが左右で必ず揃う
              モバイル(1列)：ソース順 = ヘッダー1→お悩み1→区切り1→解決策1→ヘッダー2…
              デスクトップ(2列)：md:col-start / md:row-start で配置
            */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-0">

              {/* ━━ 行1：ヘッダー ━━ */}
              <FadeIn direction="up" delay={0.1} className="md:col-start-1 md:row-start-1">
                <div className="rounded-t-3xl px-8 py-6" style={{ background: "linear-gradient(135deg, #EC99D0, #F1C6E7)" }}>
                  <p className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>
                    お子さん・親御さん
                  </p>
                  <p className="text-sm text-white/80 mt-1">未就学児〜高校生・ご家族</p>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.2} className="md:col-start-2 md:row-start-1 mt-6 md:mt-0">
                <div className="rounded-t-3xl px-8 py-6" style={{ background: "linear-gradient(135deg, #B3AEDB, #C8C4E8)" }}>
                  <p className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-zen-maru-gothic)" }}>
                    成人の方・ご家族
                  </p>
                  <p className="text-sm text-white/80 mt-1">精神・知的・発達障害のある方</p>
                </div>
              </FadeIn>

              {/* ━━ 行2：お悩みリスト（高さが揃う） ━━ */}
              <div className="md:col-start-1 md:row-start-2 px-8 py-6 bg-white/85">
                <p className="text-sm font-bold tracking-widest text-[#EC99D0] mb-4">こんなお悩みは？</p>
                <ul className="space-y-3">
                  {[
                    "療育施設に申し込んだけど、順番待ちでいつ入れるかわからない",
                    "小学校に上がったら、今まで通えていた療育施設が使えなくなった",
                    "子どもが突発的に暴れたり衝動的になったとき、どう対処すればいいかわからない",
                    "子どものケアに限界を感じている。誰かに丸ごと相談したい",
                    "富山では精神・知的に特化した訪問看護をしているところがほとんどない",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-base text-[#4a4a4a] leading-relaxed">
                      <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#EC99D0]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-start-2 md:row-start-2 px-8 py-6 bg-white/85">
                <p className="text-sm font-bold tracking-widest text-[#B3AEDB] mb-4">こんなお悩みは？</p>
                <ul className="space-y-3">
                  {[
                    "入院を繰り返していて、なかなか安定した生活が送れない",
                    "メンタルの問題で仕事が長続きしない",
                    "職場の人間関係や、仕事の中で苦手なことがあって悩んでいる",
                    "イライラや衝動の原因がわからず、対処の仕方がわからない",
                    "相談員・支援者として、利用者のために専門的なケアにつなげたい",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-base text-[#4a4a4a] leading-relaxed">
                      <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#B3AEDB]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* ━━ 行3：区切り（必ず揃う） ━━ */}
              <div
                className="md:col-start-1 md:row-start-3 flex items-center gap-3 px-8 py-4"
                style={{ background: "rgba(236,153,208,0.18)" }}
              >
                <div className="h-px flex-1" style={{ background: "rgba(236,153,208,0.5)" }} />
                <p className="text-sm font-bold whitespace-nowrap" style={{ color: "#c96fa0" }}>訪問看護でできること</p>
                <div className="h-px flex-1" style={{ background: "rgba(236,153,208,0.5)" }} />
              </div>

              <div
                className="md:col-start-2 md:row-start-3 flex items-center gap-3 px-8 py-4"
                style={{ background: "rgba(175,155,235,0.15)" }}
              >
                <div className="h-px flex-1" style={{ background: "rgba(175,155,235,0.5)" }} />
                <p className="text-sm font-bold whitespace-nowrap" style={{ color: "#8a84c4" }}>訪問看護でできること</p>
                <div className="h-px flex-1" style={{ background: "rgba(179,174,219,0.5)" }} />
              </div>

              {/* ━━ 行4：解決策リスト ━━ */}
              <div className="md:col-start-1 md:row-start-4 rounded-b-3xl px-8 py-6 bg-white/85">
                <ul className="space-y-3 mb-5">
                  {[
                    "自宅への訪問看護で、通所が難しいお子さんにも専門的なサポートを提供",
                    "突発的な衝動・癇癪の原因を一緒に探り、対処法を考える",
                    "日常生活の動作（着替え・食事など）の練習や、自主性を育む支援",
                    "親御さんの不安や疲れに寄り添うメンタルサポート",
                    "学校・他の支援機関との連携",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-base text-[#4a4a4a] leading-relaxed">
                      <span className="mt-1 flex-shrink-0 font-bold text-lg leading-none text-[#EC99D0]">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="rounded-xl p-4 text-sm text-[#6b6b6b] leading-relaxed" style={{ background: "rgba(252,232,244,0.7)" }}>
                  療育施設が満員で断られた、小学校に上がってケアが途切れてしまった。そんな状況でも、訪問看護という選択肢があります。丸ごと頼っていただいて大丈夫です。
                </div>
              </div>

              <div className="md:col-start-2 md:row-start-4 rounded-b-3xl px-8 py-6 bg-white/85">
                <ul className="space-y-3 mb-5">
                  {[
                    "服薬管理・血糖値コントロールなど医療的なサポート",
                    "就労継続のための悩み相談・メンタルサポート",
                    "職場の人間関係や苦手なことへの対処法を一緒に考える",
                    "イライラや衝動の原因を探り、セルフコントロールをサポート",
                    "入院を繰り返さないための生活支援・定期的な関わり",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-base text-[#4a4a4a] leading-relaxed">
                      <span className="mt-1 flex-shrink-0 font-bold text-lg leading-none text-[#B3AEDB]">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="rounded-xl p-4 text-sm text-[#6b6b6b] leading-relaxed" style={{ background: "rgba(220,205,255,0.45)" }}>
                  「また入院してしまった」「仕事が続かない」。そんな繰り返しを断ち切るために、定期的に自宅に訪問する看護師がいることが大きな力になります。
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ── VOICES（白背景あり：タイトル〜変化カードまで） ── */}
        <section className="py-20 px-[5%] bg-white/60">
          <div className="max-w-[1100px] mx-auto">

            {/* ① タイトル＆説明 */}
            <FadeIn direction="up">
              <div className="text-center mb-14">
                <h2
                  className="text-4xl font-bold mb-4"
                  style={{
                    color: "#3d9e8c",
                    fontFamily: "var(--font-zen-maru-gothic)",
                    textShadow: "3px 3px 0 rgba(0,0,0,0.18)",
                  }}
                >
                  保護者の声とアンケート結果
                </h2>
                <p className="text-sm text-[#6b6b6b] leading-relaxed">
                  利用開始から2か月以上が経過した保護者36名を対象に実施したアンケートと、実際にいただいた口コミをご紹介します。
                </p>
              </div>
            </FadeIn>

            {/* ② 4つの統計 */}
            <StaggerContainer
              className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-32"
              staggerDelay={0.1}
            >
              {[
                { value: "94", label: "子どもの成長を\n感じられた" },
                { value: "92", label: "相談できる場所がある\nと感じた" },
                { value: "89", label: "家族の安心に\nつながった" },
                { value: "96", label: "継続利用率\n（直近6か月）" },
              ].map((stat) => (
                <StaggerItem key={stat.value}>
                  <div className="flex flex-col items-center gap-0">
                    {/* ローレル＋数字 */}
                    <div className="relative flex items-center justify-center" style={{ width: 240, height: 240 }}>
                      <Image
                        src="/laurel.png"
                        alt=""
                        width={240}
                        height={240}
                        className="absolute inset-0 w-full h-full object-contain"
                      />
                      {/* 数値 */}
                      <div className="relative z-10 flex items-end gap-0.5 pb-3">
                        <span
                          className="text-7xl font-bold leading-none"
                          style={{
                            color: "#3d9e8c",
                            fontFamily: "var(--font-lora)",
                            textShadow: "3px 3px 0 rgba(0,0,0,0.28)",
                          }}
                        >
                          {stat.value}
                        </span>
                        <span
                          className="text-xl font-bold leading-none mb-1"
                          style={{
                            color: "#3d9e8c",
                            fontFamily: "var(--font-lora)",
                            textShadow: "3px 3px 0 rgba(0,0,0,0.28)",
                          }}
                        >
                          %
                        </span>
                      </div>
                    </div>
                    {/* 吹き出しラベル（上向き三角＋角丸ボックス） */}
                    <div className="flex flex-col items-center mt-[-20px]">
                      <div style={{
                        width: 0, height: 0,
                        borderLeft: "9px solid transparent",
                        borderRight: "9px solid transparent",
                        borderBottom: "10px solid #e8e8e8",
                      }} />
                      <div className="bg-[#e8e8e8] rounded-2xl px-5 py-2.5 text-center text-sm text-[#555] leading-snug whitespace-pre-line">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* ③ 利用後の変化カード */}
            <FadeIn direction="up">
              <h3
                className="text-center text-3xl font-bold mb-14"
                style={{ fontFamily: "var(--font-zen-maru-gothic)", color: "#4A3068" }}
              >
                利用後に感じた変化（保護者の声）
              </h3>
            </FadeIn>

            <StaggerContainer
              className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8"
              staggerDelay={0.1}
            >
              {[
                {
                  title: "お子様の変化",
                  items: ["気持ちが安定してきた", "先生が来る日を楽しみにしています", "笑顔と会話が増えました"],
                  gradient: "linear-gradient(135deg, #F0BEDD, #CEC8EA)",
                },
                {
                  title: "コミュニケーション",
                  items: ["自分の気持ちを言葉で伝えられるようになってきた", "切り替えができるようになってきた"],
                  gradient: "linear-gradient(135deg, #CEC8EA, #B2DCF2)",
                },
                {
                  title: "ご家族の変化",
                  items: ["関わり方が分かるようになった", "相談できることで気持ちが楽になった", "余裕ができた"],
                  gradient: "linear-gradient(135deg, #B2DCF2, #B6E8DE)",
                },
              ].map((card) => (
                <StaggerItem key={card.title}>
                  {/* グラデーション外枠 + 白い内側 */}
                  <div className="rounded-2xl overflow-hidden h-full" style={{ background: card.gradient }}>
                    {/* タイトル（グラデーション上） */}
                    <div className="px-6 py-5 text-center">
                      <p
                        className="font-bold text-xl"
                        style={{ fontFamily: "var(--font-zen-maru-gothic)", color: "#4A3068" }}
                      >
                        {card.title}
                      </p>
                    </div>
                    {/* 白い内側エリア */}
                    <div className="bg-white mx-3 mb-3 rounded-xl px-6 py-8 flex flex-col items-center gap-6">
                      {/* 吹き出しアイコン */}
                      <svg width="48" height="40" viewBox="0 0 48 40" fill="none">
                        <rect x="1" y="1" width="46" height="28" rx="14" stroke="#4A3068" strokeWidth="1.5" strokeOpacity="0.45" />
                        <path d="M16 29 L14 39 L26 29" stroke="#4A3068" strokeWidth="1.5" strokeOpacity="0.45" strokeLinejoin="round" strokeLinecap="round" />
                      </svg>
                      <ul className="space-y-4 text-center">
                        {card.items.map((item) => (
                          <li key={item} className="text-lg leading-relaxed" style={{ color: "#4A3068" }}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

          </div>
        </section>

        {/* ── 保護者の口コミ（背景なし） ── */}
        <section className="pt-6 pb-8 px-[5%]">
          <div className="max-w-[1100px] mx-auto">

            <FadeIn direction="up">
              <div className="flex items-end justify-center gap-1 mb-3">
                <span className="text-xl" style={{ color: "#c8a84b" }}>★</span>
                <span className="text-xl" style={{ color: "#c8a84b" }}>★</span>
                <span className="text-3xl" style={{ color: "#c8a84b" }}>★</span>
                <span className="text-xl" style={{ color: "#c8a84b" }}>★</span>
                <span className="text-xl" style={{ color: "#c8a84b" }}>★</span>
              </div>
              <h3
                className="text-center text-2xl font-bold mb-10"
                style={{ fontFamily: "var(--font-zen-maru-gothic)", color: "#231F20" }}
              >
                保護者の口コミ
              </h3>
            </FadeIn>

            {/* 口コミ 横スライダー（スクロールバー非表示） */}
            <div
              className="overflow-x-auto flex gap-5 pb-4 [&::-webkit-scrollbar]:hidden"
              style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
            >
              {[
                {
                  text: "訪問してもらってから、子どもが少しずつ落ち着いてきました。担当の先生が毎回丁寧に関わってくださり、私自身も安心して任せられています。",
                  attr: "お子様 7歳 / 利用6か月",
                },
                {
                  text: "初めての相談でとても不安でしたが、親の気持ちに寄り添ってくれて、どこよりもここが合うと感じました。子どもも訪問を楽しみにしています。",
                  attr: "お子様 5歳 / 利用3か月",
                },
                {
                  text: "「どこに相談すればいいかわからない」というところから始まりました。今では関わり方が分かり、家での対応に自信が持てるようになりました。",
                  attr: "お子様 6歳 / 利用4か月",
                },
                {
                  text: "最初は「訪問看護って何だろう？」という感じでしたが、話してみてすぐ安心できました。今では子どもが先生の来る日を楽しみにしています。",
                  attr: "お子様 9歳 / 利用5か月",
                },
                {
                  text: "仕事がなかなか続かなくて悩んでいました。看護師さんが定期的に来てくれることで、生活のリズムができて、気持ちも安定してきた気がします。",
                  attr: "20代 / 利用3か月",
                },
                {
                  text: "入院を繰り返していたのが、訪問看護を始めてから落ち着いてきました。薬の管理もサポートしてもらえて、家族としても安心しています。",
                  attr: "ご家族より / 利用8か月",
                },
                {
                  text: "突発的に暴れてしまうとき、どう対処すればいいかずっとわかりませんでした。看護師さんと一緒に原因を探るうちに、だんだん対処できるようになってきました。",
                  attr: "お子様 11歳 / 利用6か月",
                },
                {
                  text: "療育施設に断られ続けて途方に暮れていたとき、訪問看護という選択肢を教えてもらいました。自宅に来てもらえるので、子どもも安心してケアを受けられています。",
                  attr: "お子様 8歳 / 利用4か月",
                },
              ].map((v) => (
                <div
                  key={v.attr}
                  className="flex-none bg-white p-8 flex flex-col justify-between gap-6 shadow-sm"
                  style={{
                    width: "min(82vw, 360px)",
                    scrollSnapAlign: "start",
                    borderRadius: "0 28px 0 28px",
                  }}
                >
                  <p className="text-base text-[#4a4a4a] leading-relaxed">{v.text}</p>
                  <p className="text-sm text-[#9b9b9b]">{v.attr}</p>
                </div>
              ))}
            </div>

            {/* スワイプヒント */}
            <div className="flex justify-end items-center gap-3 mt-4">
              <span className="text-sm tracking-[0.2em]" style={{ color: "#bbb" }}>Scroll</span>
              <div className="h-px w-16" style={{ backgroundColor: "#bbb" }} />
              <span className="text-lg" style={{ color: "#bbb" }}>›</span>
            </div>

          </div>
        </section>


        {/* ── WHY MIRAISE ── */}
        <WhyMiraise />


        {/* ── HOW TO START ── */}
        <section className="py-24 px-[5%]" style={{ backgroundColor: "#231F20" }}>
          <div className="max-w-[1100px] mx-auto">
            <FadeIn direction="up">
              <SectionLabel>HOW TO START</SectionLabel>
              <SectionTitle light>ご利用開始までの流れ</SectionTitle>
              <p className="text-sm text-white/60 leading-loose mb-12 max-w-2xl">
                はじめての方でも安心して進められるよう、丁寧にサポートします。
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  step: "STEP 1",
                  title: "まずはご相談",
                  desc: "お電話・LINEなどでお気軽にご連絡ください。「訪問看護って何？」「うちは対象になる？」という段階でも大丈夫です。",
                },
                {
                  step: "STEP 2",
                  title: "無料でご訪問・アセスメント",
                  desc: "担当の看護師がご自宅に伺い、現在の状況やご希望をお聞きします。無理に決める必要はありません。",
                },
                {
                  step: "STEP 3",
                  title: "ケアプランのご提案",
                  desc: "お話をもとに、その方に合ったケアプランをご提案します。主治医・ケアマネージャー・支援機関とも連携します。",
                },
                {
                  step: "STEP 4",
                  title: "訪問看護スタート",
                  desc: "週1〜3回のペースで、自宅への訪問を開始します。状況に合わせて柔軟に対応します。",
                },
              ].map((item, i) => (
                <FadeIn key={item.step} direction="up" delay={i * 0.1}>
                  <div className="relative bg-white/5 rounded-2xl p-6 border border-white/10 h-full">
                    <p className="text-sm font-bold tracking-widest text-[#EC99D0] mb-3">{item.step}</p>
                    <p className="font-bold text-base text-white mb-3">{item.title}</p>
                    <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                    {i < 3 && (
                      <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-white/25 text-xl z-10">
                        →
                      </div>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>


        {/* ── FAQ ── */}
        <section className="py-24 px-[5%] bg-white/70">
          <div className="max-w-[800px] mx-auto">
            <FadeIn direction="up">
              <SectionLabel>FAQ</SectionLabel>
              <SectionTitle>よくあるご質問</SectionTitle>
            </FadeIn>

            <div className="mt-8 space-y-3">
              {[
                {
                  q: "費用はどれくらいかかりますか？",
                  a: "医療保険や障害福祉サービスが適用されるため、自己負担は1〜3割程度です。お住まいの地域や状況によって異なりますので、まずはご相談ください。",
                },
                {
                  q: "うちの子（自分）は対象になりますか？",
                  a: "精神・知的障害のある方（診断の有無は問いません）、およびそのご家族が対象です。年齢は乳幼児から成人まで幅広く対応しています。まずはお気軽にお問い合わせください。",
                },
                {
                  q: "主治医がいないと利用できませんか？",
                  a: "訪問看護の利用には医師の指示書が必要です。現在かかりつけ医がいない場合も、ご相談いただければ一緒に対応策を考えます。",
                },
                {
                  q: "療育施設とは何が違いますか？",
                  a: "療育施設は通所が基本で、乳幼児が主な対象です。訪問看護は自宅に看護師が来るため通所不要で、小学生以上・成人の方にも利用できます。また医療的なケアやメンタルサポートも行える点が特徴です。",
                },
                {
                  q: "相談員・支援者として紹介したいのですが。",
                  a: "ありがとうございます。支援者の方からのご紹介・連携も歓迎しております。お気軽にご連絡ください。",
                },
                {
                  q: "まず話を聞いてもらうだけでも大丈夫ですか？",
                  a: "もちろんです。「使えるかどうかわからない」「どうすれば良いかわからない」という段階でもお声がけください。一緒に考えます。",
                },
              ].map((item) => (
                <FadeIn key={item.q} direction="up" delay={0.05}>
                  <details className="group rounded-2xl border border-[#f0d0e8] overflow-hidden">
                    <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-bold text-base text-[#231F20] hover:bg-[#fef6fa] transition-colors [list-style:none] [&::-webkit-details-marker]:hidden">
                      <span>Q. {item.q}</span>
                      <span className="ml-4 flex-shrink-0 text-[#EC99D0] transition-transform duration-200 group-open:rotate-180">
                        ▾
                      </span>
                    </summary>
                    <div className="px-6 pb-5 pt-3 text-base text-[#6b6b6b] leading-relaxed border-t border-[#f0d0e8]">
                      {item.a}
                    </div>
                  </details>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.3}>
              <div className="mt-8 text-center">
                <Link
                  href="/faq"
                  className="inline-block text-sm font-bold text-[#EC99D0] hover:underline"
                >
                  すべてのご質問を見る →
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>


        {/* ── CONTACT CTA ── */}
        <section
          className="py-24 px-[5%] text-center relative overflow-hidden"
          style={{ backgroundColor: "rgba(35,31,32,0.96)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 60% 50%, rgba(236,153,208,0.18), transparent 60%)",
            }}
          />
          <FadeIn direction="up" className="relative z-10 max-w-xl mx-auto">
            <p className="text-xs font-bold tracking-widest text-[#EC99D0] mb-4">CONTACT</p>
            <h2 className="font-[var(--font-noto-serif-jp)] text-3xl font-light text-white mb-4">
              まずはお気軽にご相談ください
            </h2>
            <p className="text-sm text-white/65 leading-loose mb-3">
              「使えるかどうかわからない」という段階でも大丈夫です。
              <br />
              電話・LINEなど、ご都合の良い方法でご連絡ください。
            </p>
            <p className="text-sm text-white/40 mb-10">
              電話：000-0000-0000（受付時間：平日 9:00〜17:00）
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 rounded-full text-white font-bold text-sm transition-transform hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(120deg, #EC99D0, #B3AEDB)",
                  boxShadow: "0 6px 24px rgba(236,153,208,0.4)",
                }}
              >
                無料相談・お問い合わせ
              </Link>
              <Link
                href="/recruit"
                className="inline-block px-8 py-4 rounded-full text-white/80 font-bold text-sm border border-white/20 hover:border-white/50 transition-colors"
              >
                採用情報を見る
              </Link>
            </div>
          </FadeIn>
        </section>

      </div>{/* end space-y-3 wrapper */}

    </div>
  );
}
