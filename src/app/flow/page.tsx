import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import {
  MessageCircle,
  CalendarDays,
  Users,
  ClipboardList,
  FileText,
  Stethoscope,
  HeartHandshake,
  House,
  HeartPulse,
  CircleAlert,
  Mail,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ご利用までの流れ",
  description:
    "訪問看護ステーションミライズのご利用開始までの流れをご説明します。お問い合わせからサービス開始まで、スタッフが丁寧にご案内します。",
};

/* ─── このページのメインカラー（緑／ティールで統一） ─── */
const MAIN = "#3d9e8c";
const MAIN_BAR = "linear-gradient(90deg, #3d9e8c 0%, rgba(61,158,140,0.5) 100%)";
const MAIN_SOFT = "rgba(61,158,140,0.10)";
const MAIN_ARROW = "rgba(61,158,140,0.30)";

type Card = { icon: LucideIcon; text: string };
type Step = {
  num: number;
  title: string;
  nav: string;
  cards: Card[];
  note?: string;
  actions?: boolean;
};

const steps: Step[] = [
  {
    num: 1,
    title: "お問い合わせ",
    nav: "お問い合わせ",
    cards: [
      {
        icon: MessageCircle,
        text: "まずは公式LINE、またはお問い合わせフォームからご連絡ください。ご本人・ご家族のどちらからでも、現在の状況やお困りごとを簡単にお聞かせください。",
      },
    ],
    actions: true,
  },
  {
    num: 2,
    title: "初回面談の調整",
    nav: "初回面談の調整",
    cards: [
      {
        icon: CalendarDays,
        text: "ミライズのスタッフが初回面談の日程を調整します。面談はご自宅やオンラインでも承ります。",
      },
      {
        icon: Users,
        text: "看護師がご本人・ご家族の状況を丁寧に伺い、ご不安な点にもお応えします。",
      },
    ],
    note: "必要書類（健康保険証・医療受給者証など）も合わせてご用意ください。",
  },
  {
    num: 3,
    title: "現状のヒアリングとサービス内容のご提案",
    nav: "ヒアリング・ご提案",
    cards: [
      {
        icon: ClipboardList,
        text: "生活面・体調・困りごとなど、現在の状況を詳しくお伺いします。",
      },
      {
        icon: FileText,
        text: "お一人おひとりに合わせた訪問看護の内容・頻度をご提案します。",
      },
    ],
  },
  {
    num: 4,
    title: "医師・相談員・関係機関との連携",
    nav: "関係機関との連携",
    note: "訪問看護のご利用には、医師の「訪問看護指示書」が必要です。",
    cards: [
      {
        icon: Stethoscope,
        text: "主治医に訪問看護指示書を依頼します。かかりつけ医がない場合も、お気軽にご相談ください。",
      },
      {
        icon: HeartHandshake,
        text: "相談支援専門員や学校・施設など、関係機関と連携して支援体制を整えます。",
      },
    ],
  },
  {
    num: 5,
    title: "訪問看護の開始",
    nav: "訪問看護の開始",
    cards: [
      {
        icon: House,
        text: "準備が整い次第、ご自宅への訪問看護を開始します。",
      },
      {
        icon: HeartPulse,
        text: "開始後も状況に合わせて、ケア内容を随時見直していきます。",
      },
    ],
  },
];

export default function FlowPage() {
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
              ご利用までの流れ
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* ════════ 本文：薄い緑の背景を重ねる ════════ */}
      <div className="relative z-10 bg-[#ebf4f0]/75 rounded-t-[40px] -mt-6 shadow-[0_-10px_30px_rgba(0,0,0,0.04)]">
        <section className="px-[5%] pt-16 sm:pt-20 pb-28 sm:pb-36">
          <div className="max-w-[1000px] mx-auto">

            {/* ── スマホ：STEPの流れ図（上部に配置） ── */}
            <div className="lg:hidden mb-14">
              <p
                className="text-sm font-bold tracking-[0.2em] mb-6 text-center"
                style={{ color: MAIN, fontFamily: "var(--font-zen-maru-gothic)" }}
              >
                STEP
              </p>
              <ul className="w-fit mx-auto">
                {steps.map((s, i) => (
                  <li key={s.num}>
                    <a href={`#step-${s.num}`} className="flex items-center gap-4">
                      <span
                        className="w-12 h-12 rounded-[6px] flex items-center justify-center text-white text-lg font-bold shrink-0"
                        style={{ background: MAIN, fontFamily: "var(--font-zen-maru-gothic)" }}
                      >
                        {s.num}
                      </span>
                      <span
                        className="text-base font-bold text-[#3a3a3a] leading-snug"
                        style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
                      >
                        {s.nav}
                      </span>
                    </a>
                    {i < steps.length - 1 && (
                      <div className="w-12 flex justify-center my-2.5">
                        <span
                          style={{
                            width: 0,
                            height: 0,
                            borderLeft: "11px solid transparent",
                            borderRight: "11px solid transparent",
                            borderTop: `13px solid ${MAIN_ARROW}`,
                          }}
                        />
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* ── 本文：左ナビ ＋ ステップ ── */}
            <div className="flex gap-12 xl:gap-16">

            {/* ── 左ステップナビ（正方形＋下向き三角） ── */}
            <aside className="hidden lg:block w-[250px] shrink-0">
              <div className="sticky top-[130px]">
                <p
                  className="text-sm font-bold tracking-[0.2em] mb-7"
                  style={{ color: MAIN, fontFamily: "var(--font-zen-maru-gothic)" }}
                >
                  STEP
                </p>
                <ul>
                  {steps.map((s, i) => (
                    <li key={s.num}>
                      <a href={`#step-${s.num}`} className="flex items-center gap-5 group">
                        <span
                          className="w-14 h-14 rounded-[6px] flex items-center justify-center text-white text-xl font-bold shrink-0"
                          style={{ background: MAIN, fontFamily: "var(--font-zen-maru-gothic)" }}
                        >
                          {s.num}
                        </span>
                        <span
                          className="text-[17px] font-bold text-[#3a3a3a] group-hover:text-[#231F20] transition-colors leading-snug"
                          style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
                        >
                          {s.nav}
                        </span>
                      </a>
                      {/* 下向き三角（最後以外） */}
                      {i < steps.length - 1 && (
                        <div className="w-14 flex justify-center my-4">
                          <span
                            style={{
                              width: 0,
                              height: 0,
                              borderLeft: "13px solid transparent",
                              borderRight: "13px solid transparent",
                              borderTop: `15px solid ${MAIN_ARROW}`,
                            }}
                          />
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* ── ステップ本体（余白たっぷり） ── */}
            <div className="flex-1 space-y-24 sm:space-y-32">
              {steps.map((s, i) => (
                <FadeIn key={s.num} direction="up" duration={1.4} delay={i === 0 ? 0 : 0.05}>
                  <div id={`step-${s.num}`} className="scroll-mt-[130px]">
                    {/* ヘッダーバー */}
                    <div
                      className="flex items-center gap-4 rounded-2xl px-6 py-4 mb-8"
                      style={{ background: MAIN_BAR }}
                    >
                      <span className="flex flex-col items-center justify-center leading-none text-white/85">
                        <span className="text-xs tracking-widest font-bold">STEP</span>
                        <span
                          className="text-3xl font-bold text-white"
                          style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
                        >
                          {s.num}
                        </span>
                      </span>
                      <span className="w-px h-10 bg-white/40" />
                      <h2
                        className="text-xl sm:text-2xl font-bold text-white"
                        style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
                      >
                        {s.title}
                      </h2>
                    </div>

                    {/* 注記（あれば上部に） */}
                    {s.note && (
                      <div
                        className="flex items-start gap-3 rounded-xl px-5 py-4 mb-6"
                        style={{ background: MAIN_SOFT }}
                      >
                        <CircleAlert className="w-6 h-6 shrink-0 mt-0.5" style={{ color: MAIN }} />
                        <p className="text-lg text-[#4a4a4a] leading-relaxed">{s.note}</p>
                      </div>
                    )}

                    {/* カード群（STEP1はボタンを右に横並び、スマホは縦並び） */}
                    {s.actions ? (
                      <div className="flex flex-col lg:flex-row gap-6">
                        {/* カード（PC：左／スマホ：上） */}
                        <div className="order-1 flex-1">
                          {s.cards.map((c, ci) => {
                            const Icon = c.icon;
                            return (
                              <div
                                key={ci}
                                className="h-full rounded-2xl p-7 sm:p-9 flex flex-col gap-6 bg-white border border-[#eeeeee] shadow-[0_4px_20px_rgba(0,0,0,0.07)]"
                              >
                                <span
                                  className="mx-auto w-[76px] h-[76px] rounded-full flex items-center justify-center shrink-0"
                                  style={{ background: MAIN_SOFT }}
                                >
                                  <Icon className="w-10 h-10" style={{ color: MAIN }} />
                                </span>
                                <p className="text-lg text-[#4a4a4a] leading-relaxed">{c.text}</p>
                              </div>
                            );
                          })}
                        </div>

                        {/* お問い合わせボタン（PC：右／スマホ：下） */}
                        <div className="order-2 flex flex-col gap-4 lg:w-[300px] shrink-0 lg:justify-center">
                          <a
                            href="#"
                            className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-white font-bold text-lg shadow-sm hover:opacity-90 transition-opacity"
                            style={{ background: "#06C755", fontFamily: "var(--font-zen-maru-gothic)" }}
                          >
                            <MessageCircle className="w-6 h-6" />
                            公式LINEから問い合わせ
                          </a>
                          <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-bold text-lg border-2 bg-white transition-colors hover:bg-[#f5faf8]"
                            style={{
                              color: MAIN,
                              borderColor: MAIN,
                              fontFamily: "var(--font-zen-maru-gothic)",
                            }}
                          >
                            <Mail className="w-6 h-6" />
                            お問い合わせフォーム
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <div
                        className={`grid gap-6 ${
                          s.cards.length > 1 ? "sm:grid-cols-2" : "grid-cols-1"
                        }`}
                      >
                        {s.cards.map((c, ci) => {
                          const Icon = c.icon;
                          return (
                            <div
                              key={ci}
                              className="rounded-2xl p-7 sm:p-9 flex flex-col gap-6 bg-white border border-[#eeeeee] shadow-[0_4px_20px_rgba(0,0,0,0.07)]"
                            >
                              <span
                                className="mx-auto w-[76px] h-[76px] rounded-full flex items-center justify-center shrink-0"
                                style={{ background: MAIN_SOFT }}
                              >
                                <Icon className="w-10 h-10" style={{ color: MAIN }} />
                              </span>
                              <p className="text-lg text-[#4a4a4a] leading-relaxed">{c.text}</p>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
            </div>

            {/* ── 下部CTA ── */}
            <FadeIn direction="up" duration={1.4}>
              <div className="mt-24 sm:mt-32 text-center">
                <h2
                  className="text-2xl sm:text-3xl font-bold text-[#231F20] mb-3"
                  style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
                >
                  まずはお気軽にご相談ください
                </h2>
                <p className="text-base sm:text-lg text-[#5a5a5a] leading-relaxed mb-8">
                  ご質問・ご相談だけでも大丈夫です。公式LINEまたはお問い合わせフォームからお気軽にどうぞ。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-[640px] mx-auto">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-white font-bold text-lg shadow-sm hover:opacity-90 transition-opacity"
                    style={{ background: "#06C755", fontFamily: "var(--font-zen-maru-gothic)" }}
                  >
                    <MessageCircle className="w-6 h-6" />
                    公式LINEから問い合わせ
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-bold text-lg border-2 bg-white transition-colors hover:bg-[#f5faf8]"
                    style={{
                      color: MAIN,
                      borderColor: MAIN,
                      fontFamily: "var(--font-zen-maru-gothic)",
                    }}
                  >
                    <Mail className="w-6 h-6" />
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
