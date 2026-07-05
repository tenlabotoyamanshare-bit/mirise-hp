"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  /** スライド方向。省略すると純粋なフェードのみ */
  direction?: "up" | "down" | "left" | "right";
  /** スクロールで発火する場合 true（デフォルト）。ヒーローなどロード時に使いたい場合は false */
  onScroll?: boolean;
};

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 1.8,
  direction = "up",
  onScroll = true,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const offsets = {
    up: { y: 28, x: 0 },
    down: { y: -28, x: 0 },
    left: { x: 28, y: 0 },
    right: { x: -28, y: 0 },
  };

  const initial = { opacity: 0, ...offsets[direction] };
  const animate = onScroll
    ? isInView
      ? { opacity: 1, x: 0, y: 0 }
      : initial
    : { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={animate}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** 子要素を順番にずらして表示するコンテナ */
type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
};

export function StaggerContainer({ children, className, staggerDelay = 0.55 }: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: { transition: { staggerChildren: staggerDelay } },
        hidden: {},
      }}
    >
      {children}
    </motion.div>
  );
}

/** テキストを1文字ずつ下からふわっと出す（セクション見出し用）。
 *  gradient を渡すと、単語全体を横断するグラデーションを1文字ずつに割り当てて表示する。 */
export function CharReveal({
  text,
  className,
  style,
  gradient,
  delay = 0,
  stagger = 0.045,
  duration = 0.6,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  /** 例: "linear-gradient(90deg, #EC99D0, #B3AEDB, #84D3F4)" */
  gradient?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
}) {
  const chars = Array.from(text);
  const n = chars.length;

  return (
    <motion.span
      className={className}
      style={{ display: "inline-block", whiteSpace: "pre", ...style }}
      aria-label={text}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {chars.map((c, i) => (
        <motion.span
          key={i}
          aria-hidden
          style={{
            display: "inline-block",
            whiteSpace: "pre",
            ...(gradient
              ? {
                  backgroundImage: gradient,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: `${n * 100}% 100%`,
                  backgroundPositionX: n > 1 ? `${(i / (n - 1)) * 100}%` : "0%",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }
              : {}),
          }}
          variants={{
            hidden: { opacity: 0, y: "0.35em" },
            visible: { opacity: 1, y: 0, transition: { duration, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          {c === " " ? " " : c}
        </motion.span>
      ))}
    </motion.span>
  );
}

/** 波線を左から右へ描く（画面内に入ったら1回）。d を渡せば任意のパスに対応。 */
export function WavyUnderline({
  className,
  d = "M3 6 Q 32 1, 60 6 T 117 6 T 174 6 T 227 6 T 284 6 T 341 6",
  width = 345,
  height = 10,
  color = "#C9A9DF",
  strokeWidth = 2.5,
  duration = 1.4,
  delay = 0.2,
}: {
  className?: string;
  d?: string;
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
  duration?: number;
  delay?: number;
}) {
  return (
    <svg aria-hidden className={className} width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none">
      <motion.path
        d={d}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}

/** 直線を左→右へ「伸びる」ように描画（画面内に入ったら1回）。connecting line 等に。 */
export function GradientLine({
  className,
  style,
  duration = 1.5,
  delay = 0.1,
}: {
  className?: string;
  style?: React.CSSProperties;
  duration?: number;
  delay?: number;
}) {
  return (
    <motion.div
      aria-hidden
      className={className}
      style={{ transformOrigin: "left center", ...style }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}

/** StaggerContainer の子要素として使う */
export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.8, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}
