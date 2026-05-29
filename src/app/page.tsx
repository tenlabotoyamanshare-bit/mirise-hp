import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "訪問看護ステーションミライズ | 大阪の訪問看護",
  description:
    "訪問看護ステーションミライズは、大阪を拠点に、お子さまから大人まで、その人らしい生活を支える訪問看護サービスを提供しています。",
};

export default function HomePage() {
  return (
    <div>
      {/* ─── Hero ─── 水彩画像 + 白モヤ */}
      <section className="relative min-h-[90vh] flex items-center px-[5%] overflow-hidden">
        {/* ① 水彩画像レイヤー */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/watercolor-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* ② 白いモヤ（0=透明 / 1=真っ白） */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.55)" }}
        />

        <div className="max-w-[1100px] mx-auto w-full relative z-10">
          <div className="max-w-xl">
            <FadeIn delay={0} onScroll={false}>
              <p className="text-xs font-bold tracking-widest text-[#EC99D0] mb-4">
                MIRISE VISITING NURSING STATION
              </p>
            </FadeIn>

            <FadeIn delay={0.1} onScroll={false}>
              <h1 className="font-[var(--font-noto-serif-jp)] text-4xl sm:text-5xl font-light text-[#231F20] leading-tight mb-6">
                あなたの「暮らしたい」を、
                <br />
                ともに支えます。
              </h1>
            </FadeIn>

            <FadeIn delay={0.2} onScroll={false}>
              <p className="text-sm text-[#4a4a4a] leading-loose mb-10 max-w-md">
                訪問看護ステーションミライズは、大阪を拠点に、<br />
                お子さまから大人まで、その人らしい生活を<br />
                支える訪問看護サービスを提供しています。
              </p>
            </FadeIn>

            <FadeIn delay={0.32} onScroll={false}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 rounded-full text-white font-bold text-sm transition-transform hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(120deg, #EC99D0, #B3AEDB)",
                    boxShadow: "0 6px 24px rgba(236,153,208,0.4)",
                  }}
                >
                  無料相談はこちら
                </Link>
                <Link
                  href="/services"
                  className="inline-block px-8 py-4 rounded-full text-[#231F20] font-bold text-sm border border-[#231F20]/20 hover:border-[#EC99D0] bg-white/50 transition-colors"
                >
                  サービスを見る
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* ロゴ装飾（右側） */}
        <FadeIn
          delay={0.5}
          onScroll={false}
          className="absolute right-[5%] bottom-10 opacity-15 pointer-events-none hidden md:block"
        >
          <Image src="/logo.png" alt="" width={320} height={285} aria-hidden />
        </FadeIn>
      </section>

      {/* ─── 訪問看護とは ─── */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn direction="up">
            <p className="text-xs font-bold tracking-widest text-[#EC99D0] mb-3">ABOUT</p>
            <h2 className="font-[var(--font-noto-serif-jp)] text-3xl font-light mb-6 text-[#231F20]">
              訪問看護とは
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} direction="up">
            <div className="h-48 rounded-2xl bg-[#f7f7f7] flex items-center justify-center text-[#aaa] text-sm">
              コンテンツ準備中
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-8 text-center">
              <Link href="/services" className="inline-block text-sm font-bold text-[#EC99D0] hover:underline">
                サービス詳細を見る →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── ミライズの特徴 ─── */}
      <section className="py-20 px-[5%] bg-[#f7f7f7]">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn direction="up">
            <p className="text-xs font-bold tracking-widest text-[#EC99D0] mb-3">FEATURES</p>
            <h2 className="font-[var(--font-noto-serif-jp)] text-3xl font-light mb-10 text-[#231F20]">
              ミライズの特徴
            </h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-5" staggerDelay={0.12}>
            {["特徴 1", "特徴 2", "特徴 3"].map((label) => (
              <StaggerItem key={label}>
                <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center h-40 text-[#aaa] text-sm gap-2 shadow-sm">
                  <div className="w-8 h-1 rounded-full" style={{ background: "linear-gradient(90deg, #84D3F4, #EC99D0)" }} />
                  {label} — コンテンツ準備中
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── サービス内容 ─── */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn direction="up">
            <p className="text-xs font-bold tracking-widest text-[#EC99D0] mb-3">SERVICES</p>
            <h2 className="font-[var(--font-noto-serif-jp)] text-3xl font-light mb-10 text-[#231F20]">
              サービス内容
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} direction="up">
            <div className="h-48 rounded-2xl bg-[#f7f7f7] flex items-center justify-center text-[#aaa] text-sm">
              コンテンツ準備中
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-8 text-center">
              <Link href="/services" className="inline-block px-8 py-3 rounded-full text-sm font-bold border border-[#EC99D0] text-[#EC99D0] hover:bg-[#EC99D0] hover:text-white transition-colors">
                すべてのサービスを見る
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── ご利用の流れ ─── */}
      <section className="py-20 px-[5%] bg-[#f7f7f7]">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn direction="up">
            <p className="text-xs font-bold tracking-widest text-[#EC99D0] mb-3">HOW TO USE</p>
            <h2 className="font-[var(--font-noto-serif-jp)] text-3xl font-light mb-10 text-[#231F20]">
              ご利用の流れ
            </h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4" staggerDelay={0.08}>
            {["お問い合わせ・相談", "アセスメント訪問", "ケアプラン確認", "契約・手続き", "訪問開始", "継続的なサポート"].map((step, i) => (
              <StaggerItem key={step}>
                <div className="flex flex-col items-center text-center gap-2">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-sm"
                    style={{ background: "linear-gradient(135deg, #84D3F4, #B3AEDB, #EC99D0)" }}
                  >
                    {i + 1}
                  </div>
                  <p className="text-xs text-[#6b6b6b] leading-tight">{step}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeIn delay={0.2}>
            <div className="mt-10 text-center">
              <Link href="/flow" className="inline-block text-sm font-bold text-[#EC99D0] hover:underline">
                詳しい流れを見る →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-[800px] mx-auto">
          <FadeIn direction="up">
            <p className="text-xs font-bold tracking-widest text-[#EC99D0] mb-3">FAQ</p>
            <h2 className="font-[var(--font-noto-serif-jp)] text-3xl font-light mb-10 text-[#231F20]">
              よくあるご質問
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} direction="up">
            <div className="h-40 rounded-2xl bg-[#f7f7f7] flex items-center justify-center text-[#aaa] text-sm">
              コンテンツ準備中
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-8 text-center">
              <Link href="/faq" className="inline-block text-sm font-bold text-[#EC99D0] hover:underline">
                すべてのご質問を見る →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        className="py-24 px-[5%] text-center relative overflow-hidden"
        style={{ backgroundColor: "rgba(35,31,32,0.96)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 60% 50%, rgba(236,153,208,0.18), transparent 60%)" }}
        />
        <FadeIn direction="up" className="relative z-10 max-w-xl mx-auto">
          <p className="text-xs font-bold tracking-widest text-[#EC99D0] mb-4">CONTACT</p>
          <h2 className="font-[var(--font-noto-serif-jp)] text-3xl font-light text-white mb-4">
            まずはお気軽にご相談ください
          </h2>
          <p className="text-sm text-white/65 leading-loose mb-10">
            訪問看護のことで気になることがあれば、どんな小さなことでも
            <br className="hidden sm:inline" />
            お気軽にお問い合わせください。無料でご相談いただけます。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-full text-white font-bold text-sm transition-transform hover:-translate-y-0.5"
              style={{ background: "linear-gradient(120deg, #EC99D0, #B3AEDB)", boxShadow: "0 6px 24px rgba(236,153,208,0.4)" }}
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
    </div>
  );
}
