import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "採用情報",
  description:
    "訪問看護ステーションミライズでは看護師・理学療法士・作業療法士・言語聴覚士を募集しています。",
};

const jobs = [
  { title: "看護師", type: "正社員 / パートタイム" },
  { title: "理学療法士（PT）", type: "正社員 / パートタイム" },
  { title: "作業療法士（OT）", type: "正社員 / パートタイム" },
  { title: "言語聴覚士（ST）", type: "正社員 / パートタイム" },
];

export default function RecruitPage() {
  return (
    <div>
      {/* ─── ページヘッダー：トップと同じCSSグラデーション ─── */}
      <section
        className="py-28 px-[5%] text-center relative overflow-hidden"
        style={{
          backgroundImage: [
            "radial-gradient(ellipse 70% 55% at 85% 8%,  rgba(179,174,219,0.85) 0%, transparent 100%)",
            "radial-gradient(ellipse 55% 45% at 55% 18%, rgba(236,153,208,0.80) 0%, transparent 100%)",
            "radial-gradient(ellipse 60% 50% at 12% 30%, rgba(249,190,208,0.88) 0%, transparent 100%)",
            "radial-gradient(ellipse 65% 55% at 45% 50%, rgba(179,174,219,0.60) 0%, transparent 100%)",
            "radial-gradient(ellipse 55% 50% at 80% 60%, rgba(132,211,244,0.72) 0%, transparent 100%)",
            "radial-gradient(ellipse 55% 45% at 5%  78%, rgba(241,240,202,0.90) 0%, transparent 100%)",
            "radial-gradient(ellipse 60% 50% at 92% 85%, rgba(158,221,201,0.82) 0%, transparent 100%)",
          ].join(", "),
          backgroundColor: "#fef9ff",
        }}
      >
        <p className="text-xs font-bold tracking-widest text-[#EC99D0] mb-3 relative">RECRUIT</p>
        <h1 className="font-[var(--font-noto-serif-jp)] text-4xl font-light text-[#231F20] mb-4 relative">
          採用情報
        </h1>
        <p className="text-sm text-[#6b6b6b] leading-loose max-w-xl mx-auto relative">
          あなたの専門性を、地域の医療を支える力に。
        </p>
      </section>

      {/* ─── 私たちの想い ─── */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-bold tracking-widest text-[#EC99D0] mb-3">MESSAGE</p>
          <h2 className="font-[var(--font-noto-serif-jp)] text-3xl font-light mb-8 text-[#231F20]">
            私たちの想い
          </h2>
          {/* TODO: 想いのテキスト */}
          <div className="h-48 rounded-2xl bg-[#f7f7f7] flex items-center justify-center text-[#aaa] text-sm">
            コンテンツ準備中
          </div>
        </div>
      </section>

      {/* ─── 働く魅力 ─── */}
      <section className="py-20 px-[5%] bg-[#f7f7f7]">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-bold tracking-widest text-[#EC99D0] mb-3">BENEFITS</p>
          <h2 className="font-[var(--font-noto-serif-jp)] text-3xl font-light mb-8 text-[#231F20]">
            ミライズで働く魅力
          </h2>
          {/* TODO: 魅力カード */}
          <div className="h-48 rounded-2xl bg-white flex items-center justify-center text-[#aaa] text-sm">
            コンテンツ準備中
          </div>
        </div>
      </section>

      {/* ─── 募集職種 ─── */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-bold tracking-widest text-[#EC99D0] mb-3">POSITIONS</p>
          <h2 className="font-[var(--font-noto-serif-jp)] text-3xl font-light mb-8 text-[#231F20]">
            募集職種
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {jobs.map((job) => (
              <div key={job.title}
                className="bg-white border border-[#EC99D0]/20 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="h-1 rounded-full mb-4"
                  style={{ background: "linear-gradient(90deg, #EC99D0, #B3AEDB)" }} />
                <h3 className="text-lg font-bold text-[#231F20] mb-2">{job.title}</h3>
                <p className="text-xs text-[#6b6b6b] mb-4">{job.type}</p>
                {/* TODO: 募集要項の詳細 */}
                <div className="space-y-1 text-sm text-[#6b6b6b]">
                  <p>勤務地：大阪府○○市および周辺</p>
                  <p>勤務時間：シフト制（相談可）</p>
                  <p>給与：経験・資格に応じて決定</p>
                  <p>待遇：交通費支給、社会保険完備</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 応募方法 ─── */}
      <section className="py-16 px-[5%] text-center"
        style={{ background: "linear-gradient(135deg, rgba(236,153,208,0.1), rgba(179,174,219,0.1))" }}>
        <h2 className="font-[var(--font-noto-serif-jp)] text-2xl font-light mb-4 text-[#231F20]">
          応募方法
        </h2>
        <p className="text-sm text-[#6b6b6b] mb-8">
          採用応募フォームよりご連絡ください。<br />
          担当者より面接日時などの詳細をご連絡します。
        </p>
        <a href="/contact" className="inline-block px-8 py-4 rounded-full text-white font-bold transition-transform hover:-translate-y-1"
          style={{ background: "linear-gradient(120deg, #EC99D0, #B3AEDB)", boxShadow: "0 6px 24px rgba(236,153,208,0.4)" }}>
          採用応募フォームへ
        </a>
      </section>
    </div>
  );
}
