import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ご利用の流れ",
  description:
    "訪問看護ステーションミライズのご利用開始までの流れをご説明します。お問い合わせからサービス開始まで6ステップです。",
};

export default function FlowPage() {
  return (
    <div>
      {/* ─── ページヘッダー ─── */}
      <section
        className="py-20 px-[5%] text-center"
        style={{ background: "linear-gradient(160deg, #fff 0%, #f0fef8 100%)" }}
      >
        <p className="text-xs font-bold tracking-widest text-[#9EDDC9] mb-3">FLOW</p>
        <h1 className="font-[var(--font-noto-serif-jp)] text-4xl font-light text-[#231F20] mb-4">
          ご利用までの流れ
        </h1>
        <p className="text-sm text-[#6b6b6b] leading-loose max-w-xl mx-auto">
          ご相談からサービス開始まで、スタッフが丁寧にご案内します。
        </p>
      </section>

      {/* ─── 6ステップ ─── */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-[800px] mx-auto">
          {/* TODO: STEP 1〜6 タイムライン */}
          {[
            { step: 1, title: "お問い合わせ", desc: "電話・メール・LINEでお気軽にご連絡ください。" },
            { step: 2, title: "初回面談の調整", desc: "スタッフが日程を調整し、ご自宅またはオンラインで面談します。" },
            { step: 3, title: "サービス内容のご提案", desc: "ご状況に合わせた最適なサービスプランをご提案します。" },
            { step: 4, title: "ご契約・医師の指示書", desc: "事前契約を締結し、主治医から指示書を取得します。" },
            { step: 5, title: "サービス開始準備", desc: "指示書取得後、訪問スケジュールを調整します。" },
            { step: 6, title: "訪問看護の開始", desc: "ご自宅への訪問を開始します。開始後もプランを随時見直します。" },
          ].map((s) => (
            <div key={s.step} className="flex gap-6 mb-8">
              <div className="flex flex-col items-center shrink-0">
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0"
                  style={{ background: "linear-gradient(135deg, #EC99D0, #B3AEDB)" }}>
                  {s.step}
                </div>
                {s.step < 6 && <div className="w-[2px] flex-1 mt-2 bg-gradient-to-b from-[#EC99D0] to-[#9EDDC9]" style={{ minHeight: 32 }} />}
              </div>
              <div className="pt-3 pb-8">
                <p className="text-[10px] tracking-widest text-[#EC99D0] font-bold mb-1">STEP {s.step}</p>
                <h3 className="text-lg font-bold text-[#231F20] mb-2">{s.title}</h3>
                <p className="text-sm text-[#6b6b6b] leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 px-[5%] text-center"
        style={{ background: "linear-gradient(135deg, rgba(132,211,244,0.1), rgba(236,153,208,0.12))" }}>
        <h2 className="font-[var(--font-noto-serif-jp)] text-2xl font-light mb-4 text-[#231F20]">
          まずはお気軽にご相談ください
        </h2>
        <a href="/contact" className="inline-block px-8 py-4 rounded-full text-white font-bold transition-transform hover:-translate-y-1"
          style={{ background: "linear-gradient(120deg, #EC99D0, #B3AEDB)", boxShadow: "0 6px 24px rgba(236,153,208,0.4)" }}>
          お問い合わせ・無料相談
        </a>
      </section>
    </div>
  );
}
