import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "事業所について",
  description:
    "訪問看護ステーションミライズの理念・代表メッセージ・スタッフ紹介をご紹介します。",
};

export default function AboutPage() {
  return (
    <div>
      {/* ─── ページヘッダー ─── */}
      <section
        className="py-20 px-[5%] text-center"
        style={{ background: "linear-gradient(160deg, #fff 0%, #fdf0f7 100%)" }}
      >
        <p className="text-xs font-bold tracking-widest text-[#EC99D0] mb-3">ABOUT</p>
        <h1 className="font-[var(--font-noto-serif-jp)] text-4xl font-light text-[#231F20] mb-4">
          事業所について
        </h1>
        <p className="text-sm text-[#6b6b6b] leading-loose max-w-xl mx-auto">
          訪問看護ステーションミライズの理念と想いをご紹介します。
        </p>
      </section>

      {/* ─── 理念 ─── */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-[1100px] mx-auto text-center">
          <p className="text-xs font-bold tracking-widest text-[#EC99D0] mb-3">MISSION</p>
          <h2 className="font-[var(--font-noto-serif-jp)] text-3xl font-light mb-12 text-[#231F20]">
            私たちの想い
          </h2>
          {/* TODO: 理念テキスト・ビジュアル */}
          <div className="h-48 rounded-2xl bg-[#f7f7f7] flex items-center justify-center text-[#aaa] text-sm">
            コンテンツ準備中
          </div>
        </div>
      </section>

      {/* ─── 代表メッセージ ─── */}
      <section id="message" className="py-20 px-[5%] bg-[#f7f7f7]">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-bold tracking-widest text-[#EC99D0] mb-3">MESSAGE</p>
          <h2 className="font-[var(--font-noto-serif-jp)] text-3xl font-light mb-8 text-[#231F20]">
            代表メッセージ
          </h2>
          {/* TODO: 代表写真・メッセージテキスト */}
          <div className="h-64 rounded-2xl bg-white flex items-center justify-center text-[#aaa] text-sm">
            コンテンツ準備中
          </div>
        </div>
      </section>

      {/* ─── スタッフ紹介 ─── */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-bold tracking-widest text-[#EC99D0] mb-3">STAFF</p>
          <h2 className="font-[var(--font-noto-serif-jp)] text-3xl font-light mb-8 text-[#231F20]">
            スタッフ紹介
          </h2>
          {/* TODO: スタッフカード */}
          <div className="h-48 rounded-2xl bg-[#f7f7f7] flex items-center justify-center text-[#aaa] text-sm">
            コンテンツ準備中
          </div>
        </div>
      </section>

      {/* ─── 選ばれる理由 ─── */}
      <section className="py-20 px-[5%] bg-[#f7f7f7]">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-bold tracking-widest text-[#EC99D0] mb-3">WHY MIRISE</p>
          <h2 className="font-[var(--font-noto-serif-jp)] text-3xl font-light mb-8 text-[#231F20]">
            ミライズが選ばれる理由
          </h2>
          {/* TODO: 4つの理由カード */}
          <div className="h-48 rounded-2xl bg-white flex items-center justify-center text-[#aaa] text-sm">
            コンテンツ準備中
          </div>
        </div>
      </section>
    </div>
  );
}
