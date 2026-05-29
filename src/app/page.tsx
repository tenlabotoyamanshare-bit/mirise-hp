import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "訪問看護ステーションミライズ | 富山の精神・療育専門訪問看護",
  description:
    "富山で精神・知的障害に特化した訪問看護ステーション。乳幼児から成人まで、自宅で受けられる専門的なケアをお届けします。",
};

function SectionLabel({ children, color = "#EC99D0" }: { children: React.ReactNode; color?: string }) {
  return (
    <p className="text-xs font-bold tracking-widest mb-3" style={{ color }}>
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
      className="font-[var(--font-noto-serif-jp)] text-3xl font-light mb-4"
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
        <section id="what-we-can-do" className="py-24 px-[5%] bg-white">
          <div className="max-w-[1100px] mx-auto">
            <FadeIn direction="up">
              <SectionLabel>WHAT WE CAN DO</SectionLabel>
              <SectionTitle>訪問看護でできること</SectionTitle>
              <p className="text-sm text-[#6b6b6b] leading-loose mb-14 max-w-2xl">
                通所不要。自宅で受けられる、精神・知的に特化した専門的なケア。
                <br />
                困りごとを解決するだけでなく、その人らしい強みを一緒に伸ばします。
              </p>
            </FadeIn>

            {/* 困りごとを解決する */}
            <FadeIn delay={0.05} direction="up">
              <p className="text-xs font-bold tracking-widest text-[#EC99D0] mb-5">困りごとを解決する</p>
            </FadeIn>
            <StaggerContainer
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16"
              staggerDelay={0.08}
            >
              {[
                {
                  title: "在宅でケアが受けられる",
                  desc: "通所不要。自宅に看護師が訪問します。週最大3回まで対応でき、お子さんが慣れた環境でケアを受けられます。",
                },
                {
                  title: "医療的ケア",
                  desc: "薬の管理・血糖値・血圧のコントロールなど、医療的な観点から専門的にサポートします。精神科での処方薬の服薬管理も対応します。",
                },
                {
                  title: "衝動・癇癪の原因を一緒に探る",
                  desc: "突発的なイライラや衝動には、必ず原因があります。食事・睡眠・ストレスなど、内的・外的な要因を看護師が一緒に考えて対処します。",
                },
                {
                  title: "親御さん自身のメンタルケア",
                  desc: "子どものケアをしながら、疲れやストレスを抱えている親御さんの話をじっくり聞きます。話すだけで気持ちが楽になる場所でありたいと思っています。",
                },
                {
                  title: "就労・社会参加への支援（成人）",
                  desc: "職場の人間関係、仕事上の苦手なこと。就労を継続できるよう、悩みに一緒に向き合いながらサポートします。",
                },
                {
                  title: "生活のルーティーンをつくる",
                  desc: "看護師が訪問する「決まった時間」が生まれることで、身支度を整えよう、部屋をきれいにしようという気持ちが育ちます。ケアがメンタルの安定につながります。",
                },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="bg-[#fafafa] rounded-2xl p-6 h-full border-l-4 border-[#EC99D0]">
                    <p className="font-bold text-sm text-[#231F20] mb-2">{item.title}</p>
                    <p className="text-xs text-[#6b6b6b] leading-relaxed">{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* 強みを伸ばす */}
            <FadeIn delay={0.05} direction="up">
              <p className="text-xs font-bold tracking-widest text-[#84D3F4] mb-5">強みを伸ばす</p>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4" staggerDelay={0.1}>
              {[
                {
                  title: "得意なことを見つける",
                  desc: "できないことに目を向けるだけでなく、その人が持つ好きなことや得意なことを一緒に探します。",
                },
                {
                  title: "「できた！」を積み重ねる",
                  desc: "小さな成功体験を大切に。「できた」という実感が自信となり、次へのステップへとつながっていきます。",
                },
                {
                  title: "乳幼児から成人まで、ずっと寄り添う",
                  desc: "ミライズの名前には「未来を一緒に描いて歩んでいく」という想いが込められています。乳幼児のころから成人になっても、その人の無限大の可能性を一緒に広げていきます。",
                },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="bg-[#f0f8fd] rounded-2xl p-6 h-full border-l-4 border-[#84D3F4]">
                    <p className="font-bold text-sm text-[#231F20] mb-2">{item.title}</p>
                    <p className="text-xs text-[#6b6b6b] leading-relaxed">{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>


        {/* ── YOUR WORRIES ── */}
        <section id="worries" className="py-24 px-[5%]" style={{ backgroundColor: "#fef6fa" }}>
          <div className="max-w-[1100px] mx-auto">
            <FadeIn direction="up">
              <SectionLabel>YOUR WORRIES</SectionLabel>
              <SectionTitle>こんなお悩みありませんか？</SectionTitle>
              <p className="text-sm text-[#6b6b6b] leading-loose mb-12 max-w-2xl">
                「どこに相談すればいいかわからない」
                <br />
                「富山には専門に診てくれるところがない」
                <br />
                そんな声をよく聞きます。ミライズは、そのお悩みに向き合うために生まれました。
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <FadeIn direction="up" delay={0.1}>
                <div className="bg-white rounded-2xl p-8 h-full">
                  <p className="text-xs font-bold tracking-widest text-[#EC99D0] mb-6">
                    お子さん・親御さんのお悩み
                  </p>
                  <ul className="space-y-3">
                    {[
                      "療育施設に申し込んだけど、順番待ちでいつ入れるかわからない",
                      "小学校に上がったら、今まで通えていた療育施設が使えなくなった",
                      "子どもが突発的に暴れたり、衝動的になったりしたとき、どう対処すればいいかわからない",
                      "子どものケアに限界を感じている。誰かに丸ごと相談したい",
                      "富山では精神・知的に特化した訪問看護をしているところがほとんどない",
                      "訪問看護で療育が受けられることを知らなかった",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-[#4a4a4a] leading-relaxed">
                        <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#EC99D0]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <div className="bg-white rounded-2xl p-8 h-full">
                  <p className="text-xs font-bold tracking-widest text-[#B3AEDB] mb-6">
                    成人の方・ご家族のお悩み
                  </p>
                  <ul className="space-y-3">
                    {[
                      "入院を繰り返していて、なかなか安定した生活が送れない",
                      "メンタルの問題で仕事が長続きしない",
                      "職場の人間関係や、仕事の中で苦手なことがあって悩んでいる",
                      "イライラや衝動の原因がわからず、対処の仕方がわからない",
                      "相談員さんや支援者として、利用者のために専門的なケアにつなげたい",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-[#4a4a4a] leading-relaxed">
                        <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#B3AEDB]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>

            <FadeIn direction="up" delay={0.3}>
              <div className="text-center">
                <p className="text-sm font-bold text-[#231F20] mb-6">
                  そのお悩み、訪問看護で解決できるかもしれません。
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 rounded-full text-white font-bold text-sm transition-transform hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(120deg, #EC99D0, #B3AEDB)",
                    boxShadow: "0 6px 24px rgba(236,153,208,0.35)",
                  }}
                >
                  まずはお気軽にご相談ください
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>


        {/* ── OUR SERVICES ── */}
        <section className="py-24 px-[5%] bg-white">
          <div className="max-w-[1100px] mx-auto">
            <FadeIn direction="up">
              <SectionLabel>OUR SERVICES</SectionLabel>
              <SectionTitle>対象者別のサービス</SectionTitle>
              <p className="text-sm text-[#6b6b6b] leading-loose mb-12 max-w-2xl">
                ミライズは、乳幼児から成人まで、精神・知的障害のある方とそのご家族を幅広くサポートします。
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 乳幼児・小児 */}
              <FadeIn direction="up" delay={0.1}>
                <div className="rounded-2xl border border-[#f0d0e8] p-8 h-full">
                  <div
                    className="w-full h-1 rounded-full mb-6"
                    style={{ background: "linear-gradient(90deg, #EC99D0, #B3AEDB)" }}
                  />
                  <p className="font-[var(--font-noto-serif-jp)] text-xl font-light text-[#231F20] mb-1">
                    乳幼児・小児
                  </p>
                  <p className="text-xs text-[#9b9b9b] mb-6">未就学児〜高校生</p>

                  <p className="text-xs font-bold text-[#EC99D0] mb-2">対象となる方</p>
                  <p className="text-sm text-[#4a4a4a] leading-relaxed mb-6">
                    発達障害・知的障害・精神的なケアが必要なお子さんと、そのご家族。
                  </p>

                  <p className="text-xs font-bold text-[#EC99D0] mb-3">こんなことができます</p>
                  <ul className="space-y-2 mb-6">
                    {[
                      "自宅への訪問看護で、通所が難しいお子さんにも専門的なサポートを提供",
                      "突発的な衝動・癇癪の原因を一緒に探り、対処法を考える",
                      "日常生活の動作（着替え・食事など）の練習や、自主性を育む支援",
                      "親御さんの不安や疲れに寄り添うメンタルサポート",
                      "学校・他の支援機関との連携",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[#4a4a4a] leading-relaxed">
                        <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#EC99D0]" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="bg-[#fef6fa] rounded-xl p-4 text-xs text-[#6b6b6b] leading-relaxed">
                    療育施設が満員で断られた、小学校に上がってケアが途切れてしまった。そんな状況でも、訪問看護という選択肢があります。丸ごと頼っていただいて大丈夫です。
                  </div>
                </div>
              </FadeIn>

              {/* 成人 */}
              <FadeIn direction="up" delay={0.2}>
                <div className="rounded-2xl border border-[#d8d5f0] p-8 h-full">
                  <div
                    className="w-full h-1 rounded-full mb-6"
                    style={{ background: "linear-gradient(90deg, #B3AEDB, #84D3F4)" }}
                  />
                  <p className="font-[var(--font-noto-serif-jp)] text-xl font-light text-[#231F20] mb-1">
                    成人の方
                  </p>
                  <p className="text-xs text-[#9b9b9b] mb-6">精神障害・知的障害・発達障害のある成人の方</p>

                  <p className="text-xs font-bold text-[#B3AEDB] mb-2">対象となる方</p>
                  <p className="text-sm text-[#4a4a4a] leading-relaxed mb-6">
                    精神障害・知的障害・発達障害のある成人の方と、そのご家族・支援者。
                  </p>

                  <p className="text-xs font-bold text-[#B3AEDB] mb-3">こんなことができます</p>
                  <ul className="space-y-2 mb-6">
                    {[
                      "服薬管理・血糖値コントロールなど医療的なサポート",
                      "就労継続のための悩み相談・メンタルサポート",
                      "職場の人間関係や苦手なことへの対処法を一緒に考える",
                      "イライラや衝動の原因を探り、セルフコントロールをサポート",
                      "入院を繰り返さないための生活支援・定期的な関わり",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[#4a4a4a] leading-relaxed">
                        <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#B3AEDB]" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="bg-[#f5f4fc] rounded-xl p-4 text-xs text-[#6b6b6b] leading-relaxed">
                    「また入院してしまった」「仕事が続かない」。そんな繰り返しを断ち切るために、定期的に自宅に訪問する看護師がいることが大きな力になります。
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>


        {/* ── VOICES ── */}
        <section className="py-24 px-[5%]" style={{ backgroundColor: "#f5f4fc" }}>
          <div className="max-w-[1100px] mx-auto">
            <FadeIn direction="up">
              <SectionLabel color="#B3AEDB">VOICES</SectionLabel>
              <SectionTitle>保護者・ご利用者の声</SectionTitle>
              <p className="text-sm text-[#6b6b6b] leading-loose mb-12 max-w-2xl">
                実際にミライズを利用されている方から、いただいた声をご紹介します。
                <br />
                <span className="text-xs text-[#9b9b9b]">
                  ※ プライバシー保護のため、一部内容を変更しています。
                </span>
              </p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5" staggerDelay={0.1}>
              {[
                {
                  quote:
                    "療育施設に断られ続けて途方に暮れていたとき、訪問看護という選択肢を教えてもらいました。自宅に来てもらえるので、子どもも安心してケアを受けられています。",
                  attr: "お子さん 8歳 / 利用開始から4ヶ月",
                  accent: "#EC99D0",
                },
                {
                  quote:
                    "突発的に暴れてしまうとき、どう対処すればいいかずっとわからなかった。看護師さんと一緒に原因を考えるうちに、血糖値や睡眠との関係がわかって、対処できるようになってきました。",
                  attr: "お子さん 11歳 / 利用開始から6ヶ月",
                  accent: "#EC99D0",
                },
                {
                  quote:
                    "仕事がなかなか続かなくて悩んでいました。看護師さんが定期的に来てくれることで、生活のリズムができて、気持ちも安定してきた気がします。",
                  attr: "20代 / 利用開始から3ヶ月",
                  accent: "#B3AEDB",
                },
                {
                  quote:
                    "入院を繰り返していたのが、訪問看護を始めてから落ち着いてきました。薬の管理もサポートしてもらえて、家族としても安心しています。",
                  attr: "ご家族より / 利用開始から8ヶ月",
                  accent: "#B3AEDB",
                },
              ].map((v) => (
                <StaggerItem key={v.attr}>
                  <div
                    className="bg-white rounded-2xl p-7 h-full"
                    style={{ borderLeft: `4px solid ${v.accent}` }}
                  >
                    <p className="text-sm text-[#4a4a4a] leading-relaxed mb-4">
                      「{v.quote}」
                    </p>
                    <p className="text-xs text-[#9b9b9b]">— {v.attr}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>


        {/* ── WHY MIRAISE ── */}
        <section id="about" className="py-24 px-[5%] bg-white">
          <div className="max-w-[1100px] mx-auto">
            <FadeIn direction="up">
              <SectionLabel>WHY MIRAISE</SectionLabel>
              <SectionTitle>ミライズが選ばれる理由</SectionTitle>
              <p className="text-sm text-[#6b6b6b] leading-loose mb-12 max-w-2xl">
                富山で、精神・知的障害に特化した訪問看護を。
                <br />
                それだけでも珍しい存在ですが、ミライズにはもう一つの強みがあります。
              </p>
            </FadeIn>

            <div className="space-y-4">
              {[
                {
                  num: "01",
                  title: "富山で数少ない、精神・療育専門の訪問看護",
                  desc: "富山では精神・知的障害に特化した訪問看護を行っているステーションがほとんどありません。ミライズは、そのニーズに応えるために生まれました。",
                },
                {
                  num: "02",
                  title: "乳幼児から成人まで、途切れないケア",
                  desc: "乳幼児期・小学校・中学校・高校・成人と、ライフステージが変わっても関わり続けます。「小学校に上がったらケアが受けられなくなった」という空白を、ミライズが埋めます。",
                },
                {
                  num: "03",
                  title: "医療とメンタル、両方からアプローチ",
                  desc: "薬・血糖値などの医療的なケアと、心の状態・生活の整え方、両軸で支援します。突発的な衝動や癇癪も、原因を探ることで対処できるようになっていきます。",
                },
                {
                  num: "04",
                  title: "親御さん・ご家族も一緒にサポート",
                  desc: "ケアするのは本人だけではありません。疲れや不安を抱えた親御さん・ご家族の気持ちにも寄り添います。",
                },
                {
                  num: "05",
                  title: "「丸投げ」でいい。頼ってください",
                  desc: "「どうすればいいかわからない」でも大丈夫。解決策を一緒に考えるのが、ミライズの仕事です。",
                },
              ].map((item, i) => (
                <FadeIn key={item.num} direction="up" delay={i * 0.07}>
                  <div className="flex gap-6 items-start p-6 rounded-2xl bg-[#fafafa] hover:bg-[#fef6fa] transition-colors">
                    <p
                      className="text-3xl font-bold leading-none flex-shrink-0 mt-0.5"
                      style={{
                        background: "linear-gradient(135deg, #EC99D0, #B3AEDB)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {item.num}
                    </p>
                    <div>
                      <p className="font-bold text-sm text-[#231F20] mb-1.5">{item.title}</p>
                      <p className="text-sm text-[#6b6b6b] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>


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
                    <p className="text-xs font-bold tracking-widest text-[#EC99D0] mb-3">{item.step}</p>
                    <p className="font-bold text-sm text-white mb-3">{item.title}</p>
                    <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
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
        <section className="py-24 px-[5%] bg-white">
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
                    <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-bold text-sm text-[#231F20] hover:bg-[#fef6fa] transition-colors [list-style:none] [&::-webkit-details-marker]:hidden">
                      <span>Q. {item.q}</span>
                      <span className="ml-4 flex-shrink-0 text-[#EC99D0] transition-transform duration-200 group-open:rotate-180">
                        ▾
                      </span>
                    </summary>
                    <div className="px-6 pb-5 pt-3 text-sm text-[#6b6b6b] leading-relaxed border-t border-[#f0d0e8]">
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
