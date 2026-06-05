import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { LINE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "よくあるご質問",
  description:
    "訪問看護ステーションミライズによくお寄せいただくご質問とその回答をまとめました。",
};

const MAIN = "#7B6BBE";

export default function FaqPage() {
  return (
    <div>
      {/* ════════ ヘッダー：水彩背景を見せる帯 ════════ */}
      <section className="px-[5%] pt-12 sm:pt-20 pb-20 sm:pb-28">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn direction="up" duration={1.6}>
            <h1
              className="text-3xl sm:text-5xl font-bold text-[#3a3a3a] leading-[1.4]"
              style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
            >
              よくあるご質問
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* ════════ 本文：白背景を重ねる ════════ */}
      <div className="relative z-10 bg-white rounded-t-[40px] -mt-6 shadow-[0_-10px_30px_rgba(0,0,0,0.04)]">
        <section className="px-[5%] pt-16 sm:pt-20 pb-28 sm:pb-36">
          <div className="max-w-[820px] mx-auto">
            <FadeIn direction="up" duration={1.4}>
              <p className="text-base sm:text-lg text-[#5a5a5a] leading-relaxed mb-10">
                ご利用を検討されている方からよくいただくご質問をまとめました。気になる項目をタップすると回答がご覧いただけます。
              </p>
            </FadeIn>

            <FadeIn direction="up" duration={1.4} delay={0.05}>
              <FaqAccordion />
            </FadeIn>

            {/* 解決しない場合のCTA */}
            <FadeIn direction="up" duration={1.4} delay={0.1}>
              <div className="mt-16 rounded-2xl bg-white px-6 sm:px-10 py-10 text-center shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
                <p
                  className="text-lg sm:text-xl font-bold text-[#231F20] mb-3"
                  style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
                >
                  解決しない場合は、お気軽にお問い合わせください
                </p>
                <p className="text-base text-[#5a5a5a] leading-relaxed mb-7">
                  ご不明な点やご相談は、公式LINEまたはお問い合わせフォームよりお寄せください。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-[560px] mx-auto">
                  <a
                    href={LINE_URL}
                    className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-white font-bold text-lg shadow-sm hover:opacity-90 transition-opacity"
                    style={{ background: "#06C755", fontFamily: "var(--font-zen-maru-gothic)" }}
                  >
                    公式LINEから問い合わせ
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-bold text-lg border-2 bg-white transition-colors hover:bg-[#f5f3fb]"
                    style={{
                      color: MAIN,
                      borderColor: MAIN,
                      fontFamily: "var(--font-zen-maru-gothic)",
                    }}
                  >
                    お問い合わせフォーム
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </div>
  );
}
