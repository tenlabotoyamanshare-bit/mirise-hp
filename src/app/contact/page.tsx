import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "訪問看護ステーションミライズへのお問い合わせ・無料相談はこちらから。電話・メール・LINEでご連絡いただけます。",
};

export default function ContactPage() {
  return (
    <div>
      {/* ─── ページヘッダー ─── */}
      <section
        className="py-20 px-[5%] text-center"
        style={{ background: "linear-gradient(160deg, #fff 0%, #fdf0f7 100%)" }}
      >
        <p className="text-xs font-bold tracking-widest text-[#EC99D0] mb-3">CONTACT</p>
        <h1 className="font-[var(--font-noto-serif-jp)] text-4xl font-light text-[#231F20] mb-4">
          お問い合わせ・無料相談
        </h1>
        <p className="text-sm text-[#6b6b6b] leading-loose max-w-xl mx-auto">
          ご不明な点やご相談は、どうぞお気軽にご連絡ください。
        </p>
      </section>

      {/* ─── 連絡手段カード ─── */}
      <section className="py-16 px-[5%]"
        style={{ background: "linear-gradient(135deg, rgba(132,211,244,0.1), rgba(236,153,208,0.12), rgba(158,221,201,0.1))" }}>
        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: "📞", label: "お電話", detail: "0X-XXXX-XXXX", sub: "平日 9:00〜18:00\n緊急時24時間対応", href: "tel:00-0000-0000" },
              { icon: "✉️", label: "メール", detail: "メールフォーム", sub: "24時間受付\n翌営業日以内に返信", href: "#form" },
              { icon: "💬", label: "LINE", detail: "LINEで相談する", sub: "お気軽にメッセージを\nお送りください", href: "#" },
            ].map((c) => (
              <div key={c.label} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{c.icon}</div>
                <h3 className="font-bold text-[#231F20] mb-1">{c.label}</h3>
                <p className="text-xs text-[#6b6b6b] whitespace-pre-line mb-4">{c.sub}</p>
                <a href={c.href}
                  className="inline-block px-5 py-2 rounded-full text-sm text-white font-bold"
                  style={{ background: "linear-gradient(120deg, #EC99D0, #B3AEDB)" }}>
                  {c.detail}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── お問い合わせフォーム ─── */}
      <section id="form" className="py-20 px-[5%] bg-white">
        <div className="max-w-[700px] mx-auto">
          <h2 className="font-[var(--font-noto-serif-jp)] text-2xl font-light mb-8 text-[#231F20]">
            お問い合わせフォーム
          </h2>
          {/* TODO: React Hook Form + フォームフィールド実装 */}
          <div className="space-y-5">
            {[
              { label: "お問い合わせの種類", type: "select", required: true },
              { label: "お名前", type: "text", required: true },
              { label: "フリガナ", type: "text", required: true },
              { label: "電話番号", type: "tel", required: false },
              { label: "メールアドレス", type: "email", required: true },
              { label: "お問い合わせ内容", type: "textarea", required: true },
            ].map((field) => (
              <div key={field.label}>
                <label className="block text-sm font-medium text-[#231F20] mb-1">
                  {field.label}
                  {field.required && (
                    <span className="ml-1 text-[10px] bg-[#EC99D0] text-white px-1.5 py-0.5 rounded">必須</span>
                  )}
                </label>
                <div className="h-10 bg-[#f7f7f7] rounded-lg border border-[#e0e0e0] flex items-center justify-center text-[#aaa] text-xs">
                  フォームフィールド準備中
                </div>
              </div>
            ))}
            <button
              type="submit"
              disabled
              className="w-full py-4 rounded-full text-white font-bold text-sm opacity-60 cursor-not-allowed"
              style={{ background: "linear-gradient(120deg, #EC99D0, #B3AEDB)" }}
            >
              送信する（準備中）
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
