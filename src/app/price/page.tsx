import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ご利用料金",
  description:
    "訪問看護ステーションミライズのご利用料金をご案内します。医療保険・介護保険・自立支援医療・自費など各種保険に対応しています。",
};

export default function PricePage() {
  return (
    <div>
      {/* ─── ページヘッダー ─── */}
      <section
        className="py-20 px-[5%] text-center"
        style={{ background: "linear-gradient(160deg, #fff 0%, #fdf0f7 100%)" }}
      >
        <p className="text-xs font-bold tracking-widest text-[#EC99D0] mb-3">PRICE</p>
        <h1 className="font-[var(--font-noto-serif-jp)] text-4xl font-light text-[#231F20] mb-4">
          ご利用料金
        </h1>
        <p className="text-sm text-[#6b6b6b] leading-loose max-w-xl mx-auto">
          各種保険が適用されるため、自己負担を抑えてご利用いただけます。
        </p>
      </section>

      {/* ─── 料金概要テーブル ─── */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-[var(--font-noto-serif-jp)] text-2xl font-light mb-8 text-[#231F20]">
            保険種別の料金一覧
          </h2>
          {/* TODO: 料金テーブル */}
          <div className="h-64 rounded-2xl bg-[#f7f7f7] flex items-center justify-center text-[#aaa] text-sm">
            コンテンツ準備中
          </div>
        </div>
      </section>

      {/* ─── 各保険の詳細 ─── */}
      <section className="py-20 px-[5%] bg-[#f7f7f7]">
        <div className="max-w-[900px] mx-auto space-y-12">
          {[
            { title: "医療保険をご利用の場合", color: "#84D3F4" },
            { title: "小児訪問看護（大阪府内）", color: "#EC99D0" },
            { title: "自立支援医療（精神通院）をご利用の場合", color: "#B3AEDB" },
            { title: "介護保険をご利用の場合", color: "#9EDDC9" },
            { title: "自費でご利用の場合", color: "#F1F0CA" },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-2xl overflow-hidden">
              <div className="h-1" style={{ background: item.color }} />
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#231F20] mb-4">{item.title}</h3>
                <div className="h-32 rounded-xl bg-[#f7f7f7] flex items-center justify-center text-[#aaa] text-sm">
                  コンテンツ準備中
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 注意事項 ─── */}
      <section className="py-12 px-[5%] bg-white">
        <div className="max-w-[900px] mx-auto">
          <div className="bg-[#f7f7f7] rounded-2xl p-6">
            <h3 className="text-sm font-bold mb-3 text-[#231F20]">ご注意事項</h3>
            {/* TODO: 注意事項リスト */}
            <div className="h-20 flex items-center justify-center text-[#aaa] text-sm">
              コンテンツ準備中
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
