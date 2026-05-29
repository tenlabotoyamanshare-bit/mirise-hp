import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "よくあるご質問",
  description:
    "訪問看護ステーションミライズへのよくあるご質問をまとめました。料金・対応エリア・利用方法などご不明な点はお気軽にお問い合わせください。",
};

const faqs = [
  {
    category: "ご利用について",
    items: [
      {
        q: "どのような方が対象ですか？",
        a: "子ども（乳幼児〜高校生）から大人まで幅広く対応しています。医療的ケアが必要な方、発達障害・精神疾患をお持ちの方、高齢で在宅療養中の方など、詳しくはお問い合わせください。",
      },
      {
        q: "訪問看護を利用するにはどうすればいいですか？",
        a: "まずはお電話・メール・LINEでお問い合わせください。面談・サービス提案・医師の指示書取得を経てサービスを開始します。",
      },
      {
        q: "主治医がいない場合でも利用できますか？",
        a: "訪問看護には主治医の指示書が必要です。かかりつけ医がいない場合でも、当ステーションでご案内しますのでご相談ください。",
      },
    ],
  },
  {
    category: "料金について",
    items: [
      {
        q: "料金はどのくらいかかりますか？",
        a: "保険の種類によって異なります。介護保険・医療保険を利用の場合は自己負担1〜3割です。詳しくはご利用料金ページをご覧ください。",
      },
      {
        q: "子どもの場合、費用負担はどのくらいですか？",
        a: "大阪府内では子ども医療費助成制度が適用され、1回あたり500円（月上限1,000円）となる場合があります。",
      },
    ],
  },
  {
    category: "サービス内容",
    items: [
      {
        q: "夜間・休日でも対応してもらえますか？",
        a: "はい、24時間365日対応しています。緊急時にも迅速に対応できる体制を整えています。",
      },
      {
        q: "1回の訪問はどのくらいの時間ですか？",
        a: "基本的に30分〜1時間程度ですが、ご状態やプランによって異なります。担当スタッフと相談しながら決定します。",
      },
      {
        q: "看護師以外のスタッフも訪問しますか？",
        a: "はい、必要に応じて理学療法士・作業療法士・言語聴覚士などの専門職が訪問し、包括的な支援を行います。",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <div>
      {/* ─── ページヘッダー ─── */}
      <section
        className="py-20 px-[5%] text-center"
        style={{ background: "linear-gradient(160deg, #fff 0%, #f0f7fe 100%)" }}
      >
        <p className="text-xs font-bold tracking-widest text-[#84D3F4] mb-3">FAQ</p>
        <h1 className="font-[var(--font-noto-serif-jp)] text-4xl font-light text-[#231F20] mb-4">
          よくあるご質問
        </h1>
        <p className="text-sm text-[#6b6b6b] leading-loose max-w-xl mx-auto">
          よくいただくご質問をまとめました。解決しない場合はお気軽にお問い合わせください。
        </p>
      </section>

      {/* ─── FAQ アコーディオン ─── */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-[800px] mx-auto space-y-12">
          {faqs.map((category) => (
            <div key={category.category}>
              <h2 className="text-sm font-bold text-[#231F20] mb-4 pb-2 border-b-2 border-[#EC99D0]/30">
                {category.category}
              </h2>
              <Accordion multiple={false} className="space-y-2">
                {category.items.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`${category.category}-${i}`}
                    className="border border-[#f0f0f0] rounded-xl px-4 bg-white shadow-sm"
                  >
                    <AccordionTrigger className="text-sm font-medium text-[#231F20] hover:no-underline">
                      <span className="flex items-start gap-3 text-left">
                        <span className="shrink-0 w-6 h-6 rounded flex items-center justify-center text-xs font-bold text-white mt-0.5"
                          style={{ background: "linear-gradient(135deg, #EC99D0, #B3AEDB)" }}>
                          Q
                        </span>
                        {item.q}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-[#6b6b6b] leading-loose pl-9">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 px-[5%] text-center bg-[#f7f7f7]">
        <p className="text-sm text-[#6b6b6b] mb-6">
          解決しないご質問はお気軽にお問い合わせください
        </p>
        <a href="/contact" className="inline-block px-8 py-4 rounded-full text-white font-bold transition-transform hover:-translate-y-1"
          style={{ background: "linear-gradient(120deg, #EC99D0, #B3AEDB)", boxShadow: "0 6px 24px rgba(236,153,208,0.4)" }}>
          お問い合わせ・無料相談
        </a>
      </section>
    </div>
  );
}
