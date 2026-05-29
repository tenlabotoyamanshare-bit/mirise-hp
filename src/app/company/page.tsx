import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "会社概要",
  description: "訪問看護ステーションミライズの会社概要・事業所情報をご確認いただけます。",
};

const companyInfo = [
  { label: "事業所名", value: "訪問看護ステーションミライズ" },
  { label: "法人名", value: "○○合同会社" },
  { label: "所在地", value: "〒XXX-XXXX\n大阪府○○市○○町X-X-X" },
  { label: "電話番号", value: "0X-XXXX-XXXX" },
  { label: "FAX", value: "0X-XXXX-XXXX" },
  { label: "メールアドレス", value: "info@mirise-nursing.jp" },
  { label: "設立", value: "20XX年XX月XX日" },
  { label: "代表者", value: "○○ ○○" },
  { label: "事業内容", value: "訪問看護ステーションの運営" },
  { label: "対応エリア", value: "大阪府○○市およびその周辺地域" },
];

export default function CompanyPage() {
  return (
    <div>
      {/* ─── ページヘッダー ─── */}
      <section
        className="py-20 px-[5%] text-center"
        style={{ background: "linear-gradient(160deg, #fff 0%, #f7f7f7 100%)" }}
      >
        <p className="text-xs font-bold tracking-widest text-[#6b6b6b] mb-3">COMPANY</p>
        <h1 className="font-[var(--font-noto-serif-jp)] text-4xl font-light text-[#231F20] mb-4">
          会社概要
        </h1>
      </section>

      {/* ─── 概要テーブル ─── */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-[800px] mx-auto">
          <dl className="divide-y divide-[#f0f0f0]">
            {companyInfo.map((item) => (
              <div key={item.label} className="flex flex-col sm:flex-row py-5 gap-2 sm:gap-8">
                <dt className="shrink-0 w-36 text-sm font-bold text-[#231F20]">
                  {item.label}
                </dt>
                <dd className="text-sm text-[#6b6b6b] whitespace-pre-line">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Separator className="max-w-[800px] mx-auto" />

      {/* ─── 将来の展望 ─── */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-[var(--font-noto-serif-jp)] text-2xl font-light mb-8 text-[#231F20]">
            将来の展望
          </h2>
          {/* TODO: 展望テキスト */}
          <div className="h-40 rounded-2xl bg-[#f7f7f7] flex items-center justify-center text-[#aaa] text-sm">
            コンテンツ準備中
          </div>
        </div>
      </section>
    </div>
  );
}
