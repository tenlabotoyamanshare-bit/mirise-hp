import type { Metadata } from "next";
import {
  MotifRainbow,
  MotifSprout,
  MotifDots,
  MotifInfinity,
  MountainRange,
  RainbowFlow,
  Crystal,
  CrystalFlow,
} from "@/components/sections/HeroMotifs";

function MotifCrystal() {
  return (
    <div className="w-[min(48vw,200px)]">
      <Crystal />
    </div>
  );
}

function MotifCrystalFlow() {
  return (
    <div className="w-[min(82vw,380px)]">
      <CrystalFlow />
    </div>
  );
}

function MotifMountain() {
  return (
    <div className="w-[min(72vw,340px)]">
      <MountainRange />
    </div>
  );
}

function MotifFlow() {
  return (
    <div className="w-[min(82vw,380px)]">
      <RainbowFlow opacity={0.75} />
    </div>
  );
}

export const metadata: Metadata = {
  title: "モチーフ比較（社内確認用）",
  description: "ヒーロー象徴モチーフの候補比較ページ",
  robots: { index: false, follow: false },
};

const candidates = [
  {
    key: "rainbow",
    label: "① 虹（レインボーアーチ）",
    note: "サイト全体の虹色水彩と統一。希望・未来を象徴。",
    Motif: MotifRainbow,
  },
  {
    key: "sprout",
    label: "② 双葉・芽（成長）",
    note: "療育・回復・成長を育むイメージ。やわらかい葉。",
    Motif: MotifSprout,
  },
  {
    key: "dots",
    label: "③ 散りばめた丸（採用ページ風）",
    note: "抽象的でやわらかい円のドット装飾。",
    Motif: MotifDots,
  },
  {
    key: "infinity",
    label: "④ 無限大 ∞（ロゴのマーク）",
    note: "ロゴの∞を象徴化。大きな∞＋小さな∞を散りばめ。",
    Motif: MotifInfinity,
  },
  {
    key: "mountain",
    label: "⑤ 山脈（立山連峰イメージ）",
    note: "富山・立山連峰のイメージ。虹や丸と組み合わせて使用。",
    Motif: MotifMountain,
  },
  {
    key: "flow",
    label: "⑥ 流れる虹（たなびく光の筋）",
    note: "細い光の筋が絹のようにたなびく虹。ページ各所に薄く散りばめる装飾用。",
    Motif: MotifFlow,
  },
  {
    key: "crystal",
    label: "⑦ クリスタル（虹色の多面体）",
    note: "虹色の面をもつ多面体。単体でも、流れる虹と組み合わせても。",
    Motif: MotifCrystal,
  },
  {
    key: "crystalflow",
    label: "⑧ 虹×クリスタル",
    note: "⑥の流れる虹に多面体を組み合わせた装飾。セクション間に散りばめ。",
    Motif: MotifCrystalFlow,
  },
];

export default function MotifPreviewPage() {
  return (
    <div className="px-[6%] py-16">
      <div className="max-w-[1100px] mx-auto">
        <p className="text-sm font-bold tracking-widest mb-2 text-[#B3AEDB]">PREVIEW</p>
        <h1
          className="text-2xl sm:text-3xl font-bold mb-3 text-[#231F20]"
          style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
        >
          ヒーロー象徴モチーフ 比較
        </h1>
        <p className="text-base text-[#6b6b6b] leading-relaxed mb-12">
          いちごに代わるミライズのシンボル候補です。気に入ったものを教えてください（このページは確認用で公開トップには出ません）。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {candidates.map(({ key, label, note, Motif }) => (
            <div
              key={key}
              className="rounded-3xl bg-white/70 shadow-sm px-6 py-8 flex flex-col items-center text-center gap-4"
            >
              <div className="flex items-center justify-center min-h-[300px]">
                <Motif />
              </div>
              <p
                className="text-lg font-bold text-[#231F20]"
                style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
              >
                {label}
              </p>
              <p className="text-sm text-[#6b6b6b] leading-relaxed">{note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
