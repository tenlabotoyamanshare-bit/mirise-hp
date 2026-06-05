"use client";

import Link from "next/link";
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { Plus, Minus } from "lucide-react";

const MAIN = "#7B6BBE";
const linkCls = "text-[#7B6BBE] font-bold";

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    // Q1：子どもに限定せず「どのような方が対象か」に変更
    q: "どのような方が対象ですか？",
    a: (
      <>
        精神・発達・知的障がいのある方を中心に、乳幼児のお子さまから成人・ご高齢の方まで幅広く対象としています。年齢や状況に応じて個別にご相談いただけますので、お気軽にお問い合わせください。
      </>
    ),
  },
  {
    q: "サービスの料金体系はどうなっていますか？",
    a: (
      <>
        <p>
          富山県内で子ども医療費助成制度を利用される場合、自己負担額は以下のようになります。（18歳まで）
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>1回の訪問につき 500 円</li>
          <li>月の上限 1,000 円</li>
        </ul>
        <p className="mt-3">
          ※その他の保険や料金については、
          <Link href="/price" className={linkCls}>
            ご利用料金
          </Link>
          をご覧ください。
        </p>
      </>
    ),
  },
  {
    q: "急な相談や対応は可能ですか？",
    a: (
      <>
        公式LINEを通じてメッセージのやりとりが可能です。緊急時には迅速に対応いたしますので、安心してご利用ください。
      </>
    ),
  },
  {
    q: "訪問看護ではどのようなことをしてくれますか？",
    a: (
      <>
        <p>訪問看護では、以下の内容を行います。</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>健康状態の観察（バイタルチェックなど）</li>
          <li>医療的ケア（服薬管理、吸引、点滴など）</li>
          <li>リハビリテーション（作業療法、言語訓練、理学療法など）</li>
          <li>療養生活の相談・指導</li>
          <li>ご家族への心理的サポートや指導</li>
        </ul>
        <p className="mt-3">
          詳しいサービス内容については、当サイトの訪問看護サービスの例をご覧ください。
        </p>
      </>
    ),
  },
  {
    q: "訪問看護を利用するにはどうすればいいですか？",
    a: (
      <>
        <p>利用開始までの流れは以下の通りです。</p>
        <ol className="list-decimal pl-5 space-y-1 mt-2">
          <li>お問い合わせ（公式LINEまたはお問い合わせフォームから）</li>
          <li>初回面談（訪問看護ステーションのスタッフが状況を伺います）</li>
          <li>サービス内容のご提案（適切な支援プランを提案）</li>
          <li>医師の指示書取得（当ステーションが取得方法をサポートします）</li>
          <li>契約手続きとサービス開始準備</li>
        </ol>
        <p className="mt-3">
          詳しい流れについては、当ステーションの
          <Link href="/flow" className={linkCls}>
            ご利用までの流れ
          </Link>
          をご確認ください。
        </p>
      </>
    ),
  },
  {
    q: "サービスはどの地域で利用できますか？",
    a: (
      <>
        基本的には富山市およびその周辺地域でサービスを提供しています。具体的な対応エリアについては、お問い合わせいただければご案内いたします。
      </>
    ),
  },
  {
    q: "看護師以外のスタッフも訪問しますか？",
    a: (
      <>
        はい、必要に応じて作業療法士、言語聴覚士、理学療法などの専門職が訪問し、包括的な支援を行います。
      </>
    ),
  },
  {
    q: "訪問看護の時間や回数はどのように決まりますか？",
    a: (
      <>
        ご家族やご本人の状況を伺い、基本的には週1回から週3回、1回30分を目安に調整します。必要な時間帯や回数については、スタッフが状況に応じてご提案しますのでご相談ください。
      </>
    ),
  },
  {
    // Q9：子どもに限定しない表現に変更
    q: "病院に通院中でも利用できますか？",
    a: (
      <>
        通院されている医療機関との併用が可能かどうかを確認する必要があります。詳しくはお問い合わせください。
      </>
    ),
  },
  {
    // Q10：乳幼児・児童・高齢も含む表現に変更（大人が主対象のため）
    q: "乳幼児や高齢の方でも利用できますか？",
    a: (
      <>
        <p>
          はい。訪問看護サービスは、乳幼児・児童から成人・ご高齢の方まで幅広く対象です。特に以下のような方に対応しています。
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>発達障害（ADHD、自閉症スペクトラム障害（ASD）など）のある方</li>
          <li>医療的ケアが必要な方（吸引、点滴、服薬管理など）</li>
          <li>その他、日常生活の支援が必要な方</li>
        </ul>
        <p className="mt-3">※具体的な内容については、お気軽にお問い合わせください。</p>
      </>
    ),
  },
  {
    q: "大人向けの訪問看護ではどのようなことをしてくれますか？",
    a: (
      <>
        <p>以下の内容を提供します。</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>健康状態の観察（バイタルチェックなど）</li>
          <li>医療的ケア（吸引、服薬管理、点滴など）</li>
          <li>リハビリテーション（作業療法、理学療法など）</li>
          <li>日常生活のサポート（自己管理の支援、生活リズムの調整）</li>
          <li>ご家族へのサポート（ケアの方法や心理的な支援）</li>
          <li>
            就労や社会参加のための相談（療養生活を支えながら日常生活や社会生活の復帰を支援します）
          </li>
        </ul>
        <p className="mt-3">
          詳しいサービス内容については、当サイトの大人への訪問看護サービスの例をご覧ください。
        </p>
      </>
    ),
  },
  {
    q: "大人向けの料金体系はどうなっていますか？",
    a: (
      <>
        <p>以下の保険や助成が利用可能です：</p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>
            <span className="font-bold text-[#231F20]">医療保険：</span>
            一般的に1〜3割負担です。
          </li>
          <li>
            <span className="font-bold text-[#231F20]">
              自立支援医療（精神通院医療）：
            </span>
            発達障害や精神疾患をお持ちの方は、自立支援医療が適用される場合があります。自己負担額は1割となり、さらに所得に応じた月額負担上限が設定されます。
          </li>
          <li>
            <span className="font-bold text-[#231F20]">地方自治体の助成制度：</span>
            成人の方も、所得や障害の程度に応じて助成を受けられる場合があります。
          </li>
        </ul>
        <p className="mt-3">
          具体的な料金については、ご利用される保険や助成内容によって異なりますので、詳細はお住まいの地域へとお問い合わせください。
        </p>
      </>
    ),
  },
];

export function FaqAccordion() {
  return (
    <AccordionPrimitive.Root className="border-t border-[#e2e2e2]">
      {faqs.map((f, i) => (
        <AccordionPrimitive.Item
          key={i}
          value={`item-${i}`}
          className="border-b border-[#e2e2e2]"
        >
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger className="group flex w-full items-center justify-between gap-4 py-6 text-left outline-none">
              <span
                className="text-lg sm:text-xl font-bold text-[#231F20] leading-relaxed"
                style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
              >
                Q{i + 1}. {f.q}
              </span>
              <span className="shrink-0">
                <Plus className="w-6 h-6 group-aria-expanded:hidden" style={{ color: MAIN }} />
                <Minus className="w-6 h-6 hidden group-aria-expanded:block text-[#9a9a9a]" />
              </span>
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Panel className="overflow-hidden data-open:animate-accordion-down data-closed:animate-accordion-up">
            <div className="h-(--accordion-panel-height) pb-6 data-ending-style:h-0 data-starting-style:h-0">
              <div className="flex items-start gap-4 rounded-lg bg-[#f4f4f3] px-5 sm:px-7 py-5 sm:py-6 text-base text-[#4a4a4a] leading-relaxed">
                <span
                  className="text-xl font-bold shrink-0"
                  style={{ color: MAIN, fontFamily: "var(--font-zen-maru-gothic)" }}
                >
                  A.
                </span>
                <div className="flex-1">{f.a}</div>
              </div>
            </div>
          </AccordionPrimitive.Panel>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
