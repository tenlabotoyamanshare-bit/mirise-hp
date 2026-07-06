import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/fade-in";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "訪問看護ステーションミライズへのお問い合わせ・ご相談はこちらから。ご利用のご相談・採用に関するお問い合わせを承っています。",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.55), rgba(255,255,255,0.55)), url('/watercolor-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ════════ ヘッダー：水彩背景を見せる帯 ════════ */}
      <section className="px-[5%] pt-12 sm:pt-20 pb-20 sm:pb-28">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn direction="up" duration={1.6}>
            <h1
              className="text-4xl sm:text-6xl font-bold text-[#3a3a3a] leading-[1.4]"
              style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
            >
              お問い合わせ
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* ════════ 本文：白背景を重ねる ════════ */}
      <div className="relative z-10 bg-white rounded-t-[40px] -mt-6 shadow-[0_-10px_30px_rgba(0,0,0,0.04)]">
        <section className="px-[5%] pt-16 sm:pt-20 pb-28 sm:pb-36">
          <div className="max-w-[820px] mx-auto">
            <FadeIn direction="up" duration={1.4}>
              <p className="text-base sm:text-lg text-[#5a5a5a] leading-relaxed mb-10 text-center">
                まずは「お問い合わせの種類」をお選びください。
                <br className="hidden sm:block" />
                内容に応じたフォームをご案内します。
              </p>
            </FadeIn>
            <FadeIn direction="up" duration={1.4} delay={0.05}>
              <ContactForm />
            </FadeIn>
          </div>
        </section>
      </div>
    </div>
  );
}
