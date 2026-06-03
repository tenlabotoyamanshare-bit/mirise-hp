"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type VisionSection = {
  label: string;
  script: string;
  color: string;
  borderColor: string;
  content: React.ReactNode;
};

export function VisionSectionItem({
  sec,
  index,
}: {
  sec: VisionSection;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className={`flex flex-col sm:flex-row gap-4 sm:gap-0 py-10 ${
        index > 0 ? "border-t border-black/5" : ""
      }`}
    >
      {/* ── 左: ラベル + 飛び込みスクリプトテキスト（右詰） ── */}
      <div className="flex-shrink-0 w-full sm:w-[32%] flex flex-row sm:flex-col items-baseline sm:items-end gap-3 sm:gap-0.5 overflow-hidden">
        {/* 小ラベル */}
        <motion.span
          className="text-xs font-bold tracking-widest sm:text-right"
          style={{ color: sec.color }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {sec.label}
        </motion.span>

        {/* 大きなスクリプト文字：右から飛び込む・右詰 */}
        <motion.span
          className="text-6xl sm:text-8xl italic font-light leading-none sm:text-right"
          style={{
            fontFamily: "var(--font-cormorant)",
            color: sec.color,
            opacity: 0.92,
            letterSpacing: "-0.02em",
          }}
          initial={{ x: 280, opacity: 0 }}
          animate={
            isInView
              ? { x: 0, opacity: 0.92 }
              : { x: 280, opacity: 0 }
          }
          transition={{
            duration: 0.9,
            delay: 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {sec.script}
        </motion.span>
      </div>

      {/* ── 縦線（下にゆっくり伸びる）── */}
      <div className="hidden sm:block w-px mx-8 self-stretch relative overflow-hidden flex-shrink-0">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundColor: sec.borderColor,
            transformOrigin: "top",
          }}
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{
            duration: 3.0,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      </div>

      {/* ── コンテンツ本文 ── */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, y: 18 }}
        animate={
          isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }
        }
        transition={{
          duration: 1.4,
          delay: 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {sec.content}
      </motion.div>
    </div>
  );
}
