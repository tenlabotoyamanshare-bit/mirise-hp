import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "訪問看護サービス内容",
  description:
    "訪問看護ステーションミライズが提供するサービス内容をご紹介します。子ども・大人どちらにも対応した包括的な訪問看護サービスです。",
};

export default function ServicesPage() {
  return (
    <div>
      {/* ─── ページヘッダー：水彩画像 + 白モヤ ─── */}
      <section className="relative py-28 px-[5%] text-center overflow-hidden">
        {/* ① 水彩画像レイヤー */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/watercolor-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* ② 白いモヤ（この数字で濃さを調整：0=透明 / 1=真っ白） */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.55)" }}
        />
        {/* ③ コンテンツ */}
        <div className="relative z-10">
          <p className="text-xs font-bold tracking-widest text-[#EC99D0] mb-3">SERVICES</p>
          <h1 className="font-[var(--font-noto-serif-jp)] text-4xl font-light text-[#231F20] mb-4">
            訪問看護サービス内容
          </h1>
          <p className="text-sm text-[#6b6b6b] leading-loose max-w-xl mx-auto">
            お子さまからご高齢の方まで、一人ひとりの状態に合わせた
            きめ細やかなサービスを提供しています。
          </p>
        </div>
      </section>

      {/* ─── 訪問看護とは ─── */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-bold tracking-widest text-[#EC99D0] mb-3">ABOUT</p>
          <h2 className="font-[var(--font-noto-serif-jp)] text-3xl font-light mb-8 text-[#231F20]">
            訪問看護ステーションとは
          </h2>
          {/* TODO: 詳細説明 */}
          <div className="h-48 rounded-2xl bg-[#f7f7f7] flex items-center justify-center text-[#aaa] text-sm">
            コンテンツ準備中
          </div>
        </div>
      </section>

      {/* ─── 対象者 ─── */}
      <section className="py-20 px-[5%] bg-[#f7f7f7]">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-bold tracking-widest text-[#EC99D0] mb-3">TARGET</p>
          <h2 className="font-[var(--font-noto-serif-jp)] text-3xl font-light mb-8 text-[#231F20]">
            ご利用対象の方
          </h2>
          {/* TODO: 子ども・大人の対象者説明カード */}
          <div className="h-48 rounded-2xl bg-white flex items-center justify-center text-[#aaa] text-sm">
            コンテンツ準備中
          </div>
        </div>
      </section>

      {/* ─── サービス詳細 ─── */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-bold tracking-widest text-[#EC99D0] mb-3">DETAIL</p>
          <h2 className="font-[var(--font-noto-serif-jp)] text-3xl font-light mb-8 text-[#231F20]">
            提供サービス一覧
          </h2>
          {/* TODO: サービスカード×6 */}
          <div className="h-64 rounded-2xl bg-[#f7f7f7] flex items-center justify-center text-[#aaa] text-sm">
            コンテンツ準備中
          </div>
        </div>
      </section>

      {/* ─── 対応エリア ─── */}
      <section id="area" className="py-20 px-[5%] bg-[#f7f7f7]">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-bold tracking-widest text-[#EC99D0] mb-3">AREA</p>
          <h2 className="font-[var(--font-noto-serif-jp)] text-3xl font-light mb-8 text-[#231F20]">
            対応エリア
          </h2>
          {/* TODO: 地図・エリア一覧 */}
          <div className="h-48 rounded-2xl bg-white flex items-center justify-center text-[#aaa] text-sm">
            コンテンツ準備中
          </div>
        </div>
      </section>
    </div>
  );
}
