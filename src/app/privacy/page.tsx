import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "訪問看護ステーションミライズの個人情報の取り扱いについてご説明します。",
};

export default function PrivacyPage() {
  return (
    <div>
      {/* ─── ページヘッダー ─── */}
      <section className="py-20 px-[5%] text-center bg-[#f7f7f7]">
        <p className="text-xs font-bold tracking-widest text-[#6b6b6b] mb-3">PRIVACY</p>
        <h1 className="font-[var(--font-noto-serif-jp)] text-4xl font-light text-[#231F20] mb-4">
          プライバシーポリシー
        </h1>
        <p className="text-sm text-[#6b6b6b]">個人情報の取り扱いについて</p>
      </section>

      {/* ─── 本文 ─── */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-[800px] mx-auto prose prose-sm text-[#6b6b6b] leading-loose">
          <p className="text-sm text-[#6b6b6b] mb-8">
            訪問看護ステーションミライズ（以下「当ステーション」）は、個人情報の重要性を認識し、
            適切な保護と管理に努めます。
          </p>

          {[
            {
              title: "1. 収集する個人情報",
              content:
                "当ステーションは、サービス提供に必要な範囲で、氏名・住所・電話番号・メールアドレス・健康情報などの個人情報を収集します。",
            },
            {
              title: "2. 利用目的",
              content:
                "収集した個人情報は、訪問看護サービスの提供・連絡・請求業務、お問い合わせへの対応、法令に基づく対応のために利用します。",
            },
            {
              title: "3. 第三者への提供",
              content:
                "法令に基づく場合、または本人の同意がある場合を除き、個人情報を第三者に提供することはありません。ただし、医療機関・ケアマネージャーなど連携先への情報提供はサービス提供上必要な場合があります。",
            },
            {
              title: "4. 安全管理",
              content:
                "個人情報の漏洩・紛失・改ざんを防ぐため、適切な安全管理措置を講じます。",
            },
            {
              title: "5. 開示・訂正・削除",
              content:
                "ご本人から個人情報の開示・訂正・削除のご要望があった場合、本人確認のうえ、合理的な範囲で速やかに対応します。",
            },
            {
              title: "6. Cookieの使用",
              content:
                "当サイトでは、サービス改善のためCookieを使用する場合があります。ブラウザの設定によりCookieを無効にすることができます。",
            },
            {
              title: "7. お問い合わせ",
              content:
                "プライバシーポリシーに関するお問い合わせは、下記窓口までご連絡ください。\n訪問看護ステーションミライズ　個人情報相談窓口\nTEL: 076-461-3501（平日 9:00〜18:00）",
            },
          ].map((section) => (
            <div key={section.title} className="mb-8">
              <h2 className="text-base font-bold text-[#231F20] mb-3">{section.title}</h2>
              <p className="text-sm text-[#6b6b6b] leading-loose whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}

          <p className="text-xs text-[#aaa] mt-12">
            制定日：20XX年XX月XX日<br />
            訪問看護ステーションミライズ
          </p>
        </div>
      </section>
    </div>
  );
}
